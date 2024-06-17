import { Component } from '@angular/core';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {Project, ProjectQuery} from "../../project/project";
import {AnalysisGroupQuery} from "../../analysis-group/analysis-group";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {WebService} from "../../web.service";
import {MatListOption, MatSelectionList} from "@angular/material/list";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-analysis-search',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatSelectionList,
    MatListOption,
    MatPaginator,
    MatLabel,
    MatFormField,
    MatInput
  ],
  templateUrl: './analysis-search.component.html',
  styleUrl: './analysis-search.component.scss'
})
export class AnalysisSearchComponent {
  formAnalysisGroupSearch = this.fb.group({
    searchTerm: new FormControl<string>("", Validators.required),
    selectedAnalysisGroup: new FormControl<Project[]|null>([])
  })

  analysisGroupPageSize = 5
  analysisGroupPageIndex = 0
  analysisGroupQuery: AnalysisGroupQuery|undefined = undefined
  constructor(private fb: FormBuilder, private web: WebService) {
    this.formAnalysisGroupSearch.controls.searchTerm.valueChanges.subscribe((value: string|null) => {
      if (value) {
        this.web.getAnalysisGroups(undefined, this.analysisGroupPageSize, 0, value).subscribe((data) => {
          this.analysisGroupQuery = data
        })
      }
    })
    this.web.getAnalysisGroups(undefined, this.analysisGroupPageSize, 0).subscribe((data) => {
      this.analysisGroupQuery = data
    })
  }

  handlePageEvent(event: PageEvent) {
    const offset = event.pageIndex * event.pageSize
    this.analysisGroupPageIndex = event.pageIndex
    // @ts-ignore
    this.web.getAnalysisGroups(undefined, this.analysisGroupPageSize, offset, this.formAnalysisGroupSearch.value.searchTerm).subscribe((data) => {
      this.analysisGroupQuery = data
    })
  }
}
