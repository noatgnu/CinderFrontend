export interface SourceFile {
  name: string,
  description: string,
  file: string,
  created_at: Date,
  updated_at: Date,
  user: number|null,
  analysis_group: number|null,
}

export interface SourceFileQuery {
  count: number;
  next: string|null;
  previous: string|null;
  results: SourceFile[];
}
