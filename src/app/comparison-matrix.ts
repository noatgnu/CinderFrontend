export interface ComparisonMatrix {
  id: number;
  name: string;
  analysis_group: number;
  matrix: {
    condition_A: string;
    condition_B: string;
    fold_change_col: string;
    p_value_col: string;
    comparison_label: string;
    comparison_col: string|null;
  }[];
  file: number;
}

export interface ComparisonMatrixQuery {
  count: number;
  next: string;
  previous: string;
  results: ComparisonMatrix[];
}
