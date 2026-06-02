import { HeatmapDataPoint } from '../cytoscape-plot/cytoscape-plot.types';

export { HeatmapDataPoint };

export interface HeatmapPersistentSettings {
  colorScaleFixed: boolean;
  colorScaleMax: number;
  minLabel: string;
  maxLabel: string;
  useAgNameForAxis: boolean;
}

export function defaultHeatmapPersistentSettings(): HeatmapPersistentSettings {
  return { colorScaleFixed: false, colorScaleMax: 3, minLabel: '', maxLabel: '', useAgNameForAxis: false };
}

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
