import {Component, Input} from '@angular/core';
import {Project} from "../../project/project";
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {WebService} from "../../web.service";
import {MatList, MatListItem, MatListItemLine, MatListSubheaderCssMatStyler} from "@angular/material/list";
import {NgxColorsModule} from "ngx-colors";
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-collate-condition-color-editor-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatList,
    MatListSubheaderCssMatStyler,
    MatListItem,
    MatListItemLine,
    NgxColorsModule,
    FormsModule,
    MatButton,
    MatDialogActions
  ],
  templateUrl: './collate-condition-color-editor-dialog.component.html',
  styleUrl: './collate-condition-color-editor-dialog.component.scss'
})
export class CollateConditionColorEditorDialogComponent {
  private _projects: Project[] = []
  @Input() set projects(value: Project[]) {
    this._projects = value
    for (const project of value) {
      this.web.getProjectUniqueConditions(project.id).subscribe((res) => {
        for (const conditionAnalysisGroup of res) {
          if (!this.projectConditionMap[conditionAnalysisGroup.AnalysisGroup.project]) {
            this.projectConditionMap[conditionAnalysisGroup.AnalysisGroup.project] = []
          }
          if (!this.projectConditionMap[conditionAnalysisGroup.AnalysisGroup.project].includes(conditionAnalysisGroup.Condition)) {
            this.projectConditionMap[conditionAnalysisGroup.AnalysisGroup.project].push(conditionAnalysisGroup.Condition)
          }
          if (!this.projectConditionColorMap[conditionAnalysisGroup.AnalysisGroup.project]) {
            this.projectConditionColorMap[conditionAnalysisGroup.AnalysisGroup.project] = {}
          }
          if (!this.projectConditionColorMap[conditionAnalysisGroup.AnalysisGroup.project][conditionAnalysisGroup.Condition]) {
            this.projectConditionColorMap[conditionAnalysisGroup.AnalysisGroup.project][conditionAnalysisGroup.Condition] = ""
          }
        }}
      )
    }

  }

  get projects(): Project[] {
    return this._projects
  }

  projectConditionMap: { [projectID: number]: string[] } = {}
  private _projectConditionColorMap: { [projectID: number]: { [condition: string]: string } } = {}

  @Input() set projectConditionColorMap(value: { [projectID: number]: { [condition: string]: string } }|null|undefined) {
    if (value === null || value === undefined) {
      this._projectConditionColorMap = {}
      return
    }
    this._projectConditionColorMap = Object.assign({}, value)

  }

  get projectConditionColorMap(): { [projectID: number]: { [condition: string]: string } } {
    return this._projectConditionColorMap
  }

  constructor(private dialogRef: MatDialogRef<CollateConditionColorEditorDialogComponent>, private web: WebService) {
  }

  save() {
    this.dialogRef.close(this.projectConditionColorMap)
  }

  cancel() {
    this.dialogRef.close()
  }

}
