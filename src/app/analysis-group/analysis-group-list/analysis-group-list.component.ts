import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AnalysisGroup, AnalysisGroupQuery} from "../analysis-group";
import {MatDivider} from "@angular/material/divider";
import {MatListItemLine, MatListOption, MatSelectionList} from "@angular/material/list";
import {DataService} from "../../data.service";

@Component({
  selector: 'app-analysis-group-list',
  standalone: true,
  imports: [
    MatDivider,
    MatListOption,
    MatSelectionList,
    MatListItemLine
  ],
  templateUrl: './analysis-group-list.component.html',
  styleUrl: './analysis-group-list.component.scss'
})
export class AnalysisGroupListComponent {
  @Input() analysisGroupQuery?: AnalysisGroupQuery

  @Output() selectedAnalysisGroup: EventEmitter<AnalysisGroup> = new EventEmitter<AnalysisGroup>()

  constructor(public dataService: DataService) {
  }

  selectAnalysisGroup(analysisGroup: AnalysisGroup) {
    this.selectedAnalysisGroup.emit(analysisGroup)
  }
}
