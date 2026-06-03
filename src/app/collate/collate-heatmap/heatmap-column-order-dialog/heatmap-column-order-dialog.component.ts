import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatButton } from '@angular/material/button';
import { MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';

export interface HeatmapColumnGroup {
  project: string;
  labels: string[];
}

@Component({
  selector: 'app-heatmap-column-order-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DragDropModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatIcon,
    MatDivider,
  ],
  templateUrl: './heatmap-column-order-dialog.component.html',
  styleUrl: './heatmap-column-order-dialog.component.scss',
})
export class HeatmapColumnOrderDialogComponent {
  @Input() set columnGroups(value: HeatmapColumnGroup[]) {
    this.groups = value.map(g => ({ project: g.project, labels: [...g.labels] }));
    this.originals = value.map(g => [...g.labels]);
  }

  groups: HeatmapColumnGroup[] = [];
  originals: string[][] = [];

  constructor(private dialogRef: MatDialogRef<HeatmapColumnOrderDialogComponent>) {}

  drop(event: CdkDragDrop<string[]>, group: HeatmapColumnGroup): void {
    moveItemInArray(group.labels, event.previousIndex, event.currentIndex);
  }

  reset(groupIdx: number): void {
    this.groups[groupIdx].labels = [...this.originals[groupIdx]].sort();
  }

  save(): void {
    const result: { [project: string]: string[] } = {};
    this.groups.forEach(g => { result[g.project] = [...g.labels]; });
    this.dialogRef.close(result);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
