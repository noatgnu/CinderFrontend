import { Component } from '@angular/core';
import {AccountsService} from "../accounts/accounts.service";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {UserManagementComponent} from "./user-management/user-management.component";
import {CollateManagementComponent} from "./collate-management/collate-management.component";

@Component({
    selector: 'app-admin',
    imports: [
        MatTabGroup,
        MatTab,
        UserManagementComponent,
        CollateManagementComponent
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
