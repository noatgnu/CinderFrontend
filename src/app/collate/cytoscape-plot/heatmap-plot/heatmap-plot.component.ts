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

  @Output() currentHoverTarget: EventEmitter<{
    project: string
    analysis_group: string,
    conditionA: string,
    conditionB: string,
    log2fc: number,
    p_value: number,
    comparison: string,
    protein: string,
    searchTerm: string
  }> = new EventEmitter<{
    project: string
    analysis_group: string,
    conditionA: string,
    conditionB: string,
    log2fc: number,
    p_value: number,
    comparison: string,
    protein: string,
    searchTerm: string
  }>();

  get data() {
    return this._data;
  }

  layout: any = {}
  graphData: any = {}
  revision = 0
  reversePointIndexToProject: any = {}
  reversePointIndexToColumn: any = {}
  reversePointIndexToData: any = {}
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
    const tickvals: number[] = [];
    const ticktext: string[] = [];
    let tickIndex = 0;

    let lastProject = '';
    const searchTerm = this.data[0].searchTerm;
    for (const project in projectGroups) {
      const group = projectGroups[project];
      let inGroupIndex = 0;
      let lastComparison = '';


      for (const d of group) {
        const comparison = `${d.analysis_group} ${d.conditionA} vs ${d.conditionB}`;
        x.push(`${comparison} ${d.project} ${inGroupIndex}`);
        y.push(d.protein);
        z.push(d.log2fc);
        text.push(`${d.project}`);
        if (inGroupIndex === 0) {
          tickvals.push(tickIndex);
          ticktext.push(d.comparison);
          lastComparison = d.comparison;
        } else if (d.comparison !== lastComparison) {
          tickvals.push(tickIndex);
          ticktext.push(d.comparison);
          lastComparison = d.comparison;
        } else {
          tickvals.push(tickIndex);
          ticktext.push('');
        }

        inGroupIndex++;
        tickIndex++;
      }
      lastProject = project;
    }
    // disable hoverinfo
    const trace = {
      x: x,
      y: y,
      z: z,
      text: text,
      type: 'heatmap',
      colorscale: 'Viridis',
      colorbar: {
        orientation: 'h',
      },
      hoverinfo: 'none'
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
          width: 4
        },
        fillcolor: 'rgba(0,0,0,0)',
        opacity: 0.5,
        hoverinfo: 'none',
        hoveron: 'fills'
      };
      shapes.push(projectShape);

      let lastComparison = group[0].comparison
      for (let i = 0; i < groupSize; i++) {
        const horizontalLine = {
          type: 'line',
          x0: currentIndex +i,
          x1: currentIndex + i,
          y0: -0.1,
          y1: -0.1,
          xref: 'x',
          yref: 'paper',
          line: {
            color: "rgb(179,0,137)",
            width: 4
          }
        }
        if (i === 0) {
          horizontalLine.x0 = currentIndex +i - 0.4
        }
        if (i - 1 >=0) {
          if (group[i].comparison !== group[i-1].comparison) {
            horizontalLine.x0 = currentIndex +i- 0.4
          } else {
            horizontalLine.x0 = currentIndex +i- 0.5
          }
        }
        if (group[i+1]) {
          if (group[i].comparison !== group[i+1].comparison) {
            horizontalLine.x1 = currentIndex +i+ 0.4
          } else {
            horizontalLine.x1 = currentIndex +i+ 0.5
          }
        } else {
          if (group[i].comparison !== lastComparison) {
            horizontalLine.x1 = currentIndex +i+ 0.4
          } else {
            horizontalLine.x1 = currentIndex +i+ 0.5
          }
        }
        shapes.push(horizontalLine)
      }

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
              color: "rgba(186,104,166)",
              width: 3
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
        this.reversePointIndexToData[currentIndex + i] = group[i];
      }
      currentIndex += groupSize;
    }

    // Calculate width and height based on the number of unique cells
    const cellSize = 50;
    const uniqueX = Array.from(new Set(x)).length;
    const uniqueY = Array.from(new Set(y)).length;
    const margin = { l: 300, r: 50, t: 100, b: 300 };
    const width = uniqueX * cellSize + margin.l + margin.r;
    const height = uniqueY * cellSize + margin.t + margin.b;

    const layout: any = {
      title: `Search term: ${searchTerm}`,
      width: width,
      height: height,
      margin: margin,
      xaxis: {
        title: 'Analysis',
        showgrid: false,
        scaleanchor: 'y',
        scaleratio: 1,
        tickvals: tickvals,
        ticktext: ticktext,
        ticklen: 0
      },yaxis: { title: 'Protein', showgrid: false },
      shapes: shapes
    };
    console.log(layout)
    this.graphData = [trace];
    this.layout = layout;
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
}
