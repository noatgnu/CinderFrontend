import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {Project, ProjectQuery} from "../../project/project";
import {WebService} from "../../web.service";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatListOption, MatSelectionList} from "@angular/material/list";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-project-search',
  standalone: true,
  imports: [
    MatSelectionList,
    MatListOption,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatPaginator
  ],
  templateUrl: './project-search.component.html',
  styleUrl: './project-search.component.scss'
})
export class ProjectSearchComponent {
  @Input() multipleSelection: boolean = false
  formProjectSearch = this.fb.group({
    searchTerm: new FormControl<string>("", Validators.required),
    selectedProjects: new FormControl<Project[]|null>([])
  })

  projectPageSize = 5
  projectPageIndex = 0
  projectQuery: ProjectQuery|undefined = undefined
  @Output() selectedProjects: EventEmitter<Project[]> = new EventEmitter<Project[]>()
  selectedMultipleProjects: Project[] = []
  constructor(private fb: FormBuilder, private web: WebService) {
    this.web.getProjects(undefined, this.projectPageSize, 0).subscribe((data) => {
      this.projectQuery = data
    })
    this.formProjectSearch.controls.searchTerm.valueChanges.subscribe((value: string|null) => {
      if (value) {
        this.web.getProjects(undefined, this.projectPageSize, 0, value).subscribe((data) => {
          this.projectQuery = data
        })
      }
    })
    this.formProjectSearch.controls.selectedProjects.valueChanges.subscribe((value: Project[]|null) => {
      if (value) {
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

      }
    })
  }

  handleProjectPageEvent(e: PageEvent) {
    const offset = e.pageIndex * e.pageSize
    this.projectPageIndex = e.pageIndex
    // @ts-ignore
    this.web.getProjects(undefined, e.pageSize, offset, this.formProjectSearch.controls.searchTerm.value).subscribe((data) => {
      this.projectQuery = data
    })
  }
}
