import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Project} from "../../project/project";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {CdkDragHandle} from "@angular/cdk/drag-drop";
import {SearchResult} from "../../search-session";
import {BarChartComponent} from "./bar-chart/bar-chart.component";
import {AccountsService} from "../../accounts/accounts.service";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

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
    BarChartComponent,
    MatCardActions,
    MatButton,
    MatIcon
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
  @Output() deleteProject: EventEmitter<Project> = new EventEmitter<Project>();

  get searchResults(): SearchResult[] {
    return this._searchResults;
  }
  constructor(public accounts: AccountsService) {}
}
