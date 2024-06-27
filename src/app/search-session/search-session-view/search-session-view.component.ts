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
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {WebsocketService} from "../../websocket.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {environment} from "../../../environments/environment";

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
    MatInput,
    MatIconButton,
    MatIcon
  ],
  templateUrl: './search-session-view.component.html',
  styleUrl: './search-session-view.component.scss'
})
export class SearchSessionViewComponent {
  baseUrl = environment.baseURL
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
    log2_fc: new FormControl<number>(0),
    log10_p: new FormControl<number>(0),
  })
  currentSort: Sort|undefined = undefined
  constructor(private titleService: Title, private web: WebService, private fb: FormBuilder, private ws: WebsocketService, private sb: MatSnackBar) {
    this.form.valueChanges.subscribe((data) => {
      if (!this.searchSession.failed) {
        // @ts-ignore
        this.web.getSearchResults(this.searchSession.id, this.pageSize, 0, "df", this.currentSort?.active, this.currentSort?.direction, data.searchTerm, data.log2_fc, data.log10_p).subscribe((data) => {
          this.searchResultQuery = data
        })
      }
    })
    this.ws.searchWSConnection?.subscribe((data) => {
      if (data) {
        if (data.type === "export_status") {
          if (this.web.cinderInstanceID === data.instance_id) {
            switch (data.status) {
              case "error":
                break
              case "started":
                this.sb.open("Export started", "Dismiss", {duration: 2000})
                break
              case "in_progress":
                break
              case "complete":
                this.sb.open("Export complete", "Dismiss", {duration: 2000})
                const link = `${this.baseUrl}/api/search/download_temp_file/?token=${data.file}`
                window.open(link, "_blank")
                break
            }
          }
        }
      }
    })
  }

  handlePageEvent(event: PageEvent) {
    const offset = event.pageIndex * event.pageSize
    this.pageSize = event.pageSize
    // @ts-ignore
    this.web.getSearchResults(this.searchSession.id, this.pageSize, offset, "df", this.currentSort?.active, this.currentSort?.direction, this.form.controls.searchTerm.value, this.form.controls.log2_fc.value, this.form.controls.log10_p.value).subscribe((data) => {
      this.searchResultQuery = data
    })
  }

  handleSelectedResult(event: SearchResult) {
    if (event) {
      this.selectedSearchResult = event
    }
  }

  handleSort(event: Sort) {
    this.currentSort = event
    if (this.searchResultQuery) {
      // @ts-ignore
      this.web.getSearchResults(this.searchSession.id, this.pageSize, 0, "df", event.active, event.direction, this.form.controls.searchTerm.value, this.form.controls.log2_fc.value, this.form.controls.log10_p.value).subscribe((data) => {
        this.searchResultQuery = data
      })
    }
  }

  exportData() {
    // @ts-ignore
    this.web.exportSearchData(this.searchSession.id, this.form.controls.searchTerm.value, this.form.controls.log2_fc.value, this.form.controls.log10_p.value, this.web.searchSessionID).subscribe((data) => {

    })
  }

}
