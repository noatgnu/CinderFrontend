import {Injectable} from '@angular/core';
import {SearchResult} from "../../search-session";
import {Project} from "../../project/project";
import {CytoscapeEdgeData, CytoscapeElement, CytoscapeFilter, HeatmapDataPoint, isEdgeData} from "./cytoscape-plot.types";

export interface GraphBuildResult {
  elements: CytoscapeElement[];
  heatmapData: HeatmapDataPoint[];
  projectColorMap: Record<string, string>;
}

@Injectable({
  providedIn: 'root',
})
export class CytoscapeGraphService {
  private heatmapGroupCache = new Map<string, HeatmapDataPoint[][]>();
  private graphBuildCache = new Map<string, GraphBuildResult>();

  private generateCacheKey(data: unknown): string {
    return JSON.stringify(data);
  }

  clearCache(): void {
    this.heatmapGroupCache.clear();
    this.graphBuildCache.clear();
  }
  buildGraphElements(
    projects: Project[],
    searchResultsMap: Record<string, SearchResult[]>,
    renameCondition: Record<number, Record<string, string>>
  ): GraphBuildResult {
    const elements: CytoscapeElement[] = [];
    const addedNodes = new Set<string>();
    const projectColorMap: Record<string, string> = {};
    const heatmapData: HeatmapDataPoint[] = [];

    projects.forEach(project => {
      const searchResults = searchResultsMap[project.id] || [];
      if (!projectColorMap[project.id]) {
        projectColorMap[project.id] = this.generateRandomColor();
      }
      const projectColor = projectColorMap[project.id];

      searchResults.forEach(result => {
        const proteinId = result.gene_name || result.uniprot_id || result.primary_id;
        if (!proteinId) return;

        if (!addedNodes.has(proteinId)) {
          elements.push({
            data: { id: proteinId, label: proteinId, size: 25 },
            classes: 'protein'
          });
          addedNodes.add(proteinId);
        }

        let conditionA = result.condition_A;
        let conditionB = result.condition_B;
        if (renameCondition[project.id]) {
          if (renameCondition[project.id][result.condition_A]) {
            conditionA = renameCondition[project.id][result.condition_A];
          }
          if (renameCondition[project.id][result.condition_B]) {
            conditionB = renameCondition[project.id][result.condition_B];
          }
        }

        const comparisonId = `${conditionA} vs ${conditionB}`;
        if (!addedNodes.has(comparisonId)) {
          elements.push({
            data: { id: comparisonId, label: `${conditionA} vs ${conditionB}`, size: 25 },
            classes: 'comparison'
          });
          addedNodes.add(comparisonId);
        }

        const intensities = this.calculateIntensities(result);
        const source = result.log2_fc > 0 ? proteinId : comparisonId;
        const target = result.log2_fc > 0 ? comparisonId : proteinId;

        const edgeVisuals = this.calculateEdgeVisuals(result.log10_p);
        elements.push({
          data: {
            id: `${proteinId}-${comparisonId}-${project.id}-${result.analysis_group.id}`,
            source: source,
            target: target,
            color: projectColor,
            conditionA: conditionA,
            conditionB: conditionB,
            intensityA: intensities.intensityA,
            intensityB: intensities.intensityB,
            analysis_group: result.analysis_group.name,
            project: project.name,
            fc: result.log2_fc,
            p_value: result.log10_p,
            protein: proteinId,
            searchTerm: result.search_term,
            edgeWidth: edgeVisuals.width,
            edgeOpacity: edgeVisuals.opacity
          } as CytoscapeEdgeData,
          classes: edgeVisuals.isSignificant ? 'significant' : 'non-significant'
        });

        heatmapData.push({
          project: project.name,
          analysis_group: result.analysis_group.name,
          conditionA: conditionA,
          conditionB: conditionB,
          log2fc: result.log2_fc,
          p_value: result.log10_p,
          comparison: comparisonId,
          protein: proteinId,
          searchTerm: result.search_term
        });
      });
    });

    return { elements, heatmapData, projectColorMap };
  }

  filterElements(
    elements: CytoscapeElement[],
    filter: CytoscapeFilter
  ): { filteredNodes: CytoscapeElement[]; filteredEdges: CytoscapeElement[] } {
    const filteredElements = elements.filter((element: CytoscapeElement) => {
      const data = element.data;
      if (isEdgeData(data)) {
        const absLog2FC = Math.abs(data.fc);
        const absFilter = Math.abs(filter.log2fc);
        if (filter.projectNames.length > 0 && !filter.projectNames.includes(data.project)) {
          return false;
        }
        if (filter.analysisGroupNames.length > 0 && !filter.analysisGroupNames.includes(data.analysis_group)) {
          return false;
        }
        return absLog2FC >= absFilter && data.p_value >= filter.pvalue;
      }
      return true;
    });

    const filteredEdges = filteredElements.filter((element: CytoscapeElement) => isEdgeData(element.data));

    const nodeList = new Set(
      filteredEdges
        .filter((element: CytoscapeElement) => isEdgeData(element.data))
        .flatMap((element: CytoscapeElement) => {
          const data = element.data as CytoscapeEdgeData;
          return [data.source, data.target];
        })
    );

    const filteredNodes = filteredElements.filter((element: CytoscapeElement) => {
      return nodeList.has(element.data.id);
    });

    return { filteredNodes, filteredEdges };
  }

  groupHeatmapDataBySearchTerm(heatmapData: HeatmapDataPoint[]): HeatmapDataPoint[][] {
    const cacheKey = this.generateCacheKey(heatmapData.map(d => d.searchTerm + d.protein));
    const cached = this.heatmapGroupCache.get(cacheKey);
    if (cached) {
      return cached;
    }

    const groupedData: Record<string, HeatmapDataPoint[]> = {};
    heatmapData.forEach(data => {
      if (!groupedData[data.searchTerm]) {
        groupedData[data.searchTerm] = [];
      }
      groupedData[data.searchTerm].push(data);
    });
    const result = Object.values(groupedData);
    this.heatmapGroupCache.set(cacheKey, result);
    return result;
  }

  generateRandomColor(): string {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }

  private calculateEdgeVisuals(log10P: number): { width: number; opacity: number; isSignificant: boolean } {
    const minWidth = 1;
    const maxWidth = 6;
    const significanceThreshold = 1.3;

    const clampedP = Math.min(Math.max(log10P, 0), 10);
    const normalizedP = clampedP / 10;
    const width = minWidth + (normalizedP * (maxWidth - minWidth));

    const isSignificant = log10P >= significanceThreshold;
    const opacity = isSignificant ? 1 : 0.5;

    return { width, opacity, isSignificant };
  }

  private calculateIntensities(result: SearchResult): { intensityA: number; intensityB: number } {
    const conditionAValues = result.searched_data.filter(
      data => data.Condition === result.condition_A && data.Value
    );
    const conditionBValues = result.searched_data.filter(
      data => data.Condition === result.condition_B && data.Value
    );

    let intensityA = 0;
    let intensityB = 0;

    if (conditionAValues.length > 0) {
      intensityA = conditionAValues.reduce((acc, curr) => acc + curr.Value, 0) / conditionAValues.length;
    }
    if (conditionBValues.length > 0) {
      intensityB = conditionBValues.reduce((acc, curr) => acc + curr.Value, 0) / conditionBValues.length;
    }

    return { intensityA, intensityB };
  }
}
