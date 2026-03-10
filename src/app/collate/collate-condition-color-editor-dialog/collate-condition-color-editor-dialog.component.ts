import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy} from '@angular/core';
import {Project} from "../../project/project";
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {WebService} from "../../web.service";
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {Subject, takeUntil} from "rxjs";
import {GraphService} from "../../graph.service";

@Component({
    selector: 'app-collate-condition-color-editor-dialog',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatDialogTitle,
        MatDialogContent,
        FormsModule,
        MatButton,
        MatDialogActions
    ],
    templateUrl: './collate-condition-color-editor-dialog.component.html',
    styleUrl: './collate-condition-color-editor-dialog.component.scss'
})
export class CollateConditionColorEditorDialogComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  private _projects: Project[] = [];
  private colorIndex = 0;

  @Input() set projects(value: Project[]) {
    this._projects = value;
    for (const project of value) {
      this.web.getProjectUniqueConditions(project.id).pipe(takeUntil(this.destroy$)).subscribe((res) => {
        for (const conditionAnalysisGroup of res) {
          if (!this.projectConditionMap[conditionAnalysisGroup.AnalysisGroup.project]) {
            this.projectConditionMap[conditionAnalysisGroup.AnalysisGroup.project] = [];
          }
          if (!this.projectConditionMap[conditionAnalysisGroup.AnalysisGroup.project].includes(conditionAnalysisGroup.Condition)) {
            this.projectConditionMap[conditionAnalysisGroup.AnalysisGroup.project].push(conditionAnalysisGroup.Condition);
          }
          if (!this.projectConditionColorMap[conditionAnalysisGroup.AnalysisGroup.project]) {
            this.projectConditionColorMap[conditionAnalysisGroup.AnalysisGroup.project] = {};
          }
          if (!this.projectConditionColorMap[conditionAnalysisGroup.AnalysisGroup.project][conditionAnalysisGroup.Condition]) {
            this.projectConditionColorMap[conditionAnalysisGroup.AnalysisGroup.project][conditionAnalysisGroup.Condition] = this.getNextDefaultColor();
          } else {
            this.projectConditionColorMap[conditionAnalysisGroup.AnalysisGroup.project][conditionAnalysisGroup.Condition] =
              this.normalizeColor(this.projectConditionColorMap[conditionAnalysisGroup.AnalysisGroup.project][conditionAnalysisGroup.Condition]);
          }
        }
        this.cdr.markForCheck();
      });
    }
  }

  get projects(): Project[] {
    return this._projects;
  }

  projectConditionMap: { [projectID: number]: string[] } = {};
  private _projectConditionColorMap: { [projectID: number]: { [condition: string]: string } } = {};

  @Input() set projectConditionColorMap(value: { [projectID: number]: { [condition: string]: string } } | null | undefined) {
    if (value === null || value === undefined) {
      this._projectConditionColorMap = {};
      return;
    }
    const normalized: { [projectID: number]: { [condition: string]: string } } = {};
    for (const projectId in value) {
      normalized[projectId] = {};
      for (const condition in value[projectId]) {
        normalized[projectId][condition] = this.normalizeColor(value[projectId][condition]);
      }
    }
    this._projectConditionColorMap = normalized;
  }

  get projectConditionColorMap(): { [projectID: number]: { [condition: string]: string } } {
    return this._projectConditionColorMap;
  }

  constructor(
    private dialogRef: MatDialogRef<CollateConditionColorEditorDialogComponent>,
    private web: WebService,
    private cdr: ChangeDetectorRef,
    private graph: GraphService
  ) {}

  private getNextDefaultColor(): string {
    const color = this.graph.defaultColorList[this.colorIndex % this.graph.defaultColorList.length];
    this.colorIndex++;
    return color;
  }

  private normalizeColor(color: string): string {
    if (!color || color.trim() === '') {
      return this.getNextDefaultColor();
    }

    color = color.trim();

    if (/^#[0-9A-Fa-f]{6}$/.test(color)) {
      return color;
    }

    if (/^#[0-9A-Fa-f]{8}$/.test(color)) {
      return `#${color.slice(3, 9)}`;
    }

    if (/^#[0-9A-Fa-f]{3}$/.test(color)) {
      const r = color[1];
      const g = color[2];
      const b = color[3];
      return `#${r}${r}${g}${g}${b}${b}`;
    }

    if (/^#[0-9A-Fa-f]{4}$/.test(color)) {
      const r = color[2];
      const g = color[3];
      const b = color[4];
      return `#${r}${r}${g}${g}${b}${b}`;
    }

    const rgbMatch = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (rgbMatch) {
      const r = parseInt(rgbMatch[1], 10).toString(16).padStart(2, '0');
      const g = parseInt(rgbMatch[2], 10).toString(16).padStart(2, '0');
      const b = parseInt(rgbMatch[3], 10).toString(16).padStart(2, '0');
      return `#${r}${g}${b}`;
    }

    return this.getNextDefaultColor();
  }

  save() {
    this.dialogRef.close(this.projectConditionColorMap);
  }

  cancel() {
    this.dialogRef.close();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
