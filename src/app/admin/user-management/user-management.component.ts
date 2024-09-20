import { Component } from '@angular/core';
import {AdminService} from "../admin.service";
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-user-management',
  standalone: true,
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
    MatIconButton
  ],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent {

  userTokenForm = this.fb.group({
    username: ['', Validators.required],
  })

  userTokenLink: string = ""

  constructor(private adminService: AdminService, private fb: FormBuilder, private snackBar: MatSnackBar) {

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
}
