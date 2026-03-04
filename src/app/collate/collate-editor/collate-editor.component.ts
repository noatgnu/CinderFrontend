import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy} from '@angular/core';
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatDialog} from "@angular/material/dialog";
import {ProjectAddDialogComponent} from "../project-add-dialog/project-add-dialog.component";
import {CdkDrag, CdkDragHandle, CdkDropList} from "@angular/cdk/drag-drop";
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {Project} from "../../project/project";
import {Collate, CollateTag} from "../collate";
import {CollateService} from "../collate.service";
import {FormsModule} from "@angular/forms";
import {ProjectCardViewerComponent} from "../project-card-viewer/project-card-viewer.component";
import {CollateSearchComponent} from "../collate-search/collate-search.component";
import {WebService} from "../../web.service";
import {SearchResult} from "../../search-session";
import {AnalysisGroup} from "../../analysis-group/analysis-group";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {CollateProjectListComponent} from "../collate-project-list/collate-project-list.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {
  CollateProjectAnalysisGroupReorderDialogComponent
} from "../collate-project-analysis-group-reorder-dialog/collate-project-analysis-group-reorder-dialog.component";
import {
  CollateConditionColorEditorDialogComponent
} from "../collate-condition-color-editor-dialog/collate-condition-color-editor-dialog.component";
import {GraphService} from "../../graph.service";
import {CollateTagCreateDialogComponent} from "../collate-tag-create-dialog/collate-tag-create-dialog.component";
import {CollateTagsComponent} from "../collate-tags/collate-tags.component";
import {filter, forkJoin, Observable, Subject, switchMap, takeUntil} from "rxjs";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {AccountsService} from "../../accounts/accounts.service";
import {
  CollateRenameSampleConditionDialogComponent
} from "../collate-rename-sample-condition-dialog/collate-rename-sample-condition-dialog.component";
import {
  CollateProjectAnalysisGroupVisibilityDialogComponent
} from "../collate-project-analysis-group-visibility-dialog/collate-project-analysis-group-visibility-dialog.component";
import {CollatePlotSettingsComponent} from "../collate-plot-settings/collate-plot-settings.component";
import {CollateSettingsService} from "../collate-settings.service";
import {MatTooltip} from "@angular/material/tooltip";

@Component({
    selector: 'app-collate-editor',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatToolbar,
        MatIconButton,
        MatIcon,
        MatToolbarRow,
        CdkDropList,
        MatCard,
        MatCardHeader,
        MatCardContent,
        MatCardTitle,
        CdkDragHandle,
        CdkDrag,
        FormsModule,
        MatCardSubtitle,
        ProjectCardViewerComponent,
        CollateSearchComponent,
        MatTabGroup,
        MatTab,
        MatFormField,
        MatInput,
        CollateProjectListComponent,
        MatMenu,
        MatMenuItem,
        MatMenuTrigger,
        MatButton,
        CollateTagsComponent,
        MatLabel,
        MatCheckbox,
        MatProgressSpinner,
        MatTooltip
    ],
    templateUrl: './collate-editor.component.html',
    styleUrl: './collate-editor.component.scss'
})
export class CollateEditorComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  private _collate: Collate | null = null;
  canEdit: boolean = false;
  isLoading: boolean = false;
  isSaving: boolean = false;
  @Input() set collateId(value: number | null) {
    if (value) {
      this.isLoading = true;
      this.cdr.markForCheck();
      this.collateService.getCollate(value).pipe(takeUntil(this.destroy$)).subscribe((collate: Collate) => {
        this.isLoading = false;
        this._collate = collate;
        this.accounts.getCollatePermissions(collate.id).pipe(takeUntil(this.destroy$)).subscribe((permissions) => {
          this.canEdit = permissions.edit;
          this.cdr.markForCheck();
        });
        this.projects = collate.projects;
        if (!this._collate.settings) {
          this._collate.settings = {
            projectOrder: this.projects.map(project => project.id),
            analysisGroupOrderMap: {},
            projectConditionColorMap: {},
            renameSampleCondition: {},
            projectAnalysisGroupVisibility: {},
            plotSettings: {},
            showTags: false
          }
        }
        if (!this._collate.settings.plotSettings) {
          this._collate.settings.plotSettings = {};
        }
        if (collate.settings.projectOrder) {
          const notFound = this.projects.filter(project => !collate.settings.projectOrder.includes(project.id));
          this.projects = this.projects.filter(project => collate.settings.projectOrder.includes(project.id));
          this.projects = this.projects.concat(notFound);
        }
        const currentCollate = this._collate;
        if (currentCollate) {
          if ("showTags" in currentCollate.settings) {
            currentCollate.settings.showTags = false;
          }

          if (!currentCollate.settings.projectConditionColorMap) {
            currentCollate.settings.projectConditionColorMap = {};
          }
          this.graph.projectConditionColorMap = currentCollate.settings.projectConditionColorMap;
          for (const p of this.projects) {
            if (!currentCollate.settings.projectConditionColorMap[p.id]) {
              currentCollate.settings.projectConditionColorMap[p.id] = {};
            }
          }

          if (!currentCollate.settings.renameSampleCondition) {
            currentCollate.settings.renameSampleCondition = {};
          }
          for (const p of this.projects) {
            if (!currentCollate.settings.renameSampleCondition[p.id]) {
              currentCollate.settings.renameSampleCondition[p.id] = {};
              this.web.getProjectUniqueConditions(p.id).pipe(takeUntil(this.destroy$)).subscribe((value) => {
                for (const a of value) {
                  currentCollate.settings.renameSampleCondition[p.id][a.Condition] = a.Condition;
                }
                this.cdr.markForCheck();
              });
            }
          }
        }
        this.cdr.markForCheck();
      })
    }
  }

  projects: Project[] = [];
  selectedIndex: number = 0;

  get collate(): Collate | null {
    return this._collate;
  }

  set collate(value: Collate | null) {
    this._collate = value;
  }
  editTitle: boolean = false;
  editGreeting: boolean = false;
  searchResults: {[projectId: number]: SearchResult[]} = {};
  projectAnalysisGroups: {[projectId: number]: AnalysisGroup[]} = {};
  analysisGroupProjects: {[analysisGroupId: number]: Project} = {};
  searchTerms: string[] = [];
  private _selectedSearchTerm: string = '';
  get selectedSearchTerm(): string {
    return this._selectedSearchTerm;
  }
  set selectedSearchTerm(value: string) {
    this._selectedSearchTerm = value;
  }
  filteredResults: { [projectId: number]: SearchResult[] } = {};
  removedTags: CollateTag[] = [];

  constructor(
    private cdr: ChangeDetectorRef,
    private accounts: AccountsService,
    private graph: GraphService,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private collateService: CollateService,
    private web: WebService,
    private settingsService: CollateSettingsService
  ) {}

  openProjectAddDialog() {
    const dialogRef = this.dialog.open(ProjectAddDialogComponent);

    dialogRef.afterClosed().pipe(takeUntil(this.destroy$)).subscribe((result: Project[]) => {
      if (result) {
        this.projects = this.projects.concat(result);
        if (this.collate) {
          this.collate.projects = this.projects;
          this.updateProjectOrder();
        }
        this.cdr.markForCheck();
      }
    });
  }


  updateProjectOrder() {
    if (this._collate) {
      this._collate.settings.projectOrder = this.projects.map(project => project.id);
    }
  }

  updateCollate() {
    if (this._collate) {
      this.isSaving = true;
      this.cdr.markForCheck();
      this.collateService.updateCollate(this._collate.id, this._collate).pipe(takeUntil(this.destroy$)).subscribe(() => {
        if (this.removedTags.length > 0) {
          const observables: Observable<unknown>[] = this.removedTags.map(tag => this.collateService.removeTagFromCollate(this._collate?.id as number, tag.id));
          forkJoin(observables).pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.isSaving = false;
            this.showSnackBar('Collate saved successfully');
            this.removedTags = [];
            this.cdr.markForCheck();
          });
        } else {
          this.isSaving = false;
          this.showSnackBar('Collate saved successfully');
          this.cdr.markForCheck();
        }
      });
    }
  }

  toggleEditTitle() {
    this.editTitle = !this.editTitle;
  }

  toggleEditGreeting() {
    this.editGreeting = !this.editGreeting;
  }

  saveTitle() {
    this.toggleEditTitle();
    this.updateCollate();
  }

  saveGreeting() {
    this.toggleEditGreeting();
    this.updateCollate();
  }

  getSearchFromID(id: number) {
    this.web.getSearchSession(id).pipe(takeUntil(this.destroy$)).subscribe();
    this.web.getSearchResults(id, 99999).pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.distributeSearchResults(data.results);
    });
  }

  distributeSearchResults(results: SearchResult[]) {
    this.web.getAnalysisGroupsFromProjects(this.projects).pipe(takeUntil(this.destroy$)).subscribe((analysisGroups) => {
      this.projectAnalysisGroups = {};
      this.analysisGroupProjects = {};
      if (analysisGroups) {
        analysisGroups.forEach(analysisGroup => {
          const projectId = analysisGroup.project;
          if (!this.projectAnalysisGroups[projectId]) {
            this.projectAnalysisGroups[projectId] = [];
          }
          this.projectAnalysisGroups[projectId].push(analysisGroup);
          this.analysisGroupProjects[analysisGroup.id] = this.projects.find(project => project.id === projectId) as Project;
        });
      }
      this.searchResults = {};
      this.searchTerms = Array.from(new Set(results.map(result => result.search_term)));
      results.forEach(result => {
        const analysisGroupId = result.analysis_group.id;
        const project = this.analysisGroupProjects[analysisGroupId];
        if (project) {
          if (!this.searchResults[project.id]) {
            this.searchResults[project.id] = [];
          }
          this.searchResults[project.id].push(result);
        }
      });
      this.selectedSearchTerm = this.searchTerms[0];
      this.filterDataBySearchTerm();
      this.cdr.markForCheck();
    });
  }

  getFilteredSearchResults(): { [projectId: number]: SearchResult[] } {
    const filteredResults: { [projectId: number]: SearchResult[] } = {};
    Object.keys(this.searchResults).forEach(projectIdStr => {
      const projectId = parseInt(projectIdStr, 10);
      filteredResults[projectId] = this.searchResults[projectId].filter(result => result.search_term === this.selectedSearchTerm);
    });
    if (this.collate?.settings?.analysisGroupOrderMap) {
      Object.keys(this.collate.settings.analysisGroupOrderMap).forEach(projectId => {
        const id = parseInt(projectId);
        const analysisGroupOrder = this.collate?.settings.analysisGroupOrderMap[id];

        if (!filteredResults[id]) {
          return;
        }
        if (!analysisGroupOrder) {
          return;
        }

        const notInOrder = filteredResults[id].filter(result => !analysisGroupOrder.includes(result.analysis_group.id));
        filteredResults[id] = filteredResults[id].filter(result => analysisGroupOrder.includes(result.analysis_group.id));
        filteredResults[id] = filteredResults[id].sort((a, b) => {
          return analysisGroupOrder.indexOf(a.analysis_group.id) - analysisGroupOrder.indexOf(b.analysis_group.id);
        })
        filteredResults[id] = filteredResults[id].concat(notInOrder);
        if (this.collate?.settings?.projectAnalysisGroupVisibility) {
          const projectAnalysisGroupVisibility = this.collate?.settings.projectAnalysisGroupVisibility[id];
          filteredResults[id] = filteredResults[id].filter(result => {
            if (!projectAnalysisGroupVisibility) {
              return true;
            }
            if (!(result.analysis_group.id in projectAnalysisGroupVisibility)) {
              return true;
            }
            return projectAnalysisGroupVisibility[result.analysis_group.id];
          })
        }
      });
    }
    return filteredResults;
  }

  filterDataBySearchTerm() {
    this.selectedSearchTerm = this.searchTerms[this.selectedIndex];
    this.filteredResults = this.getFilteredSearchResults();
    this.cdr.markForCheck();
  }

  onProjectOrderChanged(projects: Project[]) {
    this.projects = projects;
    this.updateProjectOrder();
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
    });
  }

  deleteProject(project: Project) {
    this.projects = this.projects.filter(p => p.id !== project.id);
    this.updateProjectOrder();
  }

  goToCollateView() {
    if (this._collate) {
      this.router.navigate(['/collate/view', this._collate.id]);
    }
  }

  onSearchResultsChange(event: SearchResult[], projectId: number) {
    this.filteredResults[projectId] = event;
    // update order of analysis groups
    if (this.collate) {
      if (!this.collate.settings.analysisGroupOrderMap) {
        this.collate.settings.analysisGroupOrderMap = {};
      }
      this.collate.settings.analysisGroupOrderMap[projectId] = event.map(result => result.analysis_group.id);
      Object.keys(this.collate.settings.analysisGroupOrderMap).forEach(projectIdStr => {
        const id = parseInt(projectIdStr, 10);
        if (this.collate) {
          this.collate.settings.analysisGroupOrderMap[id] = Array.from(new Set(this.collate.settings.analysisGroupOrderMap[id]));
        }
      });
    }
  }

  openVisibilityDialog() {
    const ref = this.dialog.open(CollateProjectAnalysisGroupVisibilityDialogComponent);
    this.web.getAnalysisGroupsFromProjects(this.projects).pipe(takeUntil(this.destroy$)).subscribe((analysisGroups: AnalysisGroup[]) => {
      let projectAnalysisGroups = this.settingsService.groupAnalysisGroupsByProject(analysisGroups);
      if (this.collate?.settings?.analysisGroupOrderMap) {
        projectAnalysisGroups = this.settingsService.orderAnalysisGroups(projectAnalysisGroups, this.collate.settings.analysisGroupOrderMap);
      }
      ref.componentInstance.projectAnalysisGroupMap = projectAnalysisGroups;
      ref.componentInstance.projects = this.projects;
      const visibility = this.settingsService.initializeVisibilityMap(
        projectAnalysisGroups,
        this.collate?.settings?.projectAnalysisGroupVisibility
      );
      ref.componentInstance.projectAnalysisGroupVisibilityMap = { ...visibility };
    });
    ref.afterClosed().pipe(takeUntil(this.destroy$)).subscribe((result: { [projectID: number]: { [analysisGroupID: number]: boolean } }) => {
      if (this.collate && result) {
        this.collate.settings.projectAnalysisGroupVisibility = result;
        this.filteredResults = this.getFilteredSearchResults();
        this.cdr.markForCheck();
      }
    });
  }

  openReorderDialog() {
    const ref = this.dialog.open(CollateProjectAnalysisGroupReorderDialogComponent);
    this.web.getAnalysisGroupsFromProjects(this.projects).pipe(takeUntil(this.destroy$)).subscribe((analysisGroups: AnalysisGroup[]) => {
      let projectAnalysisGroups = this.settingsService.groupAnalysisGroupsByProject(analysisGroups);
      if (this.collate?.settings?.analysisGroupOrderMap) {
        projectAnalysisGroups = this.settingsService.orderAnalysisGroups(projectAnalysisGroups, this.collate.settings.analysisGroupOrderMap);
      }
      ref.componentInstance.projectAnalysisGroupMap = projectAnalysisGroups;
      ref.componentInstance.projects = this.projects;
    });
    ref.afterClosed().pipe(
      takeUntil(this.destroy$),
      filter((result): result is { projects: Project[], projectAnalysisGroupMap: { [projectId: number]: AnalysisGroup[] } } => !!result)
    ).subscribe((result) => {
      this.projects = result.projects;
      this.updateProjectOrder();
      this.projectAnalysisGroups = result.projectAnalysisGroupMap;
      const analysisGroupOrderMap: { [projectId: number]: number[] } = {};
      Object.keys(this.projectAnalysisGroups).forEach(projectIdStr => {
        const projectId = parseInt(projectIdStr, 10);
        analysisGroupOrderMap[projectId] = this.projectAnalysisGroups[projectId].map(ag => ag.id);
      });
      if (this.collate) {
        this.collate.settings.analysisGroupOrderMap = analysisGroupOrderMap;
        this.filteredResults = this.getFilteredSearchResults();
      }
      this.cdr.markForCheck();
    });
  }

  openConditionColorEditorDialog() {
    const ref = this.dialog.open(CollateConditionColorEditorDialogComponent);
    ref.componentInstance.projectConditionColorMap = this.collate?.settings?.projectConditionColorMap;
    ref.componentInstance.projects = this.projects;
    ref.afterClosed().pipe(
      takeUntil(this.destroy$),
      filter((result): result is { [projectID: number]: { [condition: string]: string } } => !!result)
    ).subscribe((result) => {
      if (this.collate) {
        this.collate.settings.projectConditionColorMap = result;
      }
      this.graph.projectConditionColorMap = { ...result };
      this.filteredResults = this.getFilteredSearchResults();
      this.graph.redrawTrigger.next(true);
      this.cdr.markForCheck();
    });
  }

  openCollateTagCreateDialog() {
    const ref = this.dialog.open(CollateTagCreateDialogComponent);
    ref.afterClosed().pipe(
      takeUntil(this.destroy$),
      filter((result): result is { name: string, existing: boolean, id: number } => !!result && !!result.name)
    ).subscribe((result) => {
      if (result.existing && result.id && result.id !== -1) {
        this.collateService.addTagToCollate(this.collate?.id as number, result.id).pipe(
          takeUntil(this.destroy$)
        ).subscribe((tag) => {
          if (this.collate) {
            this.collate.tags.push(tag);
            this.cdr.markForCheck();
          }
        });
      } else {
        this.collateService.createCollateTag(result.name).pipe(
          takeUntil(this.destroy$),
          switchMap(tag => this.collateService.addTagToCollate(this.collate?.id as number, tag.id))
        ).subscribe((tag) => {
          if (this.collate) {
            this.collate.tags.push(tag);
            this.cdr.markForCheck();
          }
        });
      }
    });
  }

  handleCollageTagsChange(tags: CollateTag[]) {
    if (this.collate) {
      //check if any tags were removed
      this.removedTags = this.collate.tags.filter(tag => !tags.includes(tag));
      this.collate.tags = tags;
    }
  }

  openRenameConditionDialog() {
    if (this.collate) {
      const ref = this.dialog.open(CollateRenameSampleConditionDialogComponent);
      ref.componentInstance.projects = this.collate.projects;
      ref.componentInstance.renameSampleCondition = this.collate.settings.renameSampleCondition;
      ref.afterClosed().pipe(
        takeUntil(this.destroy$),
        filter((result): result is { [projectId: number]: { [key: string]: string } } => !!result)
      ).subscribe((result) => {
        if (this.collate) {
          this.collate.settings.renameSampleCondition = { ...result };
          this.cdr.markForCheck();
        }
      });
    }
  }

  openPlotSettings() {
    if (this.collate) {
      const ref = this.dialog.open(CollatePlotSettingsComponent);
      ref.componentInstance.settings = this.collate.settings.plotSettings;
      ref.afterClosed().pipe(takeUntil(this.destroy$)).subscribe((result: any) => {
        if (this.collate && result) {
          this.collate.settings.plotSettings = result;
          this.graph.plotSettings = result;
          this.graph.redrawTrigger.next(true);
        }
      });
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
