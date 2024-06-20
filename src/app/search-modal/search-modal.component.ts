import {Component, Input} from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {WebService} from "../web.service";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {WebsocketService} from "../websocket.service";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Project, ProjectQuery} from "../project/project";
import {PageEvent} from "@angular/material/paginator";
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader, MatExpansionPanelTitle
} from "@angular/material/expansion";
import {ProjectSearchComponent} from "../banner/project-search/project-search.component";

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
    MatButton,
    MatSelect,
    MatOption,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelDescription,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    ProjectSearchComponent
  ],
  templateUrl: './search-modal.component.html',
  styleUrl: './search-modal.component.scss'
})
export class SearchModalComponent {
  @Input() analysisGroupIDs: number[] = []


  form = this.fb.group({
    search: new FormControl<string>("", Validators.required),
    searchMode: new FormControl<"full"|"pi"|"gene"|"uniprot">("full", Validators.required),
    foldChange: new FormControl<number>(0.6, Validators.required),
    pValue: new FormControl<number>(1.31, Validators.required),
  })

  selectedProjects: Project[] = []

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<SearchModalComponent>, private web: WebService, private ws: WebsocketService, private sb: MatSnackBar) {

    this.ws.searchWSConnection?.subscribe((data) => {
      if (data) {
        if (data["type"] === "search_status") {
          switch (data["status"]) {
            case "complete":
              this.sb.open(`${location.host}/#/search-session/${data["id"]}`, "Dismiss", {duration: 10000})
              this.dialogRef.close(data["id"])
              break
          }
        }
      }
    })
  }

  search() {
    if (this.form.invalid) {
      return
    }
    if (this.selectedProjects.length === 0) {
      if (this.form.value.search && this.form.value.foldChange && this.form.value.pValue && this.form.value.searchMode) {
        this.web.createSearch(this.analysisGroupIDs, this.form.value.search, this.web.searchSessionID, this.form.value.foldChange, this.form.value.pValue, this.form.value.searchMode).subscribe((data) => {
          this.sb.open("Search queued", "Dismiss", {duration: 2000})
        })
      }
    } else {
      this.web.getAnalysisGroupsFromProjects(this.selectedProjects).subscribe((data) => {
        if (data) {
          if (this.form.value.search && this.form.value.foldChange && this.form.value.pValue && this.form.value.searchMode) {
            this.web.createSearch(data.map((ag) => ag.id), this.form.value.search, this.web.searchSessionID, this.form.value.foldChange, this.form.value.pValue, this.form.value.searchMode).subscribe((data) => {
              this.sb.open("Search queued", "Dismiss", {duration: 2000})
            })
          }
        }
      })
    }

  }

  cancel() {
    this.dialogRef.close()
  }

  handleMultipleProjectSelection(selectedProjects: Project[]) {
    this.selectedProjects = selectedProjects
  }
}
