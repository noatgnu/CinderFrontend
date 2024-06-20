import {Component, Input} from '@angular/core';
import {CurtainData} from "../analysis-group";

import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';

PlotlyModule.plotlyjs = PlotlyJS;

@Component({
  selector: 'app-volcano-plot',
  standalone: true,
  imports: [PlotlyModule],
  templateUrl: './volcano-plot.component.html',
  styleUrl: './volcano-plot.component.scss'
})
export class VolcanoPlotComponent {
  private _curtainData: CurtainData|undefined = undefined
  @Input() set curtainData(value: CurtainData) {
    this._curtainData = value
    this.drawVolcanoPlot()
  }

  get curtainData(): CurtainData {
    return this._curtainData!
  }

  graphData: any[] = []
  graphLayout: any = {
    height: 700, width: 700,
    margin: {r: null, l: null, b: null, t: null},
    xaxis: {
      title: "<b>Log2FC</b>",
      tickmode: "linear",
      ticklen: 5,
      showgrid: false,
      visible: true,
      //zerolinecolor: "#ffffff"
    },
    yaxis: {
      title: "<b>-log10(p-value)</b>",
      tickmode: "linear",
      ticklen: 5,
      showgrid: false,
      visible: true,
      showticklabels: true,
      zeroline: true,
    },
    annotations: [],
    showlegend: true, legend: {
      orientation: 'h'
    },
    title: {
      text: "",
      font: {
        size: 24,
        family: "Arial, sans-serif"
      },
    }
  }
  revision = 0
  config: any = {
    //modeBarButtonsToRemove: ["toImage"]
    toImageButtonOptions: {
      format: 'svg',
      filename: this.graphLayout.title.text,
      height: this.graphLayout.height,
      width: this.graphLayout.width,
      scale: 1
    }
  }

  colorMap: any = {}

  drawVolcanoPlot() {
    this.graphLayout.title.text = this.curtainData.settings["title"]
    this.colorMap = this.curtainData.settings.colorMap
    const allColorLabels = Object.keys(this.colorMap)
    const xMin = Math.min(...this.curtainData.data.map((d) => d["Fold Change"]))
    const xMax = Math.max(...this.curtainData.data.map((d) => d["Fold Change"]))
    const yMin = 0
    const yMax = Math.max(...this.curtainData.data.map((d) => d["P-value"]))
    this.graphLayout.xaxis.range = [xMin - 0.5, xMax + 0.5]
    this.graphLayout.yaxis.range = [yMin, yMax - yMin * 0.5]
    const volcanoAxis = this.curtainData.settings.volcanoAxis
    if (volcanoAxis.minX) {
      this.graphLayout.xaxis.range[0] = volcanoAxis.minX
    }
    if (volcanoAxis.maxX) {
      this.graphLayout.xaxis.range[1] = volcanoAxis.maxX
    }
    if (volcanoAxis.minY) {
      this.graphLayout.yaxis.range[0] = volcanoAxis.minY
    }
    if (volcanoAxis.maxY) {
      this.graphLayout.yaxis.range[1] = volcanoAxis.maxY
    }
    if (volcanoAxis.x) {
      this.graphLayout.xaxis.title = `<b>${volcanoAxis.x}</b>`
    }
    if (volcanoAxis.y) {
      this.graphLayout.yaxis.title = `<b>${volcanoAxis.y}</b>`
    }

    let temp: any = {}
    temp["Background"] = {
      x: [],
      y: [],
      mode: 'markers',
      type: 'scatter',
      name: "Background",
      text: [],
      data: [],
      marker: {
        size: this.curtainData.settings["scatterPlotMarkerSize"],
        color: "#a4a2a2",
        opacity: 0.3,
      }
    }
    for (const selectionName of this.curtainData.selections) {
      temp[selectionName] = {
        x: [],
        y: [],
        mode: 'markers',
        type: 'scatter',
        name: selectionName,
        text: [],
        data: [],
        marker: {
          size: this.curtainData.settings["scatterPlotMarkerSize"],
          color: this.curtainData.settings["colorMap"][selectionName]
        }
      }
    }

    this.curtainData.data.forEach((d) => {
      if (d["Primary ID"] in this.curtainData.selection_map) {
        const selection = this.curtainData.selection_map[d["Primary ID"]]
        for (const selectionName of this.curtainData.selections) {
          if (selection[selectionName]) {
            temp[selectionName].x.push(d["Fold Change"])
            temp[selectionName].y.push(d["P-value"])
            temp[selectionName].text.push(`${d["Gene Names"]}(${d["Primary ID"]})`)
            temp[selectionName].data.push(d)
          }
        }
      } else {
        if (this.curtainData.settings.backGroundColorGrey) {
          temp["Background"].x.push(d["Fold Change"])
          temp["Background"].y.push(d["P-value"])
          temp["Background"].text.push(`${d["Gene Names"]}(${d["Primary ID"]})`)
          temp["Background"].data.push(d)
        } else {
          const significantGroup = this.significantGroup(d["Fold Change"], d["P-value"])
          const colorLabel = allColorLabels.find((label) => label.startsWith(significantGroup[0]))
          if (colorLabel) {
            if (!temp[colorLabel]) {
              temp[colorLabel] = {
                x: [],
                y: [],
                mode: 'markers',
                type: 'scatter',
                name: colorLabel,
                text: [],
                data: [],
                marker: {
                  size: this.curtainData.settings["scatterPlotMarkerSize"],
                  color: this.curtainData.settings["colorMap"][colorLabel]
                }
              }
            }
            temp[colorLabel].x.push(d["Fold Change"])
            temp[colorLabel].y.push(d["P-value"])
            temp[colorLabel].text.push(`${d["Gene Names"]}(${d["Primary ID"]})`)
            temp[colorLabel].data.push(d)
          }
        }
      }
    })
    this.graphData = []
    for (const key in temp) {
      this.graphData.push(temp[key])
    }
    this.graphData = this.graphData.reverse()
    const cutOff: any[] = []

    cutOff.push({
      type: 'line',
      x0: -this.curtainData.settings.log2FCCutoff,
      y0: 0,
      x1: -this.curtainData.settings.log2FCCutoff,
      y1: this.graphLayout.yaxis.range[1],
      line: {
        color: 'rgb(21,4,4)',
        width: 1,
        dash: 'dot'
      }
    })
    cutOff.push({
      type: "line",
      x0: this.curtainData.settings.log2FCCutoff,
      x1: this.curtainData.settings.log2FCCutoff,
      y0: 0,
      y1: this.graphLayout.yaxis.range[1],
      line: {
        color: 'rgb(21,4,4)',
        width: 1,
        dash: 'dot'
      }
    })
    let x0 = this.graphLayout.xaxis.range[0] - 1
    if (this.curtainData.settings.volcanoAxis.minX) {
      x0 = this.curtainData.settings.volcanoAxis.minX - 1
    }
    let x1 = this.graphLayout.xaxis.range[1] + 1
    if (this.curtainData.settings.volcanoAxis.maxX) {
      x1 = this.curtainData.settings.volcanoAxis.maxX + 1
    }
    cutOff.push({
      type: "line",
      x0: x0,
      x1: x1,
      y0: -Math.log10(this.curtainData.settings.pCutoff),
      y1: -Math.log10(this.curtainData.settings.pCutoff),
      line: {
        color: 'rgb(21,4,4)',
        width: 1,
        dash: 'dot'
      }
    })
    this.graphLayout.shapes = cutOff
    if (this.curtainData.settings.volcanoPlotGrid) {
      this.graphLayout.yaxis.showgrid = this.curtainData.settings.volcanoPlotGrid.y
      this.graphLayout.xaxis.showgrid = this.curtainData.settings.volcanoPlotGrid.x
    }
    if (this.curtainData.settings.volcanoPlotDimension) {
      if (this.curtainData.settings.volcanoPlotDimension.height) {
        this.graphLayout.height = this.curtainData.settings.volcanoPlotDimension.height
      }
      if (this.curtainData.settings.volcanoPlotDimension.width) {
        this.graphLayout.width = this.curtainData.settings.volcanoPlotDimension.width
      }
      if (this.curtainData.settings.volcanoPlotDimension.margin) {
        for (const i in this.curtainData.settings.volcanoPlotDimension.margin) {
          if (this.curtainData.settings.volcanoPlotDimension.margin[i]) {
            this.graphLayout.margin[i] = this.curtainData.settings.volcanoPlotDimension.margin[i]
          }
        }
      }
    }
    if (this.curtainData.settings.volcanoPlotYaxisPosition) {
      if (this.curtainData.settings.volcanoPlotYaxisPosition.includes("left")) {

        // draw y axis line at min x
        this.graphLayout.shapes.push({
          type: "line",
          x0: this.graphLayout.xaxis.range[0],
          x1: this.graphLayout.xaxis.range[0],
          y0: this.graphLayout.yaxis.range[0],
          y1: this.graphLayout.yaxis.range[1],
          line: {
            color: 'rgb(21,4,4)',
            width: 1,
          }
        })
      }
      if (this.curtainData.settings.volcanoPlotYaxisPosition.includes("middle")) {
        this.graphLayout.xaxis.zerolinecolor = "#000000"
      } else {
        this.graphLayout.xaxis.zerolinecolor = "#ffffff"
      }
    }

    this.graphLayout.annotations = []
    if (this.curtainData.settings.textAnnotation){
      for (const i in this.curtainData.settings.textAnnotation) {
        if (this.curtainData.settings.textAnnotation[i].data.showannotation === true) {
          this.graphLayout.annotations.push(this.curtainData.settings.textAnnotation[i].data)
        }
      }
    }

    this.config = {
      toImageButtonOptions: {
        format: 'svg',
        filename: this.graphLayout.title.text,
        height: this.graphLayout.height,
        width: this.graphLayout.width,
        scale: 1,
        margin: this.graphLayout.margin
      }
    }
    this.revision += 1
    console.log("cutoff", cutOff)
  }

  significantGroup(x: number, y: number) {
    const ylog = -Math.log10(this.curtainData.settings.pCutoff)
    const groups: string[] = []
    let position = ""
    if (ylog > y) {
      groups.push("P-value > " + this.curtainData.settings.pCutoff)
      position = "P-value > "
    } else {
      groups.push("P-value <= " + this.curtainData.settings.pCutoff)
      position = "P-value <= "
    }

    if (Math.abs(x) > this.curtainData.settings.log2FCCutoff) {
      groups.push("FC > " + this.curtainData.settings.log2FCCutoff)
      position += "FC > "
    } else {
      groups.push("FC <= " + this.curtainData.settings.log2FCCutoff)
      position += "FC <= "
    }

    return [groups.join(";"), position]
  }
}
