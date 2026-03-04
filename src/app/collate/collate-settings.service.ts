import { Injectable } from '@angular/core';
import { Collate } from './collate';
import { Project } from '../project/project';
import { SearchResult } from '../search-session';
import { AnalysisGroup } from '../analysis-group/analysis-group';

export interface CollateSettings {
  projectOrder: number[];
  analysisGroupOrderMap: { [projectID: number]: number[] };
  renameSampleCondition: { [projectID: number]: { [key: string]: string } };
  projectAnalysisGroupVisibility: { [projectID: number]: { [analysisGroupID: number]: boolean } };
  projectConditionColorMap: { [projectID: number]: { [condition: string]: string } };
  plotSettings: any;
  showTags: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class CollateSettingsService {
  createDefaultSettings(projects: Project[]): CollateSettings {
    return {
      projectOrder: projects.map(p => p.id),
      analysisGroupOrderMap: {},
      renameSampleCondition: this.createEmptyProjectMap(projects),
      projectAnalysisGroupVisibility: this.createEmptyProjectMap(projects),
      projectConditionColorMap: this.createEmptyProjectMap(projects),
      plotSettings: {},
      showTags: false,
    };
  }

  initializeSettings(collate: Collate): CollateSettings {
    if (!collate.settings) {
      return this.createDefaultSettings(collate.projects);
    }

    const settings = { ...collate.settings };

    if (!settings.plotSettings) {
      settings.plotSettings = {};
    }

    if (!settings.projectAnalysisGroupVisibility) {
      settings.projectAnalysisGroupVisibility = this.createEmptyProjectMap(collate.projects);
    }

    if (!settings.renameSampleCondition) {
      settings.renameSampleCondition = this.createEmptyProjectMap(collate.projects);
    }

    if (!settings.projectConditionColorMap) {
      settings.projectConditionColorMap = this.createEmptyProjectMap(collate.projects);
    }

    return settings;
  }

  orderProjectsBySettings(projects: Project[], projectOrder: number[]): Project[] {
    if (!projectOrder || projectOrder.length === 0) {
      return projects;
    }
    const orderedProjects = projectOrder
      .map(id => projects.find(p => p.id === id))
      .filter((p): p is Project => p !== undefined);
    const notInOrder = projects.filter(p => !projectOrder.includes(p.id));
    return [...orderedProjects, ...notInOrder];
  }

  filterSearchResultsByTerms(
    searchResults: { [projectId: number]: SearchResult[] },
    searchTerms: string[],
    settings: CollateSettings
  ): { [projectId: number]: SearchResult[] } {
    const filteredResults: { [projectId: number]: SearchResult[] } = {};

    Object.keys(searchResults).forEach(projectIdStr => {
      const projectId = parseInt(projectIdStr, 10);
      let results = searchResults[projectId].filter(result =>
        searchTerms.includes(result.search_term)
      );

      if (settings.analysisGroupOrderMap?.[projectId]) {
        results = this.orderResultsByAnalysisGroup(results, settings.analysisGroupOrderMap[projectId]);
      }

      if (settings.projectAnalysisGroupVisibility?.[projectId]) {
        results = this.filterResultsByVisibility(results, settings.projectAnalysisGroupVisibility[projectId]);
      }

      filteredResults[projectId] = results;
    });

    return filteredResults;
  }

  orderAnalysisGroups(
    projectAnalysisGroups: { [projectId: number]: AnalysisGroup[] },
    analysisGroupOrderMap: { [projectId: number]: number[] }
  ): { [projectId: number]: AnalysisGroup[] } {
    const orderedGroups: { [projectId: number]: AnalysisGroup[] } = {};

    Object.keys(projectAnalysisGroups).forEach(projectIdStr => {
      const projectId = parseInt(projectIdStr, 10);
      const groups = projectAnalysisGroups[projectId];
      const order = analysisGroupOrderMap?.[projectId];

      if (!order) {
        orderedGroups[projectId] = groups;
        return;
      }

      const inOrder = groups
        .filter(g => order.includes(g.id))
        .sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
      const notInOrder = groups.filter(g => !order.includes(g.id));
      orderedGroups[projectId] = [...inOrder, ...notInOrder];
    });

    return orderedGroups;
  }

  groupAnalysisGroupsByProject(analysisGroups: AnalysisGroup[]): { [projectId: number]: AnalysisGroup[] } {
    const grouped: { [projectId: number]: AnalysisGroup[] } = {};
    analysisGroups.forEach(ag => {
      if (!grouped[ag.project]) {
        grouped[ag.project] = [];
      }
      grouped[ag.project].push(ag);
    });
    return grouped;
  }

  initializeVisibilityMap(
    projectAnalysisGroups: { [projectId: number]: AnalysisGroup[] },
    existingVisibility: { [projectId: number]: { [analysisGroupID: number]: boolean } } | undefined
  ): { [projectId: number]: { [analysisGroupID: number]: boolean } } {
    const visibility: { [projectId: number]: { [analysisGroupID: number]: boolean } } = existingVisibility ? { ...existingVisibility } : {};
    for (const projectId in projectAnalysisGroups) {
      if (!visibility[projectId]) {
        visibility[projectId] = {};
      }
      for (const ag of projectAnalysisGroups[projectId]) {
        if (!(ag.id in visibility[projectId])) {
          visibility[projectId][ag.id] = true;
        }
      }
    }
    return visibility;
  }

  private createEmptyProjectMap<T>(projects: Project[]): { [projectId: number]: T } {
    const map: { [projectId: number]: T } = {};
    projects.forEach(p => {
      map[p.id] = {} as T;
    });
    return map;
  }

  private orderResultsByAnalysisGroup(
    results: SearchResult[],
    analysisGroupOrder: number[]
  ): SearchResult[] {
    const inOrder = results
      .filter(r => analysisGroupOrder.includes(r.analysis_group.id))
      .sort((a, b) => analysisGroupOrder.indexOf(a.analysis_group.id) - analysisGroupOrder.indexOf(b.analysis_group.id));
    const notInOrder = results.filter(r => !analysisGroupOrder.includes(r.analysis_group.id));
    return [...inOrder, ...notInOrder];
  }

  private filterResultsByVisibility(
    results: SearchResult[],
    visibility: { [analysisGroupID: number]: boolean }
  ): SearchResult[] {
    return results.filter(result => {
      const analysisGroupId = result.analysis_group.id;
      if (!(analysisGroupId in visibility)) {
        return true;
      }
      return visibility[analysisGroupId];
    });
  }
}
