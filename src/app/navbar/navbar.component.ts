import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {AccountsService} from "../accounts/accounts.service";
import {MatDialog} from "@angular/material/dialog";
import {LoginDialogComponent} from "../accounts/login-dialog/login-dialog.component";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {NgOptimizedImage} from "@angular/common";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {GraphService} from "../graph.service";
import {NavigationEnd, Router} from "@angular/router";
import {LabGroup} from "../lab-group";
import {WebService} from "../web.service";
import {LabGroupCreateDialogComponent} from "./lab-group-create-dialog/lab-group-create-dialog.component";
import {LabGroupUserListDialogComponent} from "./lab-group-user-list-dialog/lab-group-user-list-dialog.component";
import {User} from "../user/user";
import {UiSettingsService} from "../ui-settings.service";
import {MatTooltip} from "@angular/material/tooltip";
import {MatDivider} from "@angular/material/divider";
import {filter, Subject, takeUntil} from "rxjs";

@Component({
    selector: 'app-navbar',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatToolbarModule,
        MatIconButton,
        MatIcon,
        MatMenu,
        MatMenuItem,
        MatMenuTrigger,
        NgOptimizedImage,
        MatSlideToggle,
        MatButton,
        MatTooltip,
        MatDivider
    ],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  labGroups: LabGroup[] = [];
  isCollateView = false;
  currentLabGroup: LabGroup | undefined;
  currentUser: User | undefined;

  constructor(
    private webService: WebService,
    private router: Router,
    public accounts: AccountsService,
    private dialog: MatDialog,
    private graphService: GraphService,
    public uiSettings: UiSettingsService,
    private cdr: ChangeDetectorRef
  ) {
    if (this.accounts.userAccount.currentUser) {
      this.webService.getUser(this.accounts.userAccount.currentUser).pipe(takeUntil(this.destroy$)).subscribe({
        next: (response) => {
          this.currentUser = response;
          this.cdr.markForCheck();
        }
      });
    }
  }

  ngOnInit() {
    this.fetchLabGroups();
    this.router.events.pipe(
      takeUntil(this.destroy$),
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe(event => {
      this.isCollateView = event.urlAfterRedirects.includes('/collate/view');
      this.cdr.markForCheck();
    });
  }

  openLoginDialog() {
    this.dialog.open(LoginDialogComponent);
  }

  switchDarkMode() {
    const body = document.getElementsByTagName('body')[0];
    if (this.accounts.userAccount.darkMode) {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
    } else {
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
    }
    this.accounts.userAccount.darkMode = !this.accounts.userAccount.darkMode;
    this.accounts.saveToStorage();
    this.graphService.redrawTrigger.next(true);
  }

  fetchLabGroups() {
    this.webService.getLabGroups().pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        this.labGroups = response.results;
        if (this.accounts.userAccount.currentLabGroup) {
          this.currentLabGroup = this.labGroups.find(lg => lg.id === this.accounts.userAccount.currentLabGroup);
        }
        this.cdr.markForCheck();
      }
    });
  }

  selectLabGroup(labGroup: LabGroup) {
    this.currentLabGroup = labGroup;
    this.accounts.userAccount.currentLabGroup = labGroup.id;
    this.accounts.saveToStorage();
    this.webService.updateFromLabGroupSelection.next(true);
    this.cdr.markForCheck();
  }

  selectAllLabGroups() {
    this.currentLabGroup = undefined;
    this.accounts.userAccount.currentLabGroup = null;
    this.accounts.saveToStorage();
    this.webService.updateFromLabGroupSelection.next(true);
    this.cdr.markForCheck();
  }

  openLabGroupCreateDialog() {
    const ref = this.dialog.open(LabGroupCreateDialogComponent);
    ref.afterClosed().pipe(takeUntil(this.destroy$)).subscribe((result) => {
      if (result) {
        this.fetchLabGroups();
      }
    });
  }

  openLabMemberDialog() {
    const ref = this.dialog.open(LabGroupUserListDialogComponent);
    if (this.currentLabGroup) {
      ref.componentInstance.labGroupID = this.currentLabGroup.id;
    }
    ref.afterClosed().pipe(takeUntil(this.destroy$)).subscribe((result: User | { all: boolean }) => {
      if (!result) {
        return;
      }
      if ("all" in result) {
        this.currentUser = undefined;
        this.accounts.userAccount.currentUser = null;
      } else {
        this.currentUser = result;
        this.accounts.userAccount.currentUser = result.id;
      }
      this.accounts.saveToStorage();
      this.webService.updateFromLabGroupSelection.next(true);
      this.cdr.markForCheck();
    });
  }

  logout() {
    this.webService.userLogoutProvider().pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.webService.logoutProvider().pipe(takeUntil(this.destroy$)).subscribe();
        this.accounts.logout();
        this.cdr.markForCheck();
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
