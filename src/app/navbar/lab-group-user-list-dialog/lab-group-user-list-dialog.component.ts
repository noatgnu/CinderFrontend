import {Component, Input} from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {User, UserQuery} from "../../user/user";
import {WebService} from "../../web.service";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from "@angular/material/table";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
    selector: 'app-lab-group-user-list-dialog',
    imports: [
        MatDialogTitle,
        MatDialogContent,
        ReactiveFormsModule,
        MatLabel,
        MatInput,
        MatFormField,
        MatCell,
        MatCellDef,
        MatColumnDef,
        MatHeaderCell,
        MatHeaderRow,
        MatHeaderRowDef,
        MatRow,
        MatRowDef,
        MatTable,
        MatPaginator,
        MatDialogActions,
        MatButton,
        MatHeaderCellDef,
        MatIcon,
        MatIconButton,
        MatSuffix
    ],
    templateUrl: './lab-group-user-list-dialog.component.html',
    styleUrl: './lab-group-user-list-dialog.component.scss'
})
export class LabGroupUserListDialogComponent {
  private _labGroupID: number = 0
  @Input() set labGroupID(value: number) {
    this._labGroupID = value
    this.fetchMembers()
  }

  get labGroupID(): number {
    return this._labGroupID
  }

  memberQuery: UserQuery|undefined|null = null
  limit: number = 10
  offset: number = 0

  form = this.fb.group({
    selectedUser: [null],
    searchTerm: [""]
  })

  displayedColumns: string[] = ['id', 'username', 'first_name', 'last_name'];

  constructor(private dialogRef: MatDialogRef<LabGroupUserListDialogComponent>, private web: WebService, private fb: FormBuilder) {
    this.fetchMembers()
  }

  close() {
    this.dialogRef.close()
  }

  submit(user: User) {
    this.dialogRef.close(user)
  }

  fetchMembers() {
    this.web.getUsers(this.form.value.searchTerm, this.limit, this.offset, this.labGroupID).subscribe((value) => {
      this.memberQuery = value
    })
  }

  onPageChange(event: PageEvent) {
    this.limit = event.pageSize
    this.offset = event.pageIndex * event.pageSize
    this.fetchMembers()
  }

  selectAll() {
    this.dialogRef.close({all: true})
  }

}
