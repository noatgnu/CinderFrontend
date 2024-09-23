import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {User} from "./user";
import {MatDivider} from "@angular/material/divider";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton, MatIconButton} from "@angular/material/button";
import {WebService} from "../web.service";
import {LabGroup, LabGroupQuery} from "../lab-group";
import {MatListOption, MatSelectionList} from "@angular/material/list";
import {MatChip, MatChipGrid, MatChipRemove, MatChipRow, MatChipSet} from "@angular/material/chips";
import {MatIcon} from "@angular/material/icon";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatDivider,
    ReactiveFormsModule,
    MatLabel,
    MatInput,
    MatFormField,
    MatButton,
    MatListOption,
    MatSelectionList,
    MatChipRemove,
    MatChipRow,
    MatChipGrid,
    MatIcon,
    MatChipSet,
    MatChip,
    MatPaginator,
    MatIconButton,
    MatSuffix
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  private _user: User|null = null
  hidePassword = true
  hideConfirmPassword = true

  @Input() set user(value: User) {
    if (!value) {
      this.web.getCurrentUser().subscribe((user) => {
        this._user = user
        this.form.patchValue({
          username: this._user.username,
          first_name: this._user.first_name,
          last_name: this._user.last_name,
          email: this._user.email
        })
        }
      )
    } else {
      this._user = value
      this.form.patchValue({
        username: this._user.username,
        first_name: this._user.first_name,
        last_name: this._user.last_name,
        email: this._user.email
      })
    }


    this.web.getCurrentUserLabGroups().subscribe((labGroups) => {
      this.labGroupForm.controls.lab_group.setValue(labGroups)
    })
    this.fetchLabGroups()
  }

  get user(): User {
    return this._user!
  }

  form = this.fb.group({
    username: ['', Validators.required],
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', Validators.required],
  })

  passwordForm = this.fb.group({
    new_password: ['', Validators.required],
    confirm_password: ['', Validators.required]
  })

  labGroupForm = this.fb.group({
    lab_group: new FormControl<LabGroup[]>([]),
    search_term: new FormControl<string>("")
  })

  labGroupQuery: LabGroupQuery|null = null
  currentIndex = 0
  size = 5


  constructor(private fb: FormBuilder, private web: WebService, private snackBar: MatSnackBar) {
    // ensure that new_password and confirm_password match


  }

  updateUser() {
    this.web.updateUser(this.user.id, this.form.value.email, null, this.form.value.last_name, this.form.value.first_name).subscribe((user) => {
      this.user = user;
      this.snackBar.open("User updated", "Close", {
        duration: 2000
      })
    }, error => {
      this.snackBar.open("Error updating user", "Close", {
        duration: 2000
      })
    })
  }

  updatePassword() {
    this.web.updateUser(this.user.id, null, this.passwordForm.value.new_password, null, null).subscribe((user) => {
      this.user = user;
      this.snackBar.open("Password updated", "Close", {
        duration: 2000
      })
    }, error => {
      this.snackBar.open("Error updating password", "Close", {
        duration: 2000
      })
    })
  }

  fetchLabGroups() {
    if (this.labGroupForm.controls.search_term.value) {
      this.web.getLabGroups(this.labGroupForm.controls.search_term.value, this.size, this.currentIndex).subscribe((labGroups) => {
        this.labGroupQuery = labGroups
      })
    } else {
      this.web.getLabGroups(undefined, this.size, this.currentIndex).subscribe((labGroups) => {
        this.labGroupQuery = labGroups
      })
    }
  }

  removeLabGroup(labGroup: LabGroup) {
    if (!this.labGroupForm.controls.lab_group.value) {
      return
    }
    const labGroups = this.labGroupForm.controls.lab_group.value.filter(lg => lg.id !== labGroup.id);
    this.labGroupForm.controls.lab_group.setValue(labGroups);
  }

  previousPage() {
    if (this.currentIndex > 0) {
      this.currentIndex -= this.size;
      this.fetchLabGroups();
    }
  }

  nextPage() {
    if (this.labGroupQuery && this.labGroupQuery.results.length === this.size) {
      this.currentIndex += this.size;
      this.fetchLabGroups();
    }
  }
  onLabGroupSelect(event: any) {
    const selectedOptions = event.options;
    const currentLabGroups = this.labGroupForm.controls.lab_group.value || [];
    selectedOptions.forEach((option: MatListOption) => {
      const selectedLabGroup = option.value;
      if (!currentLabGroups.some(lg => lg.id === selectedLabGroup.id)) {
        currentLabGroups.push(selectedLabGroup);
      }
    });
    this.labGroupForm.controls.lab_group.setValue(currentLabGroups);
  }

  onPageChange(event: PageEvent) {
    this.size = event.pageSize;
    this.currentIndex = event.pageIndex * this.size;
    this.fetchLabGroups();
  }

  updateLabGroups() {
    this.web.getCurrentUserLabGroups().subscribe((currentLabGroups) => {
      const existingLabGroups = this.labGroupForm.controls.lab_group.value || [];
      const existingLabGroupIds = new Set(existingLabGroups.map(lg => lg.id));
      const currentLabGroupIds = new Set(currentLabGroups.map(lg => lg.id));
      existingLabGroupIds.forEach(labGroupId => {
        if (!currentLabGroupIds.has(labGroupId)) {
          this.web.addLabGroupMember(labGroupId, this.user.id).subscribe();
        }
      });

      currentLabGroupIds.forEach(labGroup => {
        if (!existingLabGroupIds.has(labGroup)) {
          this.web.removeLabGroupMember(labGroup, this.user.id).subscribe();
        }
      });
    });
  }
}
