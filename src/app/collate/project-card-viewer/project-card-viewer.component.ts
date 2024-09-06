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
import {CdkDrag, CdkDragDrop, CdkDragHandle, CdkDropList, moveItemInArray} from "@angular/cdk/drag-drop";
import {SearchResult} from "../../search-session";
import {BarChartComponent} from "./bar-chart/bar-chart.component";
import {AccountsService} from "../../accounts/accounts.service";
import {MatButton, MatIconButton} from "@angular/material/button";
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
    MatIcon,
    MatIconButton,
    CdkDrag,
    CdkDropList
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
  @Output() searchResultsChange: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();


  get searchResults(): SearchResult[] {
    return this._searchResults;
  }
  constructor(public accounts: AccountsService) {}

  drop(event: CdkDragDrop<SearchResult[]>) {
    const draggedItem = this._searchResults[event.previousIndex];
    const draggedGroup = draggedItem.analysis_group.id;

    // Find all items with the same analysis group
    const itemsToMove = this._searchResults.filter(item => item.analysis_group.id === draggedGroup);

    // Remove items from their original positions
    this._searchResults = this._searchResults.filter(item => item.analysis_group.id !== draggedGroup);

    // Insert items at the new position
    this._searchResults.splice(event.currentIndex, 0, ...itemsToMove);

    this.searchResultsChange.emit(this._searchResults);
  }
}
