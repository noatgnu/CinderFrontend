export interface SampleAnnotation {
  id: number;
  name: string;
  analysis_group: number;
  annotations: {Sample: string, Condition: string, Value: number}[];
  file: number;
}

export interface SampleAnnotationQuery {
  count: number;
  next: string;
  previous: string;
  results: SampleAnnotation[];
}
