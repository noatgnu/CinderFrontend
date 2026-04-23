import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {PlotlyModule} from "angular-plotly.js";
import {HeatmapDataPoint} from "../cytoscape-plot.types";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatTooltip} from "@angular/material/tooltip";
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-heatmap-plot',
  imports: [PlotlyModule, MatIconButton, MatIcon, MatTooltip, MatToolbar],
  templateUrl: './heatmap-plot.component.html',
  styleUrl: './heatmap-plot.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeatmapPlotComponent {
  private _data: HeatmapDataPoint[] = [];
  private _highlightedProtein: string | null = null;

  @Input() set data(value: HeatmapDataPoint[]) {
    this._data = value;
    this.drawHeatmap();
  }

  @Input() set highlightedProtein(value: string | null) {
    this._highlightedProtein = value;
    this.highlightProteinColumns(value);
  }

  @Output() currentHoverTarget = new EventEmitter<HeatmapDataPoint | undefined>();

  get data(): HeatmapDataPoint[] {
    return this._data;
  }

  get highlightedProtein(): string | null {
    return this._highlightedProtein;
  }

  layout: any = {};
  graphData: any[] = [];
  revision = 0;
  showLegend = false;
  reversePointIndexToProject: Record<number, any> = {};
  reversePointIndexToColumn: Record<number, any> = {};
  reversePointIndexToData: Record<number, HeatmapDataPoint> = {};

  plotConfig = {
    responsive: true,
    scrollZoom: false,
    displayModeBar: true,
    modeBarButtonsToRemove: ['zoom2d', 'zoomIn2d', 'zoomOut2d', 'autoScale2d', 'resetScale2d', 'pan2d', 'select2d', 'lasso2d'],
    displaylogo: false
  };
  drawHeatmap(): void {
    if (!this.data.length) return;

    this.reversePointIndexToProject = {};
    this.reversePointIndexToColumn = {};
    this.reversePointIndexToData = {};

    const searchTerm = this.data[0].searchTerm;

    const projectGroups: Record<string, HeatmapDataPoint[]> = {};
    for (const d of this.data) {
      (projectGroups[d.project] ??= []).push(d);
    }

    for (const project in projectGroups) {
      projectGroups[project].sort((a, b) => {
        const c = a.comparison.localeCompare(b.comparison);
        return c !== 0 ? c : a.protein.localeCompare(b.protein);
      });
    }

    const xNums: number[] = [];
    const y: string[] = [];
    const z: number[] = [];
    const tickvals: number[] = [];
    const ticktext: string[] = [];
    const shapes: any[] = [];

    let colOffset = 0;
    let dataIdx = 0;

    for (const project in projectGroups) {
      const group = projectGroups[project];

      const colKeys: string[] = [];
      const seenCols = new Set<string>();
      for (const d of group) {
        const ck = `${d.analysis_group}||${d.conditionA}||${d.conditionB}`;
        if (!seenCols.has(ck)) {
          seenCols.add(ck);
          colKeys.push(ck);
        }
      }

      const colIndexMap = new Map<string, number>();
      colKeys.forEach((ck, ci) => colIndexMap.set(ck, ci));

      const colRepresentative = new Map<string, HeatmapDataPoint>();
      for (const d of group) {
        const ck = `${d.analysis_group}||${d.conditionA}||${d.conditionB}`;
        if (!colRepresentative.has(ck)) colRepresentative.set(ck, d);
      }

      const numCols = colKeys.length;

      const projectShape: any = {
        type: 'rect',
        x0: colOffset - 0.5,
        x1: colOffset + numCols - 0.5,
        y0: 1, y1: 0,
        xref: 'x', yref: 'paper',
        line: { color: 'red', width: 4 },
        fillcolor: 'rgba(0,0,0,0)',
        opacity: 0.5,
        hoverinfo: 'none',
        hoveron: 'fills',
      };
      shapes.push(projectShape);

      const columnShapes: any[] = [];
      let lastComp = '';

      colKeys.forEach((ck, ci) => {
        const rep = colRepresentative.get(ck)!;
        const colPos = colOffset + ci;

        tickvals.push(colPos);
        ticktext.push(rep.comparison !== lastComp ? rep.comparison : '');

        if (ci > 0) {
          const prevRep = colRepresentative.get(colKeys[ci - 1])!;
          if (prevRep.comparison !== rep.comparison) {
            shapes.push({
              type: 'line',
              x0: colPos - 0.5, x1: colPos - 0.5,
              y0: 1, y1: 0,
              xref: 'x', yref: 'paper',
              line: { color: 'rgba(186,104,166)', width: 3 },
            });
          }
        }

        const prevComp = ci > 0 ? colRepresentative.get(colKeys[ci - 1])!.comparison : null;
        const nextComp = ci < numCols - 1 ? colRepresentative.get(colKeys[ci + 1])!.comparison : null;
        shapes.push({
          type: 'line',
          x0: (ci === 0 || prevComp !== rep.comparison) ? colPos - 0.4 : colPos - 0.5,
          x1: (ci === numCols - 1 || nextComp !== rep.comparison) ? colPos + 0.4 : colPos + 0.5,
          y0: -0.1, y1: -0.1,
          xref: 'x', yref: 'paper',
          line: { color: 'rgb(179,0,137)', width: 4 },
        });

        const columnShape: any = {
          type: 'rect',
          x0: colPos - 0.5, x1: colPos + 0.5,
          y0: 1, y1: 0,
          xref: 'x', yref: 'paper',
          line: { color: 'rgba(0,0,0,0)', width: 2 },
          fillcolor: 'rgba(0,0,0,0)',
          opacity: 0.5,
          hoverinfo: 'none',
          hoveron: 'fills',
        };
        shapes.push(columnShape);
        columnShapes.push(columnShape);

        lastComp = rep.comparison;
      });

      for (const d of group) {
        const ck = `${d.analysis_group}||${d.conditionA}||${d.conditionB}`;
        const ci = colIndexMap.get(ck)!;
        xNums.push(colOffset + ci);
        y.push(d.protein);
        z.push(d.log2fc);
        this.reversePointIndexToProject[dataIdx] = projectShape;
        this.reversePointIndexToColumn[dataIdx] = columnShapes[ci];
        this.reversePointIndexToData[dataIdx] = d;
        dataIdx++;
      }

      colOffset += numCols;
    }

    const trace = {
      x: xNums,
      y,
      z,
      type: 'heatmap',
      colorscale: 'Viridis',
      colorbar: { orientation: 'h' },
      hoverinfo: 'none',
    };

    const cellSize = 50;
    const uniqueY = Array.from(new Set(y)).length;
    const margin = { l: 300, r: 50, t: 100, b: 300 };

    this.graphData = [trace];
    this.layout = {
      title: `Search term: ${searchTerm}`,
      width: colOffset * cellSize + margin.l + margin.r,
      height: uniqueY * cellSize + margin.t + margin.b,
      margin,
      xaxis: {
        title: 'Analysis',
        showgrid: false,
        scaleanchor: 'y',
        scaleratio: 1,
        tickvals,
        ticktext,
        ticklen: 0,
        fixedrange: true,
      },
      yaxis: {
        title: 'Protein',
        showgrid: false,
        fixedrange: true,
      },
      shapes,
    };
    this.revision++;
  }

  handleHoverIn(event: any) {
    const shapeIndex = event.points[0].pointIndex;
    if (this.reversePointIndexToProject[shapeIndex]) {
      this.reversePointIndexToProject[shapeIndex].line.color = 'white';
      const shape = this.reversePointIndexToColumn[shapeIndex];
      shape.line.color = 'black';
      shape.line.width = 2;
      this.currentHoverTarget.emit(this.reversePointIndexToData[shapeIndex]);
      this.revision++;
    }

  }

  handleHoverOut(event: any) {
    const shapeIndex = event.points[0].pointIndex;
    if (this.reversePointIndexToProject[shapeIndex]) {
      this.reversePointIndexToProject[shapeIndex].line.color = 'red';
      const shape = this.reversePointIndexToColumn[shapeIndex];
      shape.line.color = 'rgba(0,0,0,0)';
      this.currentHoverTarget.emit(undefined);
      this.revision++;
    }
  }

  private highlightProteinColumns(proteinId: string | null): void {
    Object.keys(this.reversePointIndexToData).forEach(key => {
      const index = parseInt(key, 10);
      const data = this.reversePointIndexToData[index];
      const shape = this.reversePointIndexToColumn[index];
      if (shape) {
        if (proteinId && data.protein === proteinId) {
          shape.line.color = '#00ff00';
          shape.line.width = 3;
        } else {
          shape.line.color = 'rgba(0,0,0,0)';
          shape.line.width = 2;
        }
      }
    });
    this.revision++;
  }

  exportToCsv(): void {
    if (!this.data || this.data.length === 0) return;

    const headers = ['Protein', 'Project', 'Analysis Group', 'Condition A', 'Condition B', 'Comparison', 'Log2FC', 'P-value', 'Search Term'];
    const rows = this.data.map(d => [
      d.protein,
      d.project,
      d.analysis_group,
      d.conditionA,
      d.conditionB,
      d.comparison,
      d.log2fc.toString(),
      d.p_value.toString(),
      d.searchTerm
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `heatmap_${this.data[0]?.searchTerm || 'data'}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}
