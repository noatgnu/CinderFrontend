import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Project, ProjectQuery} from "../../project/project";
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {WebService} from "../../web.service";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatChip, MatChipSet} from "@angular/material/chips";
import {MatListOption, MatSelectionList} from "@angular/material/list";

@Component({
    selector: 'app-project-search',
    imports: [
        ReactiveFormsModule,
        MatFormField,
        MatInput,
        MatLabel,
        MatChipSet,
        MatChip,
        MatSelectionList,
        MatListOption,
        MatPaginator
    ],
    templateUrl: './project-search.component.html',
    styleUrl: './project-search.component.scss'
})
export class ProjectSearchComponent {
  @Input() multipleSelection: boolean = false;
  @Output() selectedProjects: EventEmitter<Project[]> = new EventEmitter<Project[]>();

  formProjectSearch = this.fb.group({
    searchTerm: new FormControl<string>('', Validators.required),
    selectedProjects: new FormControl<Project[] | null>([])
  });

  projectPageSize = 5;
  projectPageIndex = 0;
  projectQuery: ProjectQuery | undefined = undefined;
  selectedMultipleProjects: Project[] = [];

  constructor(private fb: FormBuilder, private web: WebService) {
    this.formProjectSearch.controls.searchTerm.valueChanges.subscribe((value: string | null) => {
      if (value) {
        this.fetchProjects(value, this.projectPageSize, 0);
      }
    });

    this.formProjectSearch.controls.selectedProjects.valueChanges.subscribe((value: Project[] | null) => {
      if (value) {
        for (const project of value) {
          if (!this.selectedMultipleProjects.includes(project)) {
            this.selectedMultipleProjects.push(project);
          }
        }
        this.selectedProjects.emit(this.selectedMultipleProjects);
      }
    });
  }

  fetchProjects(searchTerm: string, pageSize: number, pageIndex: number) {
    const offset = pageIndex * pageSize;
    this.web.getProjects(undefined, pageSize, offset, searchTerm, undefined).subscribe((data) => {
      this.projectQuery = data;
    });
  }

  handleProjectPageEvent(e: PageEvent) {
    this.projectPageIndex = e.pageIndex;
    this.fetchProjects(this.formProjectSearch.controls.searchTerm.value || '', e.pageSize, e.pageIndex);
  }

  removeProject(project: Project) {
    this.selectedMultipleProjects = this.selectedMultipleProjects.filter((value) => value !== project);
    this.selectedProjects.emit(this.selectedMultipleProjects);
  }
}
