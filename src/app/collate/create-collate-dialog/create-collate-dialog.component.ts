import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {MatFormField, MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatLabel} from "@angular/material/form-field";

@Component({
  selector: 'app-create-collate-dialog',
  standalone: true,
  imports: [
    MatInput,
    MatFormField,
    ReactiveFormsModule,
    MatDialogActions,
    MatButton,
    MatDialogContent,
    MatDialogTitle,
    MatLabel
  ],
  templateUrl: './create-collate-dialog.component.html',
  styleUrl: './create-collate-dialog.component.scss'
})
export class CreateCollateDialogComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<CreateCollateDialogComponent>) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      greeting: ['', Validators.required]
    });
  }

  save() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  close() {
    this.dialogRef.close();
  }
}
