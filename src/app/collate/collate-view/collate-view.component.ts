import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy} from '@angular/core';
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
import {catchError, filter, finalize, Subject, takeUntil} from "rxjs";
import {BreadcrumbComponent} from "../../shared/breadcrumb/breadcrumb.component";
import {CollateSettingsService} from "../collate-settings.service";
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
    selector: 'app-collate-view',
    changeDetection: ChangeDetectionStrategy.OnPush,
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
    BreadcrumbComponent,
    MatProgressSpinner
  ],
    templateUrl: './collate-view.component.html',
    styleUrl: './collate-view.component.scss'
})
export class CollateViewComponent implements OnDestroy {
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
    this.cdr.markForCheck();
  }

  constructor(
    private cdr: ChangeDetectorRef,
    private title: Title,
    private ws: WebsocketService,
    private sb: MatSnackBar,
    private dialog: MatDialog,
    private collateService: CollateService,
    private web: WebService,
    public accounts: AccountsService,
    private router: Router,
    private settingsService: CollateSettingsService
  ) {
    const pastSearches = localStorage.getItem('cinderPastSearches');
    if (pastSearches) {
      this.pastSearches = JSON.parse(pastSearches);
    }
    this.ws.searchWSConnection?.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      if (data) {
        if (data.type === "export_status") {
          if (this.web.cinderInstanceID === data.instance_id) {
            if (this.waitingForDownload) {
              switch (data.status) {
                case "error":
                  this.waitingForDownload = false;
                  this.cdr.markForCheck();
                  break;
                case "started":
                  this.sb.open("Export started", "Dismiss", {duration: 2000});
                  break;
                case "in_progress":
                  break;
                case "complete":
                  this.waitingForDownload = false;
                  this.sb.open("Export complete", "Dismiss", {duration: 2000});
                  const link = `${this.web.baseURL}/api/search/download_temp_file/?token=${data.file}`;
                  window.open(link, "_blank");
                  this.cdr.markForCheck();
                  break;
              }
            }
          }
        }
      }
    });
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

        if (!this.collate.settings.projectAnalysisGroupVisibility) {
          this.collate.settings.projectAnalysisGroupVisibility = {};
        }
        for (const p of this.projects) {
          if (!this.collate.settings.projectAnalysisGroupVisibility[p.id]) {
            this.collate.settings.projectAnalysisGroupVisibility[p.id] = {};
          }
        }

        if (!this.collate.settings.renameSampleCondition) {
          this.collate.settings.renameSampleCondition = {};
        }
        for (const p of this.projects) {
          if (!this.collate.settings.renameSampleCondition[p.id]) {
            this.collate.settings.renameSampleCondition[p.id] = {};
            this.web.getProjectUniqueConditions(p.id).pipe(takeUntil(this.destroy$)).subscribe((value) => {
              if (this.collate) {
                for (const a of value) {
                  this.collate.settings.renameSampleCondition[p.id][a.Condition] = a.Condition;
                }
                this.cdr.markForCheck();
              }
            });
          }
        }
        if (this.sessionId) {
          this.getSearchFromID(this.sessionId);
        }
        this.cdr.markForCheck();
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
      this.searchTerms.sort((a, b) => a.localeCompare(b));
      this.selectedSearchTerm = this.searchTerms[0];
      this.filterDataBySearchTerm();
      this.cdr.markForCheck();
    });
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
    return filteredResults;
  }

  filterDataBySearchTerm() {
    this.selectedSearchTerm = this.searchTerms[this.selectedIndex];
    this.filteredResults = this.getFilteredSearchResults([this.selectedSearchTerm]);
    if (Object.keys(this.cytoscapePlotFilteredResults).length === 0 && this.filteredResults) {
      this.cytoscapePlotFilteredResults = { ...this.filteredResults };
    }
    this.cdr.markForCheck();
  }

  getSearchFromID(id: number) {
    this.web.getSearchSession(id).pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.searchSession = data;
      this.cdr.markForCheck();
    });
    this.web.getSearchResults(id, 99999).pipe(takeUntil(this.destroy$)).subscribe((data) => {
      if (!this.collate) {
        return;
      }
      const uniqueSearchTerms = Array.from(new Set(data.results.map(result => result.search_term)));
      const search = this.pastSearches.find(s => s.searchID === id);
      if (!search) {
        this.pastSearches.push({searchQuery: null, termFounds: uniqueSearchTerms, collate: this.collate.id, searchID: id});
        this.pastSearches = this.pastSearches.slice(-20);
        localStorage.setItem('cinderPastSearches', JSON.stringify(this.pastSearches));
      }
      this.distributeSearchResults(data.results);
    });
  }

  restoreSearches(searchQuery: SearchResultQuery | null, searchID: number) {
    this.web.getSearchSession(searchID).pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.searchSession = data;
      this.cdr.markForCheck();
    });
    if (searchQuery) {
      this.distributeSearchResults(searchQuery.results);
    } else {
      this.web.getSearchResults(searchID, 99999).pipe(takeUntil(this.destroy$)).subscribe((data) => {
        this.distributeSearchResults(data.results);
      });
    }
  }

  openHeatmapView(): void {
    if (this.collate && this.searchSession) {
      this.router.navigate([`/collate/heatmap/${this.collate.id}/${this.searchSession.id}`]);
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
    if (this.searchSession && this.web.searchSessionID) {
      this.web.exportSearchData(this.searchSession.id, searchTerm, 0.00000001, 0.00000001, this.web.searchSessionID)
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this.waitingForDownload = true;
          this.cdr.markForCheck();
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
    ref.afterClosed().pipe(
      takeUntil(this.destroy$),
      filter((result): result is { [projectID: number]: { [analysisGroupID: number]: boolean } } => !!result)
    ).subscribe((result) => {
      if (this.collate) {
        this.collate.settings.projectAnalysisGroupVisibility = result;
        this.filteredResults = this.getFilteredSearchResults([this.selectedSearchTerm]);
        this.cdr.markForCheck();
      }
    });
  }

  filterCytoscapePlot() {
    const ref = this.dialog.open(CollateCytoscapeTermResultFilterDialogComponent);
    ref.componentInstance.searchTerms = this.searchTerms;
    ref.componentInstance.selectedSearchTerms = this.selectedCytoscapePlotSearchTerm;
    ref.afterClosed().pipe(
      takeUntil(this.destroy$),
      filter((result): result is { searchTerms: string[] } => !!result)
    ).subscribe((result) => {
      if (result.searchTerms.length > 0) {
        const filterResults = this.getFilteredSearchResults(result.searchTerms);
        this.cytoscapePlotFilteredResults = { ...filterResults };
      } else {
        this.cytoscapePlotFilteredResults = {};
      }
      this.cdr.markForCheck();
      this.collateService.collateRedrawSubject.next(true);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
