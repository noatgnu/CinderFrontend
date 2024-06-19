import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Project} from "../project";
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton, MatIconButton} from "@angular/material/button";
import {WebService} from "../../web.service";
import {MatIcon} from "@angular/material/icon";
import {MatDialog} from "@angular/material/dialog";
import {
  CreateAnalysisGroupDialogComponent
} from "../../analysis-group/create-analysis-group-dialog/create-analysis-group-dialog.component";
import {AnalysisGroupQuery} from "../../analysis-group/analysis-group";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatList, MatListItem, MatListItemTitle, MatListOption, MatSelectionList} from "@angular/material/list";
import {AccountsService} from "../../accounts/accounts.service";
import {Species, SpeciesQuery} from "../../species";
import {MatSelect} from "@angular/material/select";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-project-view',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatButton,
    MatIcon,
    MatList,
    MatListItem,
    MatPaginator,
    MatListItemTitle,
    MatSelect,
    MatSelectionList,
    MatListOption,
    MatIconButton
  ],
  templateUrl: './project-view.component.html',
  styleUrl: './project-view.component.scss'
})
export class ProjectViewComponent {
  private _project?: Project|undefined
  @Input() set project(value: Project|undefined) {
    this._project = value
    if (!value) {
      return
    }
    this.titleService.setTitle(`Project - ${value.name}`)
    this.form.controls.name.setValue(value.name)
    this.form.controls.description.setValue(value.description)
    this.web.getAnalysisGroups(undefined, this.pageSize, 0, undefined, value.id).subscribe((data) => {
      this.analysisGroupQuery = data
    })
    if (value.species){
      console.log(value.species)
      this.web.getSpeciesByID(value.species).subscribe((data) => {
        this.form.controls.species_name.enable()
        this.form.controls.species.enable()
        this.form.controls.species_name.setValue(data.official_name)
        this.form.controls.species.setValue([data])
        this.form.controls.species.disable()
        this.form.controls.species_name.disable()
        this.speciesEditable = false
      })
    }
  }

  get project(): Project {
    return this._project!
  }
  speciesEditable = false
  form = this.fb.group({
    name: new FormControl({value: "", disabled: !this.accounts.loggedIn}, Validators.required),
    description: new FormControl({value: "", disabled: !this.accounts.loggedIn}, Validators.required),
    species_name: new FormControl({value: "", disabled: !this.accounts.loggedIn || !this.speciesEditable}),
    species: new FormControl<Species[]|undefined|null>({value: null, disabled: !this.accounts.loggedIn}, Validators.required)
  })

  @Output() deleted: EventEmitter<boolean> = new EventEmitter<boolean>()

  @Output() updated: EventEmitter<Project> = new EventEmitter<Project>()

  analysisGroupQuery?: AnalysisGroupQuery|undefined
  pageSize = 10
  currentPage = 0
  speciesQuery?: SpeciesQuery|undefined


  constructor(private titleService: Title, private fb: FormBuilder, private web: WebService, private dialog: MatDialog, public accounts: AccountsService) {
    this.form.controls.species_name.valueChanges.subscribe((data) => {
      if (data) {
        this.web.getSpecies(undefined, 20, 0, data).subscribe((data) => {
          this.speciesQuery = data
        })
      }
    })
    this.form.controls.species.valueChanges.subscribe((data) => {
      if (data) {
        this.form.controls.species_name.setValue(data[0].official_name)
      }
    })
  }

  updateProject() {
    if (this.form.invalid) {
      return
    }
    if (this.form.value.species) {
      // @ts-ignore
      this.web.updateProject(this.project.id, this.form.value.name, this.form.value.description, this.form.value.species[0].id).subscribe((data) => {
        this.project = data
        this.updated.emit(data)
      })
    } else {
      // @ts-ignore
      this.web.updateProject(this.project.id, this.form.value.name, this.form.value.description).subscribe((data) => {
        this.project = data
        this.updated.emit(data)
      })
    }

  }

  deleteProject() {
    this.web.deleteProject(this.project.id).subscribe(() => {
      this.project = undefined
      this.deleted.emit(true)
    })
  }

  openAnalysisGroupCreateModal() {
    const ref = this.dialog.open(CreateAnalysisGroupDialogComponent)
    ref.componentInstance.project = this.project
    ref.afterClosed().subscribe((data) => {
      if (data) {
        window.open(`/#/analysis-group/${data.id}`, '_blank')
      }
    })
  }

  handlePageChange(e: PageEvent) {
    const offset = e.pageIndex * e.pageSize
    this.currentPage = e.pageIndex
    this.web.getAnalysisGroups(undefined, e.pageSize, offset, undefined, this.project.id).subscribe((data) => {
      this.analysisGroupQuery = data
    })
  }

  changeSpeciesEditableState() {
    this.speciesEditable = !this.speciesEditable
    if (this.speciesEditable) {
      this.form.controls.species.enable()
      this.form.controls.species_name.enable()
    } else {
      this.form.controls.species.disable()
      this.form.controls.species_name.disable()
    }
  }
}
