import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import cytoscape from "cytoscape";
import {SearchResult} from "../../search-session";
import {Project} from "../../project/project";
import popper, {PopperInstance} from 'cytoscape-popper';
import {computePosition, flip, limitShift, shift} from "@floating-ui/dom";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";
import {NgClass} from "@angular/common";
import {CollateService} from "../collate.service";
import Layers, {ICanvasLayer, IPoint} from 'cytoscape-layers';
import fcose from 'cytoscape-fcose';
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatDialog} from "@angular/material/dialog";
import {CytoscapePlotFilterDialogComponent} from "./cytoscape-plot-filter-dialog/cytoscape-plot-filter-dialog.component";
import {StringDbDialogComponent} from "./string-db-dialog/string-db-dialog.component";
import {WebService} from "../../web.service";
// @ts-ignore
import C2S from 'canvas-to-svg';
// @ts-ignore
import pdf from 'cytoscape-pdf-export';
import {HeatmapPlotComponent} from "./heatmap-plot/heatmap-plot.component";
import {MatToolbar} from "@angular/material/toolbar";
import {GraphService} from "../../graph.service";
import {CytoscapeElement, CytoscapeFilter, HeatmapDataPoint, StringDBInteraction} from "./cytoscape-plot.types";
import {Subscription} from "rxjs";
import {CytoscapeGraphService} from "./cytoscape-graph.service";

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
    MatMenuTrigger,
    HeatmapPlotComponent,
    NgClass,
    MatToolbar
  ],
  templateUrl: './cytoscape-plot.component.html',
  styleUrl: './cytoscape-plot.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CytoscapePlotComponent implements AfterViewInit, OnDestroy {
  showBarChart = true;
  showCytoscapePlot = false;
  heatmapData: HeatmapDataPoint[] = [];
  heatMapGroupData: HeatmapDataPoint[][] = [];

  @ViewChild('cy') cyElement!: ElementRef;
  @ViewChild('heatmapContainer') heatmapContainer!: ElementRef;
  @ViewChild('cytoscapePlotContainer') cytoscapePlotContainer!: ElementRef;
  @Input() projects: Project[] = [];
  @Input() searchResultsMap: Record<string, SearchResult[]> = {};
  @Input() renameCondition: Record<number, Record<string, string>> = {};
  @Output() proteinSelected = new EventEmitter<string | null>();

  selectedProtein: string | null = null;
  cy!: cytoscape.Core;
  currentPopperRef: PopperInstance | null = null;
  currentTooltip: HTMLElement | null = null;
  barChartLayers = new Map<string, ICanvasLayer>();
  projectColorMap: Record<string, string> = {};
  cytoscapeElements: CytoscapeElement[] = [];
  currentFilter: CytoscapeFilter = { log2fc: 0, pvalue: 0, projectNames: [], analysisGroupNames: [] };
  layers: any = null;
  defaultSticky = true;
  isExpanded = false;

  private subscriptions: Subscription[] = [];
  private scrollHandler = this.onScroll.bind(this);

  constructor(
    private collateService: CollateService,
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog,
    private webService: WebService,
    private graphService: GraphService,
    private cytoscapeGraphService: CytoscapeGraphService
  ) {}

  ngAfterViewInit(): void {
    window.addEventListener('scroll', this.scrollHandler);
    cytoscape.use(fcose);
    cytoscape.use(popper(popperFactory));
    cytoscape.use(Layers);
    cytoscape.use(pdf);
    this.initCytoscape();

    this.subscriptions.push(
      this.collateService.collateRedrawSubject.subscribe(() => {
        this.updateCytoscape();
      })
    );

    this.subscriptions.push(
      this.graphService.proteinSelectionSubject.subscribe((proteinIDs) => {
        if (this.cy && proteinIDs.length > 0) {
          this.cy.batch(() => {
            this.cy.nodes().removeClass('highlighted');
            proteinIDs.forEach(id => {
              const targets = this.cy.nodes().filter(node => node.id().includes(id));
              targets.addClass('highlighted');
              targets.select();
            });
          });
          const highlighted = this.cy.nodes('.highlighted');
          if (highlighted.length > 0) {
            this.cy.animate({
              fit: { eles: highlighted, padding: 50 }
            }, { duration: 500 });
          }
        }
      })
    );
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollHandler);
    this.subscriptions.forEach(sub => sub.unsubscribe());
    if (this.cy) {
      this.cy.destroy();
    }
    this.cleanupTooltip();
  }

  private cleanupTooltip(): void {
    if (this.currentTooltip && this.currentTooltip.parentNode) {
      this.currentTooltip.parentNode.removeChild(this.currentTooltip);
      this.currentTooltip = null;
    }
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
          { selector: 'node.highlighted', style: {
              'border-width': 4,
              'border-color': '#ffd000',
              'font-size': 16,
              'font-weight': 'bold',
              'label': 'data(label)'
            }
          },
          { selector: 'node.selected', style: {
              'border-width': 4,
              'border-color': '#00ff00',
              'font-size': 14,
              'font-weight': 'bold'
            }
          },
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

      this.cy.nodes('.protein').forEach(node => {
        node.on('click', (event) => {
          const targetNode = event.target;
          const proteinId = targetNode.data('id');
          if (this.selectedProtein === proteinId) {
            this.selectedProtein = null;
            this.cy.nodes('.protein').removeClass('selected');
          } else {
            this.selectedProtein = proteinId;
            this.cy.nodes('.protein').removeClass('selected');
            targetNode.addClass('selected');
          }
          this.proteinSelected.emit(this.selectedProtein);
          this.cdr.markForCheck();
        });
      });

      //@ts-ignore
      const layers: any = this.cy.layers()
      this.layers = layers;
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
      (ctx: CanvasRenderingContext2D, edge: cytoscape.EdgeSingular, path: Path2D, start: IPoint, end: IPoint) => {

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

    let x, y;
    const controlPoints = edge.controlPoints();
    if (controlPoints && controlPoints.length > 0) {
      const controlPoint = controlPoints[0];
      x = (1 - t) * (1 - t) * start.x + 2 * (1 - t) * t * controlPoint.x + t * t * end.x;
      y = (1 - t) * (1 - t) * start.y + 2 * (1 - t) * t * controlPoint.y + t * t * end.y;
    } else {
      x = sourcePos.x + t * (targetPos.x - sourcePos.x) - barWidth;
      y = sourcePos.y + t * (targetPos.y - sourcePos.y) + maxBarHeight;
    }



    ctx.fillStyle = 'white';
    ctx.fillRect(x - barWidth - 2, y - maxBarHeight - 3, barWidth * 2 + 6, maxBarHeight + 5);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(x - barWidth - 2, y - maxBarHeight - 3, barWidth * 2 + 6, maxBarHeight + 5);

    ctx.fillStyle = 'red';
    ctx.fillRect(x - barWidth, y - normIntensityA, barWidth, normIntensityA);

    ctx.fillStyle = 'blue';
    ctx.fillRect(x + 2, y - normIntensityB, barWidth, normIntensityB);
  }


  buildGraphElements(): CytoscapeElement[] {
    const result = this.cytoscapeGraphService.buildGraphElements(
      this.projects,
      this.searchResultsMap,
      this.renameCondition
    );
    this.heatmapData = result.heatmapData;
    this.projectColorMap = result.projectColorMap;
    this.heatMapGroupData = this.cytoscapeGraphService.groupHeatmapDataBySearchTerm(this.heatmapData);
    return result.elements;
  }

  toggleCytoscapePlot() {
    this.showCytoscapePlot = !this.showCytoscapePlot;
  }

  toggleBarChart() {
    this.showBarChart = !this.showBarChart;
    this.updateCytoscape();
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
    // update heatmap data
    const heatmapData: any[] = [];
    this.cy.edges().forEach(edge => {
      const data = edge.data();
      if (data.conditionA && data.conditionB && data.protein) {
        heatmapData.push({
          project: data.project,
          analysis_group: data.analysis_group,
          conditionA: data.conditionA,
          conditionB: data.conditionB,
          log2fc: data.fc,
          p_value: data.p_value,
          comparison: `${data.conditionA} vs ${data.conditionB}`,
          protein: data.protein,
          searchTerm: data.searchTerm
        })
      }
    })
    this.heatmapData = heatmapData;
    this.heatMapGroupData = this.convertHeatmapDataToHeatmapGroupData()
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

  addStringDBInteractions(data: StringDBInteraction[]): void {
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

  exportToSvg() {
    if (!this.cy) {
      return;
    }
    if (!this.cy.container()) {
      return;
    }
    const svgContext = new C2S(this.cy.width(), this.cy.height());

    // Calculate the bounding box of the graph
    const boundingBox = this.cy.elements().boundingBox();
    const offsetX = -boundingBox.x1;
    const offsetY = -boundingBox.y1;

    // Draw nodes
    this.cy.nodes().forEach(node => {
      const position = node.position();
      const x = position.x + offsetX;
      const y = position.y + offsetY;

      svgContext.beginPath();
      if (node.hasClass('string-protein')) {
        svgContext.rect(x - 15, y - 15, 30, 30); // Rectangle for STRING nodes
      } else {
        svgContext.arc(x, y, 15, 0, 2 * Math.PI); // Circle for normal nodes
      }
      svgContext.fillStyle = node.style('background-color');
      svgContext.fill();
      svgContext.strokeStyle = node.style('border-color') || '#FFF';
      //svgContext.lineWidth = parseFloat(node.style('border-width')) || 1;
      svgContext.stroke();
      svgContext.closePath();

      // Draw labels
      svgContext.font = node.style('font-size') + ' ' + node.style('font-family');
      svgContext.fillStyle = node.style('color') || '#000';
      svgContext.fillText(node.data('label'), x - 15, y - 20); // Adjust position as needed
    });

    this.cy.edges().forEach(edge => {
      const controlPoints = edge.controlPoints();
      const sourcePosition = edge.source().position();
      const targetPosition = edge.target().position();
      const sourceX = sourcePosition.x + offsetX;
      const sourceY = sourcePosition.y + offsetY;
      const targetX = targetPosition.x + offsetX;
      const targetY = targetPosition.y + offsetY;

      svgContext.beginPath();
      if (controlPoints) {
        if (controlPoints.length > 1) {
          const controlPoint = controlPoints[0];
          const controlX = controlPoint.x + offsetX;
          const controlY = controlPoint.y + offsetY;
          svgContext.moveTo(sourceX, sourceY);
          svgContext.quadraticCurveTo(controlX, controlY, targetX, targetY);
        }
      } else {
        svgContext.moveTo(sourceX, sourceY);
        svgContext.lineTo(targetX, targetY);
      }
      svgContext.strokeStyle = edge.style('line-color');
      svgContext.lineWidth = parseFloat(edge.style('width'));
      svgContext.stroke();
      svgContext.closePath();
    });

    // Get the SVG string
    const svgString = svgContext.getSerializedSvg();

    // Create a Blob from the SVG string
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cytoscape-plot.svg';
    a.click();
    URL.revokeObjectURL(url);
  }

  exportToPng() {
    if (!this.cy) {
      return;
    }
    if (!this.cy.container()) {
      return;
    }
    const pngContext = this.cy.png({ full: true });
    const blob = this.dataURItoBlob(pngContext);
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cytoscape-plot.png';
    a.click();
    URL.revokeObjectURL(url);
  }

  dataURItoBlob(dataURI: string) {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  }

  async exportToPDF() {
    // @ts-ignore
    const blobPromise = this.cy.pdf({
      paperSize: 'LETTER', orientation: 'landscape', full: true, ignoreUnsupportedLayerOrder: true });
    const blob = await blobPromise;
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'cytoscape-plot.pdf';
    a.click();
    URL.revokeObjectURL(url);

  }

  exportToPng2() {
    if (!this.cy) {
      return;
    }
    if (!this.cy.container() || !this.layers) {
      return;
    }
    this.layers.png({
      output: 'blob-promise',
      ignoreUnsupportedLayerOrder: true,
      full: true,
      scale: 5,
    }).then((blob: Blob) => {
      const a = document.createElement('a');
      const url = URL.createObjectURL(blob);
      a.href = url;
      a.download = 'cytoscape-plot.png';
      a.click();
      URL.revokeObjectURL(url);
    })
  }

  convertHeatmapDataToHeatmapGroupData(): HeatmapDataPoint[][] {
    return this.cytoscapeGraphService.groupHeatmapDataBySearchTerm(this.heatmapData);
  }

  onScroll() {
    if (this.defaultSticky) {
      if (this.cyElement && this.cytoscapePlotContainer && this.heatmapContainer) {
        const cyContainer = this.cytoscapePlotContainer.nativeElement;
        const heatmapContainer = this.heatmapContainer.nativeElement;
        const heatmapRect = heatmapContainer.getBoundingClientRect();
        if (heatmapRect.bottom < 0) {
          cyContainer.style.position = 'relative';
        } else {
          cyContainer.style.position = 'sticky';
          cyContainer.style.top = '0';
        }
      }
    }

  }

  toggleSticky() {
    this.defaultSticky = !this.defaultSticky;
    if (!this.defaultSticky) {
      if (this.cytoscapePlotContainer) {
        this.cytoscapePlotContainer.nativeElement.style.position = 'relative';
      }
    } else {
      this.cytoscapePlotContainer.nativeElement.style.position = 'sticky';
      this.cytoscapePlotContainer.nativeElement.style.top = '0';
    }
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
    if (this.isExpanded) {
      if (this.cyElement) {
        this.cyElement.nativeElement.style.height = '800px';
      }
    } else {
      if (this.cyElement) {
        this.cyElement.nativeElement.style.height = '300px';
      }
    }
    this.cy.resize();
    this.cy.fit();
  }

  handleHoverTarget(data: HeatmapDataPoint | undefined): void {
    this.cy.edges().stop(true).style('opacity', 1);

    if (data) {
      this.cy.edges().forEach(edge => {
        const edgeData = edge.data();
        if (
          edgeData.project === data.project &&
          edgeData.analysis_group === data.analysis_group &&
          edgeData.conditionA === data.conditionA &&
          edgeData.conditionB === data.conditionB &&
          edgeData.protein === data.protein &&
          edgeData.searchTerm === data.searchTerm
        ) {
          const blink = (): void => {
            edge.animate({ style: { opacity: 0 } }, {
              duration: 500,
              complete: () => {
                edge.animate({ style: { opacity: 1 } }, {
                  duration: 500,
                  complete: blink
                });
              }
            });
          };
          blink();
        }
      });
    }
  }
}
