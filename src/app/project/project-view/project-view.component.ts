import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {Project} from "../project";
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton, MatIconButton} from "@angular/material/button";
import {WebService} from "../../web.service";
import {MatIcon} from "@angular/material/icon";
import {MatDialog} from "@angular/material/dialog";
import {
  CreateAnalysisGroupDialogComponent
} from "../../analysis-group/create-analysis-group-dialog/create-analysis-group-dialog.component";
import {AnalysisGroupQuery} from "../../analysis-group/analysis-group";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatList, MatListItem, MatListItemTitle} from "@angular/material/list";
import {AccountsService} from "../../accounts/accounts.service";
import {Species, SpeciesQuery} from "../../species";
import {Title} from "@angular/platform-browser";
import {AreYouSureDialogComponent} from "../../are-you-sure-dialog/are-you-sure-dialog.component";
import {BreadcrumbComponent} from "../../shared/breadcrumb/breadcrumb.component";
import {StatusBadgeComponent} from "../../shared/status-badge/status-badge.component";
import {EmptyStateComponent} from "../../shared/empty-state/empty-state.component";
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from "@angular/material/autocomplete";
import {MatTooltip} from "@angular/material/tooltip";
import {MatDivider} from "@angular/material/divider";
import {DataService} from "../../data.service";
import {Subject, takeUntil, filter, switchMap} from "rxjs";

@Component({
    selector: 'app-project-view',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        ReactiveFormsModule,
        MatFormField,
        MatInput,
        MatLabel,
        MatButton,
        MatIcon,
        MatList,
        MatListItem,
        MatPaginator,
        MatListItemTitle,
        MatIconButton,
        MatSuffix,
        BreadcrumbComponent,
        StatusBadgeComponent,
        EmptyStateComponent,
        MatAutocomplete,
        MatOption,
        MatAutocompleteTrigger,
        MatTooltip,
        MatDivider
    ],
    templateUrl: './project-view.component.html',
    styleUrl: './project-view.component.scss'
})
export class ProjectViewComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  private _project?: Project | undefined

  canEdit = false
  
  @Input() set project(value: Project | undefined) {
    this._project = value
    if (!value) {
      return
    }
    this.accounts.getProjectPermissions(value.id).pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.canEdit = data.edit
      this.cdr.markForCheck();
    })
    this.titleService.setTitle(`Project - ${value.name}`)
    this.form.controls.name.setValue(value.name)
    this.form.controls.description.setValue(value.description)
    this.web.getAnalysisGroups(undefined, this.pageSize, 0, undefined, value.id).pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.analysisGroupQuery = data
      this.cdr.markForCheck();
    })
    if (value.species) {
      this.web.getSpeciesByID(value.species).pipe(takeUntil(this.destroy$)).subscribe((data) => {
        this.form.controls.species_name.enable()
        this.form.controls.species.enable()
        this.form.controls.species_name.setValue(data.official_name)
        this.form.controls.species.setValue([data])
        this.form.controls.species.disable()
        this.form.controls.species_name.disable()
        this.speciesEditable = false
        this.cdr.markForCheck();
      })
    }
  }

  get project(): Project {
    return this._project!
  }
  speciesEditable = false
  form = this.fb.group({
    name: new FormControl({value: "", disabled: !this.accounts.loggedIn}, Validators.required),
    description: new FormControl({value: "", disabled: !this.accounts.loggedIn}, Validators.required),
    species_name: new FormControl({value: "", disabled: !this.accounts.loggedIn || !this.speciesEditable}),
    species: new FormControl<Species[]|undefined|null>({value: null, disabled: !this.accounts.loggedIn}, Validators.required)
  })

  @Output() deleted: EventEmitter<boolean> = new EventEmitter<boolean>()

  @Output() updated: EventEmitter<Project> = new EventEmitter<Project>()

  analysisGroupQuery?: AnalysisGroupQuery|undefined
  pageSize = 10
  currentPage = 0
  speciesQuery?: SpeciesQuery|undefined


  constructor(
    private titleService: Title,
    private fb: FormBuilder,
    private web: WebService,
    private dialog: MatDialog,
    public accounts: AccountsService,
    public dataService: DataService,
    private cdr: ChangeDetectorRef
  ) {
    this.form.controls.species_name.valueChanges.pipe(
      takeUntil(this.destroy$),
      filter((data): data is string => !!data),
      switchMap((data) => this.web.getSpecies(undefined, 10, 0, data))
    ).subscribe((data) => {
      this.speciesQuery = data
      this.cdr.markForCheck();
    })

    this.form.controls.species.valueChanges.pipe(
      takeUntil(this.destroy$),
      filter((data): data is Species[] => !!data && data.length > 0)
    ).subscribe((data) => {
      this.form.controls.species_name.setValue(data[0].official_name)
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  updateProject() {
    const name = this.form.value.name as string
    const description = this.form.value.description as string
    const speciesId = this.form.value.species?.[0]?.id

    this.web.updateProject(this.project.id, name, description, speciesId).pipe(
      takeUntil(this.destroy$)
    ).subscribe((data) => {
      this.project = data
      this.updated.emit(data)
      this.cdr.markForCheck();
    })
  }

  deleteProject() {
    this.dialog.open(AreYouSureDialogComponent).afterClosed().pipe(
      takeUntil(this.destroy$),
      filter((data) => !!data),
      switchMap(() => this.web.deleteProject(this.project.id))
    ).subscribe(() => {
      this.project = undefined
      this.deleted.emit(true)
      this.cdr.markForCheck();
    })
  }

  openAnalysisGroupCreateModal() {
    const ref = this.dialog.open(CreateAnalysisGroupDialogComponent)
    ref.componentInstance.project = this.project
    ref.afterClosed().pipe(
      takeUntil(this.destroy$),
      filter((data) => !!data)
    ).subscribe((data) => {
      window.open(`/#/analysis-group/${data.id}`, '_blank')
    })
  }

  handlePageChange(e: PageEvent) {
    const offset = e.pageIndex * e.pageSize
    this.currentPage = e.pageIndex
    this.web.getAnalysisGroups(undefined, e.pageSize, offset, undefined, this.project.id).pipe(
      takeUntil(this.destroy$)
    ).subscribe((data) => {
      this.analysisGroupQuery = data
      this.cdr.markForCheck();
    })
  }

  changeSpeciesEditableState() {
    this.speciesEditable = !this.speciesEditable
    if (this.speciesEditable) {
      this.form.controls.species.enable()
      this.form.controls.species_name.enable()
    } else {
      this.form.controls.species.disable()
      this.form.controls.species_name.disable()
    }
  }

  openAnalysisGroup(id: number) {
    window.open(`/#/analysis-group/${id}`, '_blank');
  }
}
