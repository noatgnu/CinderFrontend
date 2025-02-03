import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import cytoscape from "cytoscape";
import {SearchResult, SearchSession} from "../../search-session";
import {Project} from "../../project/project";
import euler from 'cytoscape-euler';
import popper, {PopperInstance} from 'cytoscape-popper';
import {computePosition, flip, shift, limitShift} from "@floating-ui/dom";


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
  imports: [],
  templateUrl: './cytoscape-plot.component.html',
  styleUrl: './cytoscape-plot.component.scss'
})
export class CytoscapePlotComponent implements AfterViewInit{
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
          { selector: 'node', style: { 'label': 'data(label)', 'background-color': '#666', 'width': 25, 'height': 25 } },
          { selector: '.protein', style: { 'background-color': '#FF5733' } },
          { selector: '.project', style: { 'background-color': '#33A8FF' } },
          { selector: '.analysis', style: { 'background-color': '#33FF57' } },
          { selector: '.condition', style: { 'background-color': '#FF33A1' } },
          { selector: 'edge', style: { 'width': 2, 'line-color': '#ccc' } }
        ],
        //@ts-ignore
        layout: { name: 'euler', animate: true }
      });

      this.cy.nodes().forEach(node => {

        //tooltip.style.display = 'none';
        //tooltip.style.position = 'absolute';

        //tooltip.style.left = node.renderedPosition().x + 'px';
        //tooltip.style.top = node.renderedPosition().y + 'px';

        node.on('mouseover', (event) => {
          this.currentPopperRef = event.target.popper({
            content: () => {
              const tooltip = document.createElement('div');
              tooltip.classList.add('cy-tooltip');
              tooltip.innerHTML = node.data('label');
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
      });
    }
  }

  buildGraphElements() {
    const elements: any[] = [];
    const addedNodes = new Set();

    // Add Project Nodes
    this.projects.forEach(project => {
      if (!addedNodes.has(project.id)) {
        elements.push({ data: { id: project.id, label: project.name }, classes: 'project' });
        addedNodes.add(project.id);
      }

      // Process Search Results for each project
      const searchResults = this.searchResultsMap[project.id] || [];
      searchResults.forEach(result => {
        const proteinId = result.gene_name || result.uniprot_id || result.primary_id;
        const analysisGroupId = `AG_${result.analysis_group.id}`;
        let conditionAId = `Cond_${result.condition_A}`;
        let conditionBId = `Cond_${result.condition_B}`;
        // replace condition names with renamed conditions
        if (this.renameCondition[project.id]) {
          if (this.renameCondition[project.id][result.condition_A]) {
            conditionAId = `Cond_${this.renameCondition[project.id][result.condition_A]}`;
          }
          if (this.renameCondition[project.id][result.condition_B]) {
            conditionBId = `Cond_${this.renameCondition[project.id][result.condition_B]}`;
          }
        }

        // Add Protein Node
        if (!addedNodes.has(proteinId)) {
          elements.push({ data: { id: proteinId, label: proteinId }, classes: 'protein' });
          addedNodes.add(proteinId);
        }

        // Add Analysis Group Node
        if (!addedNodes.has(analysisGroupId)) {
          elements.push({ data: { id: analysisGroupId, label: result.analysis_group.name }, classes: 'analysis' });
          addedNodes.add(analysisGroupId);
        }

        // Add Condition Nodes
        if (!addedNodes.has(conditionAId)) {
          elements.push({ data: { id: conditionAId, label: result.condition_A }, classes: 'condition' });
          addedNodes.add(conditionAId);
        }

        if (!addedNodes.has(conditionBId)) {
          elements.push({ data: { id: conditionBId, label: result.condition_B }, classes: 'condition' });
          addedNodes.add(conditionBId);
        }

        // Add Edges
        elements.push({ data: { source: proteinId, target: project.id } }); // Protein → Project
        elements.push({ data: { source: proteinId, target: analysisGroupId } }); // Protein → Analysis Group
        elements.push({ data: { source: analysisGroupId, target: conditionAId } }); // Analysis Group → Condition A
        elements.push({ data: { source: analysisGroupId, target: conditionBId } }); // Analysis Group → Condition B
      });
    });

    return elements;
  }
}
