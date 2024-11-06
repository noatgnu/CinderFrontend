export interface HumanDisease {
  id: number;
  identifier: string;
  acronym: string;
  accession: string;
  synonyms: string;
  cross_references: string;
  definition: string;
  keywords: string;
}

export interface HumanDiseaseQuery {
  count: number;
  next: string|null;
  previous: string|null;
  results: HumanDisease[];
}
