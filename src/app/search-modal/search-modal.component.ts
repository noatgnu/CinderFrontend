import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy} from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {WebService} from "../web.service";
import {MatFormField, MatLabel, MatHint, MatError} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {WebsocketService} from "../websocket.service";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Project} from "../project/project";
import {MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle} from "@angular/material/expansion";
import {ProjectSearchComponent} from "../banner/project-search/project-search.component";
import {MatDivider} from "@angular/material/divider";
import {MatIcon} from "@angular/material/icon";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {Subject, switchMap, takeUntil} from "rxjs";

@Component({
  selector: 'app-search-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatLabel,
    MatInput,
    MatFormField,
    MatHint,
    MatError,
    ReactiveFormsModule,
    MatDialogActions,
    MatButton,
    MatSelect,
    MatOption,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    ProjectSearchComponent,
    MatDivider,
    MatIcon,
    MatProgressSpinner
  ],
  templateUrl: './search-modal.component.html',
  styleUrl: './search-modal.component.scss'
})
export class SearchModalComponent implements OnDestroy {
  private destroy$ = new Subject<void>();

  @Input() analysisGroupIDs: number[] = [];

  isSearching = false;
  selectedProjects: Project[] = [];

  form = this.fb.group({
    search: new FormControl<string>("", Validators.required),
    searchMode: new FormControl<"full" | "pi" | "gene" | "uniprot">("full", Validators.required),
    foldChange: new FormControl<number>(0.6, Validators.required),
    pValue: new FormControl<number>(1.31, Validators.required),
  });

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<SearchModalComponent>,
    private web: WebService,
    private ws: WebsocketService,
    private sb: MatSnackBar,
    private cdr: ChangeDetectorRef
  ) {
    this.ws.searchWSConnection?.pipe(
      takeUntil(this.destroy$)
    ).subscribe((data) => {
      if (data?.["type"] === "search_status") {
        if (data["status"] === "complete") {
          this.sb.open(`Search complete`, "View Results", {duration: 10000})
            .onAction()
            .subscribe(() => {
              window.location.href = `/#/search-session/${data["id"]}`;
            });
          this.isSearching = false;
          this.dialogRef.close(data["id"]);
          this.cdr.markForCheck();
        }
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get searchTargetDescription(): string {
    if (this.selectedProjects.length > 0) {
      return `${this.selectedProjects.length} selected project(s)`;
    }
    if (this.analysisGroupIDs.length > 0) {
      return `${this.analysisGroupIDs.length} analysis group(s)`;
    }
    return 'No targets selected';
  }

  search() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.cdr.markForCheck();
      return;
    }

    const { search, searchMode, foldChange, pValue } = this.form.value;
    if (!search || !searchMode || foldChange === null || pValue === null) return;

    this.isSearching = true;
    this.cdr.markForCheck();

    if (this.selectedProjects.length === 0) {
      this.web.createSearch(
        this.analysisGroupIDs,
        search,
        this.web.searchSessionID,
        foldChange,
        pValue,
        searchMode
      ).pipe(takeUntil(this.destroy$)).subscribe({
        next: () => {
          this.sb.open("Search queued", "Dismiss", {duration: 2000});
        },
        error: () => {
          this.isSearching = false;
          this.sb.open("Search failed", "Dismiss", {duration: 3000});
          this.cdr.markForCheck();
        }
      });
    } else {
      this.web.getAnalysisGroupsFromProjects(this.selectedProjects).pipe(
        takeUntil(this.destroy$),
        switchMap((analysisGroups) => {
          const agIds = analysisGroups?.map(ag => ag.id) || [];
          return this.web.createSearch(agIds, search, this.web.searchSessionID, foldChange, pValue, searchMode);
        })
      ).subscribe({
        next: () => {
          this.sb.open("Search queued", "Dismiss", {duration: 2000});
        },
        error: () => {
          this.isSearching = false;
          this.sb.open("Search failed", "Dismiss", {duration: 3000});
          this.cdr.markForCheck();
        }
      });
    }
  }

  cancel() {
    this.dialogRef.close();
  }

  handleMultipleProjectSelection(selectedProjects: Project[]) {
    this.selectedProjects = selectedProjects;
    this.cdr.markForCheck();
  }
}
