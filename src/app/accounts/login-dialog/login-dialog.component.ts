import { Component } from '@angular/core';
import {AccountsService} from "../accounts.service";
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-login-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatDialogActions,
    MatButton,
    MatLabel,
  ],
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.scss'
})
export class LoginDialogComponent {

  form = this.fb.group({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  constructor(private accounts: AccountsService, private fb: FormBuilder, private dialogRef: MatDialogRef<LoginDialogComponent>) {

  }

  close() {
    this.dialogRef.close()
  }

  login() {
    if (this.form.invalid) {
      return
    }
    if (this.form.value.username && this.form.value.password) {
      this.accounts.login(this.form.value.username, this.form.value.password).subscribe(
        (data) => {
          this.accounts.loggedIn = true
          this.accounts.userAccount.token = data.token
          // @ts-ignore
          this.accounts.userAccount.username = this.form.value.username
          this.accounts.saveToStorage()
          this.dialogRef.close()
        },
        (error) => {
          console.log(error)
        }
      )
    }

  }

}
