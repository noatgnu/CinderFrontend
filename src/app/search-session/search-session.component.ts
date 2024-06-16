import {Component, Input} from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormBuilder, FormControl, ReactiveFormsModule} from "@angular/forms";
import {UploadFileComponent} from "../upload-file/upload-file.component";
import {SearchSession, SearchSessionQuery} from "../search-session";
import {WebService} from "../web.service";
import {AnalysisGroupListComponent} from "../analysis-group/analysis-group-list/analysis-group-list.component";
import {AnalysisGroupViewComponent} from "../analysis-group/analysis-group-view/analysis-group-view.component";
import {MatIcon} from "@angular/material/icon";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {SearchSessionListComponent} from "./search-session-list/search-session-list.component";
import {AccountsService} from "../accounts/accounts.service";
import {SearchSessionViewComponent} from "./search-session-view/search-session-view.component";

@Component({
  selector: 'app-search-session',
  standalone: true,
  imports: [
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    UploadFileComponent,
    AnalysisGroupListComponent,
    AnalysisGroupViewComponent,
    MatIcon,
    MatIconButton,
    MatPaginator,
    MatToolbar,
    MatToolbarRow,
    SearchSessionListComponent,
    SearchSessionViewComponent
  ],
  templateUrl: './search-session.component.html',
  styleUrl: './search-session.component.scss'
})
export class SearchSessionComponent {
  private _searchSession: SearchSession|undefined = undefined
  private _searchID: number = 0
  @Input() set searchID(value: number) {
    if (value) {
      this._searchID = value
      this.web.getSearchSession(value).subscribe((data) => {
        this._searchSession = data
      })
    }
  }
  get searchID(): number {
    return this._searchID
  }

  set searchSession(value: SearchSession|undefined) {
    this._searchSession = value
  }

  get searchSession(): SearchSession|undefined {
    return this._searchSession
  }

  searchSessionQuery: SearchSessionQuery|undefined = undefined

  pageSize = 10
  pageIndex = 0

  form = this.fb.group({
    search: new FormControl(""),
  })

  constructor(private web: WebService, private fb: FormBuilder, private accounts: AccountsService) {
    this.web.getSearchSessions(undefined, this.pageSize, 0, undefined, this.accounts.loggedIn, this.web.searchSessionID).subscribe((data) => {
      this.searchSessionQuery = data
    })
  }


  handlePageEvent(e: PageEvent) {
    this.pageSize = e.pageSize
    const offset = e.pageIndex * e.pageSize
    if (this.form.controls.search.value) {
      this.web.getSearchSessions(undefined, this.pageSize, offset, this.form.controls.search.value,  this.accounts.loggedIn, this.web.searchSessionID).subscribe((data) => {
        this.searchSessionQuery = data
      })
    } else {
      this.web.getSearchSessions(undefined, this.pageSize, offset, undefined,  this.accounts.loggedIn, this.web.searchSessionID).subscribe((data) => {
        this.searchSessionQuery = data
      })
    }

  }
  deleteSearchSession(id: number) {
    this.web.deleteSearchSession(id).subscribe((data) => {
      this.searchSession = undefined
      this.searchSessionQuery?.results?.splice(this.searchSessionQuery.results.findIndex((value) => value.id === id), 1)
    })
  }
}
