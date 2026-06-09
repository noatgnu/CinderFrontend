import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {AccountsService} from "../accounts/accounts.service";
import {WebService} from "../web.service";
import {MatDialog} from "@angular/material/dialog";
import {CreateProjectDialogComponent} from "../project/create-project-dialog/create-project-dialog.component";
import {
  CreateAnalysisGroupDialogComponent
} from "../analysis-group/create-analysis-group-dialog/create-analysis-group-dialog.component";
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {Project} from "../project/project";
import {ProjectSearchComponent} from "./project-search/project-search.component";
import {MatFormField, MatHint, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption, MatSelect} from "@angular/material/select";
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import {MatSnackBar} from "@angular/material/snack-bar";
import {WebsocketService} from "../websocket.service";
import {AnalysisSearchComponent} from "./analysis-search/analysis-search.component";
import {AnalysisGroup} from "../analysis-group/analysis-group";
import {Species} from "../species";
import {BehaviorSubject, debounceTime, Subject, takeUntil, filter, switchMap, tap, forkJoin} from "rxjs";
import {MatListOption, MatSelectionList} from "@angular/material/list";
import {Router, RouterLink} from "@angular/router";
import {CollateSearchMainComponent} from "../collate/collate-search-main/collate-search-main.component";
import {CreateCollateDialogComponent} from "../collate/create-collate-dialog/create-collate-dialog.component";
import {CollateService} from "../collate/collate.service";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {MatTooltip} from "@angular/material/tooltip";
import {CollateSearchListDialogComponent} from "../collate/collate-search-list-dialog/collate-search-list-dialog.component";

@Component({
    selector: 'app-banner',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatCard,
        MatCardSubtitle,
        MatCardTitle,
        MatCardHeader,
        MatCardContent,
        MatIcon,
        MatCardActions,
        MatButton,
        ProjectSearchComponent,
        ReactiveFormsModule,
        MatFormField,
        MatInput,
        MatSelect,
        MatLabel,
        MatOption,
        MatAccordion,
        MatExpansionPanel,
        MatExpansionPanelTitle,
        MatExpansionPanelDescription,
        MatExpansionPanelHeader,
        AnalysisSearchComponent,
        AsyncPipe,
        MatSelectionList,
        MatListOption,
        CollateSearchMainComponent,
        MatProgressSpinner,
        RouterLink,
        MatIconButton,
        MatHint,
        MatSuffix,
        MatTooltip,
        CollateSearchListDialogComponent,
    ],
    templateUrl: './banner.component.html',
    styleUrl: './banner.component.scss'
})
export class BannerComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  projectCount = 0;
  analysisGroupCount = 0;
  isLoadingProjectCount = true;
  isLoadingAnalysisGroupCount = true;

  form = this.fb.group({
    search: new FormControl<string>("", Validators.required),
    searchMode: new FormControl<"full" | "pi" | "gene" | "uniprot">("gene", Validators.required),
    foldChange: new FormControl<number>(0.6, Validators.required),
    pValue: new FormControl<number>(1.31, Validators.required),
    projects: new FormControl<Project[]>([]),
    species_name: new FormControl<string>(""),
  });

  speciesQueryBehaviorSubject = new BehaviorSubject<Species[]>([]);
  selectedSpecies: Species | undefined = undefined;

  constructor(
    private collateService: CollateService,
    private router: Router,
    public accounts: AccountsService,
    private web: WebService,
    private dialog: MatDialog,
    private fb: FormBuilder,
    private sb: MatSnackBar,
    private ws: WebsocketService,
    private cdr: ChangeDetectorRef
  ) {
    this.web.getProjectCount().pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.projectCount = data.count;
      this.isLoadingProjectCount = false;
      this.cdr.markForCheck();
    });
    this.web.getAnalysisGroupCount().pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.analysisGroupCount = data.count;
      this.isLoadingAnalysisGroupCount = false;
      this.cdr.markForCheck();
    });
    this.form.controls.species_name.valueChanges.pipe(
      debounceTime(300),
      takeUntil(this.destroy$),
      filter((value): value is string => !!value),
      switchMap((value) => this.web.getSpecies(undefined, 10, 0, value))
    ).subscribe((data) => {
      this.speciesQueryBehaviorSubject.next(data.results);
    });
    this.ws.searchWSConnection?.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      if (data) {
        if (data["type"] === "search_status") {
          switch (data["status"]) {
            case "complete":
              if (this.router.url.includes("collate")) {
                return;
              }
              this.router.navigate([`/search-session/${data["id"]}`]);
              break;
          }
        }
      }
    });
    this.web.updateFromLabGroupSelection.pipe(
      takeUntil(this.destroy$),
      filter((value) => !!value),
      tap(() => {
        this.isLoadingProjectCount = true;
        this.isLoadingAnalysisGroupCount = true;
        this.cdr.markForCheck();
      }),
      switchMap(() => forkJoin({
        projectCount: this.web.getProjectCount(),
        analysisGroupCount: this.web.getAnalysisGroupCount()
      }))
    ).subscribe((data) => {
      this.projectCount = data.projectCount.count;
      this.analysisGroupCount = data.analysisGroupCount.count;
      this.isLoadingProjectCount = false;
      this.isLoadingAnalysisGroupCount = false;
      this.cdr.markForCheck();
    });
  }

  openProjectCreateDialog() {
    const ref = this.dialog.open(CreateProjectDialogComponent);
    ref.afterClosed().pipe(
      takeUntil(this.destroy$),
      filter((data) => !!data),
      switchMap((data) => this.web.createProject(data.name, data.description)),
      tap((projectData) => {
        window.open(`/#/project/${projectData.id}`, "_blank");
      }),
      switchMap(() => this.web.getProjectCount())
    ).subscribe((countData) => {
      this.projectCount = countData.count;
      this.cdr.markForCheck();
    });
  }

  openAnalysisGroupCreateDialog() {
    const ref = this.dialog.open(CreateAnalysisGroupDialogComponent);
    ref.componentInstance.enableProjectSelection = true;
    ref.afterClosed().pipe(
      takeUntil(this.destroy$),
      filter((data) => !!data),
      tap((data) => {
        window.open(`/#/analysis-group/${data.id}`, "_blank");
      }),
      switchMap(() => this.web.getAnalysisGroupCount())
    ).subscribe((countData) => {
      this.analysisGroupCount = countData.count;
      this.cdr.markForCheck();
    });
  }

  handleProjectSelection(e: Project[]) {
    if (e.length === 0) {
      return;
    }
    this.router.navigate([`/project/${e[0].id}`]);
  }

  handleMultipleProjectSelection(e: Project[]) {
    this.form.controls.projects.setValue(e);
  }

  searchDatabase() {
    if (this.form.invalid) {
      return;
    }
    const analysisGroupIDs: number[] = [];
    const projects = this.form.value.projects;

    if (projects && projects.length > 0) {
      this.web.getAnalysisGroupsFromProjects(projects).pipe(takeUntil(this.destroy$)).subscribe((results) => {
        if (results) {
          for (const result of results) {
            analysisGroupIDs.push(result.id);
          }
        }
        this.executeSearch(analysisGroupIDs);
      });
    } else {
      this.executeSearch(analysisGroupIDs);
    }
  }

  onSearchEnter(event: Event): void {
    const ke = event as KeyboardEvent;
    if (!ke.shiftKey) {
      ke.preventDefault();
      this.searchDatabase();
    }
  }

  openListDialog(): void {
    const ref = this.dialog.open(CollateSearchListDialogComponent, { width: '520px', maxHeight: '80vh' });
    ref.afterClosed().pipe(takeUntil(this.destroy$)).subscribe((data: string | undefined) => {
      if (!data) return;
      const proteins = data.split(/[\n,]/).map((s: string) => s.trim()).filter((s: string) => s.length > 0);
      const current = this.form.value.search?.trim();
      const appended = current ? `${current}\n${proteins.join('\n')}` : proteins.join('\n');
      this.form.patchValue({ search: appended });
      this.cdr.markForCheck();
    });
  }

  private buildSearchTerm(raw: string): string {
    const terms = raw.toUpperCase().split(/\r?\n|OR/).map(q => q.trim()).filter(q => q.length > 0);
    return terms.map(t => `"${t.replace(/['"]/g, '')}"`).join(' OR ');
  }

  private executeSearch(analysisGroupIDs: number[]) {
    if (this.form.value.search && this.form.value.foldChange && this.form.value.pValue && this.form.value.searchMode) {
      const searchTerm = this.buildSearchTerm(this.form.value.search);
      this.web.createSearch(
        analysisGroupIDs,
        searchTerm,
        this.web.searchSessionID,
        this.form.value.foldChange,
        this.form.value.pValue,
        this.form.value.searchMode,
        this.selectedSpecies
      ).pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.sb.open("Search queued", "Dismiss", {duration: 2000});
      });
    }
  }

  handleAGSelection(e: AnalysisGroup[]) {
    if (e.length > 0) {
      this.router.navigate([`/analysis-group/${e[0].id}`]);
    }
  }

  selectSpecies(species: Species) {
    if (this.selectedSpecies === species) {
      this.selectedSpecies = undefined;
      return;
    }
    this.selectedSpecies = species;
    this.cdr.markForCheck();
  }

  openCreateCollateDialog() {
    const dialogRef = this.dialog.open(CreateCollateDialogComponent);
    dialogRef.afterClosed().pipe(
      takeUntil(this.destroy$),
      filter((result) => !!result),
      switchMap((result) => this.collateService.createCollate(result.title, result.greeting))
    ).subscribe((data) => {
      this.router.navigate([`/collate/edit/${data.id}`]);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
