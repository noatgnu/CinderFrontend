export interface LabGroup {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  managers: number;
}

export interface LabGroupQuery {
  count: number;
  next: string|null;
  previous: string|null;
  results: LabGroup[];
}
