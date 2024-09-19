import {Component, OnInit} from '@angular/core';
import {MatListOption, MatSelectionList, MatSelectionListChange} from "@angular/material/list";
import {Collate, CollateQuery} from "../collate";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {CollateService} from "../collate.service";
import {MatDialog} from "@angular/material/dialog";
import {CreateCollateDialogComponent} from "../create-collate-dialog/create-collate-dialog.component";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {FormBuilder, FormControl, ReactiveFormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-collate-search-main',
  standalone: true,
  imports: [
    MatListOption,
    MatSelectionList,
    MatPaginator,
    MatFormField,
    ReactiveFormsModule,
    MatInput,
    MatLabel
  ],
  templateUrl: './collate-search-main.component.html',
  styleUrl: './collate-search-main.component.scss'
})
export class CollateSearchMainComponent implements OnInit {
  collates: Collate[] = [];
  selectedCollate: Collate | null = null;
  limit: number = 5;
  offset: number = 0;
  totalCount: number = 0;
  loading: boolean = false;

  form = this.fb.group({
    query: [''],
    selected: new FormControl<Collate[] | null>(null)
  })


  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private router: Router, private collateService: CollateService, private dialog: MatDialog) {
    this.form.controls.selected.valueChanges.subscribe((value: Collate[]|null) => {
      if (value) {

        this.router.navigate([`/collate/view/${value[0].id}`]).then();
      }
    })
  }

  ngOnInit() {
    this.searchCollates();
  }

  searchCollates() {
    this.loading = true;
    this.collateService.getCollates(this.limit, this.offset, '', []).subscribe({
      next: (data: CollateQuery) => {
        this.collates = data.results;
        this.totalCount = data.count;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.snackBar.open('Error loading collates', 'Dismiss');
      }
    });
  }

  onSearchResults(data: CollateQuery) {
    this.collates = data.results;
    this.totalCount = data.count;
  }

  onCollateSelect(event: MatSelectionListChange) {
    this.selectedCollate = event.options[0].value;
    }




  handlePageEvent(event: PageEvent) {
    this.limit = event.pageSize;
    this.offset = event.pageIndex * this.limit;
    this.searchCollates();
  }
}
