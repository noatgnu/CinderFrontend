import {Component, OnInit} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {AccountsService} from "../accounts/accounts.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {LoginDialogComponent} from "../accounts/login-dialog/login-dialog.component";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {NgOptimizedImage} from "@angular/common";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {DataService} from "../data.service";
import {GraphService} from "../graph.service";
import {NavigationEnd, Router} from "@angular/router";
import {LabGroup} from "../lab-group";
import {WebService} from "../web.service";
import {LabGroupCreateDialogComponent} from "./lab-group-create-dialog/lab-group-create-dialog.component";
import {LabGroupUserListDialogComponent} from "./lab-group-user-list-dialog/lab-group-user-list-dialog.component";
import {User} from "../user/user";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconButton,
    MatIcon,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    NgOptimizedImage,
    MatSlideToggle,
    MatButton
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  labGroups: LabGroup[] = [];
  isCollateView = false;
  currentLabGroup: LabGroup | undefined;
  currentUser: User | undefined;

  constructor(private webService: WebService, private router: Router, public accounts: AccountsService, private dialog: MatDialog, private graphService: GraphService) {
    if (this.accounts.userAccount.currentUser) {
      this.webService.getUser(this.accounts.userAccount.currentUser).subscribe({
        next: (response) => {
          this.currentUser = response;
        },
        error: (err) => {
          console.error('Error fetching user:', err);
        }
      });
    }
  }

  ngOnInit() {
    this.fetchLabGroups();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isCollateView = event.urlAfterRedirects.includes('/collate/view');
      }
    });

  }

  openLoginDialog() {
    const ref = this.dialog.open(LoginDialogComponent)
  }

  switchDarkMode() {
    const body = document.getElementsByTagName('body')[0]
    console.log(this.accounts.userAccount.darkMode)
    if (this.accounts.userAccount.darkMode) {
      body.classList.remove('dark-theme')
      body.classList.add('light-theme')
    } else {
      body.classList.add('dark-theme')
      body.classList.remove('light-theme')
    }
    this.accounts.userAccount.darkMode = !this.accounts.userAccount.darkMode
    this.accounts.saveToStorage()
    this.graphService.redrawTrigger.next(true)
  }

  fetchLabGroups() {
    this.webService.getLabGroups().subscribe({
      next: (response) => {
        this.labGroups = response.results;
        if (this.accounts.userAccount.currentLabGroup) {
          this.currentLabGroup = this.labGroups.find(lg => lg.id === this.accounts.userAccount.currentLabGroup);
        }
      },
      error: (err) => {
        console.error('Error fetching lab groups:', err);
      }
    });
  }

  selectLabGroup(labGroup: LabGroup) {
    this.currentLabGroup = labGroup;
    this.accounts.userAccount.currentLabGroup = labGroup.id;
    this.accounts.saveToStorage();
    this.webService.updateFromLabGroupSelection.next(true);
  }

  selectAllLabGroups() {
    this.currentLabGroup = undefined;
    this.accounts.userAccount.currentLabGroup = null;
    this.accounts.saveToStorage();
    this.webService.updateFromLabGroupSelection.next(true);
  }

  openLabGroupCreateDialog() {
    const ref = this.dialog.open(LabGroupCreateDialogComponent);
    ref.afterClosed().subscribe((result) => {
      if (result) {
        this.fetchLabGroups();
      }
    });
  }

  openLabMemberDialog() {
    const ref = this.dialog.open(LabGroupUserListDialogComponent)
    if (this.currentLabGroup) {
      ref.componentInstance.labGroupID = this.currentLabGroup.id;
    }
    ref.afterClosed().subscribe((result: User) => {
      this.currentUser = result;
      this.accounts.userAccount.currentUser = result.id;
      this.accounts.saveToStorage();
      this.webService.updateFromLabGroupSelection.next(true);

    })

  }
}
