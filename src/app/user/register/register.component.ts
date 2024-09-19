import {Component, Input} from '@angular/core';
import {WebService} from "../../web.service";
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatFormField, MatHint, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {LabGroup, LabGroupQuery} from "../../lab-group";
import {MatListOption, MatSelectionList} from "@angular/material/list";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatButton,
    MatIcon,
    MatIconButton,
    MatSuffix,
    MatHint,
    MatListOption,
    MatSelectionList,
    MatPaginator,
    MatDivider
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private _token: string = ''
  hidePassword = true
  hideConfirmPassword = true

  @Input() set token(value: string) {
    this._token = value
    this.form.controls.username.setValue(value.split(":")[0])
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (this.form.controls.username.value) {
      const valid = emailRegex.test(this.form.controls.username.value)
      if (valid) {
        this.form.controls.email.setValue(this.form.controls.username.value)
      }
    }

    this.form.controls.token.setValue(this._token)
  }

  get token(): string {
    return this._token
  }

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirm_password: ['', [Validators.required, Validators.minLength(8)]],
    token: ['', Validators.required],
    username: ['', Validators.required],
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    lab_group: new FormControl<LabGroup[]|null>([]),
    search_lab_group: [''],
  })

  labGroupQuery: LabGroupQuery|null = null

  limit = 5
  offset = 0

  constructor(private webService: WebService, private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.webService.getLabGroups("", this.limit, this.offset).subscribe((response) => {
      this.labGroupQuery = response
    })
    this.form.controls.search_lab_group.valueChanges.subscribe((value) => {
      if (value) {
        this.webService.getLabGroups(value, this.limit, this.offset).subscribe((response) => {
          this.labGroupQuery = response
        })
      }
    })
  }

  createAccount() {
    if (this.form.value.password !== this.form.value.confirm_password) {
      this.snackBar.open('Passwords do not match', 'Close', { duration: 2000 })
      return
    }
    if (this.form.invalid) {
      return
    }
    if (this.form.value.username && this.form.value.token && this.form.value.email && this.form.value.last_name && this.form.value.password && this.form.value.first_name) {
      this.webService.createUserWithToken(this.form.value.username, this.form.value.token, this.form.value.email, this.form.value.last_name, this.form.value.password, this.form.value.first_name, this.form.value.lab_group).subscribe(
        (response) => {
        this.snackBar.open('Account created', 'Close', { duration: 2000 })
      }, error => {
        this.snackBar.open('Failed to create account', 'Close', { duration: 2000 })
        })
    }
  }

  onPageChange(event: PageEvent) {
    this.limit = event.pageSize;
    this.offset = event.pageIndex * this.limit;
    if (this.form.controls.search_lab_group.value) {
      this.webService.getLabGroups(this.form.controls.search_lab_group.value, this.limit, this.offset).subscribe((response) => {
        this.labGroupQuery = response
      })
    } else {
      this.webService.getLabGroups("", this.limit, this.offset).subscribe((response) => {
        this.labGroupQuery = response
      })
    }

  }

}
