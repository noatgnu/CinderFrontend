import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {WebService} from "../../web.service";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {Project} from "../../project/project";
import {MatList, MatListItem, MatListItemTitle, MatListOption, MatSelectionList} from "@angular/material/list";

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
    MatListItemTitle
  ],
  templateUrl: './create-analysis-group-dialog.component.html',
  styleUrl: './create-analysis-group-dialog.component.scss'
})
export class CreateAnalysisGroupDialogComponent {
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
    project_id: new FormControl(0, Validators.required)
  })

  constructor(private web: WebService, private fb: FormBuilder, private matDialogRef: MatDialogRef<CreateAnalysisGroupDialogComponent>) {

  }

  close() {
    this.matDialogRef.close()
  }

  submit() {
    if (this.form.valid && this.project && this.form.value.name && this.form.value.description && this.form.value.project_id) {
      this.web.createAnalysisGroup(this.form.value.name, this.form.value.description, this.form.value.project_id).subscribe(
        (data) => {
          this.matDialogRef.close(data)
        },
        (error) => {
          this.matDialogRef.close(error)
        }
      )
    }

  }

}
