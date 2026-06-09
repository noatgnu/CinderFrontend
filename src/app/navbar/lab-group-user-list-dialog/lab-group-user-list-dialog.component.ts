import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
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
import {Subject, takeUntil} from "rxjs";

export interface LabGroupUserListDialogData {
  labGroupID: number;
}

@Component({
    selector: 'app-lab-group-user-list-dialog',
    changeDetection: ChangeDetectionStrategy.OnPush,
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
export class LabGroupUserListDialogComponent implements OnDestroy {
  private destroy$ = new Subject<void>();

  memberQuery: UserQuery | undefined | null = null;
  limit = 10;
  pageIndex = 0;

  form = this.fb.group({
    selectedUser: [null],
    searchTerm: [''],
  });

  displayedColumns: string[] = ['id', 'username', 'first_name', 'last_name'];

  constructor(
    private dialogRef: MatDialogRef<LabGroupUserListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LabGroupUserListDialogData,
    private web: WebService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
  ) {
    this.fetchMembers();
  }

  fetchMembers(): void {
    const offset = this.pageIndex * this.limit;
    this.web.getUsers(this.form.value.searchTerm, this.limit, offset, this.data.labGroupID)
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => {
        this.memberQuery = value;
        this.cdr.markForCheck();
      });
  }

  onPageChange(event: PageEvent): void {
    this.limit = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.fetchMembers();
  }

  submit(user: User): void {
    this.dialogRef.close(user);
  }

  selectAll(): void {
    this.dialogRef.close({ all: true });
  }

  close(): void {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
