import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {WebService} from "../../web.service";
import {Project} from "../../project/project";
import {ProjectFile} from "../../project-file";
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect, MatSelectChange} from "@angular/material/select";
import {MatInput} from "@angular/material/input";
import {Observable} from "rxjs";
import {MatListOption, MatSelectionList} from "@angular/material/list";
import {MatButton} from "@angular/material/button";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from "@angular/material/table";
import {SampleAnnotation} from "../../sample-annotation";

@Component({
  selector: 'app-analysis-group-sample-annotation-modal',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    ReactiveFormsModule,
    MatFormField,
    MatSelect,
    MatOption,
    MatLabel,
    MatInput,
    FormsModule,
    MatSelectionList,
    MatListOption,
    MatDialogActions,
    MatButton,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    MatCellDef,
    MatHeaderCellDef
  ],
  templateUrl: './analysis-group-sample-annotation-modal.component.html',
  styleUrl: './analysis-group-sample-annotation-modal.component.scss'
})
export class AnalysisGroupSampleAnnotationModalComponent {
  @ViewChild('table') table: MatTable<any>|undefined
  columns: string[] = []
  shiftPressed: boolean = false;
  private _projectFile: ProjectFile|undefined
  displayedColumns: string[] = ['Sample', 'Condition']

  private _annotation: SampleAnnotation|undefined
  @Input() set annotation(value: SampleAnnotation|undefined) {
    if (value) {
      this._annotation = value
      this.annotationData = value.annotations.map((row) => {
        return this.fb.group({
          Sample: new FormControl<string|null>(row.Sample, Validators.required),
          Condition: new FormControl<string|null>(row.Condition, Validators.required)
        })
      })
      // @ts-ignore
      this.form.patchValue({columns: this.annotationData.map((row) => row.value.Sample)})
    }
  }

  get annotation(): SampleAnnotation {
    return this._annotation!
  }

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

  form = this.fb.group({
    columns: new FormControl<string[]>([]),
  })

  annotationData: FormGroup<
    {Sample: FormControl<string|null>, Condition: FormControl<string|null>}
  >[] = []

  lastSelectedIndex: number = -1;

  lastSelection: string[] = []

  onSelectionChange(event: MatSelectChange) {
    console.log(event)
    const matSelect = event.source;
    console.log(matSelect)
    let selectedIndex = -1
    const selectedOption = matSelect.selected as MatOption[]
    let selected: MatOption|undefined = undefined
    for (let i = 0; i < selectedOption.length; i++) {
      if (!this.lastSelection.find((column) => column === selectedOption[i].value)) {
        selected = selectedOption[i]
        break
      }
    }
    console.log(selected?.value)
    const availableOptions = matSelect.options.toArray();
    selectedIndex = availableOptions.indexOf(selected as MatOption);

    if (this.shiftPressed && this.lastSelectedIndex > -1) {
      availableOptions.forEach((option, index) => {
        if (this.isBetween(index, this.lastSelectedIndex, selectedIndex)) {
          console.log(option)
          option.select();
        }
      });
    }

    // @ts-ignore
    this.lastSelection = this.form.value.columns?.slice()
    this.lastSelectedIndex = selectedIndex;
    this.table?.renderRows()

  }

  constructor(private fb: FormBuilder, private web: WebService, private dialogRef: MatDialogRef<AnalysisGroupSampleAnnotationModalComponent>) {
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Shift') {
        this.shiftPressed = true;
      }
    });

    window.addEventListener('keyup', (event) => {
      if (event.key === 'Shift') {
        this.shiftPressed = false;
      }
    });

    this.form.controls.columns.valueChanges.subscribe((value) => {
      if (value) {
        // @ts-ignore
        const data = value.map((column: string) => {
          const conditionSplit = column.split(/\./g)
          console.log(conditionSplit)
          if (conditionSplit.length > 2) {
            return {Sample: column, Condition: conditionSplit.slice(0, conditionSplit.length - 1).join(".")}
          } else if (conditionSplit.length === 2) {
            return {Sample: column, Condition: conditionSplit[0]}
          }
          return {Sample: column, Condition: ""}
        })
        for (let i = 0; i < data.length; i ++) {
          this.annotationData.find((row) => row.value.Sample === data[i].Sample) ||
          this.annotationData.push(
            this.fb.group({
              Sample: new FormControl<string|null>(data[i].Sample, Validators.required),
              Condition: new FormControl<string|null>(data[i].Condition, Validators.required)
              })
          )
        }
        for (let i = 0; i < this.annotationData.length; i++) {
          if (this.annotationData[i].value.Sample) {
            // @ts-ignore
            if (!value.includes(this.annotationData[i].value.Sample)) {
              this.annotationData.splice(i, 1)
            }
          }

        }
      }
    })
  }

  cancel() {
    this.dialogRef.close()
  }

  save() {
    let valid = true
    const data = this.annotationData.map((row) => {
      if (!row.valid) {
        valid = false
      }
      return row.value
    })
    if (valid) {
      this.dialogRef.close(
        data
      )
    }
  }

  handleAutoCompleteChange(event: any, value: string) {
    console.log(event, value)
  }
  private isBetween(value: number, start: number, end: number): boolean {
    return (start < end) ? value >= start && value <= end : value >= end && value <= start;
  }
}
