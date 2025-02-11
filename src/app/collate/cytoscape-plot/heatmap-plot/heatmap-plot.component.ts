import {AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
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
    protein: string
  }[] = []
  @Input() set data (value: {
    project: string
    analysis_group: string,
    conditionA: string,
    conditionB: string,
    log2fc: number,
    p_value: number,
    comparison: string,
    protein: string
  }[]) {
    this._data = value;
    this.drawHeatmap();
  }
  get data() {
    return this._data;
  }

  layout: any = {}
  graphData: any = {}
  revision = 0
  reversePointIndexToProject: any = {}
  drawHeatmap() {
    // Group data by project
    const projectGroups: any = {}
    for (const d of this.data) {
      if (!projectGroups[d.project]) {
        projectGroups[d.project] = []
      }
      projectGroups[d.project].push(d)
    }

    // Create subplots
    const subplots = [];
    const annotations = [];
    const shapes = [];
    let currentIndex = 0;
    let subplotIndex = 1;
    for (const project in projectGroups) {
      const group = projectGroups[project];
      const x: string[] = [];
      const y: string[] = [];
      const z: number[] = [];
      const text: string[] = [];
      for (const d of group) {
        x.push(`${d.analysis_group} ${d.conditionA} vs ${d.conditionB}`);
        y.push(d.protein);
        z.push(d.log2fc);
        text.push(`${d.comparison}<br>p-value: ${d.p_value}<br>log2fc: ${d.log2fc}<br>project: ${d.project}<br>analysis_group: ${d.analysis_group}<br>conditionA: ${d.conditionA}<br>conditionB: ${d.conditionB}`);
      }

      const trace = {
        x: x,
        y: y,
        z: z,
        text: text,
        type: 'heatmap',
        colorscale: 'Viridis',
        xaxis: `x${subplotIndex}`,
        yaxis: 'y'
      };

      subplots.push(trace);

      annotations.push({
        x: currentIndex,
        y: 1.05, // Position above the x-axis
        xref: `x${subplotIndex}`,
        yref: 'paper',
        text: project,
        showarrow: false,
        font: {
          size: 12,
          color: 'black'
        },
        textangle: 0 // Horizontal text
      });

      shapes.push({
        type: 'rect',
        x0: currentIndex - 0.5,
        x1: currentIndex + group.length - 0.5,
        y0: 1,
        y1: 0,
        xref: `x${subplotIndex}`,
        yref: 'paper',
        line: {
          color: 'red',
          width: 1
        },
        fillcolor: 'rgba(0,0,0,0)' // Transparent fill
      });

      currentIndex += group.length;
      subplotIndex++;
    }

    const layout: any = {
      title: 'Heatmap of Protein Changes',
      grid: { rows: 1, columns: subplots.length, pattern: 'independent' },
      yaxis: { title: 'Protein' }, // Shared y-axis
      annotations: annotations,
      shapes: shapes,
      coloraxis: { colorscale: 'Viridis' } // Shared color scale
    };

    this.graphData = subplots;
    this.layout = layout;
    this.revision++;
  }

  handleHoverIn(event: any) {
    const shapeIndex = event.points[0].pointIndex;
    this.reversePointIndexToProject[shapeIndex].line.color = 'white';
    this.revision++;
  }

  handleHoverOut(event: any) {
    const shapeIndex = event.points[0].pointIndex;
    this.reversePointIndexToProject[shapeIndex].line.color = 'red';
    this.revision++;
  }
}
