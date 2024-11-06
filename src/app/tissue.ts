export interface Tissue {
  id: number,
  identifier: string,
  accession: string,
  synonyms: string,
  cross_references: string,
}

export interface TissueQuery {
  count: number;
  next: string|null;
  previous: string|null;
  results: Tissue[];
}
