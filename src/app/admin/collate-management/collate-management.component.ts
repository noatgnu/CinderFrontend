import {Component, OnInit} from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {CollateService} from "../../collate/collate.service";
import {WebService} from "../../web.service";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {AsyncPipe} from "@angular/common";
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger,
  MatOption
} from "@angular/material/autocomplete";
import {MatChip, MatChipGrid, MatChipInput, MatChipRemove, MatChipRow, MatChipSet} from "@angular/material/chips";
import {Collate, CollateQuery, CollateTag} from "../../collate/collate";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatSnackBar} from "@angular/material/snack-bar";
import {filter, map, Observable, startWith, switchMap} from "rxjs";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from "@angular/material/table";
import {MatListOption, MatSelectionList, MatSelectionListChange} from "@angular/material/list";
import {Router} from "@angular/router";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatDivider} from "@angular/material/divider";
import {MatDialog} from "@angular/material/dialog";
import {AreYouSureDialogComponent} from "../../are-you-sure-dialog/are-you-sure-dialog.component";

@Component({
    selector: 'app-collate-management',
    imports: [
        ReactiveFormsModule,
        MatLabel,
        MatFormField,
        MatInput,
        MatIcon,
        MatIconButton,
        MatSuffix,
        AsyncPipe,
        MatAutocomplete,
        MatAutocompleteTrigger,
        MatButton,
        MatChipGrid,
        MatChipInput,
        MatChipRemove,
        MatChipRow,
        MatOption,
        MatCell,
        MatCellDef,
        MatColumnDef,
        MatHeaderCell,
        MatHeaderRow,
        MatHeaderRowDef,
        MatRow,
        MatRowDef,
        MatTable,
        MatHeaderCellDef,
        MatChip,
        MatChipSet,
        MatListOption,
        MatPaginator,
        MatSelectionList,
        MatDivider
    ],
    templateUrl: './collate-management.component.html',
    styleUrl: './collate-management.component.scss'
})
export class CollateManagementComponent implements OnInit {
  form = this.fb.group({
    searchTerm: [''],
    tag: ['']
  })

  collates: Collate[] = [];
  limit: number = 10;
  offset: number = 0;
  totalCount: number = 0;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredTags!: Observable<CollateTag[]>;
  displayedColumns: string[] = ['id', 'title', 'tags', 'actions']
  tagDisplayedColumns: string[] = ['id', 'name', 'actions']
  tagLimit: number = 10;
  tagOffset: number = 0;
  searchTagResults: CollateTag[] = [];
  searchTagTotalCount: number = 0;
  formTagManagement = this.fb.group({
    searchTerm: ['']
  })
  searchTags: CollateTag[] = [];

  constructor(private dialog: MatDialog, private router: Router, private fb: FormBuilder, private collateService: CollateService, private web: WebService, private snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.searchCollates();
    this.fetchTags();
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
    this.collateService.getCollates(this.limit, this.offset, this.form.value.searchTerm, this.searchTags.map((s) => s.id)).subscribe({
      next: (data: CollateQuery) => {
        this.collates = data.results;
        this.totalCount = data.count;
      },
      error: () => {
        this.snackBar.open('Error loading collates', 'Dismiss')
      }
    });
  }

  fetchTags() {
    this.collateService.getCollateTags(this.formTagManagement.value.searchTerm, this.tagLimit, this.tagOffset).subscribe((data)=> {
      this.searchTagResults = data.results;
      this.searchTagTotalCount = data.count;
    })
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

  editCollate(collate: Collate) {
    this.router.navigate([`/collate/edit/${collate.id}`]).then(r => console.log(r));
  }

  deleteCollate(collate: Collate) {
    this.dialog.open(AreYouSureDialogComponent).afterClosed().subscribe((result) => {
      if (!result) {
        return;
      }
      this.collateService.deleteCollate(collate.id).subscribe({
        next: () => {
          this.snackBar.open('Collate deleted', 'Dismiss');
          this.searchCollates();
        },
        error: () => {
          this.snackBar.open('Error deleting collate', 'Dismiss');
        }
      });
    })
  }

  handlePageEvent(event: PageEvent) {
    this.limit = event.pageSize;
    this.offset = event.pageIndex * this.limit;
    this.searchCollates();
  }

  deleteTag(tag: CollateTag) {
    this.dialog.open(AreYouSureDialogComponent).afterClosed().subscribe((result) => {
      if (!result) {
        return;
      }
      this.collateService.deleteCollateTag(tag.id).subscribe({
        next: () => {
          this.snackBar.open('Tag deleted', 'Dismiss');
          this.fetchTags();
        },
        error: () => {
          this.snackBar.open('Error deleting tag', 'Dismiss');
        }
      });
    })
  }

  handleTagPageEvent(event: PageEvent) {
    this.tagLimit = event.pageSize;
    this.tagOffset = event.pageIndex * this.tagLimit;
    this.fetchTags();
  }
}
