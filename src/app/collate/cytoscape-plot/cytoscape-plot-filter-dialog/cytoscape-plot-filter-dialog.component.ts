import { Component } from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {filter} from "rxjs";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-cytoscape-plot-filter-dialog',
  imports: [
    MatDialogTitle,
    MatDialogContent,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatDialogActions,
    MatButton,
    MatLabel
  ],
  templateUrl: './cytoscape-plot-filter-dialog.component.html',
  styleUrl: './cytoscape-plot-filter-dialog.component.scss'
})
export class CytoscapePlotFilterDialogComponent {

  form = this.fb.group({
    log2fc: [0],
    pvalue: [0],
  })

  constructor(private dialogRef: MatDialogRef<CytoscapePlotFilterDialogComponent>, private fb: FormBuilder) {
  }

  close() {
    this.dialogRef.close()
  }

  submit() {
    this.dialogRef.close(this.form.value)
  }

  protected readonly filter = filter;
}
