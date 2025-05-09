import {ChangeDetectorRef, Component, Input} from '@angular/core';
import {SearchResult, SearchResultQuery, SearchSession} from "../../search-session";
import {Project} from "../../project/project";
import {Collate} from "../collate";
import {CollateService} from "../collate.service";
import {CollateHeaderComponent} from "../collate-header/collate-header.component";
import {CollateSearchComponent} from "../collate-search/collate-search.component";
import {MatTab, MatTabGroup, MatTabLabel} from "@angular/material/tabs";
import {CollateProjectListComponent} from "../collate-project-list/collate-project-list.component";
import {WebService} from "../../web.service";
import {AnalysisGroup} from "../../analysis-group/analysis-group";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {AccountsService} from "../../accounts/accounts.service";
import {Router} from "@angular/router";
import {CollateTagsComponent} from "../collate-tags/collate-tags.component";
import {MatDialog} from "@angular/material/dialog";
import {CollateQrCodeDialogComponent} from "../collate-qr-code-dialog/collate-qr-code-dialog.component";
import {NgClass, NgOptimizedImage} from "@angular/common";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {WebsocketService} from "../../websocket.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatTooltip} from "@angular/material/tooltip";
import {Title} from "@angular/platform-browser";
import {
  CollateProjectAnalysisGroupVisibilityDialogComponent
} from "../collate-project-analysis-group-visibility-dialog/collate-project-analysis-group-visibility-dialog.component";
import {CytoscapePlotComponent} from "../cytoscape-plot/cytoscape-plot.component";
import {
  CollateCytoscapeTermResultFilterDialogComponent
} from "../collate-cytoscape-term-result-filter-dialog/collate-cytoscape-term-result-filter-dialog.component";
import {LoginDialogComponent} from "../../accounts/login-dialog/login-dialog.component";
import {catchError, finalize, Subject, takeUntil} from "rxjs";

@Component({
    selector: 'app-collate-view',
  imports: [
    CollateHeaderComponent,
    CollateSearchComponent,
    MatTab,
    MatTabGroup,
    CollateProjectListComponent,
    MatIcon,
    MatIconButton,
    MatToolbarRow,
    MatToolbar,
    CollateTagsComponent,
    NgOptimizedImage,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatTabLabel,
    MatTooltip,
    CytoscapePlotComponent,
    NgClass,
    MatButton,
  ],
    templateUrl: './collate-view.component.html',
    styleUrl: './collate-view.component.scss'
})
export class CollateViewComponent {
  private destroy$ = new Subject<void>();
  selectedCytoscapePlotSearchTerm: string[] = [];
  showCytoscapePlot: boolean = false;
  _sessionId: number | null = null;
  isLoading: boolean = false;
  errorMessage: string | null = null;

  @Input() set sessionId(value: number | null) {
    if (value && this.collate) {
      this.getSearchFromID(value);
    }
    this._sessionId = value;
  }

  get sessionId(): number | null {
    return this._sessionId;
  }

  @Input() set collateId(value: number | null) {
    if (value) {
      this.loadCollate(value);
    }
  }
  collate: Collate | null = null;
  projects: Project[] = [];
  filteredResults: { [projectId: number]: SearchResult[] } = {};
  searchTerms: string[] = [];
  selectedIndex: number = 0;
  searchResults: {[projectId: number]: SearchResult[]} = {};
  projectAnalysisGroups: {[projectId: number]: AnalysisGroup[]} = {};
  analysisGroupProjects: {[analysisGroupId: number]: Project} = {};
  private _selectedSearchTerm: string = '';
  get selectedSearchTerm(): string {
    return this._selectedSearchTerm;
  }
  set selectedSearchTerm(value: string) {
    this._selectedSearchTerm = value;
  }
  searchSession: SearchSession|undefined;

  pastSearches: {searchQuery: SearchResultQuery|null, termFounds: string[], collate: number, searchID:number}[] = [];
  waitingForDownload = false
  cytoscapePlotFilteredResults: { [projectId: number]: SearchResult[] } = {};
  toggleCytoscapePlot() {
    this.showCytoscapePlot = !this.showCytoscapePlot;
    console.log(this.cytoscapePlotFilteredResults)
  }

  constructor(private cdr: ChangeDetectorRef, private title: Title, private ws: WebsocketService, private sb: MatSnackBar, private dialog: MatDialog, private collateService: CollateService, private web: WebService, public accounts: AccountsService, private router: Router) {
    const pastSearches = localStorage.getItem('cinderPastSearches');
    if (pastSearches) {
      this.pastSearches = JSON.parse(pastSearches);
    }
    this.ws.searchWSConnection?.subscribe((data) => {
      if (data) {
        if (data.type === "export_status") {
          if (this.web.cinderInstanceID === data.instance_id) {
            if (this.waitingForDownload) {
              switch (data.status) {
                case "error":
                  this.waitingForDownload = false
                  break
                case "started":
                  this.sb.open("Export started", "Dismiss", {duration: 2000})
                  break
                case "in_progress":
                  break
                case "complete":
                  this.waitingForDownload = false
                  this.sb.open("Export complete", "Dismiss", {duration: 2000})
                  const link = `${this.web.baseURL}/api/search/download_temp_file/?token=${data.file}`
                  window.open(link, "_blank")
                  break
              }
            }
          }
        }
      }
    })
  }

  private loadCollate(collateId: number): void {
    this.isLoading = true;
    this.errorMessage = null;

    this.collateService.getCollate(collateId)
      .pipe(
        catchError(error => {
          if (error.status === 401 || error.status === 404) {
            // Open login dialog when unauthorized or resource not found
            const dialogRef = this.dialog.open(LoginDialogComponent);
            dialogRef.afterClosed().subscribe(success => {
              if (success) {
                // User logged in successfully, retry loading the collate
                this.loadCollate(collateId);
              } else {
                this.errorMessage = 'Authentication required to view this resource';
                this.sb.open('Authentication required to view this resource', 'Dismiss', {
                  duration: 5000
                });
              }
            });
          } else {
            this.errorMessage = 'Failed to load collate data';
            this.sb.open('Error loading collate', 'Dismiss', {
              duration: 3000
            });
          }
          throw error;
        }),
        finalize(() => this.isLoading = false),
        takeUntil(this.destroy$)
      )
      .subscribe((collate: Collate) => {
        this.collate = collate;
        this.title.setTitle(`${collate.title} - C|nder`);
        this.projects = collate.projects;
        if (!collate.settings) {
          collate.settings = {
            projectOrder: [],
            analysisGroupOrderMap: {},
            projectConditionColorMap: {},
            renameSampleCondition: {},
            projectAnalysisGroupVisibility: {},
            plotSettings: {},
            showTags: false,
          };
        }
        if (!collate.settings.plotSettings) {
          collate.settings.plotSettings = {}
        }

        if (collate.settings.projectOrder) {
          this.projects = collate.settings.projectOrder.map(id => collate.projects.find(project => project.id === id) as Project);
        }

        if (this.collate?.settings.projectAnalysisGroupVisibility) {

        } else {
          // @ts-ignore
          this.collate.settings.projectAnalysisGroupVisibility = {};
          for (const p of this.projects) {
            // @ts-ignore
            this.collate.settings.projectAnalysisGroupVisibility[p.id] = {}
          }
        }

        if (this.collate?.settings.renameSampleCondition) {
          if (this.sessionId) {
            this.getSearchFromID(this.sessionId);
          }
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
          if (this.sessionId) {
            this.getSearchFromID(this.sessionId);
          }
        }
        console.log(this.projects)
      });
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
    console.log(this.searchResults);
    this.searchTerms.sort((a, b) => {
      return a.localeCompare(b);
    })
    this.selectedSearchTerm = this.searchTerms[0];
    this.filterDataBySearchTerm();

  }

  getFilteredSearchResults(searchTerms: string[]): { [projectId: number]: SearchResult[] } {
    const filteredResults: { [projectId: number]: SearchResult[] } = {};

    Object.keys(this.searchResults).forEach(projectId => {
      const numericProjectId = parseInt(projectId);
      // Filter by search terms first
      filteredResults[numericProjectId] = this.searchResults[numericProjectId].filter(result =>
        searchTerms.includes(result.search_term)
      );

      // Handle ordering if order map exists
      if (this.collate?.settings?.analysisGroupOrderMap?.[numericProjectId]) {
        const analysisGroupOrder = this.collate.settings.analysisGroupOrderMap[numericProjectId];

        // Find items not in order
        const notInOrder = filteredResults[numericProjectId].filter(
          result => !analysisGroupOrder.includes(result.analysis_group.id)
        );

        // Filter and sort items in order
        filteredResults[numericProjectId] = filteredResults[numericProjectId]
          .filter(result => analysisGroupOrder.includes(result.analysis_group.id))
          .sort((a, b) => analysisGroupOrder.indexOf(a.analysis_group.id) - analysisGroupOrder.indexOf(b.analysis_group.id));

        // Actually append the not-in-order items
        filteredResults[numericProjectId] = filteredResults[numericProjectId].concat(notInOrder);
      }

      // Apply visibility filtering regardless of order map
      if (this.collate?.settings?.projectAnalysisGroupVisibility?.[numericProjectId]) {
        const projectVisibility = this.collate.settings.projectAnalysisGroupVisibility[numericProjectId];

        filteredResults[numericProjectId] = filteredResults[numericProjectId].filter(result => {
          const analysisGroupId = result.analysis_group.id;
          // If no visibility setting, default to showing
          if (!(analysisGroupId in projectVisibility)) {
            return true;
          }
          // Otherwise use the visibility setting
          return projectVisibility[analysisGroupId];
        });
      }
    });
    console.log(filteredResults);
    return filteredResults;
  }

  filterDataBySearchTerm() {
    this.selectedSearchTerm = this.searchTerms[this.selectedIndex];
    this.filteredResults = this.getFilteredSearchResults([this.selectedSearchTerm]);
    if (Object.keys(this.cytoscapePlotFilteredResults).length === 0 && this.filteredResults) {
      console.log(this.filteredResults);
      this.cytoscapePlotFilteredResults = Object.assign({}, this.filteredResults) ;
    }
  }

  getSearchFromID(id: number) {
    this.web.getSearchSession(id).subscribe((data) => {
      this.searchSession = data;
    })
    this.web.getSearchResults(id,99999).subscribe((data) => {
      if (!this.collate) {
        return
      }
      console.log(data.results)
      const uniqueSearchTerms = Array.from(new Set(data.results.map(result => result.search_term)));
      //check if search id is in past searches
      const search = this.pastSearches.find(search => search.searchID === id);
      if (!search) {
        this.pastSearches.push({searchQuery: null, termFounds: uniqueSearchTerms, collate: this.collate.id, searchID: id});
        this.pastSearches = this.pastSearches.slice(-20);
        localStorage.setItem('cinderPastSearches', JSON.stringify(this.pastSearches));
      }
      this.distributeSearchResults(data.results).then();
    })
  }

  restoreSearches(searchQuery: SearchResultQuery|null, searchID: number) {
    this.web.getSearchSession(searchID).subscribe((data) => {
      this.searchSession = data;
    })
    if (searchQuery) {
      this.distributeSearchResults(searchQuery.results).then();
    } else {
      this.web.getSearchResults(searchID,99999).subscribe((data) => {
        this.distributeSearchResults(data.results).then();
      })
    }

  }

  navigateToEdit() {
    if (this.collate) {
      this.router.navigate([`/collate/edit/${this.collate.id}`]);
    }
  }

  openQRCodeDialog() {
    const viewURL = window.location.href;
    const dialogRef = this.dialog.open(CollateQrCodeDialogComponent);
    dialogRef.componentInstance.url = viewURL;
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  exportData(searchTerm: string) {
    // @ts-ignore
    this.web.exportSearchData(this.searchSession.id, searchTerm, 0.00000001, 0.00000001, this.web.searchSessionID).subscribe((data) => {
      this.waitingForDownload = true
    })
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
        this.filteredResults = this.getFilteredSearchResults([this.selectedSearchTerm]);
      }
    })
  }

  filterCytoscapePlot() {
    const ref = this.dialog.open(CollateCytoscapeTermResultFilterDialogComponent)
    ref.componentInstance.searchTerms = this.searchTerms;
    ref.componentInstance.selectedSearchTerms = this.selectedCytoscapePlotSearchTerm;
    ref.afterClosed().subscribe((result: {searchTerms: string[]}|undefined|null) => {
      if (result) {
        console.log(result);
        if ( result.searchTerms.length > 0) {
          const filterResults = this.getFilteredSearchResults(result.searchTerms);
          this.cytoscapePlotFilteredResults = { ...filterResults };
        } else {
          this.cytoscapePlotFilteredResults = {};
        }
        console.log(this.cytoscapePlotFilteredResults);
        this.cdr.detectChanges()
        this.collateService.collateRedrawSubject.next(true);

      }
    })
  }
}
