import {Component, OnInit} from '@angular/core';
import {Collate, CollateQuery, CollateTag} from "./collate";
import {CollateService} from "./collate.service";
import {MatDialog} from "@angular/material/dialog";
import {MatListOption, MatSelectionList, MatSelectionListChange} from "@angular/material/list";
import {CreateCollateDialogComponent} from "./create-collate-dialog/create-collate-dialog.component";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {Router} from "@angular/router";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatIcon} from "@angular/material/icon";
import {MatChip, MatChipGrid, MatChipInput, MatChipRemove, MatChipRow} from "@angular/material/chips";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger,
  MatOption
} from "@angular/material/autocomplete";
import {filter, map, Observable, startWith, switchMap} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-collate',
  standalone: true,
  imports: [
    MatFormField,
    FormsModule,
    MatInput,
    MatSelectionList,
    MatListOption,
    MatLabel,
    MatCardContent,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatButton,
    MatPaginator,
    MatIcon,
    MatChipRemove,
    MatChip,
    MatChipInput,
    MatChipGrid,
    MatChipRow,
    MatOption,
    MatAutocomplete,
    AsyncPipe,
    ReactiveFormsModule,
    MatAutocompleteTrigger,
    MatProgressSpinner
  ],
  templateUrl: './collate.component.html',
  styleUrl: './collate.component.scss'
})
export class CollateComponent implements OnInit{
  collates: Collate[] = [];
  searchTags: CollateTag[] = [];
  selectedCollate: Collate | null = null;
  searchTerm: string = '';
  limit: number = 5;
  offset: number = 0;
  totalCount: number = 0;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  form = this.fb.group({
    tag: ["",],
  });
  filteredTags!: Observable<CollateTag[]>;
  loading: boolean = false;

  constructor(private snackBar: MatSnackBar, private fb: FormBuilder, private router: Router, private collateService: CollateService, private dialog: MatDialog) {}

  ngOnInit() {
    this.searchCollates();
    this.filteredTags = this.form.controls.tag.valueChanges.pipe(
      startWith(''),
      filter(value => {
        if (value) {
          return value.length >= 2;
        }
        return false;
      }),
      switchMap(value => this.collateService.getCollateTags(value).pipe(
        map(response => response.results)
      ))
    );
  }

  searchCollates() {
    this.loading = true;
    this.collateService.getCollates(this.limit, this.offset, this.searchTerm, this.searchTags.map((s) => s.id)).subscribe({
      next: (data: CollateQuery) => {
        this.collates = data.results;
        this.totalCount = data.count;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.snackBar.open('Error loading collates', 'Dismiss')
      }
    });
  }

  onCollateSelect(event: MatSelectionListChange) {
    this.selectedCollate = event.options[0].value;
    this.router.navigate([`/collate/view/${event.options[0].value.id}`]).then(r => console.log(r));
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

  handlePageEvent(event: PageEvent) {
    this.limit = event.pageSize;
    this.offset = event.pageIndex * this.limit;
    this.searchCollates();
  }

  addTag(event: MatAutocompleteSelectedEvent): void {
    const selectedTag = event.option.value;
    if (selectedTag && !this.searchTags.find(tag => tag.id === selectedTag.id)) {
      this.searchTags.push(selectedTag);
    }
    this.form.controls.tag.setValue('');
    this.searchCollates();
  }

  removeTag(tag: CollateTag): void {
    const index = this.searchTags.indexOf(tag);
    if (index >= 0) {
      this.searchTags.splice(index, 1);
    }
    this.searchCollates();
  }
}
