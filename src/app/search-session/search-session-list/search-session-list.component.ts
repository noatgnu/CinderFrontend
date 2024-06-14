import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SearchSession, SearchSessionQuery} from "../../search-session";
import {MatDivider} from "@angular/material/divider";
import {MatListOption, MatSelectionList} from "@angular/material/list";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-search-session-list',
  standalone: true,
  imports: [
    MatDivider,
    MatListOption,
    MatSelectionList,
    DatePipe
  ],
  templateUrl: './search-session-list.component.html',
  styleUrl: './search-session-list.component.scss'
})
export class SearchSessionListComponent {
  private _searchSessionQuery: SearchSessionQuery|undefined = undefined

  @Input() set searchSessionQuery(value: SearchSessionQuery) {
    this._searchSessionQuery = value
  }

  get searchSessionQuery(): SearchSessionQuery {
    return this._searchSessionQuery!
  }

  @Output() searchSessionSelected = new EventEmitter<SearchSession>()

  constructor() {
  }
}
