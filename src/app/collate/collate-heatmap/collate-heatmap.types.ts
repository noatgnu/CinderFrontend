import { HeatmapDataPoint } from '../cytoscape-plot/cytoscape-plot.types';

export { HeatmapDataPoint };

export interface HeatmapPersistentSettings {
  colorScaleFixed: boolean;
  colorScaleMin: number;
  colorScaleMax: number;
  minLabel: string;
  maxLabel: string;
  useAgNameForAxis: boolean;
  swapAxes: boolean;
  cellSize: number;
  labelFontSize: number;
  summaryMode: 'none' | 'count' | 'percentage';
  downColor: string;
  zeroColor: string;
  upColor: string;
}

export function defaultHeatmapPersistentSettings(): HeatmapPersistentSettings {
  return {
    colorScaleFixed: false,
    colorScaleMin: -3,
    colorScaleMax: 3,
    minLabel: '',
    maxLabel: '',
    useAgNameForAxis: false,
    swapAxes: false,
    cellSize: 36,
    labelFontSize: 9,
    summaryMode: 'none',
    downColor: '#053061',
    zeroColor: '#ffffff',
    upColor: '#67001f',
  };
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
