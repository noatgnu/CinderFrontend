import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDragHandle, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatList, MatListItem, MatListItemLine, MatListSubheaderCssMatStyler } from '@angular/material/list';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { Subject, takeUntil } from 'rxjs';
import { Project } from '../../project/project';
import { AnalysisGroup } from '../../analysis-group/analysis-group';
import { WebService } from '../../web.service';
import { ProjectConditionOrderEntry } from '../collate';

@Component({
  selector: 'app-collate-condition-order-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatIconButton,
    MatDivider,
    MatIcon,
    MatList,
    MatListItem,
    MatListItemLine,
    MatListSubheaderCssMatStyler,
    CdkDropList,
    CdkDrag,
    CdkDragHandle,
    MatSelect,
    MatOption,
    MatFormField,
    MatLabel,
  ],
  templateUrl: './collate-condition-order-dialog.component.html',
  styleUrl: './collate-condition-order-dialog.component.scss',
})
export class CollateConditionOrderDialogComponent implements OnDestroy {
  private destroy$ = new Subject<void>();

  private _projects: Project[] = [];
  projectConditions: { [projectID: number]: string[] } = {};
  projectConditionOrder: { [projectID: number]: ProjectConditionOrderEntry } = {};
  projectAnalysisGroups: { [projectID: number]: AnalysisGroup[] } = {};
  selectedAgOverride: { [projectID: number]: number | null } = {};

  @Input() set projects(value: Project[]) {
    this._projects = value;
    for (const project of value) {
      if (!this.projectConditionOrder[project.id]) {
        this.projectConditionOrder[project.id] = { global: [], perAnalysisGroup: {} };
      }
      this.selectedAgOverride[project.id] = null;
      this.web.getProjectUniqueConditions(project.id).pipe(takeUntil(this.destroy$)).subscribe(res => {
        const conditions: string[] = [];
        for (const entry of res) {
          if (!conditions.includes(entry.Condition)) conditions.push(entry.Condition);
        }
        this.projectConditions[project.id] = conditions;
        const order = this.projectConditionOrder[project.id];
        const existing = new Set(order.global);
        for (const c of conditions) {
          if (!existing.has(c)) order.global.push(c);
        }
        this.cdr.markForCheck();
      });
      this.web.getAnalysisGroupsFromProjects([project]).pipe(takeUntil(this.destroy$)).subscribe(ags => {
        this.projectAnalysisGroups[project.id] = ags;
        this.cdr.markForCheck();
      });
    }
  }

  get projects(): Project[] { return this._projects; }

  @Input() set initialOrder(value: { [projectID: number]: ProjectConditionOrderEntry } | null | undefined) {
    if (!value) return;
    for (const pid in value) {
      this.projectConditionOrder[pid] = {
        global: [...(value[pid].global ?? [])],
        perAnalysisGroup: Object.fromEntries(
          Object.entries(value[pid].perAnalysisGroup ?? {}).map(([k, v]) => [k, [...v]])
        ),
      };
    }
  }

  constructor(
    private dialogRef: MatDialogRef<CollateConditionOrderDialogComponent>,
    private web: WebService,
    private cdr: ChangeDetectorRef,
  ) {}

  dropGlobal(event: CdkDragDrop<string[]>, projectId: number): void {
    moveItemInArray(this.projectConditionOrder[projectId].global, event.previousIndex, event.currentIndex);
  }

  dropAgOverride(event: CdkDragDrop<string[]>, projectId: number, agId: number): void {
    moveItemInArray(this.projectConditionOrder[projectId].perAnalysisGroup[agId], event.previousIndex, event.currentIndex);
  }

  addAgOverride(projectId: number): void {
    const agId = this.selectedAgOverride[projectId];
    if (agId === null || agId === undefined) return;
    const entry = this.projectConditionOrder[projectId];
    if (!entry.perAnalysisGroup[agId]) {
      entry.perAnalysisGroup[agId] = [...entry.global];
    }
    this.selectedAgOverride[projectId] = null;
    this.cdr.markForCheck();
  }

  removeAgOverride(projectId: number, agId: number): void {
    delete this.projectConditionOrder[projectId].perAnalysisGroup[agId];
    this.cdr.markForCheck();
  }

  agOverrideIds(projectId: number): number[] {
    return Object.keys(this.projectConditionOrder[projectId]?.perAnalysisGroup ?? {}).map(Number);
  }

  agConditions(projectId: number, agId: number): string[] {
    return this.projectConditionOrder[projectId]?.perAnalysisGroup?.[agId] ?? [];
  }

  agName(projectId: number, agId: number): string {
    return this.projectAnalysisGroups[projectId]?.find(a => a.id === agId)?.name ?? `AG ${agId}`;
  }

  availableAgsForOverride(projectId: number): AnalysisGroup[] {
    const existing = new Set(this.agOverrideIds(projectId));
    return (this.projectAnalysisGroups[projectId] ?? []).filter(a => !existing.has(a.id));
  }

  save(): void {
    this.dialogRef.close(this.projectConditionOrder);
  }

  cancel(): void {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
