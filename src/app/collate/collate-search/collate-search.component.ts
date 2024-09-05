import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Project} from "../../project/project";
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {WebService} from "../../web.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatFormField, MatInput} from "@angular/material/input";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatCard, MatCardContent} from "@angular/material/card";
import {WebsocketService} from "../../websocket.service";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {MatLabel} from "@angular/material/form-field";

@Component({
  selector: 'app-collate-search',
  standalone: true,
  imports: [
    MatInput,
    MatButton,
    ReactiveFormsModule,
    MatFormField,
    MatIconButton,
    MatIcon,
    MatCardContent,
    MatCard,
    MatOption,
    MatSelect,
    MatLabel
  ],
  templateUrl: './collate-search.component.html',
  styleUrl: './collate-search.component.scss'
})
export class CollateSearchComponent {
  @Input() projects: Project[] = [];

  form = this.fb.group({
    searchQuery: new FormControl<string>('', Validators.required),
    searchMode: new FormControl<"pi"|"gene"|"uniprot">("gene", Validators.required),
  });
  @Output() searchResultID: EventEmitter<number> = new EventEmitter<number>();

  constructor(private snackBar: MatSnackBar, private ws: WebsocketService, private fb: FormBuilder, private web: WebService, private sb: MatSnackBar) {
    this.ws.searchWSConnection?.subscribe((data) => {
      if (data) {
        if (data["type"] === "search_status") {

          switch (data["status"]) {
            case "complete":
              this.showSnackBar("Search complete")
              this.searchResultID.emit(parseInt(data["id"]));
              //window.open(`/#/search-session/${data["id"]}`, "_blank")
              break
          }
        }
      }
    })
  }

  async runSearch() {
    if (this.form.invalid) {
      return;
    }

    const analysisGroupIDs: number[] = [];
    if (this.projects.length > 0) {
      const results = await this.web.getAnalysisGroupsFromProjects(this.projects).toPromise();
      if (results) {
        for (let result of results) {
          analysisGroupIDs.push(result.id);
        }
      }
    }

    if (this.form.value.searchQuery && this.form.value.searchMode) {
      this.web.createSearch(
        analysisGroupIDs,
        this.form.value.searchQuery,
        this.web.searchSessionID,
        0.0001,
        0.0001,
        this.form.value.searchMode
      ).subscribe(() => {
        this.sb.open('Search queued', 'Dismiss', { duration: 2000 });
      });
    }
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
    });
  }
}
