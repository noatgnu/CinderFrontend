import {Component, Input} from '@angular/core';
import {SearchResult} from "../../search-session";
import {FormBuilder} from "@angular/forms";
import {WebService} from "../../web.service";
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {SampleAnnotation} from "../../sample-annotation";
import {ComparisonMatrix} from "../../comparison-matrix";
import {AnalysisGroup} from "../../analysis-group/analysis-group";
import {ProjectFile} from "../../project-file";
import {MatTable} from "@angular/material/table";
import {MatList, MatListItem, MatListItemLine, MatListItemTitle} from "@angular/material/list";

@Component({
  selector: 'app-selected-result-view',
  standalone: true,
  imports: [
    MatToolbar,
    MatToolbarRow,
    MatTable,
    MatList,
    MatListItem,
    MatListItemTitle,
    MatListItemLine
  ],
  templateUrl: './selected-result-view.component.html',
  styleUrl: './selected-result-view.component.scss'
})
export class SelectedResultViewComponent {
  private _searchResult: SearchResult|undefined = undefined
  @Input() set searchResult(value: SearchResult) {
    this._searchResult = value
    console.log(value.search_results)
    this.web.getSearchResultRelated(value.id).subscribe((data) => {
      this.relatedResult = data[0]
    })
    this.web.getAnalysisGroup(value.analysis_group.id).subscribe((d) => {
      this.analysisGroup = d
      this.web.getAnalysisGroupFiles(d.id).subscribe((data) => {
        this.analysisGroupDF = data.find((file) => file.file_category === "df")
        this.analysisGroupSearched = data.find((file) => file.file_category === "searched")
        if (this.analysisGroupSearched) {
          this.web.getProjectFileSampleAnnotations(this.analysisGroupSearched.id).subscribe((data) => {
            this.sampleAnnotations = data
          })
          this.web.getProjectFileColumns(this.analysisGroupSearched.id).subscribe((data) => {
            this.analysisGroupSearchedColumns = data
          })
        }
        if (this.analysisGroupDF) {
          this.web.getProjectFileColumns(this.analysisGroupDF.id).subscribe((data) => {
            this.analysisGroupDFColumns = data
            // @ts-ignore
            this.web.getProjectFileComparisonMatrix(this.analysisGroupDF.id).subscribe((data) => {
              this.comparisonMatrix = data
              if (this.searchResult.file.file_category === "df") {
                for (const m of this.comparisonMatrix.matrix) {
                  const foldChangeColumnIndex = this.getCMIndex(m.fold_change_col)
                  const pValueColumnIndex = this.getCMIndex(m.p_value_col)
                  let comparisonColumnIndex = -1
                  let comparisonLabel = m.comparison_label

                  if (m.comparison_col) {
                    comparisonColumnIndex = this.getCMIndex(m.comparison_col)
                  }
                  if (foldChangeColumnIndex !== -1 && pValueColumnIndex !== -1) {
                    for (const row of this.searchResult.search_results) {
                      const line = row.line
                      const foldChange = parseFloat(row.context[foldChangeColumnIndex])
                      const pValue = parseFloat(row.context[pValueColumnIndex])
                      if (comparisonColumnIndex !== -1) {
                        const label = row.context[comparisonColumnIndex]
                        if (label) {
                          this.differentialData.push({line: line, foldChange: foldChange, pValue: pValue, comparisonLabel: `${label}(${comparisonLabel})`, condition_A: m.condition_A, condition_B: m.condition_B})

                          if (label === comparisonLabel) {
                            }
                        }
                      } else {
                        this.differentialData.push({line: line, foldChange: foldChange, pValue: pValue, comparisonLabel: comparisonLabel, condition_A: m.condition_A, condition_B: m.condition_B})
                      }

                    }
                  }
                }
              }

            })
          })


        }
      })
    })

  }

  get searchResult(): SearchResult {
    return this._searchResult!
  }

  relatedResult: SearchResult|undefined = undefined

  analysisGroup: AnalysisGroup|undefined = undefined
  analysisGroupDF: ProjectFile|undefined = undefined
  analysisGroupDFColumns: string[] = []
  analysisGroupSearched: ProjectFile|undefined = undefined
  analysisGroupSearchedColumns: string[] = []
  sampleAnnotations: SampleAnnotation|undefined = undefined
  comparisonMatrix: ComparisonMatrix|undefined = undefined

  differentialData: {line: number, foldChange: number, pValue: number, comparisonLabel: string, condition_A: string, condition_B: string}[] = []

  constructor(private web: WebService, private fb: FormBuilder) {
  }

  getSAIndex(column: string) {
    if (this.analysisGroupSearchedColumns) {
      return this.analysisGroupSearchedColumns.indexOf(column)
    }
    return -1
  }

  getCMIndex(column: string) {
    if (this.analysisGroupDFColumns) {
      return this.analysisGroupDFColumns.indexOf(column)
    }
    return -1
  }


}
