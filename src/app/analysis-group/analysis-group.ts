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
