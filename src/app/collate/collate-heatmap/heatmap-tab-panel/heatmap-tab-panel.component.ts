import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTab, MatTabGroup, MatTabLabel } from '@angular/material/tabs';
import { MatIcon } from '@angular/material/icon';
import { HeatmapPlotComponent } from '../../cytoscape-plot/heatmap-plot/heatmap-plot.component';
import { HeatmapDataPoint } from '../collate-heatmap.types';

@Component({
  selector: 'app-heatmap-tab-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatTabGroup,
    MatTab,
    MatTabLabel,
    MatIcon,
    HeatmapPlotComponent,
  ],
  templateUrl: './heatmap-tab-panel.component.html',
  styleUrl: './heatmap-tab-panel.component.scss',
})
export class HeatmapTabPanelComponent {
  @Input() searchTerms: string[] = [];
  @Input() dataByTerm: { [term: string]: HeatmapDataPoint[] } = {};
  @Input() selectedIndex = 0;
  @Output() selectedIndexChange = new EventEmitter<number>();

  onTabChange(index: number): void {
    this.selectedIndexChange.emit(index);
  }

  hasData(term: string): boolean {
    return (this.dataByTerm[term]?.length ?? 0) > 0;
  }
}
