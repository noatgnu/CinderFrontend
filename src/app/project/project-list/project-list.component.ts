import {AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Project, ProjectQuery} from "../project";
import {
  MatList,
  MatListItem,
  MatListItemTitle,
  MatListOption,
  MatSelectionList,
  MatSelectionListChange
} from "@angular/material/list";
import {MatDivider} from "@angular/material/divider";

@Component({
    selector: 'app-project-list',
    imports: [
        MatList,
        MatListItem,
        MatDivider,
        MatSelectionList,
        MatListOption,
        MatListItemTitle
    ],
    templateUrl: './project-list.component.html',
    styleUrl: './project-list.component.scss'
})
export class ProjectListComponent implements AfterViewInit {
  @Input() projectQuery?: ProjectQuery

  @Output() projectSelected: EventEmitter<Project> = new EventEmitter<Project>()

  constructor() {

  }

  ngAfterViewInit() {

  }

  selectProject(selectionEvent: MatSelectionListChange) {
    // get selection from selected event
    const selected = selectionEvent.source.selectedOptions.selected
    // get the first selected item
    const selectedProject = selected[0].value
    // emit the selected project
    this.projectSelected.emit(selectedProject)
  }



}
