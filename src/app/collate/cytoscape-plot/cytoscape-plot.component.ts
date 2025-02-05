import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, ViewChild, ViewEncapsulation} from '@angular/core';
import cytoscape from "cytoscape";
import {SearchResult, SearchSession} from "../../search-session";
import {Project} from "../../project/project";
import euler from 'cytoscape-euler';
import popper, {PopperInstance} from 'cytoscape-popper';
import {computePosition, flip, shift, limitShift} from "@floating-ui/dom";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";
import {NgClass} from "@angular/common";
import {CollateService} from "../collate.service";
import Layers, {ICanvasLayer, IPoint} from 'cytoscape-layers';
import cy from "cytoscape";
import fcose from 'cytoscape-fcose';

function popperFactory(ref: any, content: any, opts: any) {
  // see https://floating-ui.com/docs/computePosition#options
  const popperOptions = {
    // matching the default behaviour from Popper@2
    // https://floating-ui.com/docs/migration#configure-middleware
    middleware: [
      flip(),
      shift({limiter: limitShift()})
    ],
    ...opts,
  }

  function update() {
    const bounded = ref.getBoundingClientRect()
    computePosition(ref, content, popperOptions).then(({x, y}) => {
      const result = Object.assign(content.style, {
        left: `${bounded.left}px`,
        top: `${y}px`,
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        "background-color": "#333",
        color: "#fff",
        padding: "5px 10px",
        "border-radius": "4px",
        "font-size": "12px",
        "box-shadow": "0 2px 10px rgba(0, 0, 0, 0.2)",
        "pointer-events": "none",
      });
      return result;
    });
  }
  update();
  return { update };
}


@Component({
  selector: 'app-cytoscape-plot',
  imports: [
    MatIcon,
    MatIconButton,
    MatTooltip,
    NgClass
  ],
  templateUrl: './cytoscape-plot.component.html',
  styleUrl: './cytoscape-plot.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CytoscapePlotComponent implements AfterViewInit{
  showBarChart: boolean = true;
  showCytoscapePlot: boolean = false;
  @ViewChild('cy') cyElement!: ElementRef;
  @Input() projects: Project[] = [];
  @Input() searchResultsMap: { [projectID: string]: SearchResult[] } = {};
  @Input() renameCondition: { [projectID: number]: {
      [key: string]: string
    } } = {};

  cy!: cytoscape.Core
  currentPopperRef: PopperInstance | null = null;
  currentTooltip: HTMLElement | null = null;
  barChartLayers: Map<string, ICanvasLayer> = new Map();
  projectColorMap: { [projectId: string]: string } = {};

  constructor(private collateService: CollateService, private cdr: ChangeDetectorRef) {

  }

  ngAfterViewInit() {
    cytoscape.use(fcose);
    cytoscape.use(popper(popperFactory));
    cytoscape.use(Layers);

    this.initCytoscape()
    this.collateService.collateRedrawSubject.subscribe(() => {
      this.updateCytoscape()
    })
  }

  updateCytoscape() {
    this.cdr.detectChanges();
    this.cy.destroy();
    this.initCytoscape();
  }


  initCytoscape() {
    if (this.cyElement) {
      const elements = this.buildGraphElements();

      this.cy = cytoscape({
        container: this.cyElement.nativeElement,
        elements: elements,
        style: [
          { selector: 'node', style: { 'label': 'data(label)', 'background-color': '#666', 'width': 'data(size)', 'height': 'data(size)' } },
          { selector: '.protein', style: { 'background-color': '#FF5733' } },
          { selector: '.analysis', style: { 'background-color': '#ba0000', 'label': '' } },
          { selector: '.comparison', style: { 'background-color': '#33A1FF', 'label': '' } },
          { selector: 'edge[color]', style: { 'width': 2, 'line-color': 'data(color)', 'target-arrow-color': 'data(color)', 'target-arrow-shape': 'triangle' } }
        ],
        //@ts-ignore
        layout: { name: 'euler', animate: true, animationDuration: 1000,
          fit: true,
          padding: 30,
          nodeSeparation: 200,
          idealEdgeLength: 100,
          nodeRepulsion: 4500,
          edgeElasticity: 0.45,
          gravity: 0.25,
          numIter: 2500,
          tile: true,
          tilingPaddingVertical: 10,
          tilingPaddingHorizontal: 10,
          gravityRangeCompound: 1.5,
          gravityCompound: 1.0,
          gravityRange: 3.8,
          initialEnergyOnIncremental: 0.5},
      });
      this.cy.nodes('.comparison').forEach(node => {
        node.on('mouseover', (event) => {
          const data = event.target.data();
          const tooltipContent = data.label;
          this.currentPopperRef = event.target.popper({
            content: () => {
              const tooltip = document.createElement('div');
              tooltip.classList.add('cy-tooltip');
              tooltip.innerHTML = tooltipContent;
              document.body.appendChild(tooltip);
              this.currentTooltip = tooltip;
              return tooltip;
            },
            popper: {
              placement: 'bottom',
              removeOnDestroy: true,
            },
          });
        });

        node.on('mouseout', () => {
          if (this.currentTooltip) {
            document.body.removeChild(this.currentTooltip);
            this.currentTooltip = null;
          }
        });

        node.on('click', (event) => {
          const targetNode = event.target;
          const currentLabel = targetNode.style('label');
          targetNode.style('label', currentLabel ? '' : targetNode.data('label'));
        });
      });
      //@ts-ignore
      const layers: any = this.cy.layers()
      this.cy.edges().forEach(edge => {
        edge.on('click', (event) => {
          const targetEdge = event.target
          const showBarChart = targetEdge.data('showBarChart')
          targetEdge.data('showBarChart', !showBarChart)
          this.drawBarChartOnEdges(layers);
          this.cy.batch(() => {
            this.cy.nodes().forEach(node => {
              node.trigger('position')
            })
          })
        })

        edge.on('mouseover', (event) => {

          const data = event.target.data();
          const tooltipContent = `Comparison: ${data.conditionA} vs ${data.conditionB}<br>Intensity ${data.conditionA}: ${data.intensityA}<br>Intensity ${data.conditionB}: ${data.intensityB}`;
          this.currentPopperRef = event.target.popper({
            content: () => {
              const tooltip = document.createElement('div');
              tooltip.classList.add('cy-tooltip');
              tooltip.innerHTML = tooltipContent;
              document.body.appendChild(tooltip);
              this.currentTooltip = tooltip;
              return tooltip;
            },
            popper: {
              placement: 'bottom',
              removeOnDestroy: true,
            },
          });
        });

        edge.on('mouseout', () => {
          if (this.currentTooltip) {
            document.body.removeChild(this.currentTooltip);
            this.currentTooltip = null;
          }
        });
      });

    }
  }


  private drawBarChartOnEdges(layers: any) {
    layers.renderPerEdge(
      layers.nodeLayer.insertAfter('canvas'),
      (ctx: CanvasRenderingContext2D, edge: cy.EdgeSingular, path: Path2D, start: IPoint, end: IPoint) => {

        // draw bar chart in middle of edge
        if (!this.showBarChart || !edge.data('showBarChart')) {
          return;
        }
        this.renderBarChart(edge, start, end, ctx);
      }
    );
  }

  private renderBarChart(edge: cytoscape.EdgeSingular, start: IPoint, end: IPoint, ctx: CanvasRenderingContext2D) {
    const data = edge.data();
    const intensityA = parseFloat(data.intensityA);
    const intensityB = parseFloat(data.intensityB);

    const barWidth = 10;
    const maxBarHeight = 50; // Maximum height for the bars
    const maxIntensity = Math.max(intensityA, intensityB);
    const normIntensityA = (intensityA / maxIntensity) * maxBarHeight;
    const normIntensityB = (intensityB / maxIntensity) * maxBarHeight;

    const x = (start.x + end.x) / 2 - barWidth;
    const y = (start.y + end.y) / 2 + maxBarHeight;

    ctx.fillStyle = 'white';
    ctx.fillRect(x - barWidth - 2, y - maxBarHeight - 3, barWidth * 2 + 6, maxBarHeight + 5);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(x - barWidth - 2, y - maxBarHeight - 3, barWidth * 2 + 6, maxBarHeight + 5);

    ctx.fillStyle = 'red';
    ctx.fillRect(x - barWidth, y - normIntensityA, barWidth, normIntensityA);

    ctx.fillStyle = 'blue';
    ctx.fillRect(x + 2, y - normIntensityB, barWidth, normIntensityB);
  }

  buildGraphElements() {
    const elements: any[] = [];
    const addedNodes = new Set();
    const projectColorMap: { [projectId: string]: string } = {};
    console.log(this.searchResultsMap)
    this.projects.forEach(project => {
      const searchResults = this.searchResultsMap[project.id] || [];
      if (!projectColorMap[project.id]) {
        projectColorMap[project.id] = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      }
      const projectColor = projectColorMap[project.id];

      searchResults.forEach(result => {
        const proteinId = result.gene_name || result.uniprot_id || result.primary_id;

        if (!addedNodes.has(proteinId)) {
          elements.push({ data: { id: proteinId, label: proteinId, size: 25 }, classes: 'protein' });
          addedNodes.add(proteinId);
        }

        let conditionA = result.condition_A;
        let conditionB = result.condition_B;
        if (this.renameCondition[project.id]) {
          if (this.renameCondition[project.id][result.condition_A]) {
            conditionA = this.renameCondition[project.id][result.condition_A];
          }
          if (this.renameCondition[project.id][result.condition_B]) {
            conditionB = this.renameCondition[project.id][result.condition_B];
          }
        }
        const comparisonId = `${conditionA} vs ${conditionB}`;
        if (!addedNodes.has(comparisonId)) {
          elements.push({ data: { id: comparisonId, label: `${conditionA} vs ${conditionB}`, size: 25 }, classes: 'comparison' });
          addedNodes.add(comparisonId);
        }

        elements.push({
          data: {
            id: `${proteinId}-${comparisonId}-${project.id}`,
            source: proteinId,
            target: comparisonId,
            color: projectColor,
            conditionA: conditionA,
            conditionB: conditionB,
            intensityA: result.searched_data.find(data => data.Condition === result.condition_A)?.Value,
            intensityB: result.searched_data.find(data => data.Condition === result.condition_B)?.Value,
          }
        });
      });
    });
    this.projectColorMap = projectColorMap;
    return elements;
  }

  toggleCytoscapePlot() {
    this.showCytoscapePlot = !this.showCytoscapePlot;
  }

  toggleBarChart() {
    this.showBarChart = !this.showBarChart;
    this.updateCytoscape();
  }

  getRandomColor(): string {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }

  getProjectColor(projectId: string): string {
    return this.projectColorMap[projectId] || '#000000';
  }
}
