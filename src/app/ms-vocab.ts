export interface MsVocab {
  accession: string,
  name: string,
  definition: string,
  term_type: string,
}

export interface MsVocabQuery {
  count: number;
  next: string;
  previous: string;
  results: MsVocab[];
}
