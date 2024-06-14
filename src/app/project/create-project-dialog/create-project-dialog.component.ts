import { Component } from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-create-project-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatDialogActions,
    MatButton
  ],
  templateUrl: './create-project-dialog.component.html',
  styleUrl: './create-project-dialog.component.scss'
})
export class CreateProjectDialogComponent {
  form = this.fb.group({
    name: [""],
    description: [""]
  })

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<CreateProjectDialogComponent>) {
  }

  close() {
    this.dialogRef.close()

  }

  submit() {
    if (!this.form.valid) {
      return
    }
    this.dialogRef.close(this.form.value)
  }

}
