import { TestBed } from '@angular/core/testing';
import { CollateSettingsService } from './collate-settings.service';
import { Project } from '../project/project';
import { Collate } from './collate';

describe('CollateSettingsService', () => {
  let service: CollateSettingsService;

  const mockProjects: Project[] = [
    { id: 1, name: 'Project 1' } as Project,
    { id: 2, name: 'Project 2' } as Project,
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollateSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('createDefaultSettings', () => {
    it('should create default settings with project IDs', () => {
      const settings = service.createDefaultSettings(mockProjects);

      expect(settings.projectOrder).toEqual([1, 2]);
      expect(settings.showTags).toBe(false);
      expect(settings.plotSettings).toEqual({});
    });

    it('should create empty maps for each project', () => {
      const settings = service.createDefaultSettings(mockProjects);

      expect(settings.renameSampleCondition[1]).toEqual({});
      expect(settings.renameSampleCondition[2]).toEqual({});
      expect(settings.projectAnalysisGroupVisibility[1]).toEqual({});
      expect(settings.projectAnalysisGroupVisibility[2]).toEqual({});
    });
  });

  describe('orderProjectsBySettings', () => {
    it('should order projects by settings', () => {
      const ordered = service.orderProjectsBySettings(mockProjects, [2, 1]);

      expect(ordered[0].id).toBe(2);
      expect(ordered[1].id).toBe(1);
    });

    it('should return original order if no projectOrder provided', () => {
      const ordered = service.orderProjectsBySettings(mockProjects, []);

      expect(ordered).toEqual(mockProjects);
    });

    it('should append projects not in order to the end', () => {
      const projects = [...mockProjects, { id: 3, name: 'Project 3' } as Project];
      const ordered = service.orderProjectsBySettings(projects, [2, 1]);

      expect(ordered.length).toBe(3);
      expect(ordered[2].id).toBe(3);
    });
  });

  describe('initializeSettings', () => {
    it('should return default settings if collate has no settings', () => {
      const collate = {
        id: 1,
        projects: mockProjects,
        settings: null,
      } as unknown as Collate;

      const settings = service.initializeSettings(collate);

      expect(settings.projectOrder).toEqual([1, 2]);
    });

    it('should preserve existing settings', () => {
      const collate = {
        id: 1,
        projects: mockProjects,
        settings: {
          projectOrder: [2, 1],
          analysisGroupOrderMap: {},
          renameSampleCondition: {},
          projectAnalysisGroupVisibility: {},
          projectConditionColorMap: {},
          plotSettings: { test: true },
          showTags: true,
        },
      } as Collate;

      const settings = service.initializeSettings(collate);

      expect(settings.projectOrder).toEqual([2, 1]);
      expect(settings.showTags).toBe(true);
      expect(settings.plotSettings.test).toBe(true);
    });
  });
});
