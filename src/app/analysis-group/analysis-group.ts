export interface AnalysisGroup {
  id: number;
  name: string;
  description: string;
  project: number;
}

export interface AnalysisGroupQuery {
  count: number;
  next: string;
  previous: string;
  results: AnalysisGroup[];
}
