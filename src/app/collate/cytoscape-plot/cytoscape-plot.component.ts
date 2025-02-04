import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
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
  styleUrl: './cytoscape-plot.component.scss'
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
  ngAfterViewInit() {
    cytoscape.use(euler);
    cytoscape.use(popper(popperFactory));
    this.initCytoscape()
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
          { selector: '.analysis', style: { 'background-color': '#33FF57', 'label': '' } },
          { selector: '.condition', style: { 'background-color': '#FF33A1' } },
          { selector: 'edge', style: { 'width': 2, 'line-color': '#ccc' } }
        ],
        //@ts-ignore
        layout: { name: 'euler', animate: true }
      });

      this.cy.nodes().forEach(node => {
        node.on('mouseover', (event) => {
          if (node.hasClass('condition')) {
            this.currentPopperRef = event.target.popper({
              content: () => {
                const tooltip = document.createElement('div');
                tooltip.classList.add('cy-tooltip');
                const projects = node.data('projects') || [];
                tooltip.innerHTML = `${node.data('label')}<br>Projects: ${projects.join(', ')}`;
                document.body.appendChild(tooltip);
                this.currentTooltip = tooltip;
                return tooltip;
              },
              popper: {
                placement: 'bottom',
                removeOnDestroy: true,
              },
            });
          }
        });

        node.on('mouseout', () => {
          if (this.currentTooltip) {
            document.body.removeChild(this.currentTooltip);
            this.currentTooltip = null;
          }
        });
      });
    }
  }


  buildGraphElements() {
    const elements: any[] = [];
    const addedNodes = new Set();
    const conditionProjectMap: { [condition: string]: Set<string> } = {};

    this.projects.forEach(project => {
      const searchResults = this.searchResultsMap[project.id] || [];
      searchResults.forEach(result => {
        const proteinId = result.gene_name || result.uniprot_id || result.primary_id;
        const analysisGroupId = `AG_${result.analysis_group.id}`;
        let conditionAId = `${result.condition_A}`;
        let conditionBId = `${result.condition_B}`;

        if (this.renameCondition[project.id]) {
          if (this.renameCondition[project.id][result.condition_A]) {
            conditionAId = `${this.renameCondition[project.id][result.condition_A]}`;
          }
          if (this.renameCondition[project.id][result.condition_B]) {
            conditionBId = `${this.renameCondition[project.id][result.condition_B]}`;
          }
        }

        if (!addedNodes.has(proteinId)) {
          elements.push({ data: { id: proteinId, label: proteinId, size: 25 }, classes: 'protein' });
          addedNodes.add(proteinId);
        }

        if (!addedNodes.has(analysisGroupId)) {
          elements.push({ data: { id: analysisGroupId, label: result.analysis_group.name, size: 25 }, classes: 'analysis' });
          addedNodes.add(analysisGroupId);
        }

        if (!conditionProjectMap[conditionAId]) {
          conditionProjectMap[conditionAId] = new Set();
        }
        conditionProjectMap[conditionAId].add(project.name);

        if (!conditionProjectMap[conditionBId]) {
          conditionProjectMap[conditionBId] = new Set();
        }
        conditionProjectMap[conditionBId].add(project.name);

        elements.push({ data: { source: proteinId, target: analysisGroupId } });
        elements.push({ data: { source: analysisGroupId, target: conditionAId } });
        elements.push({ data: { source: analysisGroupId, target: conditionBId } });
      });
    });

    Object.keys(conditionProjectMap).forEach(conditionId => {
      const projects = Array.from(conditionProjectMap[conditionId]);
      const size = 25 + projects.length * 5;
      elements.push({ data: { id: conditionId, label: conditionId, size: size, projects: projects }, classes: 'condition' });
    });

    return elements;
  }

  toggleCytoscapePlot() {
    this.showCytoscapePlot = !this.showCytoscapePlot;
  }
}
