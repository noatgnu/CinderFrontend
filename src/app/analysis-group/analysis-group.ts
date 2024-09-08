export interface AnalysisGroup {
  id: number;
  name: string;
  description: string;
  project: number;
  analysis_group_type: string;
  created_at: Date;
  curtain_link: string;
}

export interface AnalysisGroupQuery {
  count: number;
  next: string;
  previous: string;
  results: AnalysisGroup[];
}

export interface CurtainData {
  id: number;
  data: {"Primary ID": string, "Gene Names": string|null, "Entry": string, "Fold Change": number, "P-value": number , "Comparison": string}[];
  host: string;
  link_id: string;
  created_at: Date;
  analysis_group: number;
  updated_at: Date;
  annotations: {
    arrowhead: number,
    font: {
      size: number,
    },
    showarrow: boolean,
    text: string,
    x: number,
    xref: string,
    y: number,
    yref: string,
  }[];
  settings: any;
  selections: string[];
  selection_map: {[key: string]: {[key: string]: boolean}};
}

export interface AnalysisGroupCondition {
  AnalysisGroup: AnalysisGroup;
  Condition: string;
}
