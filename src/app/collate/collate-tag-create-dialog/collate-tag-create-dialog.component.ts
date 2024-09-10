import {Component, OnInit} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {map, Observable, startWith, switchMap} from "rxjs";
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger,
  MatOption
} from "@angular/material/autocomplete";
import {CollateService} from "../collate.service";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-collate-tag-create-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    ReactiveFormsModule,
    MatLabel,
    MatInput,
    MatFormField,
    MatButton,
    MatDialogActions,
    MatOption,
    AsyncPipe,
    MatAutocomplete,
    MatAutocompleteTrigger
  ],
  templateUrl: './collate-tag-create-dialog.component.html',
  styleUrl: './collate-tag-create-dialog.component.scss'
})
export class CollateTagCreateDialogComponent implements OnInit{

  form = this.fb.group({
    name: ["", Validators.required],
    existing: [false],
    id: [-1]
  })

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.tags.filter(tag => tag.toLowerCase().includes(filterValue));
  }

  tags: string[] = [];

  filteredTags!: Observable<string[]>;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<CollateTagCreateDialogComponent>, private collateService: CollateService) {

  }

  ngOnInit() {
    this.filteredTags = this.form.controls.name.valueChanges.pipe(
      startWith(''),
      switchMap(value => this.collateService.getCollateTags(value).pipe(
        map(response => response.results.map(tag => tag.name))
      ))
    );
  }

  submit() {
    const tagName = this.form.controls.name.value;
    this.collateService.getCollateTags(tagName).subscribe(response => {
      // @ts-ignore
      const existingTag = response.results.find(tag => tag.name.toLowerCase() === tagName.toLowerCase());
      const tagExists = !!existingTag;
      this.form.controls.existing.setValue(tagExists);
      this.form.controls.id.setValue(tagExists ? existingTag.id : null);
      this.dialogRef.close(this.form.value);
    });
  }

  cancel() {
    this.dialogRef.close()
  }

  onTagSelected(event: MatAutocompleteSelectedEvent) {
    const selectedTag = event.option.value;
    this.form.controls.name.setValue(selectedTag);
    this.collateService.getCollateTags(selectedTag).subscribe(response => {
      const existingTag = response.results.find(tag => tag.name.toLowerCase() === selectedTag.toLowerCase());
      this.form.controls.existing.setValue(!!existingTag);
      this.form.controls.id.setValue(existingTag ? existingTag.id : null);
    });
  }

}
