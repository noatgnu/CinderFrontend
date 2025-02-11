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
    const projectGroups: any = {}
    for (const d of this.data) {
      if (!projectGroups[d.project]) {
        projectGroups[d.project] = []
      }
      projectGroups[d.project].push(d)
    }

    // Calculate annotations for each project group
    const shapes = [];
    let currentIndex = 0;
    for (const project in projectGroups) {
      const groupSize = projectGroups[project].length;
      const midIndex = currentIndex + Math.floor(groupSize / 2);
      const shape = {
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
        fillcolor: 'rgba(0,0,0,0)' // Transparent fill
      }
      shapes.push(shape);
      for (let i = 0; i < groupSize; i++) {
        this.reversePointIndexToProject[currentIndex + i] = shape
      }
      currentIndex += groupSize;
    }

    // transform data to heatmap
    const x: string[] = []
    const y: string[] = []
    const text: string[] = []
    const z: number[] = []
    currentIndex = 0
    for (const project in projectGroups) {
      const group = projectGroups[project]
      for (let i = 0; i < group.length; i++) {
        const d = group[i]
        x.push(`${d.analysis_group} ${d.conditionA} vs ${d.conditionB} ${d.project}`)
        y.push(d.protein)
        z.push(d.log2fc)
        text.push(`${d.project}`)
        const projectShape = this.reversePointIndexToProject[x.length - 1]
        const shape = {
          type: 'rect',
          x0: projectShape.x0+i,
          x1: projectShape.x0+i+1,
          y0: 1,
          y1: 0,
          xref: 'x',
          yref: 'paper',
          line: {
            color: "rgba(0,0,0,0)",
            width: 1
          },
        }
        this.reversePointIndexToColumn[currentIndex] = shape
        shapes.push(shape)
        currentIndex++

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



    const layout: any = {
      title: 'Heatmap of Protein Changes',
      xaxis: { title: 'Analysis', showticklabels: false},
      yaxis: { title: 'Protein'},
      shapes: shapes
    };


    this.graphData = [trace];
    this.layout = layout;
    this.revision++
  }

  handleHoverIn(event: any) {
    const shapeIndex = event.points[0].pointIndex;
    this.reversePointIndexToProject[shapeIndex].line.color = 'white';
    this.reversePointIndexToColumn[shapeIndex].line.color = 'white';
    this.reversePointIndexToColumn[shapeIndex].line.width = 2;
    this.reversePointIndexToColumn[shapeIndex].className = 'blinking';
    this.revision++;
  }

  handleHoverOut(event: any) {
    const shapeIndex = event.points[0].pointIndex;
    this.reversePointIndexToProject[shapeIndex].line.color = 'red';
    this.reversePointIndexToColumn[shapeIndex].line.color = 'rgba(0,0,0,0)';
    this.reversePointIndexToColumn[shapeIndex].className = '';
    this.revision++;
  }
}
