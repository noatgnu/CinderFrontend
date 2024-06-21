import {Component, Input} from '@angular/core';
import {WebService} from "../../web.service";
import {SearchResult, SearchResultQuery, SearchSession} from "../../search-session";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {SearchResultListComponent} from "../search-result-list/search-result-list.component";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {SelectedResultViewComponent} from "../selected-result-view/selected-result-view.component";
import {Sort} from "@angular/material/sort";
import {Title} from "@angular/platform-browser";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-search-session-view',
  standalone: true,
  imports: [
    SearchResultListComponent,
    MatPaginator,
    ReactiveFormsModule,
    MatFormField,
    MatSelect,
    MatOption,
    MatLabel,
    SelectedResultViewComponent,
    MatInput
  ],
  templateUrl: './search-session-view.component.html',
  styleUrl: './search-session-view.component.scss'
})
export class SearchSessionViewComponent {
  private _searchSession: SearchSession|undefined = undefined
  @Input() set searchSession(value: SearchSession) {
    this._searchSession = value
    this.titleService.setTitle(`Search - ${value.search_term}`)
    this.searchResultQuery = undefined
    if (value && !value.failed) {
      this.web.getSearchResults(value.id, this.pageSize, 0, 'df', this.currentSort?.active, this.currentSort?.direction).subscribe((data) => {
        this.searchResultQuery = data
      })
    }
  }

  get searchSession(): SearchSession {
    return this._searchSession!
  }

  searchResultQuery: SearchResultQuery|undefined = undefined

  pageSize = 10
  pageIndex = 0
  selectedSearchResult: SearchResult|undefined = undefined

  form = this.fb.group({
    searchTerm: new FormControl<string>(""),
  })
  currentSort: Sort|undefined = undefined
  constructor(private titleService: Title, private web: WebService, private fb: FormBuilder) {
    this.form.controls.searchTerm.valueChanges.subscribe((value: string|null) => {
      if (!this.searchSession.failed && value) {
        this.web.getSearchResults(this.searchSession.id, this.pageSize, 0, "df", this.currentSort?.active, this.currentSort?.direction, value).subscribe((data) => {
          this.searchResultQuery = data
        })
      }
    })
  }

  handlePageEvent(event: PageEvent) {
    const offset = event.pageIndex * event.pageSize
    this.pageSize = event.pageSize
    if (this.form.controls.searchTerm.value) {
      this.web.getSearchResults(this.searchSession.id, this.pageSize, offset, "df", this.currentSort?.active, this.currentSort?.direction, this.form.controls.searchTerm.value).subscribe((data) => {
        this.searchResultQuery = data
      })
    } else {
      this.web.getSearchResults(this.searchSession.id, this.pageSize, offset, "df", this.currentSort?.active, this.currentSort?.direction).subscribe((data) => {
        this.searchResultQuery = data
      })
    }
  }

  handleSelectedResult(event: SearchResult) {
    if (event) {
      this.selectedSearchResult = event
    }
  }

  handleSort(event: Sort) {
    this.currentSort = event
    if (this.searchResultQuery) {
      if (this.form.controls.searchTerm.value) {
        this.web.getSearchResults(this.searchSession.id, this.pageSize, 0, "df", event.active, event.direction, this.form.controls.searchTerm.value).subscribe((data) => {
          this.searchResultQuery = data
        })
      } else {
        this.web.getSearchResults(this.searchSession.id, this.pageSize, 0, "df", event.active, event.direction).subscribe((data) => {
          this.searchResultQuery = data
        })
      }
    }
  }

}
