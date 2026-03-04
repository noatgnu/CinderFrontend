import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Project, ProjectQuery} from "../project";
import {
  MatList,
  MatListItem,
  MatListItemLine,
  MatListItemTitle,
  MatListOption,
  MatSelectionList,
  MatSelectionListChange
} from "@angular/material/list";
import {MatDivider} from "@angular/material/divider";
import {StatusBadgeComponent} from "../../shared/status-badge/status-badge.component";

@Component({
    selector: 'app-project-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatList,
        MatListItem,
        MatDivider,
        MatSelectionList,
        MatListOption,
        MatListItemTitle,
        MatListItemLine,
        StatusBadgeComponent
    ],
    templateUrl: './project-list.component.html',
    styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {
  @Input() projectQuery?: ProjectQuery

  @Output() projectSelected: EventEmitter<Project> = new EventEmitter<Project>()

  selectProject(selectionEvent: MatSelectionListChange) {
    const selected = selectionEvent.source.selectedOptions.selected
    const selectedProject = selected[0].value
    this.projectSelected.emit(selectedProject)
  }
}
