import cytoscape from 'cytoscape';

declare module 'cytoscape' {
  interface Core {
    layers(): CytoscapeLayers;
    pdf(options?: PdfExportOptions): Promise<Blob>;
  }

  interface CytoscapeLayers {
    nodeLayer: CytoscapeLayer;
    renderPerEdge(
      layer: CytoscapeLayer,
      callback: (
        ctx: CanvasRenderingContext2D,
        edge: EdgeSingular,
        path: Path2D,
        start: { x: number; y: number },
        end: { x: number; y: number }
      ) => void
    ): void;
    png(options?: LayersPngOptions): Promise<Blob>;
  }

  interface CytoscapeLayer {
    insertAfter(type: string): CytoscapeLayer;
  }

  interface LayersPngOptions {
    output?: 'blob-promise' | 'blob' | 'base64';
    ignoreUnsupportedLayerOrder?: boolean;
    full?: boolean;
    scale?: number;
  }

  interface PdfExportOptions {
    paperSize?: string;
    orientation?: 'portrait' | 'landscape';
    full?: boolean;
    ignoreUnsupportedLayerOrder?: boolean;
  }

  interface FcoseLayoutOptions extends BaseLayoutOptions {
    name: 'fcose';
    animate?: boolean;
    animationDuration?: number;
    padding?: number;
    nodeSeparation?: number;
    idealEdgeLength?: number | ((edge: EdgeSingular) => number);
    nodeRepulsion?: number | ((node: NodeSingular) => number);
    edgeElasticity?: number | ((edge: EdgeSingular) => number);
    gravity?: number;
    numIter?: number;
    tile?: boolean;
    tilingPaddingVertical?: number;
    tilingPaddingHorizontal?: number;
    gravityRangeCompound?: number;
    gravityCompound?: number;
    gravityRange?: number;
    initialEnergyOnIncremental?: number;
  }
}

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
  edgeWidth: number;
  edgeOpacity: number;
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

export interface CytoscapeLayers {
  nodeLayer: CytoscapeLayer;
  renderPerEdge(
    layer: CytoscapeLayer,
    callback: (
      ctx: CanvasRenderingContext2D,
      edge: cytoscape.EdgeSingular,
      path: Path2D,
      start: { x: number; y: number },
      end: { x: number; y: number }
    ) => void
  ): void;
  png(options?: LayersPngOptions): Promise<Blob>;
}

export interface CytoscapeLayer {
  insertAfter(type: string): CytoscapeLayer;
}

export interface LayersPngOptions {
  output?: 'blob-promise' | 'blob' | 'base64';
  ignoreUnsupportedLayerOrder?: boolean;
  full?: boolean;
  scale?: number;
}

export interface FcoseLayoutOptions extends cytoscape.BaseLayoutOptions {
  name: 'fcose';
  animate?: boolean;
  animationDuration?: number;
  padding?: number;
  nodeSeparation?: number;
  idealEdgeLength?: number | ((edge: cytoscape.EdgeSingular) => number);
  nodeRepulsion?: number | ((node: cytoscape.NodeSingular) => number);
  edgeElasticity?: number | ((edge: cytoscape.EdgeSingular) => number);
  gravity?: number;
  numIter?: number;
  tile?: boolean;
  tilingPaddingVertical?: number;
  tilingPaddingHorizontal?: number;
  gravityRangeCompound?: number;
  gravityCompound?: number;
  gravityRange?: number;
  initialEnergyOnIncremental?: number;
}
