import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GraphService {
  defaultColorList: string[] = [
    "#fd7f6f",
    "#7eb0d5",
    "#b2e061",
    "#bd7ebe",
    "#ffb55a",
    "#ffee65",
    "#beb9db",
    "#fdcce5",
    "#8bd3c7",
  ]

  redrawTrigger: Subject<boolean> = new Subject<boolean>()

  plotSettings: any = {
    marginLeft: 150,
    marginRight: 100,
    marginTop: 100,
    marginBottom: 100,
    titleTextSize: 14,
    showTitle: true,
    height: 500,
    barSize: 50,
  }

  projectConditionColorMap: { [projectID: number]: { [condition: string]: string } } = {}

  constructor() { }
}
