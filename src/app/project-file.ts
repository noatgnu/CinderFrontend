export interface ProjectFile {
  name: string;
  id: number;
  hash: string;
  file_type: string;
  file_category: string;
  load_file_content: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface ProjectFileQuery {
  count: number;
  next: string;
  previous: string;
  results: ProjectFile[];
}
