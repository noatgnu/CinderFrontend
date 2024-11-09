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
  metadataTypeAutocomplete: string[] = ["Characteristic", "Comment", "Factor value", "Material type", "Assay name", "Technology type"]
  metadataNameAutocomplete: string[] = ["Disease", "Tissue", "Subcellular location"]
  metadataCharacteristics: string[] = ["Disease", "Tissue", "Subcellular location", "Cell type", "Cell line", "Developmental stage", "Ancestry category", "Sex", "Age", "Biological replicate"]
  metadataComment: string[] = ["Data file", "File uri", "Technical replicate", "Fraction identifier", "Label", "Cleavage agent details", "Instrument", "Modification parameters", "Dissociation method", "Precursor mass tolerance", "Fragment mass tolerance", ""]

  form = this.fb.group({
    metadataType: "Characteristic",
    metadataName: "Tissue",
    metadataValue: ""
  })

  filteredResults: Observable<SubcellularLocation[] | HumanDisease[] | Tissue[]> = of([])
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
        if (this.form.controls.metadataName.value?.toLowerCase() === "subcellular location") {
          return this.web.getSubcellularLocations(undefined, 5, 0, value).pipe(
            map((response) => response.results)
          )
        } else if (this.form.controls.metadataName.value?.toLowerCase() === "disease") {
          return this.web.getHumandDiseases(undefined, 5, 0, value).pipe(
            map((response) => response.results)
          )
        } else if (this.form.controls.metadataName.value?.toLowerCase() === "tissue") {
          return this.web.getTissues(undefined, 5, 0, value).pipe(
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

  displayData(data: SubcellularLocation | HumanDisease | Tissue) {
    console.log(data)
    if (data) {
      if ("identifier" in data) {
        return data.identifier
      } else {
        return data.location_identifier
      }
    }
    return ""
  }

}
