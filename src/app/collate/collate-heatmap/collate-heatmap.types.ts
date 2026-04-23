import { HeatmapDataPoint } from '../cytoscape-plot/cytoscape-plot.types';

export { HeatmapDataPoint };

export interface HeatmapViewState {
  log2fcCutoff: number;
  pValueCutoff: number;
  maskSubThreshold: boolean;
  proteinFilter: string;
  visibilityMap: { [projectId: number]: { [analysisGroupId: number]: boolean } };
  flippedAnalysisGroupIds: Set<number>;
}

export function defaultHeatmapViewState(): HeatmapViewState {
  return {
    log2fcCutoff: 0,
    pValueCutoff: 0,
    maskSubThreshold: false,
    proteinFilter: '',
    visibilityMap: {},
    flippedAnalysisGroupIds: new Set(),
  };
}
