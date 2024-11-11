import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

@Component({
  selector: 'app-analysis-group-general-metadata',
  standalone: true,
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
    CdkDragHandle
  ],
  templateUrl: './analysis-group-general-metadata.component.html',
  styleUrl: './analysis-group-general-metadata.component.scss'
})
export class AnalysisGroupGeneralMetadataComponent implements OnInit {
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
          type: [m.type]
        })
        this.metadataFormMap[m.id].valueChanges.subscribe((data) => {
          if (data.value) {
            this.updateValueField(m, data.value)
          }
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
  markedForDeletion: MetadataColumn[] = []

  @Input() canEdit: boolean = false
  autoCompleteMap: {[key: string]: Observable<SubcellularLocation[] | HumanDisease[] | Tissue[] | Species[]>} = {}
  sourceFileMap: {[key: string]: SourceFile} = {}
  constructor(private web: WebService, private dialog: MatDialog, private fb: FormBuilder) { }

  updateValueField(metadata: MetadataColumn, data: string) {
    if (!this.autoCompleteMap[metadata.id]) {
      this.autoCompleteMap[metadata.id] = of([])
    }
    if (data.length < 2) {
      this.autoCompleteMap[metadata.id] = of([])
      return
    }
    if (metadata.name.toLowerCase() === "subcellular location") {
      this.autoCompleteMap[metadata.id] = this.web.getSubcellularLocations(undefined, 5, 0, data).pipe(
        map((response) => response.results)
      )
    } else if (metadata.name.toLowerCase() === "disease") {
      this.autoCompleteMap[metadata.id] = this.web.getHumandDiseases(undefined, 5, 0, data).pipe(
        map((response) => response.results)
      )
    } else if (metadata.name.toLowerCase() === "tissue") {
      this.autoCompleteMap[metadata.id] = this.web.getTissues(undefined, 5, 0, data).pipe(
        map((response) => response.results)
      )
    } else if (metadata.name.toLowerCase() === "organism") {
      this.autoCompleteMap[metadata.id] = this.web.getSpecies(undefined, 5, 0, data).pipe(
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

  displayData(data: SubcellularLocation | HumanDisease | Tissue |Species) {
    if (data) {
      if ("identifier" in data) {
        return data.identifier
      } else if ("official_name" in data) {
        return data.official_name
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
                type: [m.type]
              })
              this.metadataFormMap[m.id].valueChanges.subscribe((data) => {
                if (data.value) {
                  this.updateValueField(m, data.value)
                }
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
                type: [m.type]
              })
              this.metadataFormMap[m.id].valueChanges.subscribe((data) => {
                if (data.value) {
                  this.updateValueField(m, data.value)
                }
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
}
