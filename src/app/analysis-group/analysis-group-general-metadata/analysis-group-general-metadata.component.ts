import {Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {MetadataColumn, SDRF} from "../metadata-column";
import {WebService} from "../../web.service";
import {MatButton, MatIconButton} from "@angular/material/button";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from "@angular/material/table";
import {MatChip, MatChipSet} from "@angular/material/chips";
import {MatIcon} from "@angular/material/icon";
import {MatDialog} from "@angular/material/dialog";
import {
  AnalysisGroupMetadataCreationDialogComponent
} from "./analysis-group-metadata-creation-dialog/analysis-group-metadata-creation-dialog.component";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatInput, MatSuffix} from "@angular/material/input";
import {MatHint, MatLabel} from "@angular/material/form-field";
import {AsyncPipe} from "@angular/common";
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from "@angular/material/autocomplete";
import {filter, map, Observable, of, startWith, switchMap} from "rxjs";
import {SubcellularLocation} from "../../subcellular-location";
import {HumanDisease} from "../../human-disease";
import {Tissue} from "../../tissue";
import {MatTooltip} from "@angular/material/tooltip";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {AnalysisGroupSampleFileComponent} from "./analysis-group-sample-file/analysis-group-sample-file.component";
import {SourceFile} from "../source-file";
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelDescription, MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import {AreYouSureDialogComponent} from "../../are-you-sure-dialog/are-you-sure-dialog.component";
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {CdkDrag, CdkDragDrop, CdkDragHandle, CdkDropList, moveItemInArray} from "@angular/cdk/drag-drop";
import {Species} from "../../species";
import {WebsocketService} from "../../websocket.service";
import {MsVocab} from "../../ms-vocab";
import {MatCheckbox} from "@angular/material/checkbox";
import {DataService} from "../../data.service";
import {
  AnalysisGroupSdrfValidationDialogComponent
} from "./analysis-group-sdrf-validation-dialog/analysis-group-sdrf-validation-dialog.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatProgressBar} from "@angular/material/progress-bar";
import {
  AnalysisGroupMetadataImportComponent
} from "./analysis-group-metadata-import/analysis-group-metadata-import.component";
import {AnalysisGroup} from "../analysis-group";
import {MatPaginator, PageEvent} from "@angular/material/paginator";

@Component({
    selector: 'app-analysis-group-general-metadata',
    imports: [
        MatButton,
        MatCell,
        MatCellDef,
        MatChip,
        MatChipSet,
        MatColumnDef,
        MatHeaderCell,
        MatHeaderRow,
        MatHeaderRowDef,
        MatIcon,
        MatIconButton,
        MatRow,
        MatRowDef,
        MatTable,
        MatHeaderCellDef,
        FormsModule,
        MatInput,
        MatFormField,
        MatLabel,
        AsyncPipe,
        MatAutocomplete,
        MatOption,
        MatAutocompleteTrigger,
        MatTooltip,
        MatMenu,
        MatMenuItem,
        MatMenuTrigger,
        MatAccordion,
        MatExpansionPanel,
        MatExpansionPanelTitle,
        MatExpansionPanelDescription,
        MatExpansionPanelHeader,
        MatCard,
        MatCardHeader,
        MatCardContent,
        MatHint,
        ReactiveFormsModule,
        MatSuffix,
        CdkDropList,
        CdkDrag,
        CdkDragHandle,
        MatCheckbox,
        MatProgressBar,
        AnalysisGroupMetadataImportComponent,
        MatPaginator
    ],
    templateUrl: './analysis-group-general-metadata.component.html',
    styleUrl: './analysis-group-general-metadata.component.scss'
})
export class AnalysisGroupGeneralMetadataComponent implements OnInit {
  @ViewChildren(MatExpansionPanel) expansionPanels!: QueryList<MatExpansionPanel>;
  @ViewChild("metaColAccordion") metaColAccordion!: MatAccordion
  sdrfValidating: boolean = false

  sdrfImportingProgress: number = 0
  sdrfImportingText: string = ""
  sdrfImporting: boolean = false
  displayedColumns: string[] = ["metadataType", "metadataName", "metadataValue"]
  @Input() analysis_group_id: number = 0
  private _metadata: MetadataColumn[] = []
  @Input() set metadata(value: MetadataColumn[]) {
    this._metadata = value.filter((m) => !m.source_file)
    for (const m of this._metadata) {
      this.metadataFormMap[m.id] = this.fb.group({
        value: [m.value],
        name: [m.name],
        type: [m.type]
      })
      this.metadataFormMap[m.id].valueChanges.subscribe((data) => {
        if (data.value) {
          this.updateValueField(m, data.value)
        }
      })
    }
  }

  metadataFormMap: {[key: string]: FormGroup} = {}
  sourcefileFormMap: {[key: string]: FormGroup} = {}
  export_job_id: string = ""
  get metadata(): MetadataColumn[] {
    return this._metadata
  }
  private _sourceFiles: SourceFile[] = []
  @Input() set sourceFiles(value: SourceFile[]) {
    this._sourceFiles = value
    this.sourceFileMap = {}
    for (const s of value) {
      this.sourceFileMap[s.id] = s
      this.sourcefileFormMap[s.id] = this.fb.group({
        name: [s.name],
        description: [s.description]
      })
      for (const m of s.metadata_columns) {
        this.metadataFormMap[m.id] = this.fb.group({
          value: [m.value],
          name: [m.name],
          type: [m.type],
          not_applicable: [m.not_applicable]
        })
        if (m.not_applicable) {
          this.metadataFormMap[m.id].controls["value"].disable()
        } else {
          this.metadataFormMap[m.id].controls["value"].enable()
        }
        this.metadataFormMap[m.id].controls["value"].valueChanges.subscribe((data: string) => {
          this.updateValueField(m, data)
        })
      }
    }
  }

  get sourceFiles(): SourceFile[] {
    return this._sourceFiles
  }

  @Output() metadataChange = new EventEmitter<MetadataColumn[]>()
  @Output() metadataDeleted = new EventEmitter<MetadataColumn>()
  @Output() sourceFilesChanged = new EventEmitter<SourceFile[]>()
  @Output() sourceFileMetadataDeleted = new EventEmitter<MetadataColumn>()
  @Output() reorderMetadataSourceFiles = new EventEmitter<MetadataColumn[]>()
  @Output() metadataImported = new EventEmitter<AnalysisGroup>()
  markedForDeletion: MetadataColumn[] = []

  @Input() canEdit: boolean = false
  autoCompleteMap: {[key: string]: Observable<SubcellularLocation[] | HumanDisease[] | Tissue[] | Species[] | MsVocab[]>} = {}
  sourceFileMap: {[key: string]: SourceFile} = {}
  
  // Pagination properties
  pageSize: number = 10
  pageIndex: number = 0
  pageSizeOptions: number[] = [5, 10, 25, 50]
  constructor(private sb: MatSnackBar, private web: WebService, private dialog: MatDialog, private fb: FormBuilder, private ws: WebsocketService, public data: DataService) {

    this.ws.curtainWSConnection?.subscribe((data) => {
      if (data.analysis_group_id === this.analysis_group_id) {
        if (data.type === "export_sdrf_status") {
          if (data.status === "complete") {
            if ("job_id" in data && "file" in data) {
              if (data.job_id === this.export_job_id) {
                console.log(data)
                window.open(`${this.web.baseURL}/api/search/download_temp_file/?token=${data.file}`)
              }
            }
          }
        } else if (data.type === "sdrf_validation") {
          this.sdrfValidating = false
          if (data.status === "error") {
            const ref = this.dialog.open(AnalysisGroupSdrfValidationDialogComponent)
            if ("errors" in data) {
              ref.componentInstance.errors = data.errors as string[]
            }
          }
        } else if (data.type === "sdrf_import") {
          if (data.status === "in_progress") {
            if ("progress" in data) {
              this.sdrfImporting = true
              const percentage = data["progress"] as number
              if (percentage > this.sdrfImportingProgress) {
                this.sdrfImportingProgress = percentage
                this.sdrfImportingText = `Importing data ${percentage.toFixed(2)}%`
              }
            }
          } else if (data.status === "complete") {
            if (this.sourceFiles.length > 0) {
              this.sdrfImportingProgress = 50
              this.sdrfImportingText = "Retrieving updated Data."

              this.sb.open("Retrieving updated Data.", "Dismiss", {duration: 5000})
              this.web.getAnalysisGroup(this.analysis_group_id).subscribe((data) => {
                this.sb.open("Data imported", "Dismiss", {duration: 5000})
                this.sdrfImporting = false
                this.sdrfImportingProgress = 0
                this.sdrfImportingText = ""
                this.handleImportedData(data)
              })
            }

          }
        }
      }
    })
  }

  updateValueField(metadata: MetadataColumn, data: string) {
    if (!this.autoCompleteMap[metadata.id]) {
      this.autoCompleteMap[metadata.id] = of([])
    }
    if (data) {
      if (data.length < 2) {
        this.autoCompleteMap[metadata.id] = of([])
        return
      }
    } else {
      this.autoCompleteMap[metadata.id] = of([])
      return
    }

    const name = metadata.name.toLowerCase()

    if (name === "subcellular location") {
      this.autoCompleteMap[metadata.id] = this.web.getSubcellularLocations(undefined, 5, 0, data).pipe(
        map((response) => response.results)
      )
    } else if (name === "disease") {
      this.autoCompleteMap[metadata.id] = this.web.getHumandDiseases(undefined, 5, 0, data).pipe(
        map((response) => response.results)
      )
    } else if (name === "tissue") {
      this.autoCompleteMap[metadata.id] = this.web.getTissues(undefined, 5, 0, data).pipe(
        map((response) => response.results)
      )
    } else if (name === "organism") {
      this.autoCompleteMap[metadata.id] = this.web.getSpecies(undefined, 5, 0, data).pipe(
        map((response) => response.results)
      )
    } else if (["cleavage agent details", "instrument", "dissociation method"].includes(name)) {
      this.autoCompleteMap[metadata.id] = this.web.getMSVocab(undefined, 5, 0, data, name).pipe(
        map((response) => response.results)
      )
    } else if (name === "label") {
      this.autoCompleteMap[metadata.id] = this.web.getMSVocab(undefined, 5, 0, data, "sample attribute").pipe(
        map((response) => response.results)
      )
    } else if (name === "cell type") {
      this.autoCompleteMap[metadata.id] = this.web.getMSVocab(undefined, 5, 0, data, "cell line").pipe(
        map((response) => response.results)
      )
    } else {
      this.autoCompleteMap[metadata.id] = of([])
    }
  }

  ngOnInit(): void {

  }

  createMetadata(customizationTemplate: string|undefined|null = null) {
    const ref = this.dialog.open(AnalysisGroupMetadataCreationDialogComponent)
    if (customizationTemplate) {
      ref.componentInstance.readonlyType = true
      ref.componentInstance.readonlyName = true
      switch (customizationTemplate) {
        case "subcellular location":
          ref.componentInstance.metadataName = "Subcellular location"
          ref.componentInstance.metadataType = "Characteristics"
          break
        case "disease":
          ref.componentInstance.metadataName = "Disease"
          ref.componentInstance.metadataType = "Characteristics"
          break
        case "tissue":
          ref.componentInstance.metadataName = "Tissue"
          ref.componentInstance.metadataType = "Characteristics"
          break
        case "organism":
          ref.componentInstance.metadataName = "Organism"
          ref.componentInstance.metadataType = "Characteristics"
          break
        case "cell type":
          ref.componentInstance.metadataName = "Cell type"
          ref.componentInstance.metadataType = "Characteristics"
          break
        case "enrichment process":
          ref.componentInstance.metadataName = "Enrichment process"
          ref.componentInstance.metadataType = "Characteristics"
          break
        case "technology type":
          ref.componentInstance.metadataName = "Technology type"
          ref.componentInstance.metadataType = ""
          break
        case "assay name":
          ref.componentInstance.metadataName = "Assay name"
          ref.componentInstance.metadataType = ""
          break
        case "label":
          ref.componentInstance.metadataName = "Label"
          ref.componentInstance.metadataType = ""
          break
      }
    }
    ref.afterClosed().subscribe((result) => {
      if (result) {
        this.web.createMetaDataColumn(this.analysis_group_id, result).subscribe((metadata) => {
          this.metadata.push(...metadata)
          this.metadataChange.emit(this.metadata)
          for (const m of metadata) {
            this.metadataFormMap[m.id] = this.fb.group({
              value: [m.value],
              name: [m.name],
              type: [m.type]
            })
            this.metadataFormMap[m.id].valueChanges.subscribe((data) => {
              if (data.value) {
                this.updateValueField(m, data.value)
              }
            })
          }
        })
      }
    })
  }

  undoDeletion(metadata: MetadataColumn) {
    this.markedForDeletion = this.markedForDeletion.filter((m) => m !== metadata)
    this.metadataDeleted.emit(metadata)
  }

  displayData(data: SubcellularLocation | HumanDisease | Tissue |Species | MsVocab) {
    if (data) {
      if ("identifier" in data) {
        return data.identifier
      } else if ("official_name" in data) {
        return data.official_name
      } else if ("name" in data) {
        return data.name
      } else {
        return data.location_identifier
      }
    }
    return ""
  }

  addSampleFile() {
    const ref = this.dialog.open(AnalysisGroupSampleFileComponent)
    ref.afterClosed().subscribe((result) => {
      if (result) {
        if (result.name) {
          this.web.createSourceFile(this.analysis_group_id, result.name, result.description).subscribe((sourceFile) => {
            this.sourceFiles.push(sourceFile)
            this.sourcefileFormMap[sourceFile.id] = this.fb.group({
              name: [sourceFile.name],
              description: [sourceFile.description]
            })
            for (const m of sourceFile.metadata_columns) {
              this.metadataFormMap[m.id] = this.fb.group({
                value: [m.value],
                name: [m.name],
                type: [m.type],
                not_applicable: [m.not_applicable]
              })
              this.metadataFormMap[m.id].controls["value"].valueChanges.subscribe((data: string) => {
                this.updateValueField(m, data)
              })
            }
            this.sourceFilesChanged.emit(this.sourceFiles)
          })
        }
      }
    })
  }

  removeSampleFile(id: number) {
    const ref = this.dialog.open(AreYouSureDialogComponent)
    ref.afterClosed().subscribe((result) => {
      if (result) {
        this.web.deleteSourceFile(id).subscribe(() => {
          this.sourceFiles = this.sourceFiles.filter((s) => s.id !== id)
          this.sourceFilesChanged.emit(this.sourceFiles)
        })
      }
    })
  }

  createMetadataFileSpecific(customizationTemplate: string|undefined|null = null, fileId: number) {
    const ref = this.dialog.open(AnalysisGroupMetadataCreationDialogComponent)
    if (customizationTemplate) {
      ref.componentInstance.readonlyType = true
      ref.componentInstance.readonlyName = true
      switch (customizationTemplate) {
        case "subcellular location":
          ref.componentInstance.metadataName = "Subcellular location"
          ref.componentInstance.metadataType = "Characteristics"
          break
        case "disease":
          ref.componentInstance.metadataName = "Disease"
          ref.componentInstance.metadataType = "Characteristics"
          break
        case "tissue":
          ref.componentInstance.metadataName = "Tissue"
          ref.componentInstance.metadataType = "Characteristics"
          break
        case "organism":
          ref.componentInstance.metadataName = "Organism"
          ref.componentInstance.metadataType = "Characteristics"
          break
        case "modification":
          ref.componentInstance.metadataName = "Modification parameters"
          ref.componentInstance.metadataType = "Comment"
          break
        case "enrichment process":
          ref.componentInstance.metadataName = "Enrichment process"
          ref.componentInstance.metadataType = "Characteristics"
          break
        case "cell type":
          ref.componentInstance.metadataName = "Cell type"
          ref.componentInstance.metadataType = "Characteristics"
          break
        case "technology type":
          ref.componentInstance.metadataName = "Technology type"
          ref.componentInstance.metadataType = ""
          break
        case "assay name":
          ref.componentInstance.metadataName = "Assay name"
          ref.componentInstance.metadataType = ""
          break
        case "label":
          ref.componentInstance.metadataName = "Label"
          ref.componentInstance.metadataType = ""
          break
      }
    }
    ref.afterClosed().subscribe((result) => {
      if (result) {
        this.web.createMetaDataColumn(this.analysis_group_id, result, fileId).subscribe((metadata) => {
          for (const m of metadata) {
            const fId = m.source_file?.toString()
            if (fId) {
              this.sourceFileMap[fId].metadata_columns.push(m)
              this.sourceFileMap[fId].metadata_columns = [...this.sourceFileMap[fId].metadata_columns]
              this.metadataFormMap[m.id] = this.fb.group({
                value: [m.value],
                name: [m.name],
                type: [m.type],
                not_applicable: [m.not_applicable]
              })
              this.metadataFormMap[m.id].controls["value"].valueChanges.subscribe((data: string) => {
                this.updateValueField(m, data)
              })
            }

          }
        })
      }
    })
  }

  updateMetadata(metadata: MetadataColumn) {
    this.web.updateMetaDataColumn(metadata.id, undefined, undefined, metadata.value).subscribe(() => {
      if (metadata.source_file) {
        this.sourceFileMap[metadata.source_file].metadata_columns = this.sourceFileMap[metadata.source_file].metadata_columns.map((m) => {
          if (m.id === metadata.id) {
            return metadata
          }
          return m
        })
      }
    })
  }

  markForDeleteOrUndo(metadata: MetadataColumn) {
    if (this.metadataFormMap[metadata.id].controls["not_applicable"]) {
      return
    }
    const columns = this.sourceFiles.map((s) => s.metadata_columns).flat()
    const selectedColumns = columns.filter((m) => m.column_position === metadata.column_position)
    const currentState =  this.metadataFormMap[metadata.id].controls["value"].disabled
    if (currentState) {
      this.metadataFormMap[metadata.id].controls["value"].enable()
      if (this.markedForDeletion.includes(metadata)) {
        this.markedForDeletion = this.markedForDeletion.filter((md) => md !== metadata)
      }
    } else {
      this.metadataFormMap[metadata.id].controls["value"].disable()

      if (!this.markedForDeletion.includes(metadata)) {
        this.markedForDeletion.push(metadata)
      }
    }
    for (const m of selectedColumns) {
      if (m !== metadata) {
        this.markedForDeletion = this.markedForDeletion.filter((md) => md !== m)
        const metaCurrentValue = this.metadataFormMap[metadata.id].controls["value"].disabled
        if (metaCurrentValue) {
          this.metadataFormMap[m.id].controls["value"].disable()
        } else {
          this.metadataFormMap[m.id].controls["value"].enable()
        }
      }
    }
    this.sourceFileMetadataDeleted.emit(metadata)
  }

  drop(event: CdkDragDrop<MetadataColumn[]>, currentSourceFile: SourceFile) {
    const previousIndex = event.previousIndex;
    const currentIndex = event.currentIndex;
    const data = event.item.data as MetadataColumn;
    const listOfColumnsChanged: MetadataColumn[] = []
    const new_index_position = currentSourceFile.metadata_columns[currentIndex].column_position
    this.sourceFiles.forEach(sourceFile => {
      moveItemInArray(sourceFile.metadata_columns, previousIndex, currentIndex);
      sourceFile.metadata_columns[currentIndex].column_position = new_index_position
      listOfColumnsChanged.push(sourceFile.metadata_columns[currentIndex])
      // if currentIndex is greater than previousIndex, we need to decrement the column_position of all columns between previousIndex and currentIndex
      if (currentIndex > previousIndex) {
        for (let i = previousIndex; i <= currentIndex; i++) {
          sourceFile.metadata_columns[i].column_position -= 1
          listOfColumnsChanged.push(sourceFile.metadata_columns[i])
        }
      } else {
        for (let i = currentIndex+1; i <= previousIndex; i++) {
          sourceFile.metadata_columns[i].column_position += 1
          listOfColumnsChanged.push(sourceFile.metadata_columns[i])
        }
      }
    });
    this.reorderMetadataSourceFiles.emit(listOfColumnsChanged)
  }

  exportSDRF() {
    const data = new SDRF(this.sourceFiles)
    const table = data.convertToTSV()
    const blob = new Blob([table], {type: "text/plain;charset=utf-8"})
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "analysis_group_metadata.tsv"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }

  exportSDRFFromBackend() {
    if (this.web.searchSessionID) {
      this.web.exportSDRFFile(this.analysis_group_id, this.web.searchSessionID).subscribe((data) => {
        this.export_job_id = data.job_id
        console.log(data)
      })
    }

  }

  updateNotApplicable(metadata: MetadataColumn) {
    const metadataColumns = this.sourceFiles.map((s) => s.metadata_columns).flat()
    const selectedColumns = metadataColumns.filter((m) => m.column_position === metadata.column_position)
    for (const m of selectedColumns) {
      if (m !== metadata) {
        this.metadataFormMap[m.id].controls["not_applicable"].setValue(!metadata.not_applicable)
        this.metadataFormMap[m.id].markAsDirty()
        m.not_applicable = !metadata.not_applicable
        if (m.not_applicable) {
          this.metadataFormMap[m.id].controls["value"].disable()
        } else {
          this.metadataFormMap[m.id].controls["value"].enable()
        }
      }
    }
    metadata.not_applicable = !metadata.not_applicable
    if (metadata.not_applicable) {
      this.metadataFormMap[metadata.id].controls["value"].disable()
    } else {
      this.metadataFormMap[metadata.id].controls["value"].enable()
    }
  }

  validateSDRF() {
    if (!this.web.searchSessionID) {
      return
    }
    this.sdrfValidating = true
    this.web.validateSDRFFile(this.analysis_group_id, this.web.searchSessionID).subscribe((data) => {

    }, (error) => {
      this.sdrfValidating = false
      this.sb.open("Error validating SDRF file", "Close", {duration: 5000})
    })
  }

  handleImportedData(analysisGroup: AnalysisGroup) {
    this.metadataImported.emit(analysisGroup)
  }

  copyMetadata(metadata: MetadataColumn, blank_only: boolean) {
    if (this.metadataFormMap[metadata.id].controls["value"].dirty){
      this.sb.open("Please save the metadata before copying", "Close", {duration: 5000})
      return
    }
    this.web.copyMetadataValueToAllInSamePosition(metadata.id, blank_only).subscribe((data) => {
      for (const m of data) {
        if (m.source_file) {
          this.sourceFileMap[m.source_file].metadata_columns = this.sourceFileMap[m.source_file].metadata_columns.map((md) => {
            if (md.id === m.id) {
              this.metadataFormMap[m.id].controls["value"].patchValue(m.value)
              return m
            }
            return md
          })

        }
      }
    })
  }

  reorderAnalysisGroupMetadataColumn() {
    if (this.sourceFiles.length > 0) {
      this.web.analysisGroupReorderColumns(this.analysis_group_id).subscribe((data) => {
        this.sourceFiles = data.source_files
        this.sb.open("Metadata columns reordered", "Dismiss", {duration: 5000})
      })
    }
  }

  navigateToSourceFile(columnPosition: number, sourceFileIndex: number, direction: 'next' | 'previous') {
    if (columnPosition !== -1) {
      const targetIndex = direction === 'next' ? sourceFileIndex + 1 : sourceFileIndex - 1;
      if (targetIndex >= 0 && targetIndex < this.sourceFiles.length) {
        const targetSourceFile = this.sourceFiles[targetIndex];
        const targetMetadataColumn = targetSourceFile.metadata_columns.find(column => column.column_position === columnPosition);
        if (targetMetadataColumn && this.expansionPanels) {
          const panel = this.expansionPanels.toArray()[targetIndex];
          if (panel) {
            if (!panel.expanded) {
              panel.open();
              const interval = setInterval(() => {
                const element = document.getElementById(`metadata-column-${targetSourceFile.id}-${targetMetadataColumn.id}`);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  clearInterval(interval);
                }
              }, 300);
            } else {
              const interval = setInterval(() => {
                const element = document.getElementById(`metadata-column-${targetSourceFile.id}-${targetMetadataColumn.id}`);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  clearInterval(interval);
                }
              }, 300);
            }
          }
        }
      }
    }
  }

  openMetadataEditorDialog(metadata: MetadataColumn) {
    const ref = this.dialog.open(AnalysisGroupMetadataCreationDialogComponent)
    ref.componentInstance.metadataType = metadata.type
    ref.componentInstance.metadataName = metadata.name
    ref.componentInstance.metadataValue = metadata.value
    ref.componentInstance.readonlyName = true
    ref.componentInstance.readonlyType = true
    ref.afterClosed().subscribe((result) => {
      if (result) {
        this.web.updateMetaDataColumn(metadata.id, result.name, result.type, metadata.value).subscribe((data) => {
          this.metadata = this.metadata.map((m) => {
            if (m.id === metadata.id) {
              return data
            }
            return m
          })
        })
      }
    })
  }

  // Pagination methods
  get paginatedSourceFiles(): SourceFile[] {
    const startIndex = this.pageIndex * this.pageSize
    return this.sourceFiles.slice(startIndex, startIndex + this.pageSize)
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex
    this.pageSize = event.pageSize
  }

  get totalSourceFiles(): number {
    return this.sourceFiles.length
  }
}
