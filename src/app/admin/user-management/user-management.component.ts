import {Component, OnInit} from '@angular/core';
import {AdminService} from "../admin.service";
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatSnackBar} from "@angular/material/snack-bar";
import {WebService} from "../../web.service";
import {User, UserQuery} from "../../user/user";
import {MatDivider} from "@angular/material/divider";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {EditUserDialogComponent} from "./edit-user-dialog/edit-user-dialog.component";

@Component({
    selector: 'app-user-management',
    imports: [
        ReactiveFormsModule,
        MatLabel,
        MatInput,
        MatFormField,
        MatButton,
        MatCard,
        MatCardContent,
        MatIcon,
        FormsModule,
        MatSuffix,
        MatIconButton,
        MatDivider,
        MatRow,
        MatHeaderRow,
        MatCell,
        MatHeaderCell,
        MatColumnDef,
        MatTable,
        MatCellDef,
        MatHeaderCellDef,
        MatHeaderRowDef,
        MatRowDef,
        MatPaginator
    ],
    templateUrl: './user-management.component.html',
    styleUrl: './user-management.component.scss'
})
export class UserManagementComponent implements OnInit{

  userTokenForm = this.fb.group({
    username: ['', Validators.required],
  })

  userTokenLink: string = ""

  userSearchForm = this.fb.group({
    query: [''],
  })

  limit = 10
  offset = 0
  userQuery: UserQuery|undefined|null = null
  displayedColumns: string[] = ['id', 'username', 'first_name', 'last_name'];


  constructor(private dialog: MatDialog, private adminService: AdminService, private fb: FormBuilder, private snackBar: MatSnackBar, private webService: WebService) {

  }

  ngOnInit() {
    this.fetchUsers()
  }

  createUserToken() {
    if (this.userTokenForm.invalid) {
      return
    }
    if (this.userTokenForm.value.username) {
      this.adminService.generateUserToken(this.userTokenForm.value.username).subscribe((res) => {
        this.userTokenLink = location.protocol + '//' + location.host + '#/user/register/' + res['token']
      })
    }
  }

  copyTokenLink() {
    navigator.clipboard.writeText(this.userTokenLink).then(() => {
      this.snackBar.open('Link copied to clipboard', 'Close', {
        duration: 2000
      })
    })
  }

  fetchUsers() {
    this.webService.getUsers(this.userSearchForm.value.query,this.limit,this.offset).subscribe((res) => {
      this.userQuery = res
    })
  }

  onPageChange(event: PageEvent) {
    this.limit = event.pageSize
    this.offset = event.pageIndex * event.pageSize
    this.fetchUsers()
  }

  openEditUserDialog(user: User) {
    const ref = this.dialog.open(EditUserDialogComponent, {data: user})
    ref.afterClosed().subscribe((res) => {
      if (res) {
        this.fetchUsers()
      }
    })
  }
}
