import {Component, Input} from '@angular/core';
import {PlotlyModule} from "angular-plotly.js";
import * as PlotlyJS from "plotly.js-dist-min";
import {SearchResult} from "../../../search-session";

PlotlyModule.plotlyjs = PlotlyJS;

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [
    PlotlyModule
  ],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent {
  private _data: SearchResult|null = null;
  @Input() set data(value: SearchResult|null) {
    this._data = value;
    this.graphLayout.title = value?.analysis_group?.name || ""
    this.drawGraph();
  }
  get data(): SearchResult|null {
    return this._data;
  }

  graphData: any[] = [];
  graphLayout: any = {
    title: "",
    height: 400,
    margin: {
      l: 100,
      r: 100,
      b: 100,
      t: 100,
    },
  }

  conditionA = ""
  conditionB = ""
  valueA: number[] = []
  valueB: number[] = []
  barSize = 50

  revision = 0;
  drawGraph() {
    let dataCount = 0
    if (this.data && this.data.condition_A && this.data.condition_B && this.data.searched_data) {
      this.conditionA = this.data.condition_A || ""
      this.conditionB = this.data.condition_B || ""
      this.valueA = this.data.searched_data.filter(x => x.Condition === this.conditionA).map(x => x.Value)
      this.valueB = this.data.searched_data.filter(x => x.Condition === this.conditionB).map(x => x.Value)
      const meanA = this.calculateMean(this.valueA)
      const meanB = this.calculateMean(this.valueB)
      const traceA = {
        x: [this.conditionA],
        y: [meanA],
        type: 'bar',
        mode: 'markers',
        name: this.conditionA,
        error_y: {
          type: 'data',
          array: [this.calculateWhisker(this.valueA)],
          visible: true
        },
        line: {
          color: "black"
        },
        showlegend: false
      }
      const boxA = this.drawTransparentBoxPlot(this.valueA, this.conditionA)
      const traceB = {
        x: [this.conditionB],
        y: [meanB],
        type: 'bar',
        mode: 'markers',
        name: this.conditionB,
        error_y: {
          type: 'data',
          array: [this.calculateWhisker(this.valueB)],
          visible: true
        },
        line: {
          color: "black"
        },
        showlegend: false
      }
      const boxB = this.drawTransparentBoxPlot(this.valueB, this.conditionB)
      dataCount = 2
      this.graphData = [traceA, boxA, traceB, boxB]

    } else if (this.data && (this.data.condition_A == "" || this.data.condition_B == "")){
      const uniqueConditions = Array.from(new Set(this.data.searched_data.map(x => x.Condition)))
      const meanValues = uniqueConditions.map(condition => {
        // @ts-ignore
        const values = this.data.searched_data.filter(x => x.Condition === condition).map(x => x.Value)
        return this.calculateMean(values)
      })
      const whiskerValues = uniqueConditions.map(condition => {
        // @ts-ignore
        const values = this.data.searched_data.filter(x => x.Condition === condition).map(x => x.Value)
        return this.calculateWhisker(values)
      })
      const traces = uniqueConditions.map((condition, i) => {
        return {
          x: [condition],
          y: [meanValues[i]],
          type: 'bar',
          mode: 'markers',
          name: condition,
          error_y: {
            type: 'data',
            array: [whiskerValues[i]],
            visible: true
          },
          line: {
            color: "black"
          },
          showlegend: false
        }
      })
      const boxes = uniqueConditions.map((condition, i) => {
        // @ts-ignore
        const values = this.data.searched_data.filter(x => x.Condition === condition).map(x => x.Value)
        return this.drawTransparentBoxPlot(values, condition)
      })
      dataCount = uniqueConditions.length
      this.graphData = [...traces, ...boxes]
    }
    console.log(this.graphData)
    this.graphLayout.width = this.graphLayout.margin.l + this.graphLayout.margin.r + this.barSize * dataCount
    this.revision++
  }

  calculateMean(data: number[]): number {
    const sum = data.reduce((a, b) => a + b, 0);
    return sum / data.length;
  }

  calculateWhisker(data: number[]): number {
    const mean = this.calculateMean(data);
    const variance = data.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) / data.length;
    return Math.sqrt(variance);
  }

  drawTransparentBoxPlot(data: number[], name: string) {
    return {
      x: name, y: data.filter((d: number) => !isNaN(d)),
      type: 'box',
      boxpoints: 'all',
      pointpos: 0,
      jitter: 0.3,
      fillcolor: 'rgba(255,255,255,0)',
      line: {
        color: 'rgba(255,255,255,0)',
      },
      hoveron: 'points',
      marker: {
        color: "#654949",
        opacity: 0.8,
      },
      name: name,
      //visible: visible,
      showlegend: false
    }
  }
}
