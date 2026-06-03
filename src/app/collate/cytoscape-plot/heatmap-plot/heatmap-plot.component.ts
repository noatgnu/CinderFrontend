import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {PlotlyModule} from "angular-plotly.js";
import {HeatmapDataPoint} from "../cytoscape-plot.types";
import {HeatmapPersistentSettings, defaultHeatmapPersistentSettings} from '../../collate-heatmap/collate-heatmap.types';
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatTooltip} from "@angular/material/tooltip";
import {MatToolbar} from "@angular/material/toolbar";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatDivider} from "@angular/material/divider";
import {AccountsService} from '../../../accounts/accounts.service';

@Component({
  selector: 'app-heatmap-plot',
  imports: [PlotlyModule, MatIconButton, MatIcon, MatTooltip, MatToolbar, MatMenu, MatMenuItem, MatMenuTrigger, MatDivider],
  templateUrl: './heatmap-plot.component.html',
  styleUrl: './heatmap-plot.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeatmapPlotComponent {
  @ViewChild('plotContainer') plotContainerRef!: ElementRef<HTMLElement>;

  constructor(private cdr: ChangeDetectorRef, private accounts: AccountsService) {}

  toggleLegend(): void {
    this.showLegend = !this.showLegend;
    this.cdr.markForCheck();
  }

  zoomIn(): void { this.updateZoom(0.8); }
  zoomOut(): void { this.updateZoom(1.25); }

  resetZoom(): void {
    const plotly = (window as any).Plotly;
    const el = this.plotContainerRef?.nativeElement?.querySelector('.js-plotly-plot');
    if (plotly && el) plotly.relayout(el, { 'xaxis.autorange': true, 'yaxis.autorange': true });
  }

  private updateZoom(factor: number): void {
    const plotly = (window as any).Plotly;
    const el = this.plotContainerRef?.nativeElement?.querySelector('.js-plotly-plot');
    if (!plotly || !el) return;
    const layout = (el as any).layout;
    const xr = layout?.xaxis?.range;
    const yr = layout?.yaxis?.range;
    if (!xr || !yr) return;
    const xc = (xr[0] + xr[1]) / 2, xs = (xr[1] - xr[0]) * factor;
    const yc = (yr[0] + yr[1]) / 2, ys = (yr[1] - yr[0]) * factor;
    plotly.relayout(el, { 'xaxis.range': [xc - xs/2, xc + xs/2], 'yaxis.range': [yc - ys/2, yc + ys/2] });
  }
  private _data: HeatmapDataPoint[] = [];
  private _highlightedProtein: string | null = null;
  private _selectedProteinIds: Set<string> = new Set();
  private _proteinOrder: string[] = [];

  @Input() set data(value: HeatmapDataPoint[] | null | undefined) {
    this._data = value ?? [];
    this.drawHeatmap();
  }

  @Input() set highlightedProtein(value: string | null) {
    this._highlightedProtein = value;
    if (this._data.length) { this.rebuildShapes(); this.cdr.markForCheck(); }
  }

  @Input() set selectedProteinIds(value: Set<string>) {
    this._selectedProteinIds = value ?? new Set();
    if (this._data.length) {
      this.rebuildShapes();
      this.cdr.markForCheck();
    }
  }

  private _heatmapSettings: HeatmapPersistentSettings = defaultHeatmapPersistentSettings();
  @Input() set heatmapSettings(value: HeatmapPersistentSettings | null | undefined) {
    this._heatmapSettings = value ?? defaultHeatmapPersistentSettings();
    if (this._data.length) this.drawHeatmap();
  }

  @Input() set proteinOrder(value: string[] | null | undefined) {
    this._proteinOrder = value ?? [];
    if (this._data.length) this.drawHeatmap();
  }

  private _columnOrder: { [project: string]: string[] } | null = null;
  @Input() set columnOrder(value: { [project: string]: string[] } | null | undefined) {
    this._columnOrder = value ?? null;
    if (this._data.length) this.drawHeatmap();
  }

  @Output() currentHoverTarget = new EventEmitter<HeatmapDataPoint | undefined>();
  @Output() proteinClicked = new EventEmitter<string>();

  get data(): HeatmapDataPoint[] { return this._data; }
  get highlightedProtein(): string | null { return this._highlightedProtein; }
  get selectedProteinIds(): Set<string> { return this._selectedProteinIds; }

  layout: any = {};
  graphData: any[] = [];
  revision = 0;
  showLegend = false;

  private allProteins: string[] = [];
  dataByColProtein: Record<string, HeatmapDataPoint> = {};
  proteinsByColIdx: Record<number, Set<string>> = {};

  // Shape-building data stored from drawHeatmap(), used by rebuildShapes()
  private projectBoundaries: { x0: number; x1: number }[] = [];
  private separatorLines: number[] = [];
  private columnGroups: { groupKey: string; colIdxs: number[] }[] = [];
  private colIdxToGroupKey: Record<number, string> = {};
  private hoveredGroupKey: string | null = null;

  plotConfig = {
    responsive: true,
    scrollZoom: false,
    displayModeBar: false,
  };

  drawHeatmap(): void {
    if (!this._data.length) return;

    const isDark = this.accounts.userAccount.darkMode;
    const textColor = isDark ? '#e2e8f0' : '#1a202c';
    const paperBg = isDark ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0)';

    this.dataByColProtein = {};
    this.proteinsByColIdx = {};
    this.projectBoundaries = [];
    this.separatorLines = [];
    this.columnGroups = [];
    this.colIdxToGroupKey = {};
    this.hoveredGroupKey = null;

    const s = this._heatmapSettings;
    const swapped = s.swapAxes;
    const cellSize = Math.max(5, s.cellSize ?? 36);
    const fontSize = Math.max(4, s.labelFontSize ?? 9);

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

    // Build comparison columns (axis that is NOT proteins)
    const globalColIndexMap = new Map<string, number>();
    const compTickvals: number[] = [];
    const compTicktext: string[] = [];
    let colOffset = 0;
    const groupMap = new Map<string, number[]>();

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

      // Sort columns by user-specified label order if available
      if (this._columnOrder && localColKeys.length > 0) {
        const firstRep = colRepresentative.get(localColKeys[0]);
        const order = firstRep ? (this._columnOrder[firstRep.project] ?? null) : null;
        if (order && order.length) {
          localColKeys.sort((a, b) => {
            const la = useAgName ? colRepresentative.get(a)!.analysis_group : (colRepresentative.get(a)!.comparison ?? '');
            const lb = useAgName ? colRepresentative.get(b)!.analysis_group : (colRepresentative.get(b)!.comparison ?? '');
            const ia = order.indexOf(la); const ib = order.indexOf(lb);
            return (ia === -1 ? order.length : ia) - (ib === -1 ? order.length : ib);
          });
        }
      }

      const numCols = localColKeys.length;
      this.projectBoundaries.push({ x0: colOffset - 0.5, x1: colOffset + numCols - 0.5 });

      const useAgName = s.useAgNameForAxis;
      let lastLabel = '';
      localColKeys.forEach((ck, ci) => {
        const rep = colRepresentative.get(ck)!;
        const colPos = colOffset + ci;
        globalColIndexMap.set(`${project}||${ck}`, colPos);

        const colLabel = useAgName ? rep.analysis_group : (rep.comparison ?? '');
        const groupKey = `${project}||${colLabel}`;
        compTickvals.push(colPos);
        compTicktext.push(colLabel !== lastLabel ? colLabel : '');

        this.colIdxToGroupKey[colPos] = groupKey;
        if (!groupMap.has(groupKey)) groupMap.set(groupKey, []);
        groupMap.get(groupKey)!.push(colPos);

        if (ci > 0) {
          const prevRep = colRepresentative.get(localColKeys[ci - 1])!;
          const prevLabel = useAgName ? prevRep.analysis_group : (prevRep.comparison ?? '');
          if (prevLabel !== colLabel) this.separatorLines.push(colPos - 0.5);
        }

        this.proteinsByColIdx[colPos] = new Set();
        lastLabel = colLabel;
      });
      colOffset += numCols;
    }

    this.columnGroups = Array.from(groupMap.entries()).map(([groupKey, colIdxs]) => ({ groupKey, colIdxs }));
    const totalCols = colOffset;

    for (const d of this._data) {
      const ck = `${d.analysis_group}||${d.conditionA}||${d.conditionB}`;
      const colIdx = globalColIndexMap.get(`${d.project}||${ck}`);
      if (colIdx !== undefined) {
        this.dataByColProtein[`${colIdx}_${d.protein}`] = d;
        this.proteinsByColIdx[colIdx]?.add(d.protein);
      }
    }

    const rawProteins = Array.from(new Set(this._data.map(d => d.protein)));
    const allProteins = this._proteinOrder.length
      ? [...this._proteinOrder.filter(p => rawProteins.includes(p)), ...rawProteins.filter(p => !this._proteinOrder.includes(p))]
      : rawProteins.sort();
    this.allProteins = allProteins;
    const proteinRowMap = new Map(allProteins.map((p, i) => [p, i]));

    // Build z-matrix and customdata (rows=proteins, cols=comparisons)
    // Pre-fill customdata with "no data" strings so blank cells show a proper tooltip
    const noData = { protein: '—', comparison: 'No data', fc: '—', pval: '—', empty: true };
    const zNormal: (number | null)[][] = allProteins.map(() => new Array(totalCols).fill(null));
    const cdNormal: any[][] = allProteins.map(() => new Array(totalCols).fill(noData));
    for (const d of this._data) {
      const ck = `${d.analysis_group}||${d.conditionA}||${d.conditionB}`;
      const colIdx = globalColIndexMap.get(`${d.project}||${ck}`);
      const rowIdx = proteinRowMap.get(d.protein);
      if (colIdx !== undefined && rowIdx !== undefined) {
        zNormal[rowIdx][colIdx] = d.log2fc;
        cdNormal[rowIdx][colIdx] = { protein: d.protein, comparison: d.comparison ?? '', fc: d.log2fc.toFixed(3), pval: d.p_value.toFixed(3), empty: false };
      }
    }

    // Color scale
    let zmin: number, zmax: number;
    if (s.colorScaleFixed) {
      zmin = s.colorScaleMin;
      zmax = s.colorScaleMax;
    } else {
      let maxAbs = 0;
      for (const row of zNormal) for (const val of row) if (val !== null && Math.abs(val) > maxAbs) maxAbs = Math.abs(val);
      if (maxAbs === 0) maxAbs = 1;
      zmin = -maxAbs; zmax = maxAbs;
    }
    const minTickLabel = s.minLabel || zmin.toFixed(1);
    const maxTickLabel = s.maxLabel || zmax.toFixed(1);
    const zeroPos = zmax > zmin ? (-zmin) / (zmax - zmin) : 0.5;
    const colorscale = [
      [0, 'rgb(5, 48, 97)'],
      [Math.max(0, zeroPos * 0.5), 'rgb(67, 147, 195)'],
      [Math.min(1, Math.max(0, zeroPos)), 'rgb(255, 255, 255)'],
      [Math.min(1, zeroPos + (1 - zeroPos) * 0.5), 'rgb(214, 96, 77)'],
      [1, 'rgb(103, 0, 31)'],
    ];

    const hoverTpl =
      '<b>%{customdata.protein}</b><br>' +
      '%{customdata.comparison}<br>' +
      'Log2FC: %{customdata.fc}<br>' +
      '-Log10(p): %{customdata.pval}<extra></extra>';

    const colorbar = {
      orientation: 'h', lenmode: 'pixels', len: 200,
      thicknessmode: 'pixels', thickness: 12,
      xanchor: 'center', x: 0.5, yanchor: 'top', y: 0, ypad: 20,
      tickvals: [zmin, 0, zmax], ticktext: [minTickLabel, '0', maxTickLabel],
      tickfont: { size: 9, color: textColor },
    };

    const minCanvasWidth = 800;
    const minCanvasHeight = 600;

    // Summary annotations
    const annotations: any[] = [];
    if (s.summaryMode !== 'none') {
      allProteins.forEach((protein, ri) => {
        let increase = 0, decrease = 0, total = 0;
        for (let ci = 0; ci < totalCols; ci++) {
          const val = zNormal[ri][ci];
          if (val !== null) { total++; if (val > 0) increase++; else if (val < 0) decrease++; }
        }
        if (total === 0) return;
        let upText: string, downText: string;
        if (s.summaryMode === 'percentage') {
          upText = `↑${Math.round((increase / total) * 100)}%`;
          downText = `↓${Math.round((decrease / total) * 100)}%`;
        } else {
          upText = `↑${increase}`; downText = `↓${decrease}`;
        }
        if (!swapped) {
          annotations.push({ x: 1, y: ri, xshift: 8, xref: 'paper', yref: 'y', text: upText, showarrow: false, font: { size: 8, color: 'rgb(103,0,31)' }, xanchor: 'left' });
          annotations.push({ x: 1, y: ri, xshift: 38, xref: 'paper', yref: 'y', text: downText, showarrow: false, font: { size: 8, color: 'rgb(5,48,97)' }, xanchor: 'left' });
        } else {
          const stagger = ri % 2 !== 0 ? -20 : 0;
          annotations.push({ x: ri, y: 0, yshift: -12 + stagger, xref: 'x', yref: 'paper', text: upText, showarrow: false, font: { size: 8, color: 'rgb(103,0,31)' }, yanchor: 'top' });
          annotations.push({ x: ri, y: 0, yshift: -24 + stagger, xref: 'x', yref: 'paper', text: downText, showarrow: false, font: { size: 8, color: 'rgb(5,48,97)' }, yanchor: 'top' });
        }
      });
    }

    const summaryRightMargin = s.summaryMode !== 'none' && !swapped ? 70 : 0;
    const summaryBottomMargin = s.summaryMode !== 'none' && swapped ? 60 : 0;

    if (!swapped) {
      const maxProteinLen = Math.max(...allProteins.map(p => p.length));
      const maxLabelLen = Math.max(...compTicktext.filter(t => t).map(t => t.length), 4);
      const margin = {
        l: Math.max(140, maxProteinLen * 7 + 20),
        t: Math.max(140, maxLabelLen * 7 + 20),
        r: Math.max(100 + summaryRightMargin, 100),
        b: 80,
      };
      const dataWidth = totalCols * cellSize;
      const dataHeight = allProteins.length * cellSize;
      if (dataWidth + margin.l + margin.r < minCanvasWidth) margin.r += minCanvasWidth - dataWidth - margin.l - margin.r;
      if (dataHeight + margin.t + margin.b < minCanvasHeight) margin.b += minCanvasHeight - dataHeight - margin.t - margin.b;

      const xVals = Array.from({ length: totalCols }, (_, i) => i);
      const yVals = allProteins.map((_, i) => i);
      this.graphData = [{ x: xVals, y: yVals, z: zNormal, customdata: cdNormal, type: 'heatmap', colorscale, zmin, zmax, zauto: false, xgap: 1, ygap: 1, hoverongaps: true, hovertemplate: hoverTpl, colorbar }];
      this.layout = {
        width: dataWidth + margin.l + margin.r, height: dataHeight + margin.t + margin.b, margin, annotations,
        xaxis: { side: 'top', showgrid: false, zeroline: false, fixedrange: false, tickvals: compTickvals, ticktext: compTicktext, tickangle: 45, tickfont: { size: fontSize, color: textColor }, dtick: 1 },
        yaxis: { autorange: 'reversed', showgrid: false, zeroline: false, fixedrange: false, tickvals: yVals, ticktext: allProteins, tickfont: { size: fontSize, color: textColor }, dtick: 1 },
        hoverlabel: { bgcolor: isDark ? 'rgba(30,30,30,0.95)' : 'rgba(255,255,255,0.95)', bordercolor: isDark ? '#888' : '#555', font: { size: 11, color: textColor }, align: 'left' },
        plot_bgcolor: '#cccccc', paper_bgcolor: paperBg, shapes: [],
      };
    } else {
      // Swapped: x=proteins, y=comparisons; transpose z
      const zSwapped = Array.from({ length: totalCols }, (_, ci) => allProteins.map((_, ri) => zNormal[ri][ci]));
      const cdSwapped = Array.from({ length: totalCols }, (_, ci) => allProteins.map((_, ri) => cdNormal[ri][ci]));
      const maxCompLen = Math.max(...compTicktext.filter(t => t).map(t => t.length), 4);
      const maxProteinLen = Math.max(...allProteins.map(p => p.length), 4);
      const margin = {
        l: Math.max(200, maxCompLen * 7 + 20),
        t: Math.max(100, maxProteinLen * 7 + 20),
        r: 80,
        b: Math.max(80 + summaryBottomMargin, 80),
      };
      const dataWidth = allProteins.length * cellSize;
      const dataHeight = totalCols * cellSize;
      if (dataWidth + margin.l + margin.r < minCanvasWidth) margin.r += minCanvasWidth - dataWidth - margin.l - margin.r;
      if (dataHeight + margin.t + margin.b < minCanvasHeight) margin.b += minCanvasHeight - dataHeight - margin.t - margin.b;

      const xVals = allProteins.map((_, i) => i);
      const yVals = Array.from({ length: totalCols }, (_, i) => i);
      this.graphData = [{ x: xVals, y: yVals, z: zSwapped, customdata: cdSwapped, type: 'heatmap', colorscale, zmin, zmax, zauto: false, xgap: 1, ygap: 1, hoverongaps: true, hovertemplate: hoverTpl, colorbar: { ...colorbar, y: 0, ypad: summaryBottomMargin + 20 } }];
      this.layout = {
        width: dataWidth + margin.l + margin.r, height: dataHeight + margin.t + margin.b, margin, annotations,
        xaxis: { side: 'top', showgrid: false, zeroline: false, fixedrange: false, tickvals: xVals, ticktext: allProteins, tickangle: 45, tickfont: { size: fontSize, color: textColor }, dtick: 1 },
        yaxis: { autorange: 'reversed', showgrid: false, zeroline: false, fixedrange: false, tickvals: yVals, ticktext: compTicktext, tickfont: { size: fontSize, color: textColor }, dtick: 1 },
        hoverlabel: { bgcolor: isDark ? 'rgba(30,30,30,0.95)' : 'rgba(255,255,255,0.95)', bordercolor: isDark ? '#888' : '#555', font: { size: 11, color: textColor }, align: 'left' },
        plot_bgcolor: '#cccccc', paper_bgcolor: paperBg, shapes: [],
      };
    }

    this.rebuildShapes();
  }

  private rebuildShapes(): void {
    const shapes: any[] = [];
    const swapped = this._heatmapSettings.swapAxes;

    // Project boundary rectangles
    // Not swapped: comparisons on x-axis → vertical bands; Swapped: comparisons on y-axis → horizontal bands
    for (const b of this.projectBoundaries) {
      if (!swapped) {
        shapes.push({ type: 'rect', x0: b.x0, x1: b.x1, y0: 0, y1: 1, xref: 'x', yref: 'paper', line: { color: '#e53e3e', width: 3 }, fillcolor: 'rgba(0,0,0,0)' });
      } else {
        shapes.push({ type: 'rect', x0: 0, x1: 1, y0: b.x0, y1: b.x1, xref: 'paper', yref: 'y', line: { color: '#e53e3e', width: 3 }, fillcolor: 'rgba(0,0,0,0)' });
      }
    }

    // Comparison group separator lines
    for (const sepPos of this.separatorLines) {
      if (!swapped) {
        shapes.push({ type: 'line', x0: sepPos, x1: sepPos, y0: 0, y1: 1, xref: 'x', yref: 'paper', line: { color: 'rgba(186,104,166,0.8)', width: 2 } });
      } else {
        shapes.push({ type: 'line', x0: 0, x1: 1, y0: sepPos, y1: sepPos, xref: 'paper', yref: 'y', line: { color: 'rgba(186,104,166,0.8)', width: 2 } });
      }
    }

    // Hover highlight — all columns in the hovered comparison group
    if (this.hoveredGroupKey !== null) {
      const group = this.columnGroups.find(g => g.groupKey === this.hoveredGroupKey);
      if (group) {
        for (const ci of group.colIdxs) {
          if (!swapped) {
            shapes.push({ type: 'rect', x0: ci - 0.5, x1: ci + 0.5, y0: 0, y1: 1, xref: 'x', yref: 'paper', line: { color: '#1a202c', width: 2 }, fillcolor: 'rgba(0,0,0,0)' });
          } else {
            shapes.push({ type: 'rect', x0: 0, x1: 1, y0: ci - 0.5, y1: ci + 0.5, xref: 'paper', yref: 'y', line: { color: '#1a202c', width: 2 }, fillcolor: 'rgba(0,0,0,0)' });
          }
        }
      }
    }

    // Selection highlight — bar next to each selected protein row (or column when swapped)
    this.allProteins.forEach((protein, i) => {
      if (this._selectedProteinIds.has(protein)) {
        if (!swapped) {
          shapes.push({ type: 'rect', xref: 'paper', yref: 'y', x0: -0.015, x1: 0, y0: i - 0.5, y1: i + 0.5, fillcolor: 'rgba(79, 70, 229, 0.7)', line: { width: 0 } });
        } else {
          shapes.push({ type: 'rect', xref: 'x', yref: 'paper', x0: i - 0.5, x1: i + 0.5, y0: 1, y1: 1.015, fillcolor: 'rgba(79, 70, 229, 0.7)', line: { width: 0 } });
        }
      }
    });

    this.layout = { ...this.layout, shapes };
    this.revision++;
  }

  onClick(event: any): void {
    const pt = event.points[0];
    const swapped = this._heatmapSettings.swapAxes;
    const protein = swapped ? this.allProteins[pt.x as number] : this.allProteins[pt.y as number];
    if (protein) {
      this.proteinClicked.emit(protein);
    }
  }

  handleHoverIn(event: any): void {
    const pt = event.points[0];
    const swapped = this._heatmapSettings.swapAxes;
    // When not swapped: x=colIdx, y=rowIdx (protein index)
    // When swapped:     x=proteinIdx, y=colIdx (comparison index)
    const colIdx: number = swapped ? (pt.y as number) : (pt.x as number);
    const protein = swapped ? this.allProteins[pt.x as number] : this.allProteins[pt.y as number];
    const cd = pt.customdata;

    this.hoveredGroupKey = this.colIdxToGroupKey[colIdx] ?? null;
    if (protein && cd && !cd.empty) {
      this.currentHoverTarget.emit(this.dataByColProtein[`${colIdx}_${protein}`]);
    } else {
      this.currentHoverTarget.emit(undefined);
    }
    this.rebuildShapes();
    this.cdr.markForCheck();
  }

  handleHoverOut(_event: any): void {
    this.hoveredGroupKey = null;
    this.currentHoverTarget.emit(undefined);
    this.rebuildShapes();
    this.cdr.markForCheck();
  }

  exportToCsv(scope: 'all' | 'selected' = 'all'): void {
    const data = scope === 'selected' && this._selectedProteinIds.size > 0
      ? this._data.filter(d => this._selectedProteinIds.has(d.protein))
      : this._data;

    if (!data.length) return;

    const headers = ['Protein', 'Project', 'Analysis Group', 'Condition A', 'Condition B', 'Comparison', 'Log2FC', 'P-value', 'Search Term'];
    const rows = data.map(d => [
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
    const filename = scope === 'selected' ? 'heatmap_selected.csv' : `heatmap_${data[0]?.searchTerm || 'data'}.csv`;
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  exportImage(format: 'png' | 'svg'): void {
    const el = this.plotContainerRef?.nativeElement?.querySelector('.js-plotly-plot');
    if (!el) return;
    const plotly = (window as any).Plotly;
    if (!plotly) return;
    plotly.downloadImage(el, {
      format,
      filename: 'heatmap',
      width: (el as any).layout?.width,
      height: (el as any).layout?.height,
    });
  }
}
