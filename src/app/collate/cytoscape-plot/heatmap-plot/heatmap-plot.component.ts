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
  private _selectedProteinIds: Set<string> = new Set();

  @Input() set data(value: HeatmapDataPoint[] | null | undefined) {
    this._data = value ?? [];
    this.drawHeatmap();
  }

  @Input() set highlightedProtein(value: string | null) {
    this._highlightedProtein = value;
    this.highlightProteinColumns(value);
  }

  @Input() set selectedProteinIds(value: Set<string>) {
    this._selectedProteinIds = value ?? new Set();
    if (this._data.length) this.drawHeatmap();
  }

  @Output() currentHoverTarget = new EventEmitter<HeatmapDataPoint | undefined>();
  @Output() proteinClicked = new EventEmitter<string>();

  get data(): HeatmapDataPoint[] { return this._data; }
  get highlightedProtein(): string | null { return this._highlightedProtein; }

  layout: any = {};
  graphData: any[] = [];
  revision = 0;
  showLegend = false;

  private allProteins: string[] = [];
  columnShapeByColIdx: Record<number, any> = {};
  projectShapeByColIdx: Record<number, any> = {};
  dataByColProtein: Record<string, HeatmapDataPoint> = {};
  proteinsByColIdx: Record<number, Set<string>> = {};

  plotConfig = {
    responsive: true,
    scrollZoom: false,
    displayModeBar: true,
    modeBarButtonsToRemove: ['zoom2d', 'zoomIn2d', 'zoomOut2d', 'autoScale2d', 'resetScale2d', 'pan2d', 'select2d', 'lasso2d'],
    displaylogo: false
  };

  drawHeatmap(): void {
    if (!this._data.length) return;

    this.columnShapeByColIdx = {};
    this.projectShapeByColIdx = {};
    this.dataByColProtein = {};
    this.proteinsByColIdx = {};

    const searchTerm = this._data[0].searchTerm;

    const projectGroups: Record<string, HeatmapDataPoint[]> = {};
    for (const d of this._data) {
      (projectGroups[d.project] ??= []).push(d);
    }

    for (const project in projectGroups) {
      projectGroups[project].sort((a, b) => {
        const c = (a.comparison ?? '').localeCompare(b.comparison ?? '');
        return c !== 0 ? c : (a.protein ?? '').localeCompare(b.protein ?? '');
      });
    }

    const globalColIndexMap = new Map<string, number>();
    const shapes: any[] = [];
    const tickvals: number[] = [];
    const ticktext: string[] = [];
    let colOffset = 0;

    for (const project in projectGroups) {
      const group = projectGroups[project];
      const localColKeys: string[] = [];
      const seenLocal = new Set<string>();
      const colRepresentative = new Map<string, HeatmapDataPoint>();

      for (const d of group) {
        const ck = `${d.analysis_group}||${d.conditionA}||${d.conditionB}`;
        if (!seenLocal.has(ck)) { seenLocal.add(ck); localColKeys.push(ck); }
        if (!colRepresentative.has(ck)) colRepresentative.set(ck, d);
      }

      const numCols = localColKeys.length;

      const projectShape: any = {
        type: 'rect',
        x0: colOffset - 0.5, x1: colOffset + numCols - 0.5,
        y0: 0, y1: 1,
        xref: 'x', yref: 'paper',
        line: { color: '#e53e3e', width: 3 },
        fillcolor: 'rgba(0,0,0,0)',
      };
      shapes.push(projectShape);

      let lastComp = '';
      localColKeys.forEach((ck, ci) => {
        const rep = colRepresentative.get(ck)!;
        const colPos = colOffset + ci;
        globalColIndexMap.set(`${project}||${ck}`, colPos);

        tickvals.push(colPos);
        ticktext.push(rep.comparison !== lastComp ? (rep.comparison ?? '') : '');

        if (ci > 0) {
          const prevRep = colRepresentative.get(localColKeys[ci - 1])!;
          if (prevRep.comparison !== rep.comparison) {
            shapes.push({
              type: 'line',
              x0: colPos - 0.5, x1: colPos - 0.5,
              y0: 0, y1: 1,
              xref: 'x', yref: 'paper',
              line: { color: 'rgba(186,104,166,0.8)', width: 2 },
            });
          }
        }

        const columnShape: any = {
          type: 'rect',
          x0: colPos - 0.5, x1: colPos + 0.5,
          y0: 0, y1: 1,
          xref: 'x', yref: 'paper',
          line: { color: 'rgba(0,0,0,0)', width: 2 },
          fillcolor: 'rgba(0,0,0,0)',
        };
        shapes.push(columnShape);
        this.columnShapeByColIdx[colPos] = columnShape;
        this.projectShapeByColIdx[colPos] = projectShape;
        this.proteinsByColIdx[colPos] = new Set();

        lastComp = rep.comparison ?? '';
      });

      colOffset += numCols;
    }

    const totalCols = colOffset;

    for (const d of this._data) {
      const ck = `${d.analysis_group}||${d.conditionA}||${d.conditionB}`;
      const colIdx = globalColIndexMap.get(`${d.project}||${ck}`);
      if (colIdx !== undefined) {
        this.dataByColProtein[`${colIdx}_${d.protein}`] = d;
        this.proteinsByColIdx[colIdx]?.add(d.protein);
      }
    }

    const allProteins = Array.from(new Set(this._data.map(d => d.protein))).sort();
    this.allProteins = allProteins;
    const proteinRowMap = new Map(allProteins.map((p, i) => [p, i]));

    const zMatrix: (number | null)[][] = allProteins.map(() => new Array(totalCols).fill(null));
    const customdata: any[][] = allProteins.map(() => new Array(totalCols).fill(null));

    for (const d of this._data) {
      const ck = `${d.analysis_group}||${d.conditionA}||${d.conditionB}`;
      const colIdx = globalColIndexMap.get(`${d.project}||${ck}`);
      const rowIdx = proteinRowMap.get(d.protein);
      if (colIdx !== undefined && rowIdx !== undefined) {
        zMatrix[rowIdx][colIdx] = d.log2fc;
        customdata[rowIdx][colIdx] = {
          protein: d.protein,
          project: d.project,
          ag: d.analysis_group,
          comparison: d.comparison ?? '',
          log2fc: d.log2fc,
          pval: d.p_value,
        };
      }
    }

    let maxAbs = 0;
    for (const row of zMatrix) {
      for (const val of row) {
        if (val !== null && Math.abs(val) > maxAbs) maxAbs = Math.abs(val);
      }
    }
    if (maxAbs === 0) maxAbs = 1;

    const cellSize = 25;
    const maxProteinLen = Math.max(...allProteins.map(p => p.length));
    const maxLabelLen = Math.max(...ticktext.filter(t => t).map(t => t.length), 4);
    const margin = {
      l: Math.max(120, maxProteinLen * 7 + 20),
      t: Math.max(120, maxLabelLen * 7 + 20),
      r: 80,
      b: 60,
    };

    const xVals = Array.from({ length: totalCols }, (_, i) => i);
    const yVals = allProteins.map((_, i) => i);

    const trace = {
      x: xVals,
      y: yVals,
      z: zMatrix,
      customdata,
      type: 'heatmap',
      colorscale: [
        [0, 'rgb(5, 48, 97)'],
        [0.25, 'rgb(67, 147, 195)'],
        [0.5, 'rgb(255, 255, 255)'],
        [0.75, 'rgb(214, 96, 77)'],
        [1, 'rgb(103, 0, 31)'],
      ],
      zmin: -maxAbs,
      zmax: maxAbs,
      zauto: false,
      xgap: 1,
      ygap: 1,
      hoverongaps: false,
      hovertemplate:
        '<b>Protein:</b> %{customdata.protein}<br>' +
        '<b>Project:</b> %{customdata.project}<br>' +
        '<b>Analysis Group:</b> %{customdata.ag}<br>' +
        '<b>Comparison:</b> %{customdata.comparison}<br>' +
        '<b>Log2FC:</b> %{customdata.log2fc:.3f}<br>' +
        '<b>-Log10(p):</b> %{customdata.pval:.3f}<extra></extra>',
      colorbar: {
        orientation: 'h',
        lenmode: 'pixels',
        len: 200,
        thicknessmode: 'pixels',
        thickness: 12,
        xanchor: 'center',
        x: 0.5,
        yanchor: 'top',
        y: 0,
        ypad: 20,
        tickvals: [-maxAbs, 0, maxAbs],
        ticktext: [(-maxAbs).toFixed(1), '0', maxAbs.toFixed(1)],
        tickfont: { size: 9 },
      },
    };

    allProteins.forEach((protein, i) => {
      if (this._selectedProteinIds.has(protein)) {
        shapes.push({
          type: 'rect',
          xref: 'paper', yref: 'y',
          x0: -0.015, x1: 0,
          y0: i - 0.5, y1: i + 0.5,
          fillcolor: 'rgba(79, 70, 229, 0.7)',
          line: { width: 0 },
        });
      }
    });

    this.graphData = [trace];
    this.layout = {
      title: `Search term: ${searchTerm}`,
      width: totalCols * cellSize + margin.l + margin.r,
      height: allProteins.length * cellSize + margin.t + margin.b,
      margin,
      xaxis: {
        side: 'top',
        showgrid: false,
        zeroline: false,
        fixedrange: false,
        scaleanchor: 'y',
        scaleratio: 1,
        constrain: 'domain',
        tickvals,
        ticktext,
        tickangle: 90,
        tickfont: { size: 9 },
        dtick: 1,
      },
      yaxis: {
        autorange: 'reversed',
        showgrid: false,
        zeroline: false,
        fixedrange: false,
        scaleanchor: 'x',
        scaleratio: 1,
        constrain: 'domain',
        tickvals: yVals,
        ticktext: allProteins,
        tickfont: { size: 9 },
        dtick: 1,
      },
      plot_bgcolor: '#e2e8f0',
      paper_bgcolor: 'rgba(0,0,0,0)',
      shapes,
    };
    this.revision++;
  }

  onClick(event: any): void {
    const rowIdx: number = event.points[0].y;
    const protein = this.allProteins[rowIdx];
    if (protein) {
      this.proteinClicked.emit(protein);
    }
  }

  handleHoverIn(event: any): void {
    const colIdx: number = event.points[0].x;
    const rowIdx: number = event.points[0].y;
    const protein = this.allProteins[rowIdx];
    const projectShape = this.projectShapeByColIdx[colIdx];
    if (projectShape) {
      projectShape.line.color = 'white';
      const columnShape = this.columnShapeByColIdx[colIdx];
      if (columnShape) {
        columnShape.line.color = '#1a202c';
        columnShape.line.width = 2;
      }
      if (protein) {
        this.currentHoverTarget.emit(this.dataByColProtein[`${colIdx}_${protein}`]);
      }
      this.revision++;
    }
  }

  handleHoverOut(event: any): void {
    const colIdx: number = event.points[0].x;
    const projectShape = this.projectShapeByColIdx[colIdx];
    if (projectShape) {
      projectShape.line.color = '#e53e3e';
      const columnShape = this.columnShapeByColIdx[colIdx];
      if (columnShape) {
        columnShape.line.color = 'rgba(0,0,0,0)';
      }
      this.currentHoverTarget.emit(undefined);
      this.revision++;
    }
  }

  private highlightProteinColumns(proteinId: string | null): void {
    Object.keys(this.columnShapeByColIdx).forEach(key => {
      const colIdx = parseInt(key, 10);
      const shape = this.columnShapeByColIdx[colIdx];
      if (shape) {
        const hasProtein = proteinId ? this.proteinsByColIdx[colIdx]?.has(proteinId) : false;
        shape.line.color = hasProtein ? '#00e676' : 'rgba(0,0,0,0)';
        shape.line.width = hasProtein ? 3 : 2;
      }
    });
    this.revision++;
  }

  exportToCsv(): void {
    if (!this._data.length) return;

    const headers = ['Protein', 'Project', 'Analysis Group', 'Condition A', 'Condition B', 'Comparison', 'Log2FC', 'P-value', 'Search Term'];
    const rows = this._data.map(d => [
      d.protein, d.project, d.analysis_group, d.conditionA, d.conditionB,
      d.comparison, d.log2fc.toString(), d.p_value.toString(), d.searchTerm
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `heatmap_${this._data[0]?.searchTerm || 'data'}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}
