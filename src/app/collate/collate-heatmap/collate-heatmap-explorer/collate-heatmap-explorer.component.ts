import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { catchError, finalize, Subject, takeUntil } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { MatIconButton, MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatTab, MatTabGroup, MatTabLabel } from '@angular/material/tabs';
import { NgOptimizedImage } from '@angular/common';
import { CollateService } from '../../collate.service';
import { CollateSettingsService } from '../../collate-settings.service';
import { WebService } from '../../../web.service';
import { Collate } from '../../collate';
import { Project } from '../../../project/project';
import { AnalysisGroup } from '../../../analysis-group/analysis-group';
import { SearchResult, SearchSession } from '../../../search-session';
import { BreadcrumbComponent } from '../../../shared/breadcrumb/breadcrumb.component';
import { HeatmapSidebarComponent } from '../heatmap-sidebar/heatmap-sidebar.component';
import { HeatmapPlotComponent } from '../../cytoscape-plot/heatmap-plot/heatmap-plot.component';
import { defaultHeatmapViewState, HeatmapDataPoint, HeatmapViewState } from '../collate-heatmap.types';

interface SubsetTab {
  id: string;
  name: string;
  proteinIds: string[];
}

@Component({
  selector: 'app-collate-heatmap-explorer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    BreadcrumbComponent,
    HeatmapSidebarComponent,
    HeatmapPlotComponent,
    MatToolbar,
    MatToolbarRow,
    MatIconButton,
    MatButton,
    MatIcon,
    MatTooltip,
    MatProgressSpinner,
    MatTabGroup,
    MatTab,
    MatTabLabel,
    NgOptimizedImage,
  ],
  templateUrl: './collate-heatmap-explorer.component.html',
  styleUrl: './collate-heatmap-explorer.component.scss',
})
export class CollateHeatmapExplorerComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  private subsetCounter = 0;

  collate: Collate | null = null;
  projects: Project[] = [];
  projectAnalysisGroups: { [projectId: number]: AnalysisGroup[] } = {};
  analysisGroupProjects: { [analysisGroupId: number]: Project } = {};

  searchSession: SearchSession | undefined;
  rawResults: SearchResult[] = [];

  isLoading = false;
  errorMessage: string | null = null;

  viewState: HeatmapViewState = defaultHeatmapViewState();
  allHeatmapData: HeatmapDataPoint[] = [];

  selectedProteinIds: Set<string> = new Set();
  subsetTabs: SubsetTab[] = [];
  activeTabIndex = 0;

  constructor(
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private sb: MatSnackBar,
    private collateService: CollateService,
    private web: WebService,
    private settingsService: CollateSettingsService,
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe(params => {
      const collateId = parseInt(params['collateId'], 10);
      const sessionId = params['sessionId'] ? parseInt(params['sessionId'], 10) : null;
      if (collateId) {
        this.loadCollate(collateId, sessionId);
      }
    });
  }

  private loadCollate(collateId: number, sessionId: number | null): void {
    this.isLoading = true;
    this.errorMessage = null;
    this.collateService.getCollate(collateId).pipe(
      catchError(err => {
        this.errorMessage = 'Failed to load collate';
        this.sb.open('Error loading collate', 'Dismiss', { duration: 3000 });
        throw err;
      }),
      finalize(() => {
        this.isLoading = false;
        this.cdr.markForCheck();
      }),
      takeUntil(this.destroy$),
    ).subscribe(collate => {
      this.collate = collate;
      this.title.setTitle(`${collate.title} – Heatmap – C|nder`);
      this.projects = this.settingsService.orderProjectsBySettings(
        collate.projects,
        collate.settings?.projectOrder,
      );
      if (sessionId) {
        this.loadSearchResults(sessionId);
      }
      this.cdr.markForCheck();
    });
  }

  private loadSearchResults(sessionId: number): void {
    this.web.getSearchSession(sessionId).pipe(takeUntil(this.destroy$)).subscribe(session => {
      this.searchSession = session;
      this.cdr.markForCheck();
    });
    this.web.getSearchResults(sessionId, 99999).pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.rawResults = data.results;
      this.loadAnalysisGroups();
    });
  }

  private loadAnalysisGroups(): void {
    this.web.getAnalysisGroupsFromProjects(this.projects).pipe(takeUntil(this.destroy$)).subscribe(ags => {
      let grouped = this.settingsService.groupAnalysisGroupsByProject(ags);
      if (this.collate?.settings?.analysisGroupOrderMap) {
        grouped = this.settingsService.orderAnalysisGroups(grouped, this.collate.settings.analysisGroupOrderMap);
      }
      this.projectAnalysisGroups = grouped;

      this.analysisGroupProjects = {};
      ags.forEach(ag => {
        const project = this.projects.find(p => p.id === ag.project);
        if (project) {
          this.analysisGroupProjects[ag.id] = project;
        }
      });

      this.viewState = {
        ...this.viewState,
        visibilityMap: this.settingsService.initializeVisibilityMap(
          this.projectAnalysisGroups,
          this.collate?.settings?.projectAnalysisGroupVisibility,
        ),
      };

      this.rebuildHeatmapData();
      this.cdr.markForCheck();
    });
  }

  rebuildHeatmapData(): void {
    this.allHeatmapData = this.transformResults(this.rawResults);
    this.cdr.markForCheck();
  }

  private transformResults(results: SearchResult[]): HeatmapDataPoint[] {
    return results
      .filter(r => this.passesFilter(r))
      .map(r => {
        const project = this.analysisGroupProjects[r.analysis_group.id];
        const flipped = this.viewState.flippedAnalysisGroupIds.has(r.analysis_group.id);
        return {
          project: project?.name ?? 'Unknown',
          analysis_group: r.analysis_group.name,
          conditionA: r.condition_A,
          conditionB: r.condition_B,
          log2fc: flipped ? -r.log2_fc : r.log2_fc,
          p_value: r.log10_p,
          comparison: r.comparison_label ?? `${r.condition_A} vs ${r.condition_B}`,
          protein: r.gene_name ?? r.primary_id ?? r.uniprot_id ?? String(r.id),
          searchTerm: r.search_term,
        };
      });
  }

  private passesFilter(r: SearchResult): boolean {
    const project = this.analysisGroupProjects[r.analysis_group.id];
    if (project) {
      const vis = this.viewState.visibilityMap[project.id]?.[r.analysis_group.id];
      if (vis === false) return false;
    }
    if (this.viewState.proteinFilter) {
      const f = this.viewState.proteinFilter.toLowerCase();
      const matches =
        r.gene_name?.toLowerCase().includes(f) ||
        r.primary_id?.toLowerCase().includes(f) ||
        r.uniprot_id?.toLowerCase().includes(f);
      if (!matches) return false;
    }
    if (this.viewState.maskSubThreshold) {
      if (this.viewState.log2fcCutoff > 0 && Math.abs(r.log2_fc) < this.viewState.log2fcCutoff) return false;
      if (this.viewState.pValueCutoff > 0 && r.log10_p < this.viewState.pValueCutoff) return false;
    }
    return true;
  }

  onStateChange(state: HeatmapViewState): void {
    this.viewState = state;
    this.rebuildHeatmapData();
  }

  onTabChange(index: number): void {
    this.activeTabIndex = index;
    this.cdr.markForCheck();
  }

  getSubsetData(proteinIds: string[]): HeatmapDataPoint[] {
    const proteinSet = new Set(proteinIds);
    return this.allHeatmapData.filter(d => proteinSet.has(d.protein));
  }

  onProteinClicked(protein: string): void {
    const next = new Set(this.selectedProteinIds);
    if (next.has(protein)) {
      next.delete(protein);
    } else {
      next.add(protein);
    }
    this.selectedProteinIds = next;
    this.cdr.markForCheck();
  }

  clearSelection(): void {
    this.selectedProteinIds = new Set();
    this.cdr.markForCheck();
  }

  createSubsetFromSelection(): void {
    const proteinIds = Array.from(this.selectedProteinIds);
    if (proteinIds.length === 0) return;

    this.subsetCounter++;
    const id = `subset_${this.subsetCounter}`;
    const name = `Subset ${this.subsetCounter} (${proteinIds.length})`;
    this.subsetTabs = [...this.subsetTabs, { id, name, proteinIds }];
    this.activeTabIndex = this.subsetTabs.length;
    this.selectedProteinIds = new Set();
    this.cdr.markForCheck();
  }

  removeSubsetTab(tabId: string, event: Event): void {
    event.stopPropagation();
    this.subsetTabs = this.subsetTabs.filter(t => t.id !== tabId);
    if (this.activeTabIndex > this.subsetTabs.length) {
      this.activeTabIndex = this.subsetTabs.length;
    }
    this.cdr.markForCheck();
  }

  navigateToStandardView(): void {
    if (!this.collate) return;
    if (this.searchSession) {
      this.router.navigate([`/collate/view/${this.collate.id}/${this.searchSession.id}`]);
    } else {
      this.router.navigate([`/collate/view/${this.collate.id}`]);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
