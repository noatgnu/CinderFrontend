import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {PlotlyModule} from "angular-plotly.js";
import * as PlotlyJS from "plotly.js-dist-min";

PlotlyModule.plotlyjs = PlotlyJS;

@Component({
  selector: 'app-heatmap-plot',
  imports: [PlotlyModule],
  templateUrl: './heatmap-plot.component.html',
  styleUrl: './heatmap-plot.component.scss'
})
export class HeatmapPlotComponent {
  private _data: {
    project: string
    analysis_group: string,
    conditionA: string,
    conditionB: string,
    log2fc: number,
    p_value: number,
    comparison: string,
    protein: string,
    searchTerm: string
  }[] = []
  @Input() set data (value: {
    project: string
    analysis_group: string,
    conditionA: string,
    conditionB: string,
    log2fc: number,
    p_value: number,
    comparison: string,
    protein: string,
    searchTerm: string
  }[]) {
    this._data = value;
    this.drawHeatmap();
  }

  @Output() currentHoverTarget: EventEmitter<string> = new EventEmitter<string>();

  get data() {
    return this._data;
  }

  layout: any = {}
  graphData: any = {}
  revision = 0
  reversePointIndexToProject: any = {}
  reversePointIndexToColumn: any = {}
  drawHeatmap() {
    // Group data by project
    const projectGroups: any = {};
    for (const d of this.data) {
      if (!projectGroups[d.project]) {
        projectGroups[d.project] = [];
      }
      projectGroups[d.project].push(d);
    }

    // Sort data within each project by comparison
    for (const project in projectGroups) {
      projectGroups[project].sort((a: any, b: any) => a.comparison.localeCompare(b.comparison));
    }

    // Transform data to heatmap
    const x: string[] = [];
    const y: string[] = [];
    const text: string[] = [];
    const z: number[] = [];
    for (const project in projectGroups) {
      const group = projectGroups[project];
      let inGroupIndex = 0;
      for (const d of group) {
        const comparison = `${d.analysis_group} ${d.conditionA} vs ${d.conditionB}`;
        x.push(`${comparison} ${d.project} ${inGroupIndex}`);
        y.push(d.protein);
        z.push(d.log2fc);
        text.push(`${d.project}`);
        inGroupIndex++;
      }
    }

    const trace = {
      x: x,
      y: y,
      z: z,
      text: text,
      type: 'heatmap',
      colorscale: 'Viridis',
      colorbar: {
        orientation: 'h',
      }
    };

    // Calculate shapes for each project and individual columns
    const shapes = [];
    let currentIndex = 0;
    for (const project in projectGroups) {
      const group = projectGroups[project];
      const groupSize = group.length;
      const projectShape = {
        type: 'rect',
        x0: currentIndex - 0.5,
        x1: currentIndex + groupSize - 0.5,
        y0: 1,
        y1: 0,
        xref: 'x',
        yref: 'paper',
        line: {
          color: 'red',
          width: 1
        },
        fillcolor: 'rgba(0,0,0,0)',
        opacity: 0.5,
        hoverinfo: 'none',
        hoveron: 'fills'
      };
      shapes.push(projectShape);

      // Add vertical lines between groups of the same comparison
      let lastComparison = group[0].comparison;
      for (let i = 1; i < groupSize; i++) {
        if (group[i].comparison !== lastComparison) {
          const verticalLine = {
            type: 'line',
            x0: currentIndex + i - 0.5,
            x1: currentIndex + i - 0.5,
            y0: 1,
            y1: 0,
            xref: 'x',
            yref: 'paper',
            line: {
              color: 'red',
              width: 2
            }
          };
          shapes.push(verticalLine);
          lastComparison = group[i].comparison;
        }
      }

      for (let i = 0; i < groupSize; i++) {
        const columnShape = {
          type: 'rect',
          x0: currentIndex + i - 0.5,
          x1: currentIndex + i + 0.5,
          y0: 1,
          y1: 0,
          xref: 'x',
          yref: 'paper',
          line: {
            color: 'rgba(0,0,0,0)',
            width: 2
          },
          fillcolor: 'rgba(0,0,0,0)',
          opacity: 0.5,
          hoverinfo: 'none',
          hoveron: 'fills'
        };
        shapes.push(columnShape);
        this.reversePointIndexToProject[currentIndex + i] = projectShape;
        this.reversePointIndexToColumn[currentIndex + i] = columnShape;
      }
      currentIndex += groupSize;
    }

    // Calculate width and height based on the number of unique cells
    const cellSize = 50;
    const uniqueX = Array.from(new Set(x)).length;
    const uniqueY = Array.from(new Set(y)).length;
    const margin = { l: 300, r: 50, t: 100, b: 100 };
    const width = uniqueX * cellSize + margin.l + margin.r;
    const height = uniqueY * cellSize + margin.t + margin.b;

    const layout: any = {
      title: 'Heatmap of Protein Changes',
      width: width,
      height: height,
      margin: margin,
      xaxis: { title: 'Analysis', showticklabels: true, showgrid: false, scaleanchor: 'y', scaleratio: 1 },
      yaxis: { title: 'Protein', showgrid: false },
      shapes: shapes
    };

    this.graphData = [trace];
    this.layout = layout;
    this.revision++;
  }

  handleHoverIn(event: any) {
    const shapeIndex = event.points[0].pointIndex;
    if (this.reversePointIndexToProject[shapeIndex]) {
      this.reversePointIndexToProject[shapeIndex].line.color = 'white';
      const shape = this.reversePointIndexToColumn[shapeIndex];
      shape.line.color = 'white';
      shape.line.width = 2;
      this.revision++;
    }

  }

  handleHoverOut(event: any) {
    const shapeIndex = event.points[0].pointIndex;
    if (this.reversePointIndexToProject[shapeIndex]) {
      this.reversePointIndexToProject[shapeIndex].line.color = 'red';
      const shape = this.reversePointIndexToColumn[shapeIndex];
      shape.line.color = 'rgba(0,0,0,0)';
      this.revision++;
    }

  }
}
