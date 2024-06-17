export interface Species {
  id: number;
  taxon: number;
  official_name: string;
  common_name: string;
  synonym: string;
  code: string;
}

export interface SpeciesQuery {
  count: number;
  next: string;
  previous: string;
  results: Species[];
}
