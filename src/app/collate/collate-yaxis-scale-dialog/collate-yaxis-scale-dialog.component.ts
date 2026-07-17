import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
import {MatButton} from "@angular/material/button";

export interface YAxisScaleSettings {
  yAxisMode: 'auto' | 'manual';
  yAxisMin: number;
  yAxisMax: number;
}

@Component({
  selector: 'app-collate-yaxis-scale-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatRadioModule,
    MatDialogActions,
    MatButton
  ],
  templateUrl: './collate-yaxis-scale-dialog.component.html',
  styleUrl: './collate-yaxis-scale-dialog.component.scss',
})
export class CollateYaxisScaleDialogComponent {
  @Input() set settings(value: Partial<YAxisScaleSettings>) {
    if (value) {
      this.form.patchValue(value);
    }
  }

  form = this.fb.group({
    yAxisMode: 'auto' as 'auto' | 'manual',
    yAxisMin: 0,
    yAxisMax: 100,
  });

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialogRef<CollateYaxisScaleDialogComponent>
  ) {}

  submit() {
    this.dialog.close(this.form.value);
  }

  close() {
    this.dialog.close();
  }
}