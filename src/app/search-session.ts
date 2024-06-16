export interface SearchSession {
  id: number
  search_term: string
  created_at: Date
  updated_at: Date
  analysis_groups: number[]
  user: string|null
  session_id: string|null
  failed: boolean
}

export interface SearchSessionQuery {
  count: number
  next: string|null
  previous: string|null
  results: SearchSession[]
}

export interface SearchResult {
  id: number
  search_term: string
  created_at: Date
  updated_at: Date
  session: number
  analysis_group: {id: number, name: string}
  file: {id: number, name: string, file_type: string, file_category: string}
  condition_A: string
  condition_B: string
  comparison_label: string
  log2_fc: number
  log10_p: number
  searched_data: {Sample: string, Condition: string, Value: number}[]
  primary_id: string|null
  gene_name: string|null
  uniprot_id: string|null
}

export interface SearchResultQuery {
  count: number
  next: string|null
  previous: string|null
  results: SearchResult[]
}
