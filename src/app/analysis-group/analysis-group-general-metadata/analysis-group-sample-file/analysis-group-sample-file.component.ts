import { Component } from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
    selector: 'app-analysis-group-sample-file',
    imports: [
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
        MatButton,
        ReactiveFormsModule,
        MatFormField,
        MatLabel,
        MatInput
    ],
    templateUrl: './analysis-group-sample-file.component.html',
    styleUrl: './analysis-group-sample-file.component.scss'
})
export class AnalysisGroupSampleFileComponent {
  form = this.fb.group({
    name: ['', Validators.required],
    description: [''],
  })

  constructor(private dialog: MatDialogRef<AnalysisGroupSampleFileComponent>, private fb: FormBuilder) {

  }

  close() {
    this.dialog.close()
  }

  submit() {
    if (this.form.invalid) {
      return
    }
    this.dialog.close(this.form.value)
  }

}
