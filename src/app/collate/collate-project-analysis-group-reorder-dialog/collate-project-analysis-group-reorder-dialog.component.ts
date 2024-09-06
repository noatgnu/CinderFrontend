import {Component, Input} from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {Project} from "../../project/project";
import {MatList, MatListItem, MatListItemLine, MatListSubheaderCssMatStyler} from "@angular/material/list";
import {AnalysisGroup} from "../../analysis-group/analysis-group";
import {MatDivider} from "@angular/material/divider";
import {MatIcon} from "@angular/material/icon";
import {CdkDrag, CdkDragDrop, CdkDragHandle, CdkDropList, moveItemInArray} from "@angular/cdk/drag-drop";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-collate-project-analysis-group-reorder-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatList,
    MatListSubheaderCssMatStyler,
    MatListItem,
    MatDivider,
    MatIcon,
    MatListItemLine,
    CdkDragHandle,
    CdkDropList,
    CdkDrag,
    MatDialogActions,
    MatButton,
    MatDialogClose
  ],
  templateUrl: './collate-project-analysis-group-reorder-dialog.component.html',
  styleUrl: './collate-project-analysis-group-reorder-dialog.component.scss'
})
export class CollateProjectAnalysisGroupReorderDialogComponent {
  private _projectAnalysisGroupMap: {[projectID: number]: AnalysisGroup[]} = {}
  private _projects: Project[] = []
  @Input() set projects(value: Project[]) {
    this._projects = value.slice()
  }
  get projects(): Project[] {
    return this._projects
  }

  @Input() set projectAnalysisGroupMap(value: {[projectID: number]: AnalysisGroup[]}) {
    this._projectAnalysisGroupMap = value
  }

  get projectAnalysisGroupMap(): {[projectID: number]: AnalysisGroup[]} {
    return this._projectAnalysisGroupMap
  }

  constructor(private dialogRef: MatDialogRef<CollateProjectAnalysisGroupReorderDialogComponent>) {}

  save() {
    this.dialogRef.close({projects: this.projects, projectAnalysisGroupMap: this.projectAnalysisGroupMap})
  }

  cancel() {
    this.dialogRef.close()
  }

  drop(event: CdkDragDrop<AnalysisGroup[]>, projectId: number) {
    moveItemInArray(this.projectAnalysisGroupMap[projectId], event.previousIndex, event.currentIndex);
  }

  dropProject(event: CdkDragDrop<Project[]>) {
    moveItemInArray(this.projects, event.previousIndex, event.currentIndex);
  }
}
