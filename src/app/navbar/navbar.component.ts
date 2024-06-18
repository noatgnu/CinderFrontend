import { Component } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {AccountsService} from "../accounts/accounts.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {LoginDialogComponent} from "../accounts/login-dialog/login-dialog.component";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {NgOptimizedImage} from "@angular/common";

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
    NgOptimizedImage
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(public accounts: AccountsService, private dialog: MatDialog) {
  }

  openLoginDialog() {
    const ref = this.dialog.open(LoginDialogComponent)
  }

}
