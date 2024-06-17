import {Component, Input} from '@angular/core';
import {ProjectFile} from "../../project-file";
import {WebService} from "../../web.service";
import {SampleAnnotation} from "../../sample-annotation";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatList, MatListItem} from "@angular/material/list";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatInput} from "@angular/material/input";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {MatAutocomplete} from "@angular/material/autocomplete";
import {ComparisonMatrix} from "../../comparison-matrix";

@Component({
  selector: 'app-analysis-group-comparison-matrix-modal',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatIconButton,
    MatIcon,
    ReactiveFormsModule,
    MatList,
    MatListItem,
    MatFormField,
    MatSelect,
    MatOption,
    MatLabel,
    MatInput,
    MatTabGroup,
    MatTab,
    MatDialogActions,
    MatButton,
    MatAutocomplete
  ],
  templateUrl: './analysis-group-comparison-matrix-modal.component.html',
  styleUrl: './analysis-group-comparison-matrix-modal.component.scss'
})
export class AnalysisGroupComparisonMatrixModalComponent {
  private _comparisonMatrix: ComparisonMatrix|undefined
  @Input() set comparisonMatrix(value: ComparisonMatrix) {
    this._comparisonMatrix = value
    this.form = value.matrix.map((comparison) => this.fb.group({
      condition_A: new FormControl<string|null>(comparison.condition_A, Validators.required),
      condition_B: new FormControl<string|null>(comparison.condition_B, Validators.required),
      fold_change_col: new FormControl<string|null>(comparison.fold_change_col, Validators.required),
      p_value_col: new FormControl<string|null>(comparison.p_value_col, Validators.required),
      comparison_label: new FormControl<string|null>(comparison.comparison_label, Validators.required),
      comparison_col: new FormControl<string|null>(comparison.comparison_col),
    }))
  }

  columns: string[] = []
  private _projectFile: ProjectFile|undefined
  @Input() set projectFile(value: ProjectFile) {
    this._projectFile = value
    this.web.getProjectFileColumns(value.id).subscribe((data) => {
      const columns: string[] = []
      data.forEach((column) => {
        if (!columns.includes(column)) {
          columns.push(column)
        }
      })
      this.columns = columns
    })
  }

  get projectFile(): ProjectFile {
    return this._projectFile!
  }
  conditions: string[] = []
  private _sampleAnnotations: SampleAnnotation|undefined
  @Input() set sampleAnnotations(value: SampleAnnotation) {
    this._sampleAnnotations = value
    if (value) {
      this.conditions = []
      value.annotations.forEach((annotation) => {
        if (!this.conditions.includes(annotation.Condition)) {
          this.conditions.push(annotation.Condition)
        }
      })
    }
  }

  get sampleAnnotations(): SampleAnnotation {
    return this._sampleAnnotations!
  }

  form: FormGroup<{
    condition_A: FormControl<string|null>,
    condition_B: FormControl<string|null>,
    fold_change_col: FormControl<string|null>,
    p_value_col: FormControl<string|null>,
    comparison_label: FormControl<string|null>,
    comparison_col: FormControl<string|null>,
  }>[] =[]

  constructor(private web: WebService, private fb: FormBuilder, private dialogRef: MatDialogRef<AnalysisGroupComparisonMatrixModalComponent>) {

  }

  addComparison() {
    this.form.push(this.fb.group({
      condition_A: new FormControl<string|null>(null, Validators.required),
      condition_B: new FormControl<string|null>(null, Validators.required),
      fold_change_col: new FormControl<string|null>(null, Validators.required),
      p_value_col: new FormControl<string|null>(null, Validators.required),
      comparison_label: new FormControl<string|null>(`comparison_${this.form.length+1}`, Validators.required),
      comparison_col: new FormControl<string|null>(null),
    }))
  }

  removeComparison(index: number) {
    this.form.splice(index, 1)
  }

  copyComparison(f: FormGroup) {
    this.form.push(this.fb.group({
      condition_A: new FormControl<string|null>(f.value.condition_A, Validators.required),
      condition_B: new FormControl<string|null>(f.value.condition_B, Validators.required),
      fold_change_col: new FormControl<string|null>(f.value.fold_change_col, Validators.required),
      p_value_col: new FormControl<string|null>(f.value.p_value_col, Validators.required),
      comparison_label: new FormControl<string|null>(`comparison_${this.form.length+1}`, Validators.required),
      comparison_col: new FormControl<string|null>(f.value.comparison_col),
    }))
  }

  save() {
    let valid = true
    this.form.forEach((group) => {
      if (!group.valid) {
        valid = false
      }
    })
    if (valid) {
      this.dialogRef.close(this.form.map((group) => group.value))
    }
  }

  cancel() {
    this.dialogRef.close()
  }

}