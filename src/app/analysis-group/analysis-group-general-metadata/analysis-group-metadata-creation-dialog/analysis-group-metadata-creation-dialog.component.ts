import {Component, Input, OnInit} from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {AsyncPipe} from "@angular/common";
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger,
  MatOption
} from "@angular/material/autocomplete";
import {filter, map, Observable, of, startWith, switchMap} from "rxjs";
import {SubcellularLocation, SubcellularLocationQuery} from "../../../subcellular-location";
import {HumanDisease, HumanDiseaseQuery} from "../../../human-disease";
import {Tissue, TissueQuery} from "../../../tissue";
import {WebService} from "../../../web.service";
import {MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {Species} from "../../../species";
import {Unimod} from "../../../unimod";
import {MsVocab} from "../../../ms-vocab";
import {MatSelect} from "@angular/material/select";
import {DataService} from "../../../data.service";

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
    MatLabel,
    MatSelect,
    MatHint
  ],
  templateUrl: './analysis-group-metadata-creation-dialog.component.html',
  styleUrl: './analysis-group-metadata-creation-dialog.component.scss'
})
export class AnalysisGroupMetadataCreationDialogComponent implements OnInit{
  metadataTypeAutocomplete: string[] = ["Characteristics", "Comment", "Factor value", "Material type", "Assay name", "Technology type"]
  metadataNameAutocomplete: string[] = ["Disease", "Tissue", "Subcellular location", "Organism", "Instrument", "Label", "Cleavage agent details", "Dissociation method", "Modification parameters", "Cell type", "Enrichment process"]
  metadataCharacteristics: string[] = ["Disease", "Tissue", "Subcellular location", "Organism", "Cell type", "Cell line", "Developmental stage", "Ancestry category", "Sex", "Age", "Biological replicate", "Enrichment process"]
  metadataComment: string[] = ["Data file", "File uri", "Technical replicate", "Fraction identifier", "Label", "Cleavage agent details", "Instrument", "Modification parameters", "Dissociation method", "Precursor mass tolerance", "Fragment mass tolerance", ""]

  form = this.fb.group({
    metadataType: "Characteristics",
    metadataName: "Tissue",
    metadataValue: "",
    metadataMT: "Fixed",
    metadataPP: "Anywhere",
    metadataTA: "",
    metadataTS: "",
    metadataMM: 0,
  })

  availableSpecs: any[] = []

  filteredResults: Observable<SubcellularLocation[] | HumanDisease[] | Tissue[] | Species[] | Unimod[] | MsVocab[]> = of([])
  @Input() readonlyType: boolean = false
  @Input() readonlyName: boolean = false
  @Input() set metadataType(value: string) {
    this.form.controls.metadataType.setValue(value)
  }
  @Input() set metadataName(value: string) {
    this.form.controls.metadataName.setValue(value)
  }

  selectedData: Unimod|undefined = undefined

  optionsArray: Unimod[] = []


  constructor(private dialog: MatDialogRef<AnalysisGroupMetadataCreationDialogComponent>, private fb: FormBuilder, private web: WebService, public data: DataService) {
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
        } else if (["cleavage agent details", "instrument", "dissociation method", "enrichment process"].includes(name)) {
          return this.web.getMSVocab(undefined, 5, 0, value, name).pipe(
            map((response) => response.results)
          )
        } else if (name === "label") {
          return this.web.getMSVocab(undefined, 5, 0, value, "sample attribute").pipe(
            map((response) => response.results)
          )
        } else if (name === "cell type") {
          return this.web.getMSVocab(undefined, 5, 0, value, "cell line").pipe(
            map((response) => response.results)
          )
        }  else if (name === "modification parameters") {
          return this.web.getUnimod(undefined, 5, 0, value).pipe(
            map((response) => {
              this.optionsArray = response.results
              return response.results
            })
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

  getSelectedData(data: MatAutocompleteSelectedEvent) {
    if (this.form.controls.metadataName.value) {
      if (this.form.controls.metadataName.value.toLowerCase() === "modification parameters") {
        this.selectedData = this.optionsArray.find((option) => option.name === data.option.value)
        if (this.selectedData) {
          const mapData: any = {}

          for (const a of this.selectedData.additional_data) {
            console.log(a)
            if (a["id"] === "delta_mono_mass") {
              this.form.controls.metadataMM.setValue(parseFloat(a["description"]))
            }
            if (a["id"].startsWith("spec_")) {
              const nameSplitted = a["id"].split("_")
              const name = `spec_${nameSplitted[1]}`
              if (!mapData[name]) {
                mapData[name] = {name: name}
              }
              if (a["id"].endsWith("position")) {
                mapData[name]["position"] = a["description"]
              } else if (a["id"].endsWith("site")) {
                mapData[name]["aa"] = a["description"]
              } else if (a["id"].endsWith("classification")) {
                mapData[name]["classification"] = a["description"]
              } else if (a["id"].endsWith("mono_mass")) {
                const mm = parseFloat(a["description"])
                if (mm > 0) {
                  mapData[name]["mono_mass"] = mm
                }

              }
            }
          }
          console.log(mapData)
          this.availableSpecs = Object.values(mapData)
        }

      }
    }
  }

  selectSpec(spec: any) {
    if (spec.position) {
      this.form.controls.metadataPP.setValue(spec.position)
    }
    if (spec.aa) {
      this.form.controls.metadataTA.setValue(spec.aa)
    }
    if (spec.mono_mass) {
      this.form.controls.metadataMM.setValue(spec.mono_mass)
    }

  }
}
