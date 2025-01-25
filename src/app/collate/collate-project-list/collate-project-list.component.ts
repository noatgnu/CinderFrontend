import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SearchResult} from "../../search-session";
import {Project} from "../../project/project";
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from "@angular/cdk/drag-drop";
import {ProjectCardViewerComponent} from "../project-card-viewer/project-card-viewer.component";

@Component({
    selector: 'app-collate-project-list',
    imports: [
        CdkDropList,
        ProjectCardViewerComponent,
        CdkDrag
    ],
    templateUrl: './collate-project-list.component.html',
    styleUrl: './collate-project-list.component.scss'
})
export class CollateProjectListComponent {
  private _searchTerm: string = "";
  @Input() set searchTerm(value: string|undefined|null) {
    if (value) {
      this._searchTerm = value;
    } else {
      this._searchTerm = "";
    }
  }

  get searchTerm(): string {
    return this._searchTerm;
  }
  @Input() projects: Project[] = [];
  private _filteredResults: { [projectId: number]: SearchResult[] } = {};
  @Input() set filteredResults(value: { [projectId: number]: SearchResult[] }|undefined|null) {
    console.log(value)
    if (value) {
      this._filteredResults = value;
    } else {
      this._filteredResults = {};
    }
  }

  get filteredResults(): { [projectId: number]: SearchResult[] } {
    return this._filteredResults;
  }

  @Input() projectConditionColorMap: { [projectID: number]: { [condition: string]: string } }|undefined|null = {};
  @Input() renameCondition: {[projectId: number]: {[key: string]: string}}|undefined|null  = {}
  @Output() projectOrderChanged = new EventEmitter<Project[]>();
  @Output() deleteProject = new EventEmitter<Project>();
  drop(event: CdkDragDrop<Project[]>) {
    moveItemInArray(this.projects, event.previousIndex, event.currentIndex);
    this.projectOrderChanged.emit(this.projects);
  }
}
