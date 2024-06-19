import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {WebService} from "../../web.service";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {Project, ProjectQuery} from "../../project/project";
import {MatList, MatListItem, MatListItemTitle, MatListOption, MatSelectionList} from "@angular/material/list";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatOption, MatSelect} from "@angular/material/select";
import {DataService} from "../../data.service";

@Component({
  selector: 'app-create-analysis-group-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatDialogActions,
    MatButton,
    MatSelectionList,
    MatListOption,
    MatList,
    MatListItem,
    MatLabel,
    MatListItemTitle,
    MatSelect,
    MatPaginator,
    MatOption
  ],
  templateUrl: './create-analysis-group-dialog.component.html',
  styleUrl: './create-analysis-group-dialog.component.scss'
})
export class CreateAnalysisGroupDialogComponent {
  @Input() enableProjectSelection: boolean = false

  private _project?: Project
  @Input() set project(value: Project) {
    this._project = value
    this.form.controls.project_id.setValue(value.id)
    this.form.controls.project_name.setValue(value.name)
  }

  get project(): Project {
    return this._project!
  }

  form = this.fb.group({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    project_name: new FormControl('', Validators.required),
    project_id: new FormControl(0, Validators.required),
    analysis_group_type: new FormControl('', Validators.required),
  })

  formProjectSearch = this.fb.group({
    searchTerm: new FormControl(""),
    selectedProject: new FormControl<Project[]|undefined>(undefined)
  })

  projectPageLimit = 5
  projectPageIndex = 0
  projectQuery: ProjectQuery|undefined = undefined
  analysisGroupTypeChoices = [
    ""
  ]
  constructor(public dataService: DataService, private web: WebService, private fb: FormBuilder, private matDialogRef: MatDialogRef<CreateAnalysisGroupDialogComponent>) {
    this.formProjectSearch.controls.selectedProject.valueChanges.subscribe((value: Project[]|undefined|null) => {
      if (value) {
        this.project = value[0]
      }
    })
    this.formProjectSearch.controls.searchTerm.valueChanges.subscribe((value: string|null) => {
      // @ts-ignore
      this.web.getProjects(undefined, this.projectPageLimit, 0, value).subscribe((data) => {
        this.projectQuery = data
      })
    })
  }

  close() {
    this.matDialogRef.close()
  }

  submit() {
    if (this.form.valid && this.project && this.form.value.name && this.form.value.description && this.form.value.project_id && this.form.value.analysis_group_type) {
      this.web.createAnalysisGroup(this.form.value.name, this.form.value.description, this.form.value.project_id, this.form.value.analysis_group_type).subscribe(
        (data) => {
          this.matDialogRef.close(data)
        },
        (error) => {
          this.matDialogRef.close(error)
        }
      )
    }
  }

  getProjects(offset?: number, limit?: number) {
    // @ts-ignore
    this.web.getProjects(undefined, limit, offset, this.formProjectSearch.value.searchTerm).subscribe((data) => {
      this.projectQuery = data
    })
  }

  handlePageEvent(e: PageEvent) {
    this.projectPageIndex = e.pageIndex
    const offset = e.pageIndex * e.pageSize
    this.getProjects(offset, this.projectPageLimit)
  }


}
