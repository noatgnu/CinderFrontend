import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {User} from "../user/user";
import {WebService} from "../web.service";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-delete-user-confirmation',
  standalone: true,
  imports: [
    MatButton,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle
  ],
  templateUrl: './delete-user-confirmation.component.html',
  styleUrl: './delete-user-confirmation.component.scss'
})
export class DeleteUserConfirmationComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteUserConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private webService: WebService
  ) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
