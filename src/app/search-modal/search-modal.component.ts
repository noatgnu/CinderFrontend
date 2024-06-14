import {Component, Input} from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {WebService} from "../web.service";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {WebsocketService} from "../websocket.service";

@Component({
  selector: 'app-search-modal',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatLabel,
    MatInput,
    MatFormField,
    ReactiveFormsModule,
    MatDialogActions,
    MatButton
  ],
  templateUrl: './search-modal.component.html',
  styleUrl: './search-modal.component.scss'
})
export class SearchModalComponent {
  @Input() analysisGroupIDs: number[] = []


  form = this.fb.group({
    search: new FormControl<string>("", Validators.required)
  })

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<SearchModalComponent>, private web: WebService, private ws: WebsocketService) {
    this.ws.searchWSConnection?.subscribe((data) => {
      if (data) {
        if (data["type"] === "search_status") {
          if (data["status"] === "complete") {
            this.dialogRef.close(data["id"])
          }
        }
      }
    })
  }

  search() {
    if (this.form.invalid) {
      return
    }
    if (this.form.value.search) {
      this.web.createSearch(this.analysisGroupIDs, this.form.value.search, this.web.searchSessionID).subscribe((data) => {
        console.log(data)
      })
    }
  }

  cancel() {
    this.dialogRef.close()
  }

}
