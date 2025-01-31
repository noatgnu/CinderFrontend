import {Component, Input} from '@angular/core';
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatDialog} from "@angular/material/dialog";
import {ProjectAddDialogComponent} from "../project-add-dialog/project-add-dialog.component";
import {CdkDrag, CdkDragDrop, CdkDragHandle, CdkDropList, moveItemInArray} from "@angular/cdk/drag-drop";
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
import {forkJoin, Observable} from "rxjs";
import {MatCheckbox} from "@angular/material/checkbox";
import {AccountsService} from "../../accounts/accounts.service";
import {
  CollateRenameSampleConditionDialogComponent
} from "../collate-rename-sample-condition-dialog/collate-rename-sample-condition-dialog.component";
import {
  CollateProjectAnalysisGroupVisibilityDialogComponent
} from "../collate-project-analysis-group-visibility-dialog/collate-project-analysis-group-visibility-dialog.component";
import {CollatePlotSettingsComponent} from "../collate-plot-settings/collate-plot-settings.component";

@Component({
    selector: 'app-collate-editor',
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
        MatCheckbox
    ],
    templateUrl: './collate-editor.component.html',
    styleUrl: './collate-editor.component.scss'
})
export class CollateEditorComponent {
  private _collate: Collate | null = null;
  canEdit: boolean = false;
  @Input() set collateId(value: number | null) {
    if (value) {
      this.collateService.getCollate(value).subscribe((collate: Collate) => {
        this._collate = collate;
        this.accounts.getCollatePermissions(collate.id).subscribe((permissions) => {
          this.canEdit = permissions.edit;
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
        if (this.collate) {
          if ("showTags" in this.collate.settings) {
            this.collate.settings.showTags = false;
          }
        }

        if (this.collate?.settings.projectConditionColorMap) {
          this.graph.projectConditionColorMap = this.collate.settings.projectConditionColorMap;
        } else {
          // @ts-ignore
          this.collate.settings.projectConditionColorMap = {};
          for (const p of this.projects) {
            // @ts-ignore
            this.collate.settings.projectConditionColorMap[p.id] = {};
          }
        }
        if (this.collate?.settings.renameSampleCondition) {

        } else {
          // @ts-ignore
          this.collate.settings.renameSampleCondition = {};
          for (const p of this.projects) {
            // @ts-ignore
            this.collate.settings.renameSampleCondition[p.id] = {}
            this.web.getProjectUniqueConditions(p.id).subscribe((value) => {
              for (const a of value) {
                // @ts-ignore
                this.collate.settings.renameSampleCondition[p.id][a.Condition] = a.Condition
              }
              // @ts-ignore
              console.log(this.collate.settings.renameSampleCondition)
            })
          }
        }
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

  constructor(private accounts: AccountsService, private graph: GraphService, private router: Router, private snackBar: MatSnackBar, private dialog: MatDialog, private collateService: CollateService, private web: WebService) {}

  openProjectAddDialog() {
    const dialogRef = this.dialog.open(ProjectAddDialogComponent);

    dialogRef.afterClosed().subscribe((result: Project[]) => {
      if (result) {
        this.projects = this.projects.concat(result);
        if (this.collate) {
          this.collate.projects = this.projects;
          this.updateProjectOrder();
        }
      }
    });
  }


  updateProjectOrder() {

    if (this._collate) {
      this._collate.settings.projectOrder = this.projects.map(project => project.id);
    }
    console.log(this.collate)
  }

  updateCollate() {
    if (this._collate) {
      this.collateService.updateCollate(this._collate.id, this._collate).subscribe(() => {
        if (this.removedTags.length > 0) {
          const obserables: Observable<any>[] = this.removedTags.map(tag => this.collateService.removeTagFromCollate(this._collate?.id as number, tag.id));
          forkJoin(obserables).subscribe(() => {
            this.showSnackBar('Collate saved successfully');
            this.removedTags = [];
          })
        } else {
          this.showSnackBar('Collate saved successfully');
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
    this.web.getSearchSession(id).subscribe((data) => {
      console.log(data)
    })
    this.web.getSearchResults(id,99999).subscribe((data) => {
      console.log(data.results)
      this.distributeSearchResults(data.results).then();
    })
  }

  async associateAnalysisGroupsWithProjects() {
    const analysisGroups = await this.web.getAnalysisGroupsFromProjects(this.projects).toPromise();
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
  }

  async distributeSearchResults(results: SearchResult[]) {
    await this.associateAnalysisGroupsWithProjects();
    this.searchResults = {};
    this.searchTerms = Array.from(new Set(results.map(result => result.search_term)));
    results.forEach(result => {
      const analysisGroup = result.analysis_group.id;
      const project = this.analysisGroupProjects[analysisGroup];
      if (project) {
        if (!this.searchResults[project.id]) {
          this.searchResults[project.id] = [];
        }
        this.searchResults[project.id].push(result);
      }
    });
    this.selectedSearchTerm = this.searchTerms[0];
    this.filterDataBySearchTerm();
  }

  getFilteredSearchResults(): { [projectId: number]: SearchResult[] } {
    const filteredResults: { [projectId: number]: SearchResult[] } = {};
    Object.keys(this.searchResults).forEach(projectId => {
      // @ts-ignore
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
      // update order map to only include unique analysis groups
      Object.keys(this.collate.settings.analysisGroupOrderMap).forEach(projectId => {
        // @ts-ignore
        this.collate.settings.analysisGroupOrderMap[projectId] = Array.from(new Set(this.collate.settings.analysisGroupOrderMap[projectId]));
      });
    }
  }

  openVisibilityDialog() {
    const ref = this.dialog.open(CollateProjectAnalysisGroupVisibilityDialogComponent)
    this.web.getAnalysisGroupsFromProjects(this.projects).subscribe((analysisGroups: AnalysisGroup[]) => {
      const projectAnalysisGroups: {[projectId: number]: AnalysisGroup[]} = {};
      analysisGroups.forEach(analysisGroup => {
        if (!projectAnalysisGroups[analysisGroup.project]) {
          projectAnalysisGroups[analysisGroup.project] = [];
        }
        projectAnalysisGroups[analysisGroup.project].push(analysisGroup);
      });
      // reorder analysisGroup in each project by id found in settings if analysisGroup can't be found in settings, it will be placed at the end
      if (this.collate?.settings?.analysisGroupOrderMap) {
        Object.keys(this.collate.settings.analysisGroupOrderMap).forEach(projectId => {
          const id = parseInt(projectId);
          const analysisGroupOrder = this.collate?.settings.analysisGroupOrderMap[id];
          if (!analysisGroupOrder) {
            return;
          }
          if (!projectAnalysisGroups[id]) {
            return;
          }
          // take out analysis groups that are not in the order map to be placed at the end
          const notInOrder = projectAnalysisGroups[id].filter(analysisGroup => !analysisGroupOrder.includes(analysisGroup.id));
          projectAnalysisGroups[id] = projectAnalysisGroups[id].filter(analysisGroup => analysisGroupOrder.includes(analysisGroup.id));

          projectAnalysisGroups[id] = projectAnalysisGroups[id].sort((a, b) => {
            return analysisGroupOrder.indexOf(a.id) - analysisGroupOrder.indexOf(b.id);
          });
          projectAnalysisGroups[id] = projectAnalysisGroups[id].concat(notInOrder);
        });
      }

      ref.componentInstance.projectAnalysisGroupMap = projectAnalysisGroups;

      ref.componentInstance.projects = this.projects;

      let projectAnalysisGroupVisibility: {[projectId: number]: {[analysisGroupID: number]: boolean}} = {};
      if (this.collate?.settings?.projectAnalysisGroupVisibility) {
        projectAnalysisGroupVisibility = this.collate.settings.projectAnalysisGroupVisibility;
      }
      for (const projectId in projectAnalysisGroups) {
        if (!projectAnalysisGroupVisibility[projectId]) {
          projectAnalysisGroupVisibility[projectId] = {};
        }
        for (const analysisGroup of projectAnalysisGroups[projectId]) {
          if (!(analysisGroup.id in projectAnalysisGroupVisibility[projectId])) {
            projectAnalysisGroupVisibility[projectId][analysisGroup.id] = true;
          }
        }
      }
      ref.componentInstance.projectAnalysisGroupVisibilityMap = Object.assign({}, projectAnalysisGroupVisibility);
    })
    ref.afterClosed().subscribe((result: { [projectID: number]: { [analysisGroupID: number]: boolean } }) => {
      if (this.collate && result) {
        this.collate.settings.projectAnalysisGroupVisibility = result;
        this.filteredResults = this.getFilteredSearchResults();
      }
    })
  }

  openReorderDialog() {
    const ref = this.dialog.open(CollateProjectAnalysisGroupReorderDialogComponent);
    this.web.getAnalysisGroupsFromProjects(this.projects).subscribe((analysisGroups: AnalysisGroup[]) => {
      const projectAnalysisGroups: {[projectId: number]: AnalysisGroup[]} = {};
      analysisGroups.forEach(analysisGroup => {
        if (!projectAnalysisGroups[analysisGroup.project]) {
          projectAnalysisGroups[analysisGroup.project] = [];
        }
        projectAnalysisGroups[analysisGroup.project].push(analysisGroup);
      });
      // reorder analysisGroup in each project by id found in settings if analysisGroup can't be found in settings, it will be placed at the end
      if (this.collate?.settings?.analysisGroupOrderMap) {
        Object.keys(this.collate.settings.analysisGroupOrderMap).forEach(projectId => {
          const id = parseInt(projectId);
          const analysisGroupOrder = this.collate?.settings.analysisGroupOrderMap[id];
          if (!analysisGroupOrder) {
            return;
          }
          if (!projectAnalysisGroups[id]) {
            return;
          }
          // take out analysis groups that are not in the order map to be placed at the end
          const notInOrder = projectAnalysisGroups[id].filter(analysisGroup => !analysisGroupOrder.includes(analysisGroup.id));
          projectAnalysisGroups[id] = projectAnalysisGroups[id].filter(analysisGroup => analysisGroupOrder.includes(analysisGroup.id));

          projectAnalysisGroups[id] = projectAnalysisGroups[id].sort((a, b) => {
            return analysisGroupOrder.indexOf(a.id) - analysisGroupOrder.indexOf(b.id);
          });
          projectAnalysisGroups[id] = projectAnalysisGroups[id].concat(notInOrder);
        });
      }

      ref.componentInstance.projectAnalysisGroupMap = projectAnalysisGroups;

      ref.componentInstance.projects = this.projects;
    })
    ref.afterClosed().subscribe((result: {projects: Project[], projectAnalysisGroupMap: {[projectId: number]: AnalysisGroup[]}}) => {
      this.projects = result.projects;
      this.updateProjectOrder()
      this.projectAnalysisGroups = result.projectAnalysisGroupMap;
      // update order of analysis groups
      const analysisGroupOrderMap: {[projectId: number]: number[]} = {};
      Object.keys(this.projectAnalysisGroups).forEach(projectId => {
        // @ts-ignore
        analysisGroupOrderMap[projectId] = this.projectAnalysisGroups[projectId].map(analysisGroup => analysisGroup.id);
      });
      if (this.collate) {
        this.collate.settings.analysisGroupOrderMap = analysisGroupOrderMap;
        this.filteredResults = this.getFilteredSearchResults();
      }

    })
  }

  openConditionColorEditorDialog() {
    const ref = this.dialog.open(CollateConditionColorEditorDialogComponent);
    ref.componentInstance.projectConditionColorMap = this.collate?.settings?.projectConditionColorMap;
    ref.componentInstance.projects = this.projects;
    ref.afterClosed().subscribe((result: { [projectID: number]: { [condition: string]: string } }) => {
      if (this.collate) {
        this.collate.settings.projectConditionColorMap = result;
      }
      this.graph.projectConditionColorMap = Object.assign({}, result);
      this.filteredResults = this.getFilteredSearchResults();
      this.graph.redrawTrigger.next(true);
    })

  }

  openCollateTagCreateDialog() {
    const ref = this.dialog.open(CollateTagCreateDialogComponent);
    ref.afterClosed().subscribe((result: {name: string, existing: boolean, id: number}) => {
      if (result) {
        if (result.name) {
          if (result.existing && result.id && result.id !== -1) {
            this.collateService.addTagToCollate(this.collate?.id as number, result.id).subscribe((tag) => {
              if (this.collate) {
                this.collate.tags.push(tag);
              }
            })
          } else {
            this.collateService.createCollateTag(result.name).subscribe((tag) => {
              this.collateService.addTagToCollate(this.collate?.id as number, tag.id).subscribe((tag) => {
                if (this.collate) {
                  this.collate.tags.push(tag);
                }
              })
            })
          }

        }
      }
    })
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
      const ref = this.dialog.open(CollateRenameSampleConditionDialogComponent)
      ref.componentInstance.projects = this.collate.projects
      ref.componentInstance.renameSampleCondition = this.collate.settings.renameSampleCondition
      ref.afterClosed().subscribe((result: any)=> {
        if (this.collate) {
          this.collate.settings.renameSampleCondition = Object.assign({}, result)
          console.log(this.collate.settings.renameSampleCondition)
        }
      })
    }
  }

  openPlotSettings() {
    if (this.collate) {
      const ref = this.dialog.open(CollatePlotSettingsComponent);
      ref.componentInstance.settings = this.collate.settings.plotSettings;
      ref.afterClosed().subscribe((result: any) => {
        if (this.collate && result) {
          this.collate.settings.plotSettings = result;
          this.graph.plotSettings = result;
          this.graph.redrawTrigger.next(true);
        }
      });
    }
  }
}
