import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatDivider } from '@angular/material/divider';
import { Subject, debounceTime, distinctUntilChanged, switchMap, of, takeUntil } from 'rxjs';

interface DataFilterList {
  id: number;
  name: string;
  data: string;
  default: boolean;
}

@Component({
  selector: 'app-collate-search-list-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatIconButton,
    MatFormField,
    MatLabel,
    MatInput,
    MatSelect,
    MatOption,
    MatIcon,
    MatProgressSpinner,
    MatDivider,
  ],
  templateUrl: './collate-search-list-dialog.component.html',
  styleUrl: './collate-search-list-dialog.component.scss',
})
export class CollateSearchListDialogComponent implements OnInit, OnDestroy {
  private readonly baseUrl = 'https://curtain-backend.omics.quest';
  private destroy$ = new Subject<void>();
  private searchSubject = new Subject<string>();

  categories: string[] = [];
  selectedCategory = '';
  filters: DataFilterList[] = [];
  filterSearchTerm = '';
  globalSearchTerm = '';
  globalSearchResults: DataFilterList[] = [];
  isLoadingFilters = false;
  isGlobalSearching = false;

  readonly pageSize = 10;
  currentPage = 0;

  constructor(
    private http: HttpClient,
    private dialogRef: MatDialogRef<CollateSearchListDialogComponent>,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.http.get<string[]>(`${this.baseUrl}/data_filter_list/get_all_category/`)
      .pipe(takeUntil(this.destroy$))
      .subscribe(cats => {
        this.categories = cats.sort();
        this.cdr.markForCheck();
      });

    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => {
        if (term.length < 2) { this.isGlobalSearching = false; return of({ results: [] as DataFilterList[] }); }
        this.isGlobalSearching = true;
        this.cdr.markForCheck();
        return this.http.get<{ results: DataFilterList[] }>(`${this.baseUrl}/data_filter_list/?name=${encodeURIComponent(term)}`);
      }),
      takeUntil(this.destroy$),
    ).subscribe({
      next: data => {
        this.globalSearchResults = Array.isArray(data.results) ? data.results : [];
        this.isGlobalSearching = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.globalSearchResults = [];
        this.isGlobalSearching = false;
        this.cdr.markForCheck();
      },
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.searchSubject.complete();
  }

  onGlobalSearchChange(term: string): void {
    this.globalSearchTerm = term;
    this.searchSubject.next(term);
  }

  onCategoryChange(category: string): void {
    this.selectedCategory = category;
    this.currentPage = 0;
    this.filters = [];
    this.globalSearchTerm = '';
    this.globalSearchResults = [];
    if (!category) return;
    this.isLoadingFilters = true;
    this.http.get<{ results: DataFilterList[] }>(`${this.baseUrl}/data_filter_list/?category=${encodeURIComponent(category)}`)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: data => {
          this.filters = Array.isArray(data.results) ? data.results : [];
          this.isLoadingFilters = false;
          this.cdr.markForCheck();
        },
        error: () => {
          this.filters = [];
          this.isLoadingFilters = false;
          this.cdr.markForCheck();
        },
      });
  }

  get filteredFilters(): DataFilterList[] {
    const term = this.filterSearchTerm.toLowerCase().trim();
    return term ? this.filters.filter(f => f.name.toLowerCase().includes(term)) : this.filters;
  }

  get pagedFilters(): DataFilterList[] {
    const start = this.currentPage * this.pageSize;
    return this.filteredFilters.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredFilters.length / this.pageSize);
  }

  prevPage(): void { if (this.currentPage > 0) { this.currentPage--; this.cdr.markForCheck(); } }
  nextPage(): void { if (this.currentPage < this.totalPages - 1) { this.currentPage++; this.cdr.markForCheck(); } }

  getProteinCount(data: string): number {
    return data ? data.split(/[\n,]/).map(s => s.trim()).filter(s => s.length > 0).length : 0;
  }

  selectFilter(filter: DataFilterList): void {
    this.dialogRef.close(filter.data);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
