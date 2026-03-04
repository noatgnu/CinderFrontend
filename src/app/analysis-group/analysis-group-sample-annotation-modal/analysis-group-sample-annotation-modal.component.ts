import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  Input,
  OnDestroy
} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, FormsModule, Validators} from "@angular/forms";
import {WebService} from "../../web.service";
import {ProjectFile} from "../../project-file";
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {MatFormField, MatHint, MatLabel, MatError, MatPrefix} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatInput} from "@angular/material/input";
import {MatButton, MatIconButton} from "@angular/material/button";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from "@angular/material/table";
import {SampleAnnotation} from "../../sample-annotation";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatIcon} from "@angular/material/icon";
import {MatDivider} from "@angular/material/divider";
import {MatTooltip} from "@angular/material/tooltip";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {Subject, takeUntil} from "rxjs";

type AnnotationFormGroup = FormGroup<{
  Sample: FormControl<string | null>,
  Condition: FormControl<string | null>
}>;

interface AnnotationRow {
  form: AnnotationFormGroup;
  selected: boolean;
}

@Component({
  selector: 'app-analysis-group-sample-annotation-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    ReactiveFormsModule,
    FormsModule,
    MatFormField,
    MatSelect,
    MatOption,
    MatLabel,
    MatHint,
    MatError,
    MatPrefix,
    MatInput,
    MatDialogActions,
    MatButton,
    MatIconButton,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    MatCellDef,
    MatHeaderCellDef,
    MatCheckbox,
    MatIcon,
    MatDivider,
    MatTooltip,
    MatProgressSpinner
  ],
  templateUrl: './analysis-group-sample-annotation-modal.component.html',
  styleUrl: './analysis-group-sample-annotation-modal.component.scss'
})
export class AnalysisGroupSampleAnnotationModalComponent implements OnDestroy {
  private destroy$ = new Subject<void>();

  columns: string[] = [];
  filteredColumns: string[] = [];
  isLoadingColumns = false;
  shiftPressed = false;
  lastSelectedColumnIndex = -1;
  columnSearchQuery = '';
  bulkConditionValue = '';
  displayedColumns: string[] = ['select', 'Sample', 'Condition', 'status'];

  annotationRows: AnnotationRow[] = [];
  selectedColumns: string[] = [];

  private _projectFile: ProjectFile | undefined;
  private _annotation: SampleAnnotation | undefined;

  @Input() set annotation(value: SampleAnnotation | undefined) {
    if (value) {
      this._annotation = value;
      this.annotationRows = value.annotations.map((row) => ({
        form: this.createAnnotationForm(row.Sample, row.Condition),
        selected: false
      }));
      this.selectedColumns = value.annotations.map(a => a.Sample);
      this.cdr.markForCheck();
    }
  }

  get annotation(): SampleAnnotation {
    return this._annotation!;
  }

  @Input() set projectFile(value: ProjectFile) {
    this._projectFile = value;
    this.isLoadingColumns = true;
    this.cdr.markForCheck();

    this.web.getProjectFileColumns(value.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.columns = [...new Set(data)];
        this.filteredColumns = this.columns;
        this.isLoadingColumns = false;
        this.cdr.markForCheck();
      });
  }

  get projectFile(): ProjectFile {
    return this._projectFile!;
  }

  get allColumnsSelected(): boolean {
    return this.filteredColumns.length > 0 &&
      this.filteredColumns.every(c => this.selectedColumns.includes(c));
  }

  get someColumnsSelected(): boolean {
    return this.filteredColumns.some(c => this.selectedColumns.includes(c)) &&
      !this.allColumnsSelected;
  }

  get allRowsSelected(): boolean {
    return this.annotationRows.length > 0 &&
      this.annotationRows.every(r => r.selected);
  }

  get someRowsSelected(): boolean {
    return this.annotationRows.some(r => r.selected) && !this.allRowsSelected;
  }

  get selectedRowCount(): number {
    return this.annotationRows.filter(r => r.selected).length;
  }

  constructor(
    private fb: FormBuilder,
    private web: WebService,
    private dialogRef: MatDialogRef<AnalysisGroupSampleAnnotationModalComponent>,
    private cdr: ChangeDetectorRef
  ) {}

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Shift') {
      this.shiftPressed = true;
    }
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    if (event.key === 'Shift') {
      this.shiftPressed = false;
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private createAnnotationForm(sample: string | null, condition: string | null): AnnotationFormGroup {
    return this.fb.group({
      Sample: new FormControl<string | null>(sample, Validators.required),
      Condition: new FormControl<string | null>(condition, Validators.required)
    });
  }

  private parseConditionFromSample(sample: string): string {
    const parts = sample.split(/\./g);
    if (parts.length > 2) {
      return parts.slice(0, parts.length - 1).join(".");
    } else if (parts.length === 2) {
      return parts[0];
    }
    return "";
  }

  filterColumns(query: string) {
    this.columnSearchQuery = query;
    if (!query) {
      this.filteredColumns = this.columns;
    } else {
      const lowerQuery = query.toLowerCase();
      this.filteredColumns = this.columns.filter(c =>
        c.toLowerCase().includes(lowerQuery)
      );
    }
    this.cdr.markForCheck();
  }

  toggleColumnSelection(column: string, index: number) {
    const isSelected = this.selectedColumns.includes(column);

    if (this.shiftPressed && this.lastSelectedColumnIndex > -1) {
      const start = Math.min(this.lastSelectedColumnIndex, index);
      const end = Math.max(this.lastSelectedColumnIndex, index);
      for (let i = start; i <= end; i++) {
        const col = this.filteredColumns[i];
        if (!this.selectedColumns.includes(col)) {
          this.addColumn(col);
        }
      }
    } else {
      if (isSelected) {
        this.removeColumn(column);
      } else {
        this.addColumn(column);
      }
    }

    this.lastSelectedColumnIndex = index;
    this.cdr.markForCheck();
  }

  private addColumn(column: string) {
    if (!this.selectedColumns.includes(column)) {
      this.selectedColumns.push(column);
      const condition = this.parseConditionFromSample(column);
      this.annotationRows.push({
        form: this.createAnnotationForm(column, condition),
        selected: false
      });
    }
  }

  private removeColumn(column: string) {
    const colIndex = this.selectedColumns.indexOf(column);
    if (colIndex > -1) {
      this.selectedColumns.splice(colIndex, 1);
      const rowIndex = this.annotationRows.findIndex(r => r.form.value.Sample === column);
      if (rowIndex > -1) {
        this.annotationRows.splice(rowIndex, 1);
      }
    }
  }

  toggleAllColumns() {
    if (this.allColumnsSelected) {
      this.filteredColumns.forEach(c => this.removeColumn(c));
    } else {
      this.filteredColumns.forEach(c => this.addColumn(c));
    }
    this.cdr.markForCheck();
  }

  isColumnSelected(column: string): boolean {
    return this.selectedColumns.includes(column);
  }

  toggleRowSelection(row: AnnotationRow) {
    row.selected = !row.selected;
    this.cdr.markForCheck();
  }

  toggleAllRows() {
    const newValue = !this.allRowsSelected;
    this.annotationRows.forEach(r => r.selected = newValue);
    this.cdr.markForCheck();
  }

  applyBulkCondition() {
    if (!this.bulkConditionValue.trim()) return;

    this.annotationRows
      .filter(r => r.selected)
      .forEach(r => {
        r.form.controls.Condition.setValue(this.bulkConditionValue.trim());
        r.form.controls.Condition.markAsDirty();
      });

    this.bulkConditionValue = '';
    this.cdr.markForCheck();
  }

  clearSelection() {
    this.annotationRows.forEach(r => r.selected = false);
    this.cdr.markForCheck();
  }

  isRowValid(row: AnnotationRow): boolean {
    return row.form.valid;
  }

  save() {
    const allValid = this.annotationRows.every(r => r.form.valid);

    if (allValid) {
      const data = this.annotationRows.map(r => r.form.value);
      this.dialogRef.close(data);
    } else {
      this.annotationRows.forEach(r => r.form.markAllAsTouched());
      this.cdr.markForCheck();
    }
  }

  cancel() {
    this.dialogRef.close();
  }
}
