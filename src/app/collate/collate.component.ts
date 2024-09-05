import {Component, OnInit} from '@angular/core';
import {Collate, CollateQuery} from "./collate";
import {CollateService} from "./collate.service";
import {MatDialog} from "@angular/material/dialog";
import {MatListOption, MatSelectionList, MatSelectionListChange} from "@angular/material/list";
import {CreateCollateDialogComponent} from "./create-collate-dialog/create-collate-dialog.component";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {Router} from "@angular/router";
import {MatPaginator, PageEvent} from "@angular/material/paginator";

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
    MatPaginator
  ],
  templateUrl: './collate.component.html',
  styleUrl: './collate.component.scss'
})
export class CollateComponent implements OnInit{
  collates: Collate[] = [];
  selectedCollate: Collate | null = null;
  searchTerm: string = '';
  limit: number = 10;
  offset: number = 0;
  totalCount: number = 0;

  constructor(private router: Router, private collateService: CollateService, private dialog: MatDialog) {}

  ngOnInit() {
    this.searchCollates();
  }

  searchCollates() {
    this.collateService.getCollates(this.limit, this.offset, this.searchTerm).subscribe((data: CollateQuery) => {
      this.collates = data.results;
      this.totalCount = data.count;
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
}
