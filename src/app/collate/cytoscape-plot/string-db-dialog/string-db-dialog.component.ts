import { Component } from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {MatButton} from "@angular/material/button";
import {MatAutocomplete, MatAutocompleteTrigger} from "@angular/material/autocomplete";
import {AsyncPipe} from "@angular/common";
import {BehaviorSubject, debounceTime, of, switchMap} from "rxjs";
import {Species} from "../../../species";
import {WebService} from "../../../web.service";

@Component({
  selector: 'app-string-db-dialog',
  imports: [
    MatLabel,
    MatInput,
    MatFormField,
    ReactiveFormsModule,
    MatDialogContent,
    MatDialogTitle,
    MatOption,
    MatSelect,
    MatDialogActions,
    MatButton,
    MatAutocomplete,
    MatAutocompleteTrigger,
    AsyncPipe
  ],
  templateUrl: './string-db-dialog.component.html',
  styleUrl: './string-db-dialog.component.scss'
})
export class StringDbDialogComponent {
  form = this.fb.group({
    organism: [""],
    score: [400],
    networkType: ["functional"],
    addNodes: [0]
  })
  filteredSpecies$ = new BehaviorSubject<Species[]>([]);

  constructor(
    private dialogRef: MatDialogRef<StringDbDialogComponent>,
    private fb: FormBuilder,
    private webService: WebService
  ) {
    this.form.controls.organism.valueChanges.pipe(
      debounceTime(300),
      switchMap(value => {
        if (typeof value === 'string') {
          return this.webService.getSpecies(value)
        } else {
          return of({results: []})
        }
      }
      )
    ).subscribe(species =>
    {
      if (species.results) {
        this.filteredSpecies$.next(species.results)
      }
    }
    );
  }

  displayFn(species: Species): string {
    return species ? `${species.official_name} (${species.code})` : '';
  }

  selectOrganism(species: Species) {
    this.form.controls.organism.setValue(species.code.toString());
  }

  close() {
    this.dialogRef.close()
  }

  submit() {
    this.dialogRef.close(this.form.value)
  }

}
