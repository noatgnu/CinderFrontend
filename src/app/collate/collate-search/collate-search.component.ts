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
import {MatProgressBar} from "@angular/material/progress-bar";

@Component({
    selector: 'app-collate-search',
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
        MatLabel,
        MatProgressBar
    ],
    templateUrl: './collate-search.component.html',
    styleUrl: './collate-search.component.scss'
})
export class CollateSearchComponent {
  @Input() projects: Project[] = [];
  loading: boolean = false;
  searchStartTime: Date | null = null;
  elapsedTime: string = '0.00';
  private timerInterval: any;
  progress: string = "";
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
              this.loading = false;
              clearInterval(this.timerInterval);
              const elapsedTime = this.calculateElapsedTime();
              this.progress = "";
              this.showSnackBar(`Search complete in ${elapsedTime} seconds`);
              this.searchResultID.emit(parseInt(data["id"]));
              //window.open(`/#/search-session/${data["id"]}`, "_blank")
              break
            case "in_progress":
              this.progress = `Current progress: ${data["current_progress"]}/${data["found_files"]}`
              break;
            case "error":
              this.loading = false;
              this.progress = "Search error";
              this.showSnackBar("Search error");
              break;
          }
        }
      }
    })
  }

  async runSearch() {

    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this.progress = "Current progress: search initiated";
    this.searchStartTime = new Date();
    this.elapsedTime = '0.00';
    this.timerInterval = setInterval(() => {
      this.elapsedTime = this.calculateElapsedTime().toFixed(2);
    }, 200);
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
      const queries = this.form.value.searchQuery.toUpperCase().split("OR");
      const reformatQueries = queries.map((query) => {
        const transformedQuery = query.trim().replace(/'/g, "").replace(/"/g, "");
        return `"${transformedQuery}"`;
      });

      this.web.createSearch(
        analysisGroupIDs,
        reformatQueries.join(" OR "),
        this.web.searchSessionID,
        0.000000001,
        0.000000001,
        this.form.value.searchMode
      ).subscribe({
        next: () => {
          this.sb.open('Search queued', 'Dismiss', { duration: 2000 });
        },
        error: () => {
          this.loading = false;
          clearInterval(this.timerInterval);
          this.showSnackBar("Search error");
        }
      });
    }
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
    });
  }

  calculateElapsedTime(): number {
    if (this.searchStartTime) {
      const endTime = new Date();
      const elapsedTime = (endTime.getTime() - this.searchStartTime.getTime()) / 1000;
      return elapsedTime;
    }
    return 0;
  }
}
