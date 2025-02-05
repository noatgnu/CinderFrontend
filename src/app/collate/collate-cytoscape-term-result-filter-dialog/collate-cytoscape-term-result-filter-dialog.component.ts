import {Component, Input} from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-collate-cytoscape-term-result-filter-dialog',
  imports: [
    MatDialogTitle,
    MatDialogContent,
    ReactiveFormsModule,
    MatFormField,
    MatSelect,
    MatOption,
    MatDialogActions,
    MatButton,
    MatLabel
  ],
  templateUrl: './collate-cytoscape-term-result-filter-dialog.component.html',
  styleUrl: './collate-cytoscape-term-result-filter-dialog.component.scss'
})
export class CollateCytoscapeTermResultFilterDialogComponent {
  @Input() searchTerms: string[] = []
  form = this.fb.group({
    searchTerms: this.fb.control([''],),
  })

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<CollateCytoscapeTermResultFilterDialogComponent>) {
  }

  close() {
    this.dialogRef.close()
  }

  submit() {
    this.dialogRef.close(this.form.value)
  }

}
