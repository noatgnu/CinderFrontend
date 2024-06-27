import {Component, Input} from '@angular/core';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
import {GraphService} from "../../../graph.service";
import {MatButton} from "@angular/material/button";
import {AccountsService} from "../../../accounts/accounts.service";

PlotlyModule.plotlyjs = PlotlyJS;
@Component({
  selector: 'app-vertical-bar-chart',
  standalone: true,
  imports: [PlotlyModule, MatButton],
  templateUrl: './vertical-bar-chart.component.html',
  styleUrl: './vertical-bar-chart.component.scss'
})
export class VerticalBarChartComponent {
  showOtherConditions = false
  @Input() title: string = ''

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
      title: 'Value',
      tickfont: {
        size: 17,
        color: "black",
      },
    },
    margin: {r: 40, l: 100, b: 120, t: 100},
    width: 1000,
  }
  barSize = 50
  revision = 0
  currentColor = 0
  colorMap: any = {}
  constructor(private graph: GraphService, private accounts: AccountsService) {
    this.graph.redrawTrigger.subscribe(() => {
      this.drawVerticalBarChart()
    })
  }

  drawVerticalBarChart() {
    let element = document.getElementsByTagName("body")[0]
    let style = window.getComputedStyle(element)
    let backgroundColor = style.backgroundColor
    if (this.accounts.userAccount.darkMode) {
      this.graphLayout.plot_bgcolor = backgroundColor;
      this.graphLayout.paper_bgcolor = backgroundColor;
      this.graphLayout.font = {
        color: "white",
        size: 14
      };
      // set title color to white
      this.graphLayout.xaxis.tickfont.color = "white"
      this.graphLayout.yaxis.tickfont.color = "white"
    } else {
      this.graphLayout.plot_bgcolor = "#FFFFFF";
      this.graphLayout.paper_bgcolor = "#FFFFFF";
      this.graphLayout.font = {
        color: "black",
        size: 14
      };
    }
    let data = this.annotationData
    const temp: any = {}
    const ticktext = []
    const tickvals = []
    for (const d of data) {

      if (!temp[d.Condition]) {
        if (!this.colorMap[d.Condition]) {
          this.colorMap[d.Condition] = this.graph.defaultColorList[this.currentColor]
        }
        temp[d.Condition] = {
          x: [],
          y: [],
          type: 'bar',
          marker: {
            color: this.colorMap[d.Condition]
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
      if (!this.showOtherConditions) {
        if (this.comparedConditions.length > 0 && !this.comparedConditions.includes(key)) {
          continue
        }
      }
      currentSampleNumber = currentSampleNumber + temp[key].x.length
      tickvals.push(temp[key].x[Math.round(temp[key].x.length/2)-1])
      ticktext.push(key)
      graphData.push(temp[key])
    }
    this.graphData = graphData
    this.graphLayout.xaxis.tickvals = tickvals
    this.graphLayout.xaxis.ticktext = ticktext
    if (this.title) {
      this.graphLayout.title = this.title
    }
    this.graphLayout.width = this.graphLayout.margin.l + this.graphLayout.margin.r + this.barSize * currentSampleNumber
    this.revision += 1
  }
  toggleOtherConditions() {
    this.showOtherConditions = !this.showOtherConditions
    this.drawVerticalBarChart()
  }
}
