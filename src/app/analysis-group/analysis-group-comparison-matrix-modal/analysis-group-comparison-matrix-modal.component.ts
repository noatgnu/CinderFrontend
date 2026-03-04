import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy} from '@angular/core';
import {ProjectFile} from "../../project-file";
import {WebService} from "../../web.service";
import {SampleAnnotation} from "../../sample-annotation";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatFormField, MatHint, MatLabel, MatError} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatInput} from "@angular/material/input";
import {ComparisonMatrix} from "../../comparison-matrix";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {MatDivider} from "@angular/material/divider";
import {MatTooltip} from "@angular/material/tooltip";
import {Subject, takeUntil} from "rxjs";

type ComparisonFormGroup = FormGroup<{
  condition_A: FormControl<string | null>,
  condition_B: FormControl<string | null>,
  fold_change_col: FormControl<string | null>,
  p_value_col: FormControl<string | null>,
  comparison_label: FormControl<string | null>,
  comparison_col: FormControl<string | null>,
}>;

@Component({
  selector: 'app-analysis-group-comparison-matrix-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatIconButton,
    MatIcon,
    ReactiveFormsModule,
    MatFormField,
    MatSelect,
    MatOption,
    MatLabel,
    MatHint,
    MatError,
    MatInput,
    MatDialogActions,
    MatButton,
    MatProgressSpinner,
    MatDivider,
    MatTooltip
  ],
  templateUrl: './analysis-group-comparison-matrix-modal.component.html',
  styleUrl: './analysis-group-comparison-matrix-modal.component.scss'
})
export class AnalysisGroupComparisonMatrixModalComponent implements OnDestroy {
  private destroy$ = new Subject<void>();

  isLoadingColumns = false;
  isLoadingLabels = false;
  selectedIndex = 0;
  comparison_labels_map: { [key: string]: string[] } = {};
  columns: string[] = [];
  conditions: string[] = [];
  forms: ComparisonFormGroup[] = [];

  private _comparisonMatrix: ComparisonMatrix | undefined;
  private _projectFile: ProjectFile | undefined;
  private _sampleAnnotations: SampleAnnotation | undefined;

  @Input() set comparisonMatrix(value: ComparisonMatrix) {
    this._comparisonMatrix = value;
    this.forms = value.matrix.map((comparison) => this.createFormGroup(
      comparison.condition_A,
      comparison.condition_B,
      comparison.fold_change_col,
      comparison.p_value_col,
      comparison.comparison_label,
      comparison.comparison_col
    ));

    for (const f of this.forms) {
      this.setupFormSubscriptions(f);
      const comparisonCol = f.controls.comparison_col.value;
      if (comparisonCol) {
        this.loadComparisonLabels(value.file, comparisonCol);
      }
    }

    if (this.forms.length > 0) {
      this.selectedIndex = 0;
    }
    this.cdr.markForCheck();
  }

  get comparisonMatrix(): ComparisonMatrix {
    return this._comparisonMatrix!;
  }

  @Input() set projectFile(value: ProjectFile) {
    this._projectFile = value;
    this.isLoadingColumns = true;
    this.cdr.markForCheck();

    this.web.getProjectFileColumns(value.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.columns = [...new Set(data)];
        this.isLoadingColumns = false;
        this.cdr.markForCheck();
      });
  }

  get projectFile(): ProjectFile {
    return this._projectFile!;
  }

  @Input() set sampleAnnotations(value: SampleAnnotation) {
    this._sampleAnnotations = value;
    if (value) {
      this.conditions = [...new Set(value.annotations.map(a => a.Condition))];
      this.cdr.markForCheck();
    }
  }

  get sampleAnnotations(): SampleAnnotation {
    return this._sampleAnnotations!;
  }

  get selectedForm(): ComparisonFormGroup | null {
    return this.forms[this.selectedIndex] || null;
  }

  constructor(
    private web: WebService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AnalysisGroupComparisonMatrixModalComponent>,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private createFormGroup(
    conditionA: string | null = null,
    conditionB: string | null = null,
    foldChangeCol: string | null = null,
    pValueCol: string | null = null,
    comparisonLabel: string | null = null,
    comparisonCol: string | null = null
  ): ComparisonFormGroup {
    return this.fb.group({
      condition_A: new FormControl<string | null>(conditionA, Validators.required),
      condition_B: new FormControl<string | null>(conditionB, Validators.required),
      fold_change_col: new FormControl<string | null>(foldChangeCol, Validators.required),
      p_value_col: new FormControl<string | null>(pValueCol, Validators.required),
      comparison_label: new FormControl<string | null>(comparisonLabel || `comparison_${this.forms.length + 1}`, Validators.required),
      comparison_col: new FormControl<string | null>(comparisonCol),
    });
  }

  private setupFormSubscriptions(form: ComparisonFormGroup) {
    form.controls.comparison_col.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        if (data && this._comparisonMatrix) {
          this.loadComparisonLabels(this._comparisonMatrix.file, data);
        }
      });

    form.controls.comparison_label.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        if (!data) {
          form.controls.comparison_label.setValue("temp_title");
        }
        this.cdr.markForCheck();
      });
  }

  private loadComparisonLabels(fileId: number, column: string) {
    this.isLoadingLabels = true;
    this.cdr.markForCheck();

    this.web.getUniqueComparisonLabel(fileId, column)
      .pipe(takeUntil(this.destroy$))
      .subscribe((labels) => {
        this.comparison_labels_map[column] = labels;
        this.isLoadingLabels = false;
        this.cdr.markForCheck();
      });
  }

  selectComparison(index: number) {
    this.selectedIndex = index;
    this.cdr.markForCheck();
  }

  addComparison() {
    const form = this.createFormGroup();
    this.forms.push(form);
    this.setupFormSubscriptions(form);
    this.selectedIndex = this.forms.length - 1;
    this.cdr.markForCheck();
  }

  removeComparison(index: number) {
    this.forms.splice(index, 1);
    if (this.selectedIndex >= this.forms.length) {
      this.selectedIndex = Math.max(0, this.forms.length - 1);
    }
    this.cdr.markForCheck();
  }

  copyComparison(form: ComparisonFormGroup) {
    const newForm = this.createFormGroup(
      form.value.condition_A,
      form.value.condition_B,
      form.value.fold_change_col,
      form.value.p_value_col,
      `comparison_${this.forms.length + 1}`,
      form.value.comparison_col
    );
    this.forms.push(newForm);
    this.setupFormSubscriptions(newForm);
    this.selectedIndex = this.forms.length - 1;
    this.cdr.markForCheck();
  }

  isFormValid(form: ComparisonFormGroup): boolean {
    return form.valid;
  }

  save() {
    const allValid = this.forms.every(form => form.valid);
    if (allValid) {
      this.dialogRef.close(this.forms.map((group) => group.value));
    } else {
      this.forms.forEach(form => form.markAllAsTouched());
      this.cdr.markForCheck();
    }
  }

  cancel() {
    this.dialogRef.close();
  }
}
