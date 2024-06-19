import {Component, Input} from '@angular/core';
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
import {AccountsService} from "../accounts/accounts.service";

@Component({
  selector: 'app-project',
  standalone: true,
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
    ProjectViewComponent
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
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
      this.web.getProject(value).subscribe((data: Project) => {
        this.selectedProject = data
      })
    }

  }

  get projectID(): number {
    return this._projectID!
  }

  constructor(private web: WebService, private dialog: MatDialog, private fb: FormBuilder, private accounts: AccountsService) {
    this.web.getProjects(undefined, this.limit, this.offset).subscribe((data: any) => {
      this.projectQuery = data
    })
    this.form.controls.name.valueChanges.subscribe((value: string) => {
      if (value) {
        this.web.getProjects(undefined, this.limit, this.offset, value).subscribe((data: any) => {
          this.projectQuery = data
        })
      }
    })
  }

  openCreateProjectDialog() {
    const ref = this.dialog.open(CreateProjectDialogComponent)
    ref.afterClosed().subscribe((data) => {
      if (data && this.accounts.loggedIn) {

        this.web.createProject(data.name, data.description).subscribe((data) => {
          this.selectedProject = data
          this.web.getProjects(undefined, this.limit, this.offset).subscribe((data: any) => {
            this.projectQuery = data
          })
        })
      }
    })
  }

  handlePageEvent(event: PageEvent) {
    this.offset = event.pageIndex * event.pageSize
    this.limit = event.pageSize
    if (this.form.controls.name.value) {
      this.web.getProjects(undefined, this.limit, this.offset, this.form.controls.name.value).subscribe((data: any) => {
        this.projectQuery = data
      })
    } else {
      this.web.getProjects(undefined, this.limit, this.offset).subscribe((data: any) => {
        this.projectQuery = data
      })
    }
  }

  handleProjectSelect(event: Project) {
    this.selectedProject = event
  }

  refreshData() {
    if (this.form.controls.name.value) {
      this.web.getProjects(undefined, this.limit, this.offset, this.form.controls.name.value).subscribe((data: any) => {
        this.projectQuery = data
      })
      return
    }
    this.web.getProjects(undefined, this.limit, this.offset).subscribe((data: any) => {
      this.projectQuery = data
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
