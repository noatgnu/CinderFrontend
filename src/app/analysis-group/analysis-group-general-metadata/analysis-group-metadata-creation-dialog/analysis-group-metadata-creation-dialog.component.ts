import {Component, Input, OnInit} from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {AsyncPipe} from "@angular/common";
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from "@angular/material/autocomplete";
import {filter, map, Observable, of, startWith, switchMap} from "rxjs";
import {SubcellularLocation, SubcellularLocationQuery} from "../../../subcellular-location";
import {HumanDisease, HumanDiseaseQuery} from "../../../human-disease";
import {Tissue, TissueQuery} from "../../../tissue";
import {WebService} from "../../../web.service";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {Species} from "../../../species";
import {Unimod} from "../../../unimod";
import {MsVocab} from "../../../ms-vocab";

@Component({
  selector: 'app-analysis-group-metadata-creation-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    ReactiveFormsModule,
    AsyncPipe,
    MatAutocomplete,
    MatOption,
    MatFormField,
    MatInput,
    MatAutocompleteTrigger,
    MatButton,
    MatDialogActions,
    MatLabel
  ],
  templateUrl: './analysis-group-metadata-creation-dialog.component.html',
  styleUrl: './analysis-group-metadata-creation-dialog.component.scss'
})
export class AnalysisGroupMetadataCreationDialogComponent implements OnInit{
  metadataTypeAutocomplete: string[] = ["Characteristics", "Comment", "Factor value", "Material type", "Assay name", "Technology type"]
  metadataNameAutocomplete: string[] = ["Disease", "Tissue", "Subcellular location", "Organism", "Instrument", "Label", "Cleavage agent details", "Dissociation method", "Modification parameters"]
  metadataCharacteristics: string[] = ["Disease", "Tissue", "Subcellular location", "Organism", "Cell type", "Cell line", "Developmental stage", "Ancestry category", "Sex", "Age", "Biological replicate"]
  metadataComment: string[] = ["Data file", "File uri", "Technical replicate", "Fraction identifier", "Label", "Cleavage agent details", "Instrument", "Modification parameters", "Dissociation method", "Precursor mass tolerance", "Fragment mass tolerance", ""]

  form = this.fb.group({
    metadataType: "Characteristics",
    metadataName: "Tissue",
    metadataValue: ""
  })

  filteredResults: Observable<SubcellularLocation[] | HumanDisease[] | Tissue[] | Species[] | Unimod[] | MsVocab[]> = of([])
  @Input() readonlyType: boolean = false
  @Input() readonlyName: boolean = false
  @Input() set metadataType(value: string) {
    this.form.controls.metadataType.setValue(value)
  }
  @Input() set metadataName(value: string) {
    this.form.controls.metadataName.setValue(value)
  }
  constructor(private dialog: MatDialogRef<AnalysisGroupMetadataCreationDialogComponent>, private fb: FormBuilder, private web: WebService) {
  }

  ngOnInit() {
    this.filteredResults = this.form.controls.metadataValue.valueChanges.pipe(
      startWith(''),
      filter(value => {
        if (value) {
          return value.length >= 2;
        }
        return false;
      }),
      switchMap(value => {
        if (!value) {
          return of([])
        }
        if (!this.form.controls.metadataName.value) {
          return of([])
        }
        const name = this.form.controls.metadataName.value.toLowerCase()

        if (name === "subcellular location") {
          return this.web.getSubcellularLocations(undefined, 5, 0, value).pipe(
            map((response) => response.results)
          )
        } else if (name === "disease") {
          return this.web.getHumandDiseases(undefined, 5, 0, value).pipe(
            map((response) => response.results)
          )
        } else if (name === "tissue") {
          return this.web.getTissues(undefined, 5, 0, value).pipe(
            map((response) => response.results)
          )
        } else if (name === "organism") {
          return this.web.getSpecies(undefined, 5, 0, value).pipe(
            map((response) => response.results)
          )
        } else if (["cleavage agent details", "instrument", "dissociation method"].includes(name)) {
          return this.web.getMSVocab(undefined, 5, 0, value, name).pipe(
            map((response) => response.results)
          )
        } else if (name === "label") {
          return this.web.getMSVocab(undefined, 5, 0, value, "sample attribute").pipe(
            map((response) => response.results)
          )
        } else if (name === "modification parameters") {
          return this.web.getUnimod(undefined, 5, 0, value).pipe(
            map((response) => response.results)
          )
        } else {
          return of([])
        }
      })
    )

  }

  close() {
    this.dialog.close()
  }

  submit() {
    this.dialog.close(this.form.value)
  }

  displayData(data: SubcellularLocation | HumanDisease | Tissue | Species | Unimod | MsVocab): string {
    if (data) {
      if ("identifier" in data) {
        return data.identifier
      } else if ("official_name" in data){
        return data.official_name
      } else if ("location_identifier" in data) {
        return data.location_identifier
      } else if ("name" in data) {
        return data.name
      }
    }
    return ""
  }

}
