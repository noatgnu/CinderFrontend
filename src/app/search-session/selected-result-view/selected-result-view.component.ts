import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {SearchResult} from "../../search-session";
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {SampleAnnotation} from "../../sample-annotation";
import {ComparisonMatrix} from "../../comparison-matrix";
import {AnalysisGroup} from "../../analysis-group/analysis-group";
import {ProjectFile} from "../../project-file";
import {MatTable} from "@angular/material/table";
import {MatList, MatListItem, MatListItemLine, MatListItemTitle} from "@angular/material/list";
import {VerticalBarChartComponent} from "./vertical-bar-chart/vertical-bar-chart.component";
import {MatButton} from "@angular/material/button";

@Component({
    selector: 'app-selected-result-view',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatToolbar,
        MatToolbarRow,
        MatTable,
        MatList,
        MatListItem,
        MatListItemTitle,
        MatListItemLine,
        VerticalBarChartComponent,
        MatButton
    ],
    templateUrl: './selected-result-view.component.html',
    styleUrl: './selected-result-view.component.scss'
})
export class SelectedResultViewComponent {

  private _searchResult: SearchResult|undefined = undefined
  @Input() set searchResult(value: SearchResult) {
    this._searchResult = value
  }

  get searchResult(): SearchResult {
    return this._searchResult!
  }

  relatedResultSearched: SearchResult|undefined = undefined
  relatedResultCopyNumber: SearchResult|undefined = undefined
  analysisGroup: AnalysisGroup|undefined = undefined
  analysisGroupDF: ProjectFile|undefined = undefined
  analysisGroupDFColumns: string[] = []
  analysisGroupSearched: ProjectFile|undefined = undefined
  analysisGroupSearchedColumns: string[] = []
  sampleAnnotations: SampleAnnotation|undefined = undefined
  comparisonMatrix: ComparisonMatrix|undefined = undefined

  getSAIndex(column: string) {
    if (this.analysisGroupSearchedColumns) {
      return this.analysisGroupSearchedColumns.indexOf(column)
    }
    return -1
  }

  getCMIndex(column: string) {
    if (this.analysisGroupDFColumns) {
      return this.analysisGroupDFColumns.indexOf(column)
    }
    return -1
  }
}
