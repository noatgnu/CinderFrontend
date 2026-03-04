import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnDestroy, Output} from '@angular/core';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {AnalysisGroup, AnalysisGroupQuery} from "../../analysis-group/analysis-group";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {WebService} from "../../web.service";
import {MatListOption, MatSelectionList} from "@angular/material/list";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {filter, Subject, switchMap, takeUntil} from "rxjs";
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
    selector: 'app-analysis-search',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        ReactiveFormsModule,
        MatSelectionList,
        MatListOption,
        MatPaginator,
        MatLabel,
        MatFormField,
        MatInput,
        MatProgressSpinner
    ],
    templateUrl: './analysis-search.component.html',
    styleUrl: './analysis-search.component.scss'
})
export class AnalysisSearchComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  formAnalysisGroupSearch = this.fb.group({
    searchTerm: new FormControl<string>("", Validators.required),
    selectedAnalysisGroups: new FormControl<AnalysisGroup[]|null>([])
  })

  analysisGroupPageSize = 5
  analysisGroupPageIndex = 0
  analysisGroupQuery: AnalysisGroupQuery|undefined = undefined
  isLoading = true
  @Output() selectedAnalysisGroups: EventEmitter<AnalysisGroup[]> = new EventEmitter<AnalysisGroup[]>()
  constructor(private fb: FormBuilder, private web: WebService, private cdr: ChangeDetectorRef) {
    this.formAnalysisGroupSearch.controls.searchTerm.valueChanges.pipe(
      takeUntil(this.destroy$),
      filter((value): value is string => !!value),
      switchMap((value) => this.web.getAnalysisGroups(undefined, this.analysisGroupPageSize, 0, value))
    ).subscribe((data) => {
      this.analysisGroupQuery = data
      this.cdr.markForCheck()
    })
    this.formAnalysisGroupSearch.controls.selectedAnalysisGroups.valueChanges.pipe(
      takeUntil(this.destroy$),
      filter((value): value is AnalysisGroup[] => !!value)
    ).subscribe((value) => {
      this.selectedAnalysisGroups.emit(value)
    })

    this.web.getAnalysisGroups(undefined, this.analysisGroupPageSize, 0).pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.analysisGroupQuery = data
      this.isLoading = false
      this.cdr.markForCheck()
    })
  }

  handlePageEvent(event: PageEvent) {
    const offset = event.pageIndex * event.pageSize
    this.analysisGroupPageIndex = event.pageIndex
    const searchTerm = this.formAnalysisGroupSearch.value.searchTerm || undefined
    this.web.getAnalysisGroups(undefined, this.analysisGroupPageSize, offset, searchTerm).pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.analysisGroupQuery = data
      this.cdr.markForCheck()
    })
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
