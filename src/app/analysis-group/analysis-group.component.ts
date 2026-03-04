import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {ProjectListComponent} from "../project/project-list/project-list.component";
import {FormBuilder, FormControl, ReactiveFormsModule} from "@angular/forms";
import {AnalysisGroup, AnalysisGroupQuery} from "./analysis-group";
import {WebService} from "../web.service";
import {MatDialog} from "@angular/material/dialog";
import {
  CreateAnalysisGroupDialogComponent
} from "./create-analysis-group-dialog/create-analysis-group-dialog.component";
import {AnalysisGroupListComponent} from "./analysis-group-list/analysis-group-list.component";
import {AnalysisGroupViewComponent} from "./analysis-group-view/analysis-group-view.component";
import {DataService} from "../data.service";
import {Router} from "@angular/router";
import {filter, Subject, switchMap, takeUntil} from "rxjs";

@Component({
    selector: 'app-analysis-group',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatFormField,
        MatIcon,
        MatIconButton,
        MatInput,
        MatLabel,
        MatPaginator,
        MatToolbar,
        MatToolbarRow,
        ProjectListComponent,
        ReactiveFormsModule,
        AnalysisGroupListComponent,
        AnalysisGroupViewComponent
    ],
    templateUrl: './analysis-group.component.html',
    styleUrl: './analysis-group.component.scss'
})
export class AnalysisGroupComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  sidebarOpen = true
  analysisGroupQuery?: AnalysisGroupQuery
  pageIndex = 0
  limit = 15
  offset = 0

  form = this.fb.group({
    name: new FormControl()
  })

  selectedAnalysisGroup?: AnalysisGroup|undefined

  private _analysisGroupID?: number|undefined
  @Input() set analysisGroupID(value: number|undefined) {
    this._analysisGroupID = value
    if (value) {
      this.web.getAnalysisGroup(value).pipe(takeUntil(this.destroy$)).subscribe((data) => {
        this.selectedAnalysisGroup = data
        this.cdr.markForCheck()
      })
    }
  }

  get analysisGroupID(): number|undefined {
    return this._analysisGroupID
  }

  constructor(private router: Router, public dataService: DataService, private fb: FormBuilder, private dialog: MatDialog, private web: WebService, private cdr: ChangeDetectorRef) {
    this.web.getAnalysisGroups(undefined, this.limit, this.offset).pipe(takeUntil(this.destroy$)).subscribe((data: any) => {
      this.analysisGroupQuery = data
      this.cdr.markForCheck()
    })
    this.form.controls.name.valueChanges.pipe(
      takeUntil(this.destroy$),
      filter((value): value is string => !!value),
      switchMap((value) => this.web.getAnalysisGroups(undefined, this.limit, this.offset, value))
    ).subscribe((data: any) => {
      this.analysisGroupQuery = data
      this.cdr.markForCheck()
    })
    this.web.updateFromLabGroupSelection.pipe(
      takeUntil(this.destroy$),
      filter((value) => !!value),
      switchMap(() => this.web.getAnalysisGroups(undefined, this.limit, this.offset))
    ).subscribe((data: any) => {
      this.analysisGroupQuery = data
      this.cdr.markForCheck()
    })
  }

  openCreateAnalysisGroupDialog() {
    const ref = this.dialog.open(CreateAnalysisGroupDialogComponent)
    ref.componentInstance.enableProjectSelection = true
    ref.afterClosed().pipe(
      takeUntil(this.destroy$),
      filter((data) => !!data),
      switchMap(() => this.web.getAnalysisGroups(undefined, this.limit, this.offset))
    ).subscribe((data: any) => {
      this.analysisGroupQuery = data
      this.cdr.markForCheck()
    })
  }

  handlePageEvent(event: PageEvent) {
    this.offset = event.pageIndex * event.pageSize
    this.limit = event.pageSize
    const searchValue = this.form.controls.name.value || undefined
    this.web.getAnalysisGroups(undefined, this.limit, this.offset, searchValue).pipe(takeUntil(this.destroy$)).subscribe((data: any) => {
      this.analysisGroupQuery = data
      this.cdr.markForCheck()
    })
  }

  refreshData() {
    this.web.getAnalysisGroups(undefined, this.limit, this.offset).pipe(takeUntil(this.destroy$)).subscribe((data: any) => {
      this.analysisGroupQuery = data
      this.cdr.markForCheck()
    })
  }

  handleUpdateData(event: AnalysisGroup) {
    this.selectedAnalysisGroup = event
    this.analysisGroupQuery!.results = this.analysisGroupQuery!.results.map((value) => {
      if (value.id === event.id) {
        return event
      }
      return value
    })
  }

  toggleSidePanel() {
    this.sidebarOpen = !this.sidebarOpen
  }
  onAnalysisGroupSelected(event: AnalysisGroup) {
    this.router.navigate([`/analysis-group`, event.id])
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
