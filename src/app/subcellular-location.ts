export interface SubcellularLocation {
  id: number;
  location_identifier: string;
  topology_identifier: string;
  orientation_identifier: string;
  accession: string;
  definition: string;
  synonyms: string;
  content: string;
  is_a: string;
  part_of: string;
  keyword: string;
  gene_ontology: string;
  reference: string;
  links: string;
}

export interface SubcellularLocationQuery {
  count: number;
  next: string|null;
  previous: string|null;
  results: SubcellularLocation[];
}
