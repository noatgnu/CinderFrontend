import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {SearchResult} from "../../search-session";
import {VerticalBarChartComponent} from "./vertical-bar-chart/vertical-bar-chart.component";

@Component({
    selector: 'app-selected-result-view',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        VerticalBarChartComponent,
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
}
