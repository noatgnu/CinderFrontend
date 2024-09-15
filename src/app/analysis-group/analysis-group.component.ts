import {Component, Input} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {ProjectListComponent} from "../project/project-list/project-list.component";
import {FormBuilder, FormControl, ReactiveFormsModule} from "@angular/forms";
import {AnalysisGroup, AnalysisGroupQuery} from "./analysis-group";
import {WebService} from "../web.service";
import {MatDialog} from "@angular/material/dialog";
import {
  CreateAnalysisGroupDialogComponent
} from "./create-analysis-group-dialog/create-analysis-group-dialog.component";
import {AnalysisGroupListComponent} from "./analysis-group-list/analysis-group-list.component";
import {AnalysisGroupViewComponent} from "./analysis-group-view/analysis-group-view.component";
import {DataService} from "../data.service";
import {SearchSession} from "../search-session";
import {Router} from "@angular/router";

@Component({
  selector: 'app-analysis-group',
  standalone: true,
  imports: [
    MatFormField,
    MatIcon,
    MatIconButton,
    MatInput,
    MatLabel,
    MatPaginator,
    MatToolbar,
    MatToolbarRow,
    ProjectListComponent,
    ReactiveFormsModule,
    AnalysisGroupListComponent,
    AnalysisGroupViewComponent
  ],
  templateUrl: './analysis-group.component.html',
  styleUrl: './analysis-group.component.scss'
})
export class AnalysisGroupComponent {
  sidebarOpen = true
  analysisGroupQuery?: AnalysisGroupQuery
  pageIndex = 0
  limit = 15
  offset = 0

  form = this.fb.group({
    name: new FormControl()
  })

  selectedAnalysisGroup?: AnalysisGroup|undefined

  private _analysisGroupID?: number|undefined
  @Input() set analysisGroupID(value: number|undefined) {
    this._analysisGroupID = value
    if (value) {
      this.web.getAnalysisGroup(value).subscribe((data) => {
        this.selectedAnalysisGroup = data
      })
    }
  }

  get analysisGroupID(): number|undefined {
    return this._analysisGroupID
  }

  constructor(private router: Router, public dataService: DataService, private fb: FormBuilder, private dialog: MatDialog, private web: WebService) {
    this.web.getAnalysisGroups(undefined, this.limit, this.offset).subscribe((data: any) => {
      this.analysisGroupQuery = data
    })
    this.form.controls.name.valueChanges.subscribe((value: string) => {
      if (value) {
        this.web.getAnalysisGroups(undefined, this.limit, this.offset, value).subscribe((data: any) => {
          this.analysisGroupQuery = data
        })
      }
    })
    this.web.updateFromLabGroupSelection.subscribe((value) => {
      if (value) {
        this.web.getAnalysisGroups(undefined, this.limit, this.offset).subscribe((data: any) => {
          this.analysisGroupQuery = data
        })
      }
    })
  }

  openCreateAnalysisGroupDialog() {
    const ref = this.dialog.open(CreateAnalysisGroupDialogComponent)
    ref.componentInstance.enableProjectSelection = true
    ref.afterClosed().subscribe((data) => {
      if (data){
        this.web.getAnalysisGroups(undefined, this.limit, this.offset).subscribe((data: any) => {
          this.analysisGroupQuery = data
        })
      }
    })
  }

  handlePageEvent(event: PageEvent) {
    this.offset = event.pageIndex * event.pageSize
    this.limit = event.pageSize
    if (this.form.controls.name.value) {
      this.web.getAnalysisGroups(undefined, this.limit, this.offset, this.form.controls.name.value).subscribe((data: any) => {
        this.analysisGroupQuery = data
      })
    } else {
      this.web.getAnalysisGroups(undefined, this.limit, this.offset).subscribe((data: any) => {
        this.analysisGroupQuery = data
      })
    }
  }

  refreshData() {
    this.web.getAnalysisGroups(undefined, this.limit, this.offset).subscribe((data: any) => {
      this.analysisGroupQuery = data
    })
  }

  handleUpdateData(event: AnalysisGroup) {
    this.selectedAnalysisGroup = event
    this.analysisGroupQuery!.results = this.analysisGroupQuery!.results.map((value) => {
      if (value.id === event.id) {
        return event
      }
      return value
    })
  }

  toggleSidePanel() {
    this.sidebarOpen = !this.sidebarOpen
  }
  onAnalysisGroupSelected(event: AnalysisGroup) {
    this.router.navigate([`/analysis-group`, event.id])
  }
}
