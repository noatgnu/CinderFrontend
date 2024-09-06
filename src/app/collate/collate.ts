import {Project} from "../project/project";

export interface Collate {
  title: string
  greeting: string
  created_at: Date
  updated_at: Date
  id: number
  projects: Project[]
  settings: {
    projectOrder: number[];
    analysisGroupOrderMap: {
      [projectID: number]: number[];
    }
    [key: string]: any;
  };
}

export interface CollateQuery {
  results: Collate[]
  count: number
  next: string|null
  previous: string|null
}
