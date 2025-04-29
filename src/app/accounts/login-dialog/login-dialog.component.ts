import { Component } from '@angular/core';
import { AccountsService } from "../accounts.service";
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from "@angular/material/dialog";
import { MatFormField, MatLabel, MatError } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatButton } from "@angular/material/button";
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import { WebService } from "../../web.service";
import { finalize, catchError } from "rxjs/operators";
import { of } from "rxjs";

@Component({
  selector: 'app-login-dialog',
  imports: [
    MatDialogTitle,
    MatDialogContent,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatDialogActions,
    MatButton,
    MatLabel,
    MatError,
    MatProgressSpinner
  ],
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.scss'
})
export class LoginDialogComponent {
  form = this.fb.group({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  isLoading = false;
  loginError: string | null = null;

  constructor(
    private accounts: AccountsService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<LoginDialogComponent>,
    private web: WebService
  ) {}

  close() {
    this.dialogRef.close();
  }

  login() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const username = this.form.value.username;
    const password = this.form.value.password;

    if (username && password) {
      this.isLoading = true;
      this.loginError = null;

      this.accounts.login(username, password).pipe(
        catchError(error => {
          this.loginError = error.status === 401 ?
            'Invalid username or password' :
            'Login failed. Please try again.';
          return of(null);
        }),
        finalize(() => this.isLoading = false)
      ).subscribe(data => {
        if (data) {
          this.accounts.loggedIn = true;
          this.accounts.userAccount.token = data.token;
          this.accounts.userAccount.username = username;
          this.accounts.saveToStorage();
          this.dialogRef.close(true);

          this.web.getCurrentUser().subscribe(userData => {
            if (userData) {
              this.accounts.currentUser = userData;
            }
          });
        }
      });
    }
  }

  connectKeycloak() {
    this.isLoading = true;
    this.loginError = null;
    this.web.getLoginProviderRedirect();
  }
}
