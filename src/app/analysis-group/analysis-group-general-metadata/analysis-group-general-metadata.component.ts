import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MetadataColumn} from "../metadata-column";
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
import {FormsModule} from "@angular/forms";
import {MatFormField, MatInput} from "@angular/material/input";
import {MatLabel} from "@angular/material/form-field";

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
    MatLabel
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
  }
  get metadata(): MetadataColumn[] {
    return this._metadata
  }

  @Output() metadataChange = new EventEmitter<MetadataColumn[]>()
  @Output() metadataDeleted = new EventEmitter<MetadataColumn>()
  markedForDeletion: MetadataColumn[] = []

  constructor(private web: WebService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  createMetadata() {
    const ref = this.dialog.open(AnalysisGroupMetadataCreationDialogComponent)
    ref.afterClosed().subscribe((result) => {
      if (result) {
        this.web.createMetaDataColumn(this.analysis_group_id, result).subscribe((metadata) => {
          this.metadata.push(...metadata)
          this.metadataChange.emit(this.metadata)
        })
      }
    })
  }

  undoDeletion(metadata: MetadataColumn) {
    this.markedForDeletion = this.markedForDeletion.filter((m) => m !== metadata)
    this.metadataDeleted.emit(metadata)
  }

}
