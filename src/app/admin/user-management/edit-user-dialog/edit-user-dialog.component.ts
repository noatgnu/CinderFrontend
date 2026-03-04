import {ChangeDetectionStrategy, Component, Inject, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {WebService} from "../../../web.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {
  MAT_DIALOG_DATA, MatDialog,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {User} from "../../../user/user";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {DeleteUserConfirmationComponent} from "../../../delete-user-confirmation/delete-user-confirmation.component";
import {Subject, takeUntil, filter, switchMap} from "rxjs";

@Component({
    selector: 'app-edit-user-dialog',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatLabel,
        MatInput,
        ReactiveFormsModule,
        MatFormField,
        MatDialogContent,
        MatDialogTitle,
        MatButton,
        MatDialogActions
    ],
    templateUrl: './edit-user-dialog.component.html',
    styleUrl: './edit-user-dialog.component.scss'
})
export class EditUserDialogComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private webService: WebService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<EditUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private dialog: MatDialog
  ) {
    this.form = this.fb.group({
      id: [data.id],
      username: [data.username, Validators.required],
      first_name: [data.first_name, Validators.required],
      last_name: [data.last_name, Validators.required],
      email: [data.email, [Validators.required, Validators.email]]
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  save() {
    if (this.form.invalid) {
      return;
    }

    this.webService.updateUser(
      this.form.value.id,
      this.form.value.email,
      null,
      this.form.value.last_name,
      this.form.value.first_name,
      this.form.value.username
    ).pipe(takeUntil(this.destroy$)).subscribe({
      next: (user) => {
        this.snackBar.open('User updated successfully', 'Close', { duration: 2000 });
        this.dialogRef.close(user);
      },
      error: () => {
        this.snackBar.open('Error updating user', 'Close', { duration: 2000 });
      }
    });
  }

  cancel() {
    this.dialogRef.close();
  }

  delete() {
    const ref = this.dialog.open(DeleteUserConfirmationComponent, {data: this.data})
    ref.afterClosed().pipe(
      takeUntil(this.destroy$),
      filter((result) => !!result),
      switchMap(() => this.webService.removeUser(this.data.id))
    ).subscribe({
      next: () => {
        this.snackBar.open('User deleted successfully', 'Close', {duration: 2000});
        this.dialogRef.close();
      },
      error: () => {
        this.snackBar.open('Error deleting user', 'Close', {duration: 2000});
      }
    });
  }

}
