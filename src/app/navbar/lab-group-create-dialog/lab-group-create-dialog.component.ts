import { Component } from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {WebService} from "../../web.service";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
    selector: 'app-lab-group-create-dialog',
    imports: [
        MatDialogTitle,
        MatDialogContent,
        ReactiveFormsModule,
        MatLabel,
        MatInput,
        MatFormField,
        MatDialogActions,
        MatButton
    ],
    templateUrl: './lab-group-create-dialog.component.html',
    styleUrl: './lab-group-create-dialog.component.scss'
})
export class LabGroupCreateDialogComponent {

  form = this.fb.group({
    name: ['', Validators.required],
  })



  constructor(private snackBar: MatSnackBar, private dialogRef: MatDialogRef<LabGroupCreateDialogComponent>, private web: WebService, private fb: FormBuilder) {
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    const name = this.form.value.name;

    if (name) {
      this.web.getLabGroups(name).subscribe({
        next: (response) => {
          if (response.results.length > 0) {
            this.snackBar.open('Lab group with this name already exists', 'Close', { duration: 3000 });
          } else {
            this.web.createLabGroup(name).subscribe({
              next: () => {
                this.snackBar.open('Lab group created successfully', 'Close', { duration: 3000 });
                this.dialogRef.close(true);
              },
              error: () => {
                this.snackBar.open('Error creating lab group', 'Close', { duration: 3000 });
              }
            });
          }
        },
        error: () => {
          this.snackBar.open('Error checking lab group name', 'Close', { duration: 3000 });
        }
      });
    }

  }

  close() {
    this.dialogRef.close()
  }

}
