import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {Project, ProjectQuery} from "../../project/project";
import {WebService} from "../../web.service";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatListOption, MatSelectionList} from "@angular/material/list";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatChip, MatChipGrid, MatChipRow, MatChipSet} from "@angular/material/chips";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {Species} from "../../species";
import {filter, Subject, switchMap, takeUntil} from "rxjs";
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
    selector: 'app-project-search',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatSelectionList,
        MatListOption,
        ReactiveFormsModule,
        MatFormField,
        MatInput,
        MatLabel,
        MatPaginator,
        MatChipGrid,
        MatChipRow,
        MatIcon,
        MatIconButton,
        MatChip,
        MatChipSet,
        MatProgressSpinner
    ],
    templateUrl: './project-search.component.html',
    styleUrl: './project-search.component.scss'
})
export class ProjectSearchComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  @Input() multipleSelection: boolean = false
  formProjectSearch = this.fb.group({
    searchTerm: new FormControl<string>("", Validators.required),
    selectedProjects: new FormControl<Project[]|null>([])
  })
  private _species: Species|undefined = undefined
  @Input() set species(value: Species|undefined) {
    this._species = value
    if (value) {
      const searchTerm = this.formProjectSearch.controls.searchTerm.value || undefined
      this.web.getProjects(undefined, this.projectPageSize, 0, searchTerm, value).pipe(takeUntil(this.destroy$)).subscribe((data) => {
        this.projectQuery = data
        this.cdr.markForCheck()
      })
    }
  }
  get species(): Species|undefined {
    return this._species
  }

  projectPageSize = 5
  projectPageIndex = 0
  projectQuery: ProjectQuery|undefined = undefined
  isLoading = true
  @Output() selectedProjects: EventEmitter<Project[]> = new EventEmitter<Project[]>()
  selectedMultipleProjects: Project[] = []
  constructor(private fb: FormBuilder, private web: WebService, private cdr: ChangeDetectorRef) {
    this.web.getProjects(undefined, this.projectPageSize, 0, undefined, this.species).pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.projectQuery = data
      this.isLoading = false
      this.cdr.markForCheck()
    })
    this.formProjectSearch.controls.searchTerm.valueChanges.pipe(
      takeUntil(this.destroy$),
      filter((value): value is string => !!value),
      switchMap((value) => this.web.getProjects(undefined, this.projectPageSize, 0, value, this.species))
    ).subscribe((data) => {
      this.projectQuery = data
      this.cdr.markForCheck()
    })
    this.formProjectSearch.controls.selectedProjects.valueChanges.pipe(
      takeUntil(this.destroy$),
      filter((value): value is Project[] => !!value)
    ).subscribe((value) => {
      if (this.multipleSelection) {
        for (const project of value) {
          if (!this.selectedMultipleProjects.includes(project)) {
            this.selectedMultipleProjects.push(project)
          }
        }
        this.selectedProjects.emit(this.selectedMultipleProjects)
      } else {
        this.selectedProjects.emit(value)
      }
    })
    this.web.updateFromLabGroupSelection.pipe(
      takeUntil(this.destroy$),
      filter((value) => !!value),
      switchMap(() => {
        const searchTerm = this.formProjectSearch.controls.searchTerm.value || undefined
        return this.web.getProjects(undefined, this.projectPageSize, 0, searchTerm, this.species)
      })
    ).subscribe((data) => {
      this.projectQuery = data
      this.cdr.markForCheck()
    })
  }

  handleProjectPageEvent(e: PageEvent) {
    const offset = e.pageIndex * e.pageSize
    this.projectPageIndex = e.pageIndex
    const searchTerm = this.formProjectSearch.controls.searchTerm.value || undefined
    this.web.getProjects(undefined, e.pageSize, offset, searchTerm, this.species).pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.projectQuery = data
      this.cdr.markForCheck()
    })
  }

  removeProject(project: Project) {
    this.selectedMultipleProjects = this.selectedMultipleProjects.filter((value) => value !== project)
    this.selectedProjects.emit(this.selectedMultipleProjects)
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
