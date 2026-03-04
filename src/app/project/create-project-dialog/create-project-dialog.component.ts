import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
    selector: 'app-create-project-dialog',
    changeDetection: ChangeDetectionStrategy.OnPush,
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
    name: ["", Validators.required],
    description: ["", Validators.required]
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
