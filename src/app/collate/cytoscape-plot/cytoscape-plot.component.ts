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
import edgehandles from 'cytoscape-edgehandles';
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatDialog} from "@angular/material/dialog";
import {
  CytoscapePlotFilterDialogComponent
} from "./cytoscape-plot-filter-dialog/cytoscape-plot-filter-dialog.component";
import {StringDbDialogComponent} from "./string-db-dialog/string-db-dialog.component";
import {WebService} from "../../web.service";

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
    MatMenu,
    MatMenuItem,
    MatMenuTrigger
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
  cytoscapeElements: any[] = [];
  currentFilter: { log2fc: number, pvalue: number, projectNames: string[], analysisGroupNames: string[] } = { log2fc: 0, pvalue: 0, projectNames: [], analysisGroupNames: [] };

  constructor(private collateService: CollateService, private cdr: ChangeDetectorRef, private dialog: MatDialog, private webService: WebService) {

  }

  ngAfterViewInit() {
    cytoscape.use(fcose);
    cytoscape.use(popper(popperFactory));
    cytoscape.use(Layers);
    //cytoscape.use(edgehandles);
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
      this.cytoscapeElements = elements;
      this.cy = cytoscape({
        container: this.cyElement.nativeElement,
        elements: elements,
        style: [
          { selector: 'node', style: { 'label': 'data(label)', 'background-color': '#666', 'width': 'data(size)', 'height': 'data(size)' } },
          { selector: '.protein', style: { 'background-color': '#FF5733' } },
          { selector: '.analysis', style: { 'background-color': '#ba0000', 'label': '' } },
          { selector: '.comparison', style: { 'background-color': '#33A1FF', 'label': '' } },
          { selector: 'edge[color]', style: {
              'width': 2,
              'line-color': 'data(color)',
              'target-arrow-color': 'data(color)',
              'target-arrow-shape': 'triangle',
              'curve-style': 'bezier',
              'control-point-step-size': 40
            }
          }
        ],
        //@ts-ignore
        layout: { name: 'fcose', animate: true, animationDuration: 1000,
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
      /*const edgeHandleOptions: edgehandles.EdgeHandlesOptions = {
        canConnect: (source, target) => source !== target, // Disable self loops
        edgeParams: (source, target) => ({
          data: {
            source: source.id(),
            target: target.id(),
            color: '#000000' // Default color for new edges
          }
        }),
        hoverDelay: 150,
        snap: true,
        snapThreshold: 50,
        snapFrequency: 15,
        noEdgeEventsInDraw: true,
        disableBrowserGestures: true
      };*/
      //this.cy.edgehandles(edgeHandleOptions)
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
          const tooltipContent = `Comparison: ${data.conditionA} vs ${data.conditionB}<br>Project: ${data.project}<br>Analysis Group: ${data.analysis_group} <br>Log2FC: ${data.fc}<br>-Log10(p): ${data.p_value}<br> Intensity ${data.conditionA}: ${data.intensityA}<br>Intensity ${data.conditionB}: ${data.intensityB}`;
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

        let isDragging = false;
        let dragStartPos = { x: 0, y: 0 };



        edge.on('mousedown', (event) => {
          isDragging = true;
          dragStartPos = event.position;
        });

        this.cy.on('mousemove', (event) => {
          if (isDragging) {
            const dragEndPos = event.position;
            edge.data('barChartPos', dragEndPos);
            this.cy.trigger('render');
          }
        });

        this.cy.on('mouseup', () => {
          isDragging = false;
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

    const barWidth = 5; // Reduced bar width
    const maxBarHeight = 25; // Reduced max bar height
    const maxIntensity = Math.max(intensityA, intensityB);
    const normIntensityA = (intensityA / maxIntensity) * maxBarHeight;
    const normIntensityB = (intensityB / maxIntensity) * maxBarHeight;

    const barChartPos = data.barChartPos || { x: (start.x + end.x) / 2, y: (start.y + end.y) / 2 };
    const sourcePos = edge.source().position();
    const targetPos = edge.target().position();
    const edgeLength = Math.sqrt(Math.pow(targetPos.x - sourcePos.x, 2) + Math.pow(targetPos.y - sourcePos.y, 2));
    const t = ((barChartPos.x - sourcePos.x) * (targetPos.x - sourcePos.x) + (barChartPos.y - sourcePos.y) * (targetPos.y - sourcePos.y)) / Math.pow(edgeLength, 2);
    const x = sourcePos.x + t * (targetPos.x - sourcePos.x) - barWidth;
    const y = sourcePos.y + t * (targetPos.y - sourcePos.y) + maxBarHeight;

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
          elements.push({ data: { id: comparisonId, label: `${conditionA} vs ${conditionB}`, size: 25}, classes: 'comparison' });
          addedNodes.add(comparisonId);
        }
        const conditionAValues = result.searched_data.filter(data => data.Condition === result.condition_A && data.Value);
        const conditionBValues = result.searched_data.filter(data => data.Condition === result.condition_B && data.Value);
        let intensityA = 0;
        let intensityB = 0;
        // calculate average intensity for each condition if multiple values are present and ignore NaN or undefined or null or empty values
        if (conditionAValues.length > 0) {
          intensityA = conditionAValues.reduce((acc, curr) => acc + curr.Value, 0) / conditionAValues.length;
        }
        if (conditionBValues.length > 0) {
          intensityB = conditionBValues.reduce((acc, curr) => acc + curr.Value, 0) / conditionBValues.length;
        }

        elements.push({
          data: {
            id: `${proteinId}-${comparisonId}-${project.id}-${result.analysis_group.id}`,
            source: proteinId,
            target: comparisonId,
            color: projectColor,
            conditionA: conditionA,
            conditionB: conditionB,
            intensityA: intensityA,
            intensityB: intensityB,
            analysis_group: result.analysis_group.name,
            project: project.name,
            fc: result.log2_fc,
            p_value: result.log10_p
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

  toggleAllComparisons(show: boolean, nodeClass: string) {
    this.cy.nodes(nodeClass).forEach(node => {
      if (show) {
        node.style('label', node.data('label'));
      } else {
        node.style('label', '');
      }
    })
    //this.updateCytoscape();
  }

  resetZoomAndCenter() {
    this.cy.fit();
    this.cy.center();
  }

  openFilterDialog() {
    const projectNames = Array.from(new Set(this.cytoscapeElements.map((element: any) => element.data.project)));
    const analysisGroupNames = Array.from(new Set(this.cytoscapeElements.map((element: any) => element.data.analysis_group)));

    const ref = this.dialog.open(CytoscapePlotFilterDialogComponent, {
      data: { projects: projectNames, analysisGroups: analysisGroupNames, currentFilter: this.currentFilter }
    });

    ref.afterClosed().subscribe((result) => {
      if (result) {
        this.applyFilter(result.log2fc, result.pvalue, result.projectNames, result.analysisGroupNames);
        this.currentFilter = result;
      }
    });
  }

  applyFilter(log2fc: number, pvalue: number, projectNames: string[] = [], analysisGroupNames: string[] = []) {
    const filteredElements = this.cytoscapeElements.filter(
      (element: any) => {
      if (element.data.fc !== undefined && element.data.p_value !== undefined) {
        const absLog2FC = Math.abs(element.data.fc);
        const absFilter = Math.abs(log2fc);
        if (projectNames.length > 0 && !projectNames.includes(element.data.project)) {
          return false;
        }
        if (analysisGroupNames.length > 0 && !analysisGroupNames.includes(element.data.analysis_group)) {
          return false;
        }
        return absLog2FC >= absFilter && element.data.p_value >= pvalue;
      }
      return true;
    });
    const filteredEdges = filteredElements.filter((element: any) => element.data.source !== undefined && element.data.target !== undefined);
    const nodeList = new Set(filteredEdges.map((element: any) => element.data.source).concat(filteredEdges.map((element: any) => element.data.target)));
    const filteredEdgeIds = new Set(filteredEdges.map((element: any) => element.data.id));
    const filteredNodes = filteredElements.filter((element: any) => {
      return nodeList.has(element.data.id);
    })
    const filteredNodeIds = new Set(filteredNodes.map((element: any) => element.data.id));

    console.log(filteredNodeIds)
    this.cy.batch(() => {
      const addedElements: any[] = []
      this.cy.edges().forEach(edge => {
        const data = edge.data();
        addedElements.push(data.id)
        if (!filteredEdgeIds.has(data.id)) {
          edge.remove()
        }
      })
      this.cy.nodes().forEach(node => {
        const data = node.data();
        addedElements.push(data.id)
        if (!filteredNodeIds.has(data.id)) {
          node.remove()
        }
      })
      filteredNodes.forEach(node => {
        if (!addedElements.includes(node.data.id)) {
          this.cy.add(node)
        }
      })
      filteredEdges.forEach(edge => {
        if (!addedElements.includes(edge.data.id)) {
          this.cy.add(edge)
        }
      })

    })
    //@ts-ignore
    this.cy.layout({ name: 'fcose', animate: true, animationDuration: 1000}).run()
  }

  openStringDBDialog() {
    const ref = this.dialog.open(StringDbDialogComponent);
    ref.afterClosed().subscribe((result) => {
      if (result) {
        const genes = this.cy.nodes('proteins').map(node => node.data('id').split(';'));
        // flatten the array
        const flattenedGenes = [].concat.apply([], genes);
        const uniqueGenes = Array.from(new Set(flattenedGenes));
        this.requestStringDBInteractions(uniqueGenes, result.organism.taxon, result.score, result.networkType, result.addNodes);
      }
    });
  }

  requestStringDBInteractions(genes: string[], organism: string, score: number, networkType: string, addNodes: number) {
    this.webService.getStringDBInteractions(genes, organism, score, networkType, addNodes).subscribe(response => {
      // Handle the response and update the Cytoscape plot
      const data = response;
      if (data) {
        this.addStringDBInteractions(data);
      }
    });
  }

  addStringDBInteractions(data: any[]) {
    const addedNodes = new Set<string>();
    const addedEdges = new Set<string>();

    data.forEach(interaction => {
      const { preferredName_A, preferredName_B, score } = interaction;

      // Find existing nodes that match preferredName_A or preferredName_B
      let nodeAId = preferredName_A;
      let nodeBId = preferredName_B;

      this.cy.nodes().forEach(node => {
        const nodeId = node.data('id');
        const nodeIds = nodeId.split(';');

        if (nodeIds.includes(preferredName_A)) {
          nodeAId = nodeId;
        }
        if (nodeIds.includes(preferredName_B)) {
          nodeBId = nodeId;
        }
      });

      // Add node A if it doesn't exist
      if (!this.cy.getElementById(nodeAId).length && !addedNodes.has(nodeAId)) {
        this.cy.add({
          data: { id: nodeAId, label: preferredName_A, size: 25 },
          classes: 'string-protein'
        });
        addedNodes.add(nodeAId);
      }

      // Add node B if it doesn't exist
      if (!this.cy.getElementById(nodeBId).length && !addedNodes.has(nodeBId)) {
        this.cy.add({
          data: { id: nodeBId, label: preferredName_B, size: 25 },
          classes: 'string-protein'
        });
        addedNodes.add(nodeBId);
      }

      // Add edge if it doesn't exist
      const edgeId = `${nodeAId}-${nodeBId}`;
      if (!addedEdges.has(edgeId)) {
        this.cy.add({
          data: {
            id: edgeId,
            source: nodeAId,
            target: nodeBId,
            score: score
          },
          classes: 'string-edge'
        });
        addedEdges.add(edgeId);
      }

      // Identify and add interactions with existing non-STRING nodes
      this.cy.nodes().forEach(node => {
        const nodeId = node.data('id');
        const nodeIds = nodeId.split(';');

        if (nodeIds.includes(preferredName_A) && !nodeIds.includes(preferredName_B)) {
          const newEdgeId = `${nodeId}-${nodeBId}`;
          if (!addedEdges.has(newEdgeId)) {
            this.cy.add({
              data: {
                id: newEdgeId,
                source: nodeId,
                target: nodeBId,
                score: score
              },
              classes: 'string-edge'
            });
            addedEdges.add(newEdgeId);
          }
        }

        if (nodeIds.includes(preferredName_B) && !nodeIds.includes(preferredName_A)) {
          const newEdgeId = `${nodeId}-${nodeAId}`;
          if (!addedEdges.has(newEdgeId)) {
            this.cy.add({
              data: {
                id: newEdgeId,
                source: nodeId,
                target: nodeAId,
                score: score
              },
              classes: 'string-edge'
            });
            addedEdges.add(newEdgeId);
          }
        }
      });
    });

    // Apply specific styles for STRING added data
    this.cy.style()
      .selector('.string-protein')
      .style({
        'shape': 'rectangle',
        'background-color': '#FF5733',
        'label': 'data(label)',
        'width': 30,
        'height': 30
      })
      .selector('.string-edge')
      .style({
        'line-color': '#FF5733',
        'width': 2,
        'line-style': 'dashed',
        'target-arrow-shape': 'none'
      })
      .update();
    //@ts-ignore
    this.cy.layout({ name: 'fcose', animate: true, animationDuration: 1000}).run()
  }
}
