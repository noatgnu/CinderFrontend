import {Component, OnInit} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconButton} from "@angular/material/button";
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
    MatSlideToggle
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  isCollateView = false;

  constructor(private router: Router, public accounts: AccountsService, private dialog: MatDialog, private graphService: GraphService) {

  }

  ngOnInit() {
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

}
