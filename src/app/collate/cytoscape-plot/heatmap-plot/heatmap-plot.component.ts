import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';
import {PlotlyModule} from "angular-plotly.js";
import {HeatmapDataPoint} from "../cytoscape-plot.types";
import {HeatmapPersistentSettings, defaultHeatmapPersistentSettings} from '../../collate-heatmap/collate-heatmap.types';
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
  constructor(private cdr: ChangeDetectorRef) {}

  toggleLegend(): void {
    this.showLegend = !this.showLegend;
    this.cdr.markForCheck();
  }
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

  private _heatmapSettings: HeatmapPersistentSettings = defaultHeatmapPersistentSettings();
  @Input() set heatmapSettings(value: HeatmapPersistentSettings | null | undefined) {
    this._heatmapSettings = value ?? defaultHeatmapPersistentSettings();
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
  colLabelToColIdxs: Record<string, number[]> = {};
  colIdxToLabel: Record<number, string> = {};

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
    this.colLabelToColIdxs = {};
    this.colIdxToLabel = {};

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

      const useAgName = this._heatmapSettings.useAgNameForAxis;
      let lastLabel = '';
      localColKeys.forEach((ck, ci) => {
        const rep = colRepresentative.get(ck)!;
        const colPos = colOffset + ci;
        globalColIndexMap.set(`${project}||${ck}`, colPos);

        const colLabel = useAgName ? rep.analysis_group : (rep.comparison ?? '');
        tickvals.push(colPos);
        ticktext.push(colLabel !== lastLabel ? colLabel : '');
        this.colIdxToLabel[colPos] = colLabel;
        if (!this.colLabelToColIdxs[colLabel]) this.colLabelToColIdxs[colLabel] = [];
        this.colLabelToColIdxs[colLabel].push(colPos);

        if (ci > 0) {
          const prevRep = colRepresentative.get(localColKeys[ci - 1])!;
          const prevLabel = useAgName ? prevRep.analysis_group : (prevRep.comparison ?? '');
          if (prevLabel !== colLabel) {
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

        lastLabel = colLabel;
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

    const s = this._heatmapSettings;
    const scaleMax = s.colorScaleFixed && s.colorScaleMax > 0 ? s.colorScaleMax : maxAbs;
    const minTickLabel = s.minLabel || (-scaleMax).toFixed(1);
    const maxTickLabel = s.maxLabel || scaleMax.toFixed(1);

    const cellSize = 36;
    const minCanvasWidth = 800;
    const minCanvasHeight = 600;
    const maxProteinLen = Math.max(...allProteins.map(p => p.length));
    const maxLabelLen = Math.max(...ticktext.filter(t => t).map(t => t.length), 4);
    const margin = {
      l: Math.max(140, maxProteinLen * 7 + 20),
      t: Math.max(140, maxLabelLen * 7 + 20),
      r: 100,
      b: 80,
    };

    const dataWidth = totalCols * cellSize;
    const dataHeight = allProteins.length * cellSize;
    const totalWidth = dataWidth + margin.l + margin.r;
    const totalHeight = dataHeight + margin.t + margin.b;
    if (totalWidth < minCanvasWidth) margin.r += minCanvasWidth - totalWidth;
    if (totalHeight < minCanvasHeight) margin.b += minCanvasHeight - totalHeight;

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
      zmin: -scaleMax,
      zmax: scaleMax,
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
        tickvals: [-scaleMax, 0, scaleMax],
        ticktext: [minTickLabel, '0', maxTickLabel],
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
      width: dataWidth + margin.l + margin.r,
      height: dataHeight + margin.t + margin.b,
      margin,
      xaxis: {
        side: 'top',
        showgrid: false,
        zeroline: false,
        fixedrange: false,
        tickvals,
        ticktext,
        tickangle: 45,
        tickfont: { size: 9 },
        dtick: 1,
      },
      yaxis: {
        autorange: 'reversed',
        showgrid: false,
        zeroline: false,
        fixedrange: false,
        tickvals: yVals,
        ticktext: allProteins,
        tickfont: { size: 9 },
        dtick: 1,
      },
      hoverlabel: {
        bgcolor: 'rgba(255,255,255,0.95)',
        bordercolor: '#555',
        font: { size: 11 },
        align: 'left',
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
    const label = this.colIdxToLabel[colIdx];
    const groupCols = label !== undefined ? (this.colLabelToColIdxs[label] ?? [colIdx]) : [colIdx];

    for (const ci of groupCols) {
      const projectShape = this.projectShapeByColIdx[ci];
      if (projectShape) projectShape.line.color = 'white';
      const columnShape = this.columnShapeByColIdx[ci];
      if (columnShape) {
        columnShape.line.color = '#1a202c';
        columnShape.line.width = 2;
      }
    }
    if (protein) {
      this.currentHoverTarget.emit(this.dataByColProtein[`${colIdx}_${protein}`]);
    }
    this.revision++;
    this.cdr.markForCheck();
  }

  handleHoverOut(event: any): void {
    const colIdx: number = event.points[0].x;
    const label = this.colIdxToLabel[colIdx];
    const groupCols = label !== undefined ? (this.colLabelToColIdxs[label] ?? [colIdx]) : [colIdx];

    for (const ci of groupCols) {
      const projectShape = this.projectShapeByColIdx[ci];
      if (projectShape) projectShape.line.color = '#e53e3e';
      const columnShape = this.columnShapeByColIdx[ci];
      if (columnShape) columnShape.line.color = 'rgba(0,0,0,0)';
    }
    this.currentHoverTarget.emit(undefined);
    this.revision++;
    this.cdr.markForCheck();
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
    this.cdr.markForCheck();
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
