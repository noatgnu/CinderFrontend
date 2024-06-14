export interface SearchSession {
  id: number
  search_term: string
  created_at: Date
  updated_at: Date
  analysis_groups: number[]
  user: string|null
  session_id: string|null
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
  search_results: {line: number, context: string[], term: string}[]
  search_count: number
  created_at: Date
  updated_at: Date
  session: number
  analysis_group: {id: number, name: string}
  file: {id: number, name: string, file_type: string, file_category: string}
}

export interface SearchResultQuery {
  count: number
  next: string|null
  previous: string|null
  results: SearchResult[]
}
