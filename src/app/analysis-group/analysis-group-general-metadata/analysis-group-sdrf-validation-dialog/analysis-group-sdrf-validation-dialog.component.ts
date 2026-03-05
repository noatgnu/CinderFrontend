import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";

@Component({
    selector: 'app-analysis-group-sdrf-validation-dialog',
    changeDetection: ChangeDetectionStrategy.OnPush,
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
  private _errors: string[] = [];
  @Input() set errors(value: string[]) {
    this._errors = value;
    this.cdr.markForCheck();
  }
  get errors(): string[] {
    return this._errors;
  }

  constructor(private dialog: MatDialogRef<AnalysisGroupSdrfValidationDialogComponent>, private cdr: ChangeDetectorRef) {

  }

  close() {
    this.dialog.close()
  }
}
