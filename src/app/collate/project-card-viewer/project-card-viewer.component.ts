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
import {GraphService} from "../../graph.service";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from "@angular/material/table";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {MatTooltip} from "@angular/material/tooltip";

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
    CdkDropList,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
    MatHeaderCellDef,
    MatSlideToggle,
    MatTooltip
  ],
  templateUrl: './project-card-viewer.component.html',
  styleUrl: './project-card-viewer.component.scss'
})
export class ProjectCardViewerComponent {
  private _project: Project | null = null;
  @Input() searchTerm: string = "";
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

  @Input() colorMap: { [condition: string]: string } | undefined = {};
  @Input() renameCondition: {[key: string]: string} | undefined = {}

  @Output() deleteProject: EventEmitter<Project> = new EventEmitter<Project>();

  @Output() searchResultsChange: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  searchResultDisplayColumns: string[] = ["primary_id", "uniprot_id", "gene_name", "condition_A", "condition_B", "log2_fc", "log10_p", "comparison_label"];

  expanded: boolean = false;
  viewDifferentialAnalysis: boolean = false;
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
