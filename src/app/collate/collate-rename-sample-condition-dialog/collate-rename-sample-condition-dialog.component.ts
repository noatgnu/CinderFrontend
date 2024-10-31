import {Component, Input} from '@angular/core';
import {Project} from "../../project/project";
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {
  CollateConditionColorEditorDialogComponent
} from "../collate-condition-color-editor-dialog/collate-condition-color-editor-dialog.component";
import {WebService} from "../../web.service";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from "@angular/material/table";
import {MatChip, MatChipSet} from "@angular/material/chips";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-collate-rename-sample-condition-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    ReactiveFormsModule,
    MatCell,
    MatCellDef,
    MatChip,
    MatChipSet,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatIcon,
    MatIconButton,
    MatRow,
    MatRowDef,
    MatTable,
    MatHeaderCellDef,
    MatDialogActions,
    MatButton,
  ],
  templateUrl: './collate-rename-sample-condition-dialog.component.html',
  styleUrl: './collate-rename-sample-condition-dialog.component.scss'
})
export class CollateRenameSampleConditionDialogComponent {
  displayedColumns: string[] = ["original", "display"]
  projectConditionMap: { [projectID: number]: string[] } = {}
  private _projects: Project[] = []
  @Input() set projects(value: Project[]) {

    this._projects = value.slice()
  }
  get projects(): Project[] {

    return this._projects
  }



  private _renameSampleCondition: {
    [projectID: number]: {
      [key: string]: string
    }
  } = {}

  @Input() set renameSampleCondition(value:{
    [projectID: number]: {
      [key: string]: string
    }
  }) {
    for (const project of this.projects) {
      this.web.getProjectUniqueConditions(project.id).subscribe((res) => {
        for (const conditionAnalysisGroup of res) {
          if (!this.formMap[conditionAnalysisGroup.AnalysisGroup.project]) {
            this.formMap[conditionAnalysisGroup.AnalysisGroup.project] = {}
          }
          if (!this.formMap[conditionAnalysisGroup.AnalysisGroup.project][conditionAnalysisGroup.Condition]) {
            const form: any = {}
            form[conditionAnalysisGroup.Condition] = new FormControl(conditionAnalysisGroup.Condition, Validators.required)
            this.formMap[conditionAnalysisGroup.AnalysisGroup.project][conditionAnalysisGroup.Condition] = this.fb.group(form)
          }

          if (!this.projectConditionMap[conditionAnalysisGroup.AnalysisGroup.project]) {
            this.projectConditionMap[conditionAnalysisGroup.AnalysisGroup.project] = []
          }
          if (!this.projectConditionMap[conditionAnalysisGroup.AnalysisGroup.project].includes(conditionAnalysisGroup.Condition)) {
            this.projectConditionMap[conditionAnalysisGroup.AnalysisGroup.project].push(conditionAnalysisGroup.Condition)
          }

          if (!this.renameSampleCondition[conditionAnalysisGroup.AnalysisGroup.project]) {
            this.renameSampleCondition[conditionAnalysisGroup.AnalysisGroup.project] = {}
          }
          if (!this.renameSampleCondition[conditionAnalysisGroup.AnalysisGroup.project][conditionAnalysisGroup.Condition]) {
            this.renameSampleCondition[conditionAnalysisGroup.AnalysisGroup.project][conditionAnalysisGroup.Condition] = conditionAnalysisGroup.Condition
          }
          if (value[conditionAnalysisGroup.AnalysisGroup.project]) {
            if (value[conditionAnalysisGroup.AnalysisGroup.project][conditionAnalysisGroup.Condition]) {
              this.renameSampleCondition[conditionAnalysisGroup.AnalysisGroup.project][conditionAnalysisGroup.Condition] = value[conditionAnalysisGroup.AnalysisGroup.project][conditionAnalysisGroup.Condition]
              this.formMap[conditionAnalysisGroup.AnalysisGroup.project][conditionAnalysisGroup.Condition].controls[conditionAnalysisGroup.Condition].setValue(value[conditionAnalysisGroup.AnalysisGroup.project][conditionAnalysisGroup.Condition])
            }
          }
        }}
      )
    }
  }

  get renameSampleCondition(): {
    [projectID: number]: {
      [key: string]: string
    }
  } {
    return this._renameSampleCondition
  }

  formMap: {[key: string]: {[key: string]: FormGroup}} = {}

  constructor(
    private dialog: MatDialogRef<CollateConditionColorEditorDialogComponent>,
    private web: WebService,
    private fb: FormBuilder,
    private sb: MatSnackBar
  ) {

  }

  close() {
    this.dialog.close()
  }

  submit() {
    for (const k in this.formMap) {
      for (const c in this.formMap[k]) {
        if (!this.formMap[k][c].valid) {
          this.sb.open(`${c} is invalid`)
          return
        }
      }
    }
    this.dialog.close(this.renameSampleCondition)
  }




}
