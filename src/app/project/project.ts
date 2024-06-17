export interface Project {
  id: number;
  name: string;
  description: string;
  hash: string;
  metadata: string;
  global_id: string;
  temporary: boolean;
  user: number;
  encrypted: boolean;
  species: number;
}

export interface ProjectQuery {
  count: number;
  next: string;
  previous: string;
  results: Project[];
}
