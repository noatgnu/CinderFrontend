import {Component, Input} from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {Project} from "../../project/project";
import {AnalysisGroup} from "../../analysis-group/analysis-group";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatButton} from "@angular/material/button";

@Component({
    selector: 'app-collate-project-analysis-group-visibility-dialog',
    imports: [
        MatDialogTitle,
        MatDialogContent,
        MatFormField,
        MatInput,
        FormsModule,
        MatLabel,
        MatCheckbox,
        MatDialogActions,
        MatButton
    ],
    templateUrl: './collate-project-analysis-group-visibility-dialog.component.html',
    styleUrl: './collate-project-analysis-group-visibility-dialog.component.scss'
})
export class CollateProjectAnalysisGroupVisibilityDialogComponent {
  private _projects: Project[] = []
  @Input() set projects(value: Project[]) {
    this._projects = value
  }
  get projects(): Project[] {
    return this._projects
  }

  private _projectAnalysisGroupMap: {[projectID: number]: AnalysisGroup[]} = {}

  @Input() set projectAnalysisGroupMap(value: {[projectID: number]: AnalysisGroup[]}) {
    this._projectAnalysisGroupMap = value
  }

  get projectAnalysisGroupMap(): {[projectID: number]: AnalysisGroup[]} {
    return this._projectAnalysisGroupMap
  }

  private _projectAnalysisGroupVisibilityMap: {[projectID: number]: {[analysisGroupID: number]: boolean}} = {}

  @Input() set projectAnalysisGroupVisibilityMap(value: {[projectID: number]: {[analysisGroupID: number]: boolean}}) {
    this._projectAnalysisGroupVisibilityMap = {}
    for (const projectID in value) {
      this._projectAnalysisGroupVisibilityMap[projectID] = {}
      for (const analysisGroupID in value[projectID]) {
        this._projectAnalysisGroupVisibilityMap[projectID][analysisGroupID] = value[projectID][analysisGroupID]
      }
    }
  }

  get projectAnalysisGroupVisibilityMap(): {[projectID: number]: {[analysisGroupID: number]: boolean}} {
    return this._projectAnalysisGroupVisibilityMap
  }

  constructor(private dialog: MatDialogRef<CollateProjectAnalysisGroupVisibilityDialogComponent>) {}

  close() {
    this.dialog.close()
  }

  save() {
    this.dialog.close(this.projectAnalysisGroupVisibilityMap)
  }

}
