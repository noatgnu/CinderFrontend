import {Component, Input} from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-analysis-group-sdrf-validation-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton
  ],
  templateUrl: './analysis-group-sdrf-validation-dialog.component.html',
  styleUrl: './analysis-group-sdrf-validation-dialog.component.scss'
})
export class AnalysisGroupSdrfValidationDialogComponent {
  @Input() errors: string[] = []

  constructor(private dialog: MatDialogRef<AnalysisGroupSdrfValidationDialogComponent>) {

  }

  close() {
    this.dialog.close()
  }
}
