import { Component } from '@angular/core';
import {AsyncPipe, NgOptimizedImage} from "@angular/common";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {AccountsService} from "../accounts/accounts.service";
import {WebService} from "../web.service";
import {MatDialog} from "@angular/material/dialog";
import {CreateProjectDialogComponent} from "../project/create-project-dialog/create-project-dialog.component";
import {
  CreateAnalysisGroupDialogComponent
} from "../analysis-group/create-analysis-group-dialog/create-analysis-group-dialog.component";
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {Project, ProjectQuery} from "../project/project";
import {PageEvent} from "@angular/material/paginator";
import {ProjectSearchComponent} from "./project-search/project-search.component";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption, MatSelect} from "@angular/material/select";
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelDescription, MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import {MatSnackBar} from "@angular/material/snack-bar";
import {WebsocketService} from "../websocket.service";
import {AnalysisSearchComponent} from "./analysis-search/analysis-search.component";
import {AnalysisGroup} from "../analysis-group/analysis-group";
import {Species, SpeciesQuery} from "../species";
import {MatAutocomplete, MatAutocompleteTrigger} from "@angular/material/autocomplete";
import {BehaviorSubject} from "rxjs";
import {MatListOption, MatSelectionList} from "@angular/material/list";
import {Router} from "@angular/router";
import {CollateSearchMainComponent} from "../collate/collate-search-main/collate-search-main.component";
import {CreateCollateDialogComponent} from "../collate/create-collate-dialog/create-collate-dialog.component";
import {CollateService} from "../collate/collate.service";

@Component({
    selector: 'app-banner',
    imports: [
        NgOptimizedImage,
        MatCard,
        MatCardSubtitle,
        MatCardTitle,
        MatCardHeader,
        MatCardContent,
        MatIcon,
        MatCardActions,
        MatButton,
        ProjectSearchComponent,
        ReactiveFormsModule,
        MatFormField,
        MatInput,
        MatSelect,
        MatLabel,
        MatOption,
        MatAccordion,
        MatExpansionPanel,
        MatExpansionPanelTitle,
        MatExpansionPanelDescription,
        MatExpansionPanelHeader,
        AnalysisSearchComponent,
        MatAutocomplete,
        AsyncPipe,
        MatAutocompleteTrigger,
        MatSelectionList,
        MatListOption,
        CollateSearchMainComponent
    ],
    templateUrl: './banner.component.html',
    styleUrl: './banner.component.scss'
})
export class BannerComponent {

  projectCount = 0
  analysisGroupCount = 0

  form = this.fb.group({
    search: new FormControl<string>("", Validators.required),
    searchMode: new FormControl<"full"|"pi"|"gene"|"uniprot">("gene", Validators.required),
    foldChange: new FormControl<number>(0.6, Validators.required),
    pValue: new FormControl<number>(1.31, Validators.required),
    projects: new FormControl<Project[]>([]),
    species_name: new FormControl<string>(""),
  })

  pageSize = 10
  currentPage = 0
  speciesQueryBehaviorSubject = new BehaviorSubject<Species[]>([])
  selectedSpecies: Species|undefined = undefined

  constructor(private collateService: CollateService, private router: Router, public accounts: AccountsService, private web: WebService, private dialog: MatDialog, private fb: FormBuilder, private sb: MatSnackBar, private ws: WebsocketService) {
    this.web.getProjectCount().subscribe((data) => {
      this.projectCount = data.count
    })
    this.web.getAnalysisGroupCount().subscribe((data) => {
      this.analysisGroupCount = data.count
    })
    this.form.controls.species_name.valueChanges.subscribe((value) => {
      if (value) {
        this.web.getSpecies(undefined, 20, 0, value).subscribe((data) => {
          this.speciesQueryBehaviorSubject.next(data.results)
        })
      }
    })
    this.ws.searchWSConnection?.subscribe((data) => {
      if (data) {
        if (data["type"] === "search_status") {

          switch (data["status"]) {
            case "complete":
              // check if current route is not collate
              if (this.router.url.includes("collate")) {
                return
              }
              this.router.navigate([`/search-session/${data["id"]}`]).then()
              //window.open(`/#/search-session/${data["id"]}`, "_blank")
              break
          }
        }
      }
    })
    this.web.updateFromLabGroupSelection.subscribe((value) => {
      if (value) {
        this.web.getProjectCount().subscribe((data) => {
          this.projectCount = data.count
        })
        this.web.getAnalysisGroupCount().subscribe((data) => {
          this.analysisGroupCount = data.count
        })
      }
    })
  }

  openProjectCreateDialog() {
    const ref = this.dialog.open(CreateProjectDialogComponent)
    ref.afterClosed().subscribe((data) => {
      if (data) {
        this.web.createProject(data.name, data.description).subscribe((data) => {
          this.web.getProjectCount().subscribe((data) => {
            this.projectCount = data.count
          })
          window.open(`/#/project/${data.id}`, "_blank")
        })
      }
    })
  }

  openAnalysisGroupCreateDialog() {
    const ref = this.dialog.open(CreateAnalysisGroupDialogComponent)
    ref.componentInstance.enableProjectSelection = true
    ref.afterClosed().subscribe((data) => {
      if (data) {
        this.web.getAnalysisGroupCount().subscribe((data) => {
          this.analysisGroupCount = data.count
        })
        window.open(`/#/analysis-group/${data.id}`, "_blank")
      }
    })
  }

  handleProjectSelection(e: Project[]) {
    if (e.length === 0){
      return
    }
    this.router.navigate([`/project/${e[0].id}`]).then()
    //window.open(`/#/project/${e[0].id}`, "_blank")
  }

  handleMultipleProjectSelection(e: Project[]) {
    this.form.controls.projects.setValue(e)
  }

  async searchDatabase() {
    if (this.form.invalid) {
      return
    }
    const analysisGroupIDs: number[] = []
    if (this.form.value.projects) {
      const results = await this.web.getAnalysisGroupsFromProjects(this.form.value.projects).toPromise()
      if (results) {
        for (let result of results) {
          analysisGroupIDs.push(result.id)
        }
      }
    }
    if (this.form.value.search && this.form.value.foldChange && this.form.value.pValue && this.form.value.searchMode) {
      this.web.createSearch(analysisGroupIDs, this.form.value.search, this.web.searchSessionID, this.form.value.foldChange, this.form.value.pValue, this.form.value.searchMode, this.selectedSpecies).subscribe((data) => {
        this.sb.open("Search queued", "Dismiss", {duration: 2000})
      })
    }

  }

  handleAGSelection(e: AnalysisGroup[]) {
    if (e.length >0) {
      this.router.navigate([`/analysis-group/${e[0].id}`]).then()
      //window.open(`/#/analysis-group/${e[0].id}`, "_blank")
    }
  }

  selectSpecies(species: Species) {
    if (this.selectedSpecies === species) {
      this.selectedSpecies = undefined
      return
    }
    this.selectedSpecies = species
  }

  openCreateCollateDialog() {
    const dialogRef = this.dialog.open(CreateCollateDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.collateService.createCollate(result.title, result.greeting).subscribe((data) => {
          this.router.navigate([`/collate/edit/${data.id}`]).then(r => console.log(r));
        });
      }
    });
  }

}
