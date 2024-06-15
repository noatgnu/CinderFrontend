import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
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
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatSort, MatSortHeader, Sort} from "@angular/material/sort";

@Component({
  selector: 'app-search-result-list',
  standalone: true,
  imports: [
    DatePipe,
    MatDivider,
    MatListOption,
    MatSelectionList,
    MatListItemTitle,
    MatListItemLine,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCellDef,
    MatCell,
    MatHeaderCellDef,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    MatSort,
    MatSortHeader
  ],
  templateUrl: './search-result-list.component.html',
  styleUrl: './search-result-list.component.scss'
})
export class SearchResultListComponent {
  displayedColumns: string[] = ['primary_id', 'gene_name', 'uniprot_id', 'search_term', 'condition_A', 'condition_B', 'log2_fc', 'log10_p', 'file','comparison_label']
  private _searchResultQuery: SearchResultQuery|undefined = undefined
  @ViewChild('table') table!: MatTable<SearchResult>

  @Input() set searchResultQuery(value: SearchResultQuery) {
    this._searchResultQuery = value
    if (this.table) {
      this.table.renderRows()
    }
  }

  get searchResultQuery(): SearchResultQuery {
    return this._searchResultQuery!
  }

  @Output() selected = new EventEmitter<SearchResult>()
  @Output() sortChange = new EventEmitter<Sort>()

  constructor() {
  }

  handleSelection(event: SearchResult) {
    this.selected.emit(event)
    //this.selected.emit(event.source.selectedOptions.selected[0].value)
  }

  handleSortChange(event: Sort) {
    this.sortChange.emit(event)
  }
}
