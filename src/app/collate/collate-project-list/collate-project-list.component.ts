import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SearchResult} from "../../search-session";
import {Project} from "../../project/project";
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from "@angular/cdk/drag-drop";
import {ProjectCardViewerComponent} from "../project-card-viewer/project-card-viewer.component";

@Component({
  selector: 'app-collate-project-list',
  standalone: true,
  imports: [
    CdkDropList,
    ProjectCardViewerComponent,
    CdkDrag
  ],
  templateUrl: './collate-project-list.component.html',
  styleUrl: './collate-project-list.component.scss'
})
export class CollateProjectListComponent {
  @Input() projects: Project[] = [];
  @Input() filteredResults: { [projectId: number]: SearchResult[] } = {};
  @Output() projectOrderChanged = new EventEmitter<Project[]>();
  @Output() deleteProject = new EventEmitter<Project>();
  drop(event: CdkDragDrop<Project[]>) {
    moveItemInArray(this.projects, event.previousIndex, event.currentIndex);
    this.projectOrderChanged.emit(this.projects);
  }
}
