export interface MetadataColumn {
  name: string,
  type: string,
  column_position: number,
  value: string,
  analysis_group: number|null,
  source_file: number|null,
  id: number,
  created_at: Date,
  updated_at: Date,
}

export interface MetadataColumnQuery {
  count: number;
  next: string|null;
  previous: string|null;
  results: MetadataColumn[];
}
