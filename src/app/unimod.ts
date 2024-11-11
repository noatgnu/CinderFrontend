export interface Unimod {
  accession: string;
  name: string;
  definition: string;
  additional_data: any[]
}

export interface UnimodQuery {
  count: number;
  next: string;
  previous: string;
  results: Unimod[];
}
