import {Component, EventEmitter, Input, Output} from '@angular/core';
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
    MatPaginator,
    MatChipGrid,
    MatChipRow,
    MatIcon,
    MatIconButton,
    MatChip,
    MatChipSet
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
  private _species: Species|undefined = undefined
  @Input() set species(value: Species|undefined) {
    this._species = value
    if (value) {
      // @ts-ignore
      this.web.getProjects(undefined, this.projectPageSize, 0, this.formProjectSearch.controls.searchTerm.value, value).subscribe((data) => {
        this.projectQuery = data
      })
    }
  }
  get species(): Species|undefined {
    return this._species
  }

  projectPageSize = 5
  projectPageIndex = 0
  projectQuery: ProjectQuery|undefined = undefined
  @Output() selectedProjects: EventEmitter<Project[]> = new EventEmitter<Project[]>()
  selectedMultipleProjects: Project[] = []
  constructor(private fb: FormBuilder, private web: WebService) {
    this.web.getProjects(undefined, this.projectPageSize, 0, undefined, this.species).subscribe((data) => {
      this.projectQuery = data
    })
    this.formProjectSearch.controls.searchTerm.valueChanges.subscribe((value: string|null) => {
      if (value) {
        this.web.getProjects(undefined, this.projectPageSize, 0, value, this.species).subscribe((data) => {
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
    this.web.getProjects(undefined, e.pageSize, offset, this.formProjectSearch.controls.searchTerm.value, this.species).subscribe((data) => {
      this.projectQuery = data
    })
  }

  removeProject(project: Project) {
    this.selectedMultipleProjects = this.selectedMultipleProjects.filter((value) => value !== project)
    this.selectedProjects.emit(this.selectedMultipleProjects)
  }
}
