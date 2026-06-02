import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { HeatmapDataPoint } from '../collate-heatmap.types';

@Component({
  selector: 'app-heatmap-protein-order-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatFormField,
    MatLabel,
    MatInput,
    MatSelect,
    MatOption,
    MatDivider,
    MatIcon,
    DragDropModule,
  ],
  templateUrl: './heatmap-protein-order-dialog.component.html',
  styleUrl: './heatmap-protein-order-dialog.component.scss',
})
export class HeatmapProteinOrderDialogComponent {
  @Input() allProteins: string[] = [];
  @Input() allHeatmapData: HeatmapDataPoint[] = [];

  currentOrder: string[] = [];
  selectedComparison: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  bulkText: string = '';

  constructor(private dialogRef: MatDialogRef<HeatmapProteinOrderDialogComponent>) {}

  ngOnInit(): void {
    this.currentOrder = [...this.allProteins];
  }

  get availableComparisons(): string[] {
    const comparisons = new Set(this.allHeatmapData.map(d => d.comparison).filter(c => c));
    return Array.from(comparisons).sort();
  }

  dropGene(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.currentOrder, event.previousIndex, event.currentIndex);
  }

  sortByComparison(): void {
    if (!this.selectedComparison) return;

    const comparisonData = this.allHeatmapData.filter(d => d.comparison === this.selectedComparison);
    const proteinToLog2fc: Record<string, number> = {};

    comparisonData.forEach(d => {
      if (d.protein in proteinToLog2fc) {
        proteinToLog2fc[d.protein] = Math.max(proteinToLog2fc[d.protein], Math.abs(d.log2fc));
      } else {
        proteinToLog2fc[d.protein] = Math.abs(d.log2fc);
      }
    });

    this.currentOrder.sort((a, b) => {
      const aVal = proteinToLog2fc[a] ?? 0;
      const bVal = proteinToLog2fc[b] ?? 0;
      return this.sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
    });
  }

  applyBulkOrder(): void {
    if (!this.bulkText.trim()) return;

    const entries = this.bulkText
      .split(/[\n,]/)
      .map(s => s.trim().toUpperCase())
      .filter(s => s.length > 0);

    const matched: string[] = [];
    const unmatched: string[] = [];

    entries.forEach(entry => {
      const match = this.currentOrder.find(p => p.toUpperCase() === entry);
      if (match && !matched.includes(match)) {
        matched.push(match);
      } else if (!matched.includes(entry) && !unmatched.includes(entry)) {
        unmatched.push(entry);
      }
    });

    const unorderedProteins = this.currentOrder.filter(p => !matched.includes(p));
    this.currentOrder = [...matched, ...unorderedProteins];
    this.bulkText = '';
  }

  reset(): void {
    this.currentOrder = [...this.allProteins];
    this.selectedComparison = '';
    this.sortDirection = 'asc';
    this.bulkText = '';
  }

  save(): void {
    this.dialogRef.close(this.currentOrder);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
