import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
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
import { Subject, debounceTime, distinctUntilChanged, switchMap, takeUntil } from 'rxjs';
import { CurtainList, CurtainListService } from '../../curtain-list.service';

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
  private destroy$ = new Subject<void>();
  private searchSubject = new Subject<string>();

  categories: string[] = [];
  selectedCategory = '';
  filters: CurtainList[] = [];
  filterSearchTerm = '';
  globalSearchTerm = '';
  globalSearchResults: CurtainList[] = [];
  isLoadingFilters = false;
  isGlobalSearching = false;

  readonly pageSize = 10;
  currentPage = 0;

  constructor(
    private curtainList: CurtainListService,
    private dialogRef: MatDialogRef<CollateSearchListDialogComponent>,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.curtainList.getCategories().pipe(takeUntil(this.destroy$)).subscribe(cats => {
      this.categories = cats;
      this.cdr.markForCheck();
    });

    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => {
        this.isGlobalSearching = term.length >= 2;
        this.cdr.markForCheck();
        return this.curtainList.searchByName(term);
      }),
      takeUntil(this.destroy$),
    ).subscribe(results => {
      this.globalSearchResults = results;
      this.isGlobalSearching = false;
      this.cdr.markForCheck();
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
    this.curtainList.getByCategory(category).pipe(takeUntil(this.destroy$)).subscribe(lists => {
      this.filters = lists;
      this.isLoadingFilters = false;
      this.cdr.markForCheck();
    });
  }

  get filteredFilters(): CurtainList[] {
    const term = this.filterSearchTerm.toLowerCase().trim();
    return term ? this.filters.filter(f => f.name.toLowerCase().includes(term)) : this.filters;
  }

  get pagedFilters(): CurtainList[] {
    return this.filteredFilters.slice(this.currentPage * this.pageSize, (this.currentPage + 1) * this.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredFilters.length / this.pageSize);
  }

  getProteinCount(data: string): number {
    return this.curtainList.getProteinCount(data);
  }

  prevPage(): void { if (this.currentPage > 0) { this.currentPage--; this.cdr.markForCheck(); } }
  nextPage(): void { if (this.currentPage < this.totalPages - 1) { this.currentPage++; this.cdr.markForCheck(); } }

  selectFilter(filter: CurtainList): void {
    this.dialogRef.close(filter.data);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
