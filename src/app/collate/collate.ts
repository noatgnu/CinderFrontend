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
    };
    projectConditionColorMap: { [projectID: number]: { [condition: string]: string } };
    showTags: boolean;
    [key: string]: any;
  };
  tags: CollateTag[]
}

export interface CollateQuery {
  results: Collate[]
  count: number
  next: string|null
  previous: string|null
}

export interface CollateTag {
  name: string;
  created_at: Date;
  updated_at: Date;
  id: number;
}

export interface CollateTagQuery {
  results: CollateTag[]
  count: number
  next: string|null
  previous: string|null
}
