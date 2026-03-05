import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {FormBuilder, FormControl, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {MatButton} from "@angular/material/button";
import {MatAutocomplete, MatAutocompleteTrigger} from "@angular/material/autocomplete";
import {AsyncPipe} from "@angular/common";
import {BehaviorSubject, debounceTime, of, Subject, switchMap, takeUntil} from "rxjs";
import {Species} from "../../../species";
import {WebService} from "../../../web.service";

@Component({
  selector: 'app-string-db-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
export class StringDbDialogComponent implements OnDestroy {
  private destroy$ = new Subject<void>();

  form = this.fb.group({
    organism: new FormControl<string | Species>(""),
    score: [400],
    networkType: ["functional"],
    addNodes: [0]
  });
  filteredSpecies$ = new BehaviorSubject<Species[]>([]);

  constructor(
    private dialogRef: MatDialogRef<StringDbDialogComponent>,
    private fb: FormBuilder,
    private webService: WebService,
    private cdr: ChangeDetectorRef
  ) {
    this.form.controls.organism.valueChanges.pipe(
      takeUntil(this.destroy$),
      debounceTime(300),
      switchMap(value => {
        if (value && typeof value === 'string') {
          return this.webService.getSpecies(undefined, 5, 0, value);
        } else {
          return of({results: []});
        }
      })
    ).subscribe(species => {
      if (species.results) {
        this.filteredSpecies$.next(species.results);
        this.cdr.markForCheck();
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  displayFn(species: Species): string {
    return species ? `${species.official_name} (${species.code})` : '';
  }

  selectOrganism(species: Species) {
    this.form.controls.organism.setValue(species);
  }

  close() {
    this.dialogRef.close()
  }

  submit() {
    this.dialogRef.close(this.form.value)
  }

}
