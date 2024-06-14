import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SearchResult, SearchResultQuery} from "../../search-session";
import {DatePipe} from "@angular/common";
import {MatDivider} from "@angular/material/divider";
import {
  MatListItemLine,
  MatListItemTitle,
  MatListOption,
  MatSelectionList,
  MatSelectionListChange
} from "@angular/material/list";

@Component({
  selector: 'app-search-result-list',
  standalone: true,
  imports: [
    DatePipe,
    MatDivider,
    MatListOption,
    MatSelectionList,
    MatListItemTitle,
    MatListItemLine
  ],
  templateUrl: './search-result-list.component.html',
  styleUrl: './search-result-list.component.scss'
})
export class SearchResultListComponent {

  private _searchResultQuery: SearchResultQuery|undefined = undefined

  @Input() set searchResultQuery(value: SearchResultQuery) {
    this._searchResultQuery = value
  }

  get searchResultQuery(): SearchResultQuery {
    return this._searchResultQuery!
  }

  @Output() selected = new EventEmitter<SearchResult>()

  constructor() {
  }

  handleSelection(event: MatSelectionListChange) {
    this.selected.emit(event.source.selectedOptions.selected[0].value)
  }
}
