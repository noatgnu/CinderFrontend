import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {Project} from "../../project/project";
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {Subject, takeUntil} from "rxjs";
import {WebService} from "../../web.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatFormField, MatInput} from "@angular/material/input";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatCard, MatCardContent} from "@angular/material/card";
import {WebsocketService} from "../../websocket.service";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {MatHint, MatLabel} from "@angular/material/form-field";
import {MatProgressBar} from "@angular/material/progress-bar";
import {MatDialog} from "@angular/material/dialog";
import {MatTooltip} from "@angular/material/tooltip";
import {CollateSearchListDialogComponent} from "../collate-search-list-dialog/collate-search-list-dialog.component";

@Component({
    selector: 'app-collate-search',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatInput,
        MatButton,
        ReactiveFormsModule,
        MatFormField,
        MatIconButton,
        MatIcon,
        MatCardContent,
        MatCard,
        MatOption,
        MatSelect,
        MatLabel,
        MatHint,
        MatProgressBar,
        MatTooltip,
    ],
    templateUrl: './collate-search.component.html',
    styleUrl: './collate-search.component.scss'
})
export class CollateSearchComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  @Input() projects: Project[] = [];
  loading: boolean = false;
  searchStartTime: Date | null = null;
  elapsedTime: string = '0.00';
  private timerInterval: ReturnType<typeof setInterval> | undefined;
  progress: string = "";
  form = this.fb.group({
    searchQuery: new FormControl<string>('', Validators.required),
    searchMode: new FormControl<"pi"|"gene"|"uniprot">("gene", Validators.required),
  });
  @Output() searchResultID: EventEmitter<number> = new EventEmitter<number>();

  constructor(private cdr: ChangeDetectorRef, private snackBar: MatSnackBar, private ws: WebsocketService, private fb: FormBuilder, private web: WebService, private sb: MatSnackBar, private dialog: MatDialog) {
    this.ws.searchWSConnection?.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      if (data) {
        if (data["type"] === "search_status") {
          switch (data["status"]) {
            case "complete":
              this.loading = false;
              clearInterval(this.timerInterval);
              const elapsedTime = this.calculateElapsedTime();
              this.progress = "";
              this.showSnackBar(`Search complete in ${elapsedTime} seconds`);
              this.searchResultID.emit(parseInt(data["id"]));
              this.cdr.markForCheck();
              break
            case "in_progress":
              this.progress = `Current progress: ${data["current_progress"]}/${data["found_files"]}`
              this.cdr.markForCheck();
              break;
            case "error":
              this.loading = false;
              this.progress = "Search error";
              this.showSnackBar("Search error");
              this.cdr.markForCheck();
              break;
          }
        }
      }
    })
  }

  openListDialog(): void {
    const ref = this.dialog.open(CollateSearchListDialogComponent, { width: '520px', maxHeight: '80vh' });
    ref.afterClosed().subscribe((data: string | undefined) => {
      if (!data) return;
      const proteins = data.split(/[\n,]/).map(s => s.trim()).filter(s => s.length > 0);
      const current = this.form.value.searchQuery?.trim();
      const appended = current ? `${current}\n${proteins.join('\n')}` : proteins.join('\n');
      this.form.patchValue({ searchQuery: appended });
      this.cdr.markForCheck();
    });
  }

  onEnter(event: Event): void {
    const ke = event as KeyboardEvent;
    if (!ke.shiftKey) {
      ke.preventDefault();
      this.runSearch();
    }
  }

  async runSearch() {

    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this.progress = "Current progress: search initiated";
    this.searchStartTime = new Date();
    this.elapsedTime = '0.00';
    this.timerInterval = setInterval(() => {
      this.elapsedTime = this.calculateElapsedTime().toFixed(2);
    }, 200);
    const analysisGroupIDs: number[] = [];
    if (this.projects.length > 0) {
      const results = await this.web.getAnalysisGroupsFromProjects(this.projects).toPromise();
      if (results) {
        for (let result of results) {
          analysisGroupIDs.push(result.id);
        }
      }
    }



    if (this.form.value.searchQuery && this.form.value.searchMode) {
      const raw = this.form.value.searchQuery.toUpperCase();
      const queries = raw.split(/\r?\n|OR/).map(q => q.trim()).filter(q => q.length > 0);
      const reformatQueries = queries.map((query) => {
        const transformedQuery = query.replace(/'/g, "").replace(/"/g, "");
        return `"${transformedQuery}"`;
      });

      this.web.createSearch(
        analysisGroupIDs,
        reformatQueries.join(" OR "),
        this.web.searchSessionID,
        0.000000001,
        0.000000001,
        this.form.value.searchMode
      ).subscribe({
        next: () => {
          this.sb.open('Search queued', 'Dismiss', { duration: 2000 });
        },
        error: () => {
          this.loading = false;
          clearInterval(this.timerInterval);
          this.showSnackBar("Search error");
        }
      });
    }
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
    });
  }

  calculateElapsedTime(): number {
    if (this.searchStartTime) {
      const endTime = new Date();
      const elapsedTime = (endTime.getTime() - this.searchStartTime.getTime()) / 1000;
      return elapsedTime;
    }
    return 0;
  }

  ngOnDestroy() {
    if (this.timerInterval !== undefined) {
      clearInterval(this.timerInterval);
    }
    this.destroy$.next();
    this.destroy$.complete();
  }
}
