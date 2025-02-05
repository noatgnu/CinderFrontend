import {AfterViewInit, Component, ElementRef, Input, ViewChild, ViewEncapsulation} from '@angular/core';
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
import Layers, {IPoint} from 'cytoscape-layers';
import {ILayer} from "cytoscape-layers";
import cy from "cytoscape";

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

  console.log(content)
  console.log(opts)
  function update() {
    const bounded = ref.getBoundingClientRect()
    computePosition(ref, content, popperOptions).then(({x, y}) => {
      console.log(x, y)
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
      console.log(result)
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

  constructor(private collateService: CollateService) {

  }

  ngAfterViewInit() {
    cytoscape.use(euler);
    cytoscape.use(popper(popperFactory));
    cytoscape.use(Layers);

    this.initCytoscape()
    this.collateService.collateRedrawSubject.subscribe(() => {
      this.updateCytoscape()
    })
  }

  updateCytoscape() {
    this.cy.destroy();
    this.initCytoscape();
  }

  renderBar(ctx: CanvasRenderingContext2D, value: number, y: number, w: number, h: number) {
    ctx.fillRect(0, y, w*value, h);
    ctx.strokeRect(0, y, w, h);
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
          { selector: '.comparison', style: { 'background-color': '#33A1FF' } },
          { selector: 'edge[color]', style: { 'width': 2, 'line-color': 'data(color)', 'target-arrow-color': 'data(color)', 'target-arrow-shape': 'triangle' } }
        ],
        //@ts-ignore
        layout: { name: 'euler', animate: true, avoidOverlap: true, minDist: 400, avoidOverlapPadding: 50},
      });
      //@ts-ignore
      const layers: any = this.cy.layers()
      console.log(layers)
      this.cy.edges().forEach(edge => {

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
      layers.renderPerEdge(
        layers.nodeLayer.insertAfter('canvas'),
        (ctx: CanvasRenderingContext2D, edge: cy.EdgeSingular, path: Path2D, start: IPoint, end: IPoint) => {
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
          ctx.fillRect(x - barWidth - 2, y - maxBarHeight-3, barWidth * 2 + 8, maxBarHeight+5);
          ctx.strokeStyle = 'black';
          ctx.strokeRect(x - barWidth - 2, y - maxBarHeight-3, barWidth * 2 + 8, maxBarHeight+5);

          ctx.fillStyle = 'red';
          ctx.fillRect(x - barWidth, y - normIntensityA, barWidth, normIntensityA);

          ctx.fillStyle = 'blue';
          ctx.fillRect(x + 2, y - normIntensityB, barWidth, normIntensityB);
        }
      );
    }
  }


  buildGraphElements() {
    const elements: any[] = [];
    const addedNodes = new Set();
    const projectColorMap: { [projectId: string]: string } = {};

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
    return elements;
  }

  toggleCytoscapePlot() {
    this.showCytoscapePlot = !this.showCytoscapePlot;
  }

  getRandomColor(): string {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }
}
