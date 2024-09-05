import { Component } from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Project, ProjectQuery} from "../../project/project";
import {WebService} from "../../web.service";
import {ProjectSearchComponent} from "../project-search/project-search.component";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-project-add-dialog',
  standalone: true,
  imports: [
    ProjectSearchComponent,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton
  ],
  templateUrl: './project-add-dialog.component.html',
  styleUrl: './project-add-dialog.component.scss'
})
export class ProjectAddDialogComponent {

  formProjectSearch = this.fb.group({
    searchTerm: new FormControl<string>("", Validators.required),
    selectedProjects: new FormControl<Project[]|null>([])
  })

  projectPageSize = 5
  projectPageIndex = 0
  projectQuery: ProjectQuery|undefined = undefined
  selectedMultipleProjects: Project[] = []
  multipleSelection = true


  constructor(private dialogRef: MatDialogRef<ProjectAddDialogComponent>, private fb: FormBuilder, private web: WebService) {
    this.web.getProjects(undefined, this.projectPageSize, 0, undefined).subscribe((data) => {
      this.projectQuery = data
    })
    this.formProjectSearch.controls.searchTerm.valueChanges.subscribe((value: string|null) => {
      if (value) {
        this.web.getProjects(undefined, this.projectPageSize, 0, value).subscribe((data) => {
          this.projectQuery = data
        })
      }
    })

  }

  handleSelectedProjects(projects: Project[]) {
    this.selectedMultipleProjects = projects
  }

  close() {
    this.dialogRef.close()
  }

  save() {
    this.dialogRef.close(this.selectedMultipleProjects)
  }
}
