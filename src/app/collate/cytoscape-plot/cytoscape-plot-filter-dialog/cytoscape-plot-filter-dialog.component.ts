import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {filter} from "rxjs";
import {MatButton} from "@angular/material/button";
import {MatOption, MatSelect} from "@angular/material/select";

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
    MatLabel,
    MatSelect,
    MatOption
  ],
  templateUrl: './cytoscape-plot-filter-dialog.component.html',
  styleUrl: './cytoscape-plot-filter-dialog.component.scss'
})
export class CytoscapePlotFilterDialogComponent {
  projects: string[] = [];
  analysisGroups: string[] = [];
  form = this.fb.group({
    log2fc: [0],
    pvalue: [0],
    projectNames: [[]],
    analysisGroupNames: [[]]
  })

  constructor(private dialogRef: MatDialogRef<CytoscapePlotFilterDialogComponent>, private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: { projects: string[], analysisGroups: string[], currentFilter: any }
  ) {
    this.projects = data.projects;
    this.analysisGroups = data.analysisGroups;
    this.form.patchValue(data.currentFilter)
  }

  close() {
    this.dialogRef.close()
  }

  submit() {
    this.dialogRef.close(this.form.value)
  }

  protected readonly filter = filter;
}
