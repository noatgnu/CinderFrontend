import { Component } from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-are-you-sure-dialog',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule
  ],
  templateUrl: './are-you-sure-dialog.component.html',
  styleUrl: './are-you-sure-dialog.component.scss'
})
export class AreYouSureDialogComponent {
  constructor(private dialogRef: MatDialogRef<AreYouSureDialogComponent>) {

  }

  ok() {
    this.dialogRef.close(true)
  }

  cancel() {
    this.dialogRef.close(false)
  }

}
