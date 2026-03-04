import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy} from '@angular/core';
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {WebService} from "../web.service";
import {Project, ProjectQuery} from './project';
import {MatDialog} from "@angular/material/dialog";
import {CreateProjectDialogComponent} from "./create-project-dialog/create-project-dialog.component";
import {ProjectListComponent} from "./project-list/project-list.component";
import {FormBuilder, FormControl, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {ProjectViewComponent} from "./project-view/project-view.component";
import {MatTooltip} from "@angular/material/tooltip";
import {AccountsService} from "../accounts/accounts.service";
import {Router} from "@angular/router";
import {Subject, takeUntil, filter, switchMap} from "rxjs";

@Component({
    selector: 'app-project',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatToolbar,
        MatToolbarRow,
        MatIconButton,
        MatIcon,
        ProjectListComponent,
        ReactiveFormsModule,
        MatFormField,
        MatInput,
        MatLabel,
        MatPaginator,
        ProjectViewComponent,
        MatTooltip
    ],
    templateUrl: './project.component.html',
    styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  sidebarOpen = true
  projectQuery?: ProjectQuery
  pageIndex = 0
  limit = 15
  offset = 0

  form = this.fb.group({
    name: new FormControl()
  })

  selectedProject?: Project

  private _projectID?: number|undefined

  @Input() set projectID(value: number) {
    this._projectID = value
    if (value) {
      this.web.getProject(value).pipe(takeUntil(this.destroy$)).subscribe((data: Project) => {
        this.selectedProject = data
        this.cdr.markForCheck();
      })
    }
  }

  get projectID(): number {
    return this._projectID!
  }

  constructor(
    private router: Router,
    private web: WebService,
    private dialog: MatDialog,
    private fb: FormBuilder,
    private accounts: AccountsService,
    private cdr: ChangeDetectorRef
  ) {
    this.web.getProjects(undefined, this.limit, this.offset).pipe(takeUntil(this.destroy$)).subscribe((data: ProjectQuery) => {
      this.projectQuery = data
      this.cdr.markForCheck();
    })

    this.form.controls.name.valueChanges.pipe(
      takeUntil(this.destroy$),
      filter((value): value is string => !!value),
      switchMap((value) => this.web.getProjects(undefined, this.limit, this.offset, value))
    ).subscribe((data: ProjectQuery) => {
      this.projectQuery = data
      this.cdr.markForCheck();
    })

    this.web.updateFromLabGroupSelection.pipe(
      takeUntil(this.destroy$),
      filter((value) => !!value)
    ).subscribe(() => {
      this.refreshData()
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  openCreateProjectDialog() {
    const ref = this.dialog.open(CreateProjectDialogComponent)
    ref.afterClosed().pipe(
      takeUntil(this.destroy$),
      filter((data) => data && this.accounts.loggedIn),
      switchMap((data) => this.web.createProject(data.name, data.description)),
      switchMap((project) => {
        this.selectedProject = project
        return this.web.getProjects(undefined, this.limit, this.offset)
      })
    ).subscribe((data: ProjectQuery) => {
      this.projectQuery = data
      this.cdr.markForCheck();
    })
  }

  handlePageEvent(event: PageEvent) {
    this.offset = event.pageIndex * event.pageSize
    this.limit = event.pageSize
    const searchValue = this.form.controls.name.value || undefined
    this.web.getProjects(undefined, this.limit, this.offset, searchValue).pipe(
      takeUntil(this.destroy$)
    ).subscribe((data: ProjectQuery) => {
      this.projectQuery = data
      this.cdr.markForCheck();
    })
  }

  handleProjectSelect(event: Project) {
    this.router.navigate([`/project`, event.id])
  }

  refreshData() {
    const searchValue = this.form.controls.name.value || undefined
    this.web.getProjects(undefined, this.limit, this.offset, searchValue).pipe(
      takeUntil(this.destroy$)
    ).subscribe((data: ProjectQuery) => {
      this.projectQuery = data
      this.cdr.markForCheck();
    })
  }

  handleUpdateData(project: Project) {
    this.projectQuery!.results = this.projectQuery!.results.map((value) => {
      if (value.id === project.id) {
        return project
      }
      return value
    })
  }

  toggleSidePanel() {
    this.sidebarOpen = !this.sidebarOpen
  }

}
