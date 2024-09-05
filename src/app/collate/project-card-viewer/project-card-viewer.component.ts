import {Component, Input} from '@angular/core';
import {Project} from "../../project/project";
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {CdkDragHandle} from "@angular/cdk/drag-drop";
import {SearchResult} from "../../search-session";
import {BarChartComponent} from "./bar-chart/bar-chart.component";

@Component({
  selector: 'app-project-card-viewer',
  standalone: true,
  imports: [
    MatCardSubtitle,
    MatCardTitle,
    MatCardHeader,
    MatCard,
    MatCardContent,
    CdkDragHandle,
    BarChartComponent
  ],
  templateUrl: './project-card-viewer.component.html',
  styleUrl: './project-card-viewer.component.scss'
})
export class ProjectCardViewerComponent {
  private _project: Project | null = null;
  @Input() set project(value: Project | null) {
    this._project = value;
  }

  get project(): Project | null {
    return this._project
  }
  private _searchResults: SearchResult[] = [];
  @Input() set searchResults(value: SearchResult[]) {
    this._searchResults = value;
    console.log(value);
  }

  get searchResults(): SearchResult[] {
    return this._searchResults;
  }
  constructor() {}



}
