import { Component } from '@angular/core';
import {AccountsService} from "../accounts/accounts.service";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {UserManagementComponent} from "./user-management/user-management.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    MatTabGroup,
    MatTab,
    UserManagementComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  isStaff: boolean = false

  constructor(private accounts: AccountsService) {
    console.log(this.accounts.currentUser)
    this.isStaff = this.accounts.currentUser?.is_staff || false
  }

}
