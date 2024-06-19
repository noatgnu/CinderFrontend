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
    SelectedResultViewComponent
  ],
  templateUrl: './search-session-view.component.html',
  styleUrl: './search-session-view.component.scss'
})
export class SearchSessionViewComponent {
  private _searchSession: SearchSession|undefined = undefined
  @Input() set searchSession(value: SearchSession) {
    this._searchSession = value
    this.titleService.setTitle(`Search - ${value.search_term}`)
    if (value && !value.failed) {
      if (this.form.controls.file_category.value) {
        this.web.getSearchResults(value.id, this.pageSize, 0, this.form.controls.file_category.value, this.currentSort?.active, this.currentSort?.direction).subscribe((data) => {
          this.searchResultQuery = data
        })
      }
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
    file_category: new FormControl<string>("df", Validators.required),
  })
  currentSort: Sort|undefined = undefined
  constructor(private titleService: Title, private web: WebService, private fb: FormBuilder) {
    this.form.controls.file_category.valueChanges.subscribe((value: string|null) => {
      if (!this.searchSession.failed && value) {
        this.web.getSearchResults(this.searchSession.id, this.pageSize, 0, value, this.currentSort?.active, this.currentSort?.direction).subscribe((data) => {
          this.searchResultQuery = data
        })
      }
    })
  }

  handlePageEvent(event: PageEvent) {
    const offset = event.pageIndex * event.pageSize
    this.pageSize = event.pageSize
    if (this.form.controls.file_category.value) {
      this.web.getSearchResults(this.searchSession.id, this.pageSize, offset, this.form.controls.file_category.value, this.currentSort?.active, this.currentSort?.direction).subscribe((data) => {
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
      if (this.form.controls.file_category.value) {
        this.web.getSearchResults(this.searchSession.id, this.pageSize, 0, this.form.controls.file_category.value, event.active, event.direction).subscribe((data) => {
          this.searchResultQuery = data
        })
      }
    }
  }

}
