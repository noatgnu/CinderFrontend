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

    // Transform data to heatmap
    const x: string[] = [];
    const y: string[] = [];
    const text: string[] = [];
    const z: number[] = [];
    for (const project in projectGroups) {
      const group = projectGroups[project];
      for (const d of group) {
        const comparison = `${d.analysis_group} ${d.conditionA} vs ${d.conditionB}`;
        x.push(`${comparison} ${d.project} ${d.searchTerm}`);
        y.push(d.protein);
        z.push(d.log2fc);
        text.push(`${d.project}`);
      }
    }

    const trace = {
      x: x,
      y: y,
      z: z,
      text: text,
      type: 'heatmap',
      colorscale: 'Viridis'
    };

    // Calculate shapes for each project and individual columns
    const shapes = [];
    let currentIndex = 0;
    for (const project in projectGroups) {
      const groupSize = projectGroups[project].length;
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
        fillcolor: 'rgba(0,0,0,0)', // Transparent fill
        opacity: 0.5,
        hoverinfo: 'none',
        hoveron: 'fills'
      };
      shapes.push(projectShape);
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
            width: 1
          },
          fillcolor: 'rgba(0,0,0,0)', // Transparent fill
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

    const layout: any = {
      title: 'Heatmap of Protein Changes',
      xaxis: { title: 'Analysis', showticklabels: false },
      yaxis: { title: 'Protein' },
      shapes: shapes
    };

    this.graphData = [trace];
    this.layout = layout;
    this.revision++;
  }
  handleHoverIn(event: any) {
    const shapeIndex = event.points[0].pointIndex;
    this.reversePointIndexToProject[shapeIndex].line.color = 'white';
    const shape = this.reversePointIndexToColumn[shapeIndex];
    shape.line.color = 'white';
    shape.line.width = 2;
    this.revision++;
  }

  handleHoverOut(event: any) {
    const shapeIndex = event.points[0].pointIndex;
    this.reversePointIndexToProject[shapeIndex].line.color = 'red';
    const shape = this.reversePointIndexToColumn[shapeIndex];
    shape.line.color = 'rgba(0,0,0,0)';
    this.revision++;
  }
}
