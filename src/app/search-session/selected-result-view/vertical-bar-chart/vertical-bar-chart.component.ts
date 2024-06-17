import {Component, Input} from '@angular/core';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
import {GraphService} from "../../../graph.service";

PlotlyModule.plotlyjs = PlotlyJS;
@Component({
  selector: 'app-vertical-bar-chart',
  standalone: true,
  imports: [PlotlyModule],
  templateUrl: './vertical-bar-chart.component.html',
  styleUrl: './vertical-bar-chart.component.scss'
})
export class VerticalBarChartComponent {
  @Input() comparedConditions: string[] = []

  private _annotationData: {Sample: string, Condition: string, Value: number}[] = []
  @Input() set annotationData(value: {Sample: string, Condition: string, Value: number}[]) {
    this._annotationData = value
    this.currentColor = 0
    this.drawVerticalBarChart()
  }

  get annotationData(): {Sample: string, Condition: string, Value: number}[] {
    return this._annotationData
  }

  graphData: any[] = []
  graphLayout: any = {
    xaxis: {
      title: 'Sample',
      tickfont: {
        size: 17,
        color: "black",
      },
      tickvals: [],
      ticktext: []
    },
    yaxis: {
      title: 'Value'
    },
    margin: {r: 40, l: 100, b: 120, t: 100},
    width: 1000,
  }
  barSize = 50
  revision = 0
  currentColor = 0
  constructor(private graph: GraphService) {
  }

  drawVerticalBarChart() {
    let data = this.annotationData
    const temp: any = {}
    const ticktext = []
    const tickvals = []
    for (const d of data) {

      if (!temp[d.Condition]) {
        temp[d.Condition] = {
          x: [],
          y: [],
          type: 'bar',
          marker: {
            color: this.graph.defaultColorList[this.currentColor]
          },
          showlegend: false,
          name: d.Condition
        }
        this.currentColor += 1
        if (this.currentColor >= this.graph.defaultColorList.length) {
          this.currentColor = 0
        }
      }
      temp[d.Condition].y.push(d.Value)
      temp[d.Condition].x.push(d.Sample)
    }
    const graphData = []
    let currentSampleNumber = 0
    for (const key in temp) {
      if (this.comparedConditions.length > 0 && !this.comparedConditions.includes(key)) {
        continue
      }
      currentSampleNumber = currentSampleNumber + temp[key].x.length
      tickvals.push(temp[key].x[Math.round(temp[key].x.length/2)-1])
      ticktext.push(key)
      graphData.push(temp[key])
    }
    this.graphData = graphData
    this.graphLayout.xaxis.tickvals = tickvals
    this.graphLayout.xaxis.ticktext = ticktext
    this.graphLayout.width = this.graphLayout.margin.l + this.graphLayout.margin.r + this.barSize * currentSampleNumber
    this.revision += 1
  }

}