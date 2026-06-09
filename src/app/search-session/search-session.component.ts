import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormBuilder, FormControl, ReactiveFormsModule} from "@angular/forms";
import {SearchSession, SearchSessionQuery} from "../search-session";
import {WebService} from "../web.service";
import {MatIcon} from "@angular/material/icon";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {SearchSessionListComponent} from "./search-session-list/search-session-list.component";
import {AccountsService} from "../accounts/accounts.service";
import {SearchSessionViewComponent} from "./search-session-view/search-session-view.component";
import {Router, RouterLink} from "@angular/router";
import {debounceTime, Subject, takeUntil} from "rxjs";
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
    selector: 'app-search-session',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatButton,
        MatFormField,
        MatInput,
        MatLabel,
        ReactiveFormsModule,
        MatIcon,
        MatIconButton,
        MatPaginator,
        MatToolbar,
        MatToolbarRow,
        SearchSessionListComponent,
        SearchSessionViewComponent,
        MatProgressSpinner,
        RouterLink
    ],
    templateUrl: './search-session.component.html',
    styleUrl: './search-session.component.scss'
})
export class SearchSessionComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  sidebarOpen = true
  isLoading = true
  isLoadingSession = false
  private _searchSession: SearchSession|undefined = undefined
  private _searchID: number = 0

  @Input() set searchID(value: number | string) {
    const id = typeof value === 'string' ? parseInt(value, 10) : value
    if (id) {
      this._searchID = id
      this.isLoadingSession = true
      this.cdr.markForCheck()
      this.web.getSearchSession(id).pipe(takeUntil(this.destroy$)).subscribe((data) => {
        this._searchSession = data
        this.isLoadingSession = false
        this.cdr.markForCheck()
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

  constructor(private router: Router, private web: WebService, private fb: FormBuilder, private accounts: AccountsService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadSessions()
    this.form.controls.search.valueChanges.pipe(
      debounceTime(300),
      takeUntil(this.destroy$),
    ).subscribe(() => {
      this.pageIndex = 0
      this.loadSessions()
    })
  }

  private loadSessions(): void {
    const searchValue = this.form.controls.search.value || undefined
    this.web.getSearchSessions(undefined, this.pageSize, this.pageIndex * this.pageSize, searchValue, this.accounts.loggedIn, this.web.searchSessionID).pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.searchSessionQuery = data
      this.isLoading = false
      this.cdr.markForCheck()
    })
  }

  handlePageEvent(e: PageEvent) {
    this.pageSize = e.pageSize
    this.pageIndex = e.pageIndex
    this.loadSessions()
  }

  deleteSearchSession(id: number) {
    this.web.deleteSearchSession(id).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.searchSession = undefined
      this.searchSessionQuery?.results?.splice(this.searchSessionQuery.results.findIndex((value) => value.id === id), 1)
      this.cdr.markForCheck()
    })
  }

  toggleSidePanel() {
    this.sidebarOpen = !this.sidebarOpen
  }

  onSearchSessionSelected(event: SearchSession) {
    this.router.navigate(['/search-session', event.id])
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
