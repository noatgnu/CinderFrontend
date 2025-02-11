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
  drawHeatmap() {
    // reorder data based on project
    this.data = this.data.sort((a, b) => a.project.localeCompare(b.project));
    // transform data to heatmap
    const x = this.data.map(d => `${d.analysis_group} ${d.conditionA} vs ${d.conditionB}`);
    const y = this.data.map(d => d.protein);
    const z = this.data.map(d => d.log2fc);
    const text = this.data.map(d => `${d.comparison}<br>p-value: ${d.p_value}<br>log2fc: ${d.log2fc}<br>project: ${d.project}<br>analysis_group: ${d.analysis_group}<br>conditionA: ${d.conditionA}<br>conditionB: ${d.conditionB}`);

    const trace = {
      x: x,
      y: y,
      z: z,
      text: text,
      type: 'heatmap',
      colorscale: 'Viridis'
    };

    // Group data by project
    const projectGroups = this.data.reduce((acc: any, d) => {
      if (!acc[d.project]) {
        acc[d.project] = [];
      }
      acc[d.project].push(d);
      return acc;
    }, {});

    // Calculate annotations for each project group
    const annotations = [];
    let currentIndex = 0;
    for (const project in projectGroups) {
      const groupSize = projectGroups[project].length;
      const midIndex = currentIndex + Math.floor(groupSize / 2);
      annotations.push({
        x: x[midIndex],
        y: 1.05, // Position above the x-axis
        xref: 'x',
        yref: 'paper',
        text: project,
        showarrow: false,
        font: {
          size: 12,
          color: 'black'
        }
      });
      currentIndex += groupSize;
    }

    const layout: any = {
      title: 'Heatmap of Protein Changes',
      xaxis: { title: 'Analysis' },
      yaxis: { title: 'Protein', showticklabels: false },
      annotations: annotations
    };


    this.graphData = [trace];
    this.layout = layout;
    this.revision++
  }
}
