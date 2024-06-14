export interface ProjectFile {
  name: string;
  id: number;
  hash: string;
  file_type: string;
  file_category: string;
  load_file_content: boolean;
  created_at: Date;
  updated_at: Date;
  primary_id_col: string;
  gene_name_col: string;
  extra_data: any;
}

export interface ProjectFileQuery {
  count: number;
  next: string;
  previous: string;
  results: ProjectFile[];
}
