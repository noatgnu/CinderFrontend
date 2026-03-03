export interface HeatmapDataPoint {
  project: string;
  analysis_group: string;
  conditionA: string;
  conditionB: string;
  log2fc: number;
  p_value: number;
  comparison: string;
  protein: string;
  searchTerm: string;
}

export interface CytoscapeNodeData {
  id: string;
  label: string;
  size: number;
  [key: string]: unknown;
}

export interface CytoscapeEdgeData {
  id: string;
  source: string;
  target: string;
  color: string;
  conditionA: string;
  conditionB: string;
  intensityA: number;
  intensityB: number;
  analysis_group: string;
  project: string;
  fc: number;
  p_value: number;
  protein: string;
  searchTerm: string;
  showBarChart?: boolean;
  barChartPos?: { x: number; y: number };
  [key: string]: unknown;
}

export interface CytoscapeElement {
  data: CytoscapeNodeData | CytoscapeEdgeData;
  classes?: string;
}

export interface CytoscapeFilter {
  log2fc: number;
  pvalue: number;
  projectNames: string[];
  analysisGroupNames: string[];
}

export interface StringDBInteraction {
  preferredName_A: string;
  preferredName_B: string;
  score: number;
}

export function isEdgeData(data: CytoscapeNodeData | CytoscapeEdgeData): data is CytoscapeEdgeData {
  return 'source' in data && 'target' in data;
}
