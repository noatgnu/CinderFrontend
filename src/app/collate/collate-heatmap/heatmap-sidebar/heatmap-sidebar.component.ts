import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { Collate } from '../../collate';
import { Project } from '../../../project/project';
import { AnalysisGroup } from '../../../analysis-group/analysis-group';
import { HeatmapViewState } from '../collate-heatmap.types';

@Component({
  selector: 'app-heatmap-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    MatCheckbox,
    MatSlideToggle,
    MatDivider,
    MatIcon,
    MatButton,
    MatIconButton,
    MatTooltip,
  ],
  templateUrl: './heatmap-sidebar.component.html',
  styleUrl: './heatmap-sidebar.component.scss',
})
export class HeatmapSidebarComponent {
  @Input() collate: Collate | null = null;
  @Input() projects: Project[] = [];
  @Input() projectAnalysisGroups: { [projectId: number]: AnalysisGroup[] } = {};
  @Input() state!: HeatmapViewState;
  @Output() stateChange = new EventEmitter<HeatmapViewState>();
  @Output() backClick = new EventEmitter<void>();

  collapsedProjects: Set<number> = new Set();

  toggleProjectCollapse(projectId: number): void {
    if (this.collapsedProjects.has(projectId)) {
      this.collapsedProjects.delete(projectId);
    } else {
      this.collapsedProjects.add(projectId);
    }
  }

  isProjectCollapsed(projectId: number): boolean {
    return this.collapsedProjects.has(projectId);
  }

  onProteinFilterChange(value: string): void {
    this.emit({ proteinFilter: value });
  }

  onLog2fcCutoffChange(value: number): void {
    this.emit({ log2fcCutoff: Math.max(0, value) });
  }

  onPValueCutoffChange(value: number): void {
    this.emit({ pValueCutoff: Math.max(0, value) });
  }

  onMaskToggle(checked: boolean): void {
    this.emit({ maskSubThreshold: checked });
  }

  toggleVisibility(projectId: number, agId: number): void {
    const newMap = { ...this.state.visibilityMap };
    newMap[projectId] = { ...newMap[projectId] };
    newMap[projectId][agId] = !(newMap[projectId][agId] ?? true);
    this.emit({ visibilityMap: newMap });
  }

  toggleFlip(agId: number): void {
    const newSet = new Set(this.state.flippedAnalysisGroupIds);
    if (newSet.has(agId)) {
      newSet.delete(agId);
    } else {
      newSet.add(agId);
    }
    this.emit({ flippedAnalysisGroupIds: newSet });
  }

  isVisible(projectId: number, agId: number): boolean {
    return this.state.visibilityMap[projectId]?.[agId] ?? true;
  }

  isFlipped(agId: number): boolean {
    return this.state.flippedAnalysisGroupIds.has(agId);
  }

  resetFilters(): void {
    this.emit({
      log2fcCutoff: 0,
      pValueCutoff: 0,
      maskSubThreshold: false,
      proteinFilter: '',
    });
  }

  private emit(partial: Partial<HeatmapViewState>): void {
    this.stateChange.emit({ ...this.state, ...partial });
  }
}
