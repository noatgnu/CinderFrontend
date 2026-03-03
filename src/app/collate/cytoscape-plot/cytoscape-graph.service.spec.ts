import {TestBed} from '@angular/core/testing';
import {CytoscapeGraphService} from './cytoscape-graph.service';
import {SearchResult} from "../../search-session";
import {Project} from "../../project/project";
import {CytoscapeEdgeData, CytoscapeElement} from "./cytoscape-plot.types";

describe('CytoscapeGraphService', () => {
  let service: CytoscapeGraphService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CytoscapeGraphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('generateRandomColor', () => {
    it('should generate valid hex color', () => {
      const color = service.generateRandomColor();
      expect(color).toMatch(/^#[0-9a-f]{6}$/i);
    });
  });

  describe('groupHeatmapDataBySearchTerm', () => {
    it('should group data by search term', () => {
      const data = [
        { project: 'P1', analysis_group: 'AG1', conditionA: 'A', conditionB: 'B', log2fc: 1, p_value: 0.05, comparison: 'A vs B', protein: 'PROT1', searchTerm: 'term1' },
        { project: 'P1', analysis_group: 'AG1', conditionA: 'A', conditionB: 'B', log2fc: 2, p_value: 0.01, comparison: 'A vs B', protein: 'PROT2', searchTerm: 'term1' },
        { project: 'P2', analysis_group: 'AG2', conditionA: 'C', conditionB: 'D', log2fc: -1, p_value: 0.1, comparison: 'C vs D', protein: 'PROT3', searchTerm: 'term2' }
      ];

      const result = service.groupHeatmapDataBySearchTerm(data);

      expect(result.length).toBe(2);
      expect(result[0].length).toBe(2);
      expect(result[1].length).toBe(1);
    });

    it('should return empty array for empty input', () => {
      const result = service.groupHeatmapDataBySearchTerm([]);
      expect(result).toEqual([]);
    });
  });

  describe('filterElements', () => {
    it('should filter elements by log2fc threshold', () => {
      const elements: CytoscapeElement[] = [
        { data: { id: 'node1', label: 'Node 1', size: 25 }, classes: 'protein' },
        { data: { id: 'edge1', source: 'node1', target: 'node2', fc: 2, p_value: 0.5, project: 'P1', analysis_group: 'AG1', color: '#fff', conditionA: 'A', conditionB: 'B', intensityA: 1, intensityB: 2, protein: 'P', searchTerm: 's' } as CytoscapeEdgeData },
        { data: { id: 'edge2', source: 'node1', target: 'node3', fc: 0.5, p_value: 0.5, project: 'P1', analysis_group: 'AG1', color: '#fff', conditionA: 'A', conditionB: 'B', intensityA: 1, intensityB: 2, protein: 'P', searchTerm: 's' } as CytoscapeEdgeData }
      ];

      const filter = { log2fc: 1, pvalue: 0, projectNames: [], analysisGroupNames: [] };
      const result = service.filterElements(elements, filter);

      expect(result.filteredEdges.length).toBe(1);
      expect(result.filteredEdges[0].data.id).toBe('edge1');
    });

    it('should filter elements by project name', () => {
      const elements: CytoscapeElement[] = [
        { data: { id: 'node1', label: 'Node 1', size: 25 }, classes: 'protein' },
        { data: { id: 'edge1', source: 'node1', target: 'node2', fc: 2, p_value: 0.5, project: 'P1', analysis_group: 'AG1', color: '#fff', conditionA: 'A', conditionB: 'B', intensityA: 1, intensityB: 2, protein: 'P', searchTerm: 's' } as CytoscapeEdgeData },
        { data: { id: 'edge2', source: 'node1', target: 'node3', fc: 2, p_value: 0.5, project: 'P2', analysis_group: 'AG1', color: '#fff', conditionA: 'A', conditionB: 'B', intensityA: 1, intensityB: 2, protein: 'P', searchTerm: 's' } as CytoscapeEdgeData }
      ];

      const filter = { log2fc: 0, pvalue: 0, projectNames: ['P1'], analysisGroupNames: [] };
      const result = service.filterElements(elements, filter);

      expect(result.filteredEdges.length).toBe(1);
      expect((result.filteredEdges[0].data as CytoscapeEdgeData).project).toBe('P1');
    });
  });

  describe('buildGraphElements', () => {
    it('should build graph elements from projects and search results', () => {
      const projects: Project[] = [
        { id: 1, name: 'Project 1' } as Project
      ];

      const searchResultsMap: Record<string, SearchResult[]> = {
        '1': [
          {
            id: 1,
            gene_name: 'GENE1',
            uniprot_id: 'UNI1',
            primary_id: 'PRI1',
            condition_A: 'Control',
            condition_B: 'Treatment',
            log2_fc: 1.5,
            log10_p: 2,
            analysis_group: { id: 1, name: 'AG1', analysis_group_type: 'test' },
            searched_data: [
              { Condition: 'Control', Value: 100, Sample: 'S1' },
              { Condition: 'Treatment', Value: 200, Sample: 'S2' }
            ],
            search_term: 'search1',
            created_at: new Date(),
            updated_at: new Date(),
            session: 1,
            file: { id: 1, name: 'test.txt', file_type: 'txt', file_category: 'data' },
            comparison_label: 'test',
            copy_number: null,
            rank: null,
            ptm_data: null
          } as SearchResult
        ]
      };

      const result = service.buildGraphElements(projects, searchResultsMap, {});

      expect(result.elements.length).toBe(3);
      expect(result.heatmapData.length).toBe(1);
      expect(Object.keys(result.projectColorMap).length).toBe(1);
    });

    it('should apply condition renaming', () => {
      const projects: Project[] = [
        { id: 1, name: 'Project 1' } as Project
      ];

      const searchResultsMap: Record<string, SearchResult[]> = {
        '1': [
          {
            id: 1,
            gene_name: 'GENE1',
            uniprot_id: null,
            primary_id: null,
            condition_A: 'Ctrl',
            condition_B: 'Treat',
            log2_fc: 1.5,
            log10_p: 2,
            analysis_group: { id: 1, name: 'AG1', analysis_group_type: 'test' },
            searched_data: [],
            search_term: 'search1',
            created_at: new Date(),
            updated_at: new Date(),
            session: 1,
            file: { id: 1, name: 'test.txt', file_type: 'txt', file_category: 'data' },
            comparison_label: 'test',
            copy_number: null,
            rank: null,
            ptm_data: null
          }
        ]
      };

      const renameCondition = {
        1: { 'Ctrl': 'Control', 'Treat': 'Treatment' }
      };

      const result = service.buildGraphElements(projects, searchResultsMap, renameCondition);

      const comparisonNode = result.elements.find(e => e.classes === 'comparison');
      expect(comparisonNode?.data.label).toBe('Control vs Treatment');
    });
  });
});
