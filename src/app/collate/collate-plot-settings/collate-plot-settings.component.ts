import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatButton} from "@angular/material/button";
import {MatDivider} from "@angular/material/divider";

export interface PlotSettings {
  marginLeft: number;
  marginRight: number;
  marginTop: number;
  marginBottom: number;
  titleTextSize: number;
  showTitle: boolean;
  height: number;
  barSize: number;
}

@Component({
    selector: 'app-collate-plot-settings',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatDialogTitle,
        MatDialogContent,
        ReactiveFormsModule,
        MatFormField,
        MatInput,
        MatLabel,
        MatCheckbox,
        MatDialogActions,
        MatButton,
        MatDivider
    ],
    templateUrl: './collate-plot-settings.component.html',
    styleUrl: './collate-plot-settings.component.scss'
})
export class CollatePlotSettingsComponent {
  private _settings: Partial<PlotSettings> = {};

  @Input() set settings(value: Partial<PlotSettings>) {
    if (value) {
      this._settings = { ...value };
      this.form.patchValue(this._settings);
    }
  }

  get settings(): Partial<PlotSettings> {
    return this._settings;
  }

  form = this.fb.group({
    marginLeft: 150,
    marginRight: 100,
    marginTop: 100,
    marginBottom: 100,
    titleTextSize: 14,
    showTitle: true,
    height: 500,
    barSize: 50,
  });

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialogRef<CollatePlotSettingsComponent>
  ) {}

  submit() {
    this.dialog.close(this.form.value);
  }

  close() {
    this.dialog.close();
  }
}
