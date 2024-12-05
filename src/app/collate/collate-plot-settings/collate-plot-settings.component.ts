import {Component, Input} from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-collate-plot-settings',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatCheckbox,
    MatDialogActions,
    MatButton
  ],
  templateUrl: './collate-plot-settings.component.html',
  styleUrl: './collate-plot-settings.component.scss'
})
export class CollatePlotSettingsComponent {
  private _settings: any = {}
  @Input() set settings(value: any) {
    for (const key in value) {
      this._settings[key] = value[key]

    }
    if (this._settings) {
      this.form.patchValue(this._settings)
    }
  }

  get settings(): any {
    return this._settings
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
  })

  constructor(private fb: FormBuilder, private dialog: MatDialogRef<CollatePlotSettingsComponent>) {
  }

  submit() {
    this.dialog.close(this.form.value)
  }

  close() {
    this.dialog.close()
  }

}
