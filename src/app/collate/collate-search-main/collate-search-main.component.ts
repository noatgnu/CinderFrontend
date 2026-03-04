import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MatListOption, MatSelectionList, MatSelectionListChange} from "@angular/material/list";
import {Collate, CollateQuery} from "../collate";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {CollateService} from "../collate.service";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {FormBuilder, FormControl, ReactiveFormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {WebService} from "../../web.service";
import {filter, Subject, switchMap, takeUntil} from "rxjs";
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
    selector: 'app-collate-search-main',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatListOption,
        MatSelectionList,
        MatPaginator,
        MatFormField,
        ReactiveFormsModule,
        MatInput,
        MatLabel,
        MatProgressSpinner
    ],
    templateUrl: './collate-search-main.component.html',
    styleUrl: './collate-search-main.component.scss'
})
export class CollateSearchMainComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  collates: Collate[] = [];
  selectedCollate: Collate | null = null;
  limit: number = 5;
  offset: number = 0;
  totalCount: number = 0;
  loading: boolean = true;

  form = this.fb.group({
    query: [''],
    selected: new FormControl<Collate[] | null>(null)
  })


  constructor(private web: WebService, private fb: FormBuilder, private snackBar: MatSnackBar, private router: Router, private collateService: CollateService, private cdr: ChangeDetectorRef) {
    this.form.controls.selected.valueChanges.pipe(
      takeUntil(this.destroy$),
      filter((value): value is Collate[] => !!value && value.length > 0)
    ).subscribe((value) => {
      window.open(`/#/collate/view/${value[0].id}`, "_blank")
    })

    this.web.updateFromLabGroupSelection.pipe(
      takeUntil(this.destroy$),
      filter((value) => !!value),
      switchMap(() => {
        const query = this.form.controls.query.value || ''
        return this.collateService.getCollates(this.limit, this.offset, query, [])
      })
    ).subscribe((data) => {
      this.collates = data.results;
      this.totalCount = data.count;
      this.cdr.markForCheck()
    })
  }

  ngOnInit() {
    this.searchCollates();
  }

  searchCollates() {
    this.loading = true;
    this.cdr.markForCheck();
    this.collateService.getCollates(this.limit, this.offset, '', []).pipe(takeUntil(this.destroy$)).subscribe({
      next: (data: CollateQuery) => {
        this.collates = data.results;
        this.totalCount = data.count;
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.loading = false;
        this.snackBar.open('Error loading collates', 'Dismiss');
        this.cdr.markForCheck();
      }
    });
  }

  onSearchResults(data: CollateQuery) {
    this.collates = data.results;
    this.totalCount = data.count;
  }

  onCollateSelect(event: MatSelectionListChange) {
    this.selectedCollate = event.options[0].value;
  }

  handlePageEvent(event: PageEvent) {
    this.limit = event.pageSize;
    this.offset = event.pageIndex * this.limit;
    this.searchCollates();
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
