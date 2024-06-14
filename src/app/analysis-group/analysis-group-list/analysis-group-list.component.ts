import {Component, Input} from '@angular/core';
import {AnalysisGroupQuery} from "../analysis-group";
import {MatDivider} from "@angular/material/divider";
import {MatListOption, MatSelectionList} from "@angular/material/list";

@Component({
  selector: 'app-analysis-group-list',
  standalone: true,
  imports: [
    MatDivider,
    MatListOption,
    MatSelectionList
  ],
  templateUrl: './analysis-group-list.component.html',
  styleUrl: './analysis-group-list.component.scss'
})
export class AnalysisGroupListComponent {
  @Input() analysisGroupQuery?: AnalysisGroupQuery

}
