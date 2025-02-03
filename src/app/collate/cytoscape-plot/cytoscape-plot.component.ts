import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import cytoscape from "cytoscape";
import {SearchResult, SearchSession} from "../../search-session";
import {Project} from "../../project/project";

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

  ngAfterViewInit() {
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
          { selector: '.file', style: { 'background-color': '#FFD700' } },
          { selector: '.condition', style: { 'background-color': '#FF33A1' } },
          { selector: 'edge', style: { 'width': 2, 'line-color': '#ccc' } }
        ],
        layout: { name: 'cose', animate: true }
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
        const proteinId = result.primary_id || result.gene_name || result.uniprot_id;
        const analysisGroupId = `AG_${result.analysis_group.id}`;
        const fileId = `File_${result.file.id}`;
        let conditionAId = `Cond_${result.condition_A}`;
        let conditionBId = `Cond_${result.condition_B}`;
        // replace condition names with renamed conditions
        if (!this.renameCondition[project.id]) {
          if (!this.renameCondition[project.id][result.condition_A] ) {
            const conditionA = this.renameCondition[project.id][result.condition_A] || result.condition_A;
            conditionAId = `Cond_${conditionA}`;
          }
          if (!this.renameCondition[project.id][result.condition_B] ) {
            const conditionB = this.renameCondition[project.id][result.condition_B] || result.condition_B;
            conditionBId = `Cond_${conditionB}`;
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

        // Add File Node
        if (!addedNodes.has(fileId)) {
          elements.push({ data: { id: fileId, label: result.file.name }, classes: 'file' });
          addedNodes.add(fileId);
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
        elements.push({ data: { source: analysisGroupId, target: fileId } }); // Analysis Group → File
        elements.push({ data: { source: fileId, target: conditionAId } }); // File → Condition A
        elements.push({ data: { source: fileId, target: conditionBId } }); // File → Condition B
      });
    });

    return elements;
  }
}
