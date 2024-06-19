import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {ProjectFile} from "../../project-file";
import {WebService} from "../../web.service";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-file-extra-data-modal',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    ReactiveFormsModule,
    MatLabel,
    MatOption,
    MatSelect,
    MatFormField,
    MatDialogActions,
    MatButton
  ],
  templateUrl: './file-extra-data-modal.component.html',
  styleUrl: './file-extra-data-modal.component.scss'
})
export class FileExtraDataModalComponent {
  private _file: ProjectFile|undefined = undefined
  @Input() set file(value: ProjectFile) {
    this._file = value
    if (value.extra_data) {
      if (value.file_category === "df") {
        this.formDFColumn.controls.primary_id_col.setValue(value.extra_data.primary_id_col)
        this.formDFColumn.controls.gene_name_col.setValue(value.extra_data.gene_name_col)
        this.formDFColumn.controls.uniprot_id_col.setValue(value.extra_data.uniprot_id_col)
        this.formDFColumn.controls.peptide_seq_col.setValue(value.extra_data.peptide_seq_col)
        this.formDFColumn.controls.modification_position_in_peptide_col.setValue(value.extra_data.modification_position_in_peptide_col)
        this.formDFColumn.controls.modification_position_in_protein_col.setValue(value.extra_data.modification_position_in_protein_col)
        this.formDFColumn.controls.localization_prob_col.setValue(value.extra_data.localization_prob_col)
      } else if (value.file_category === "searched") {
        this.formSearchedColumn.controls.primary_id_col.setValue(value.extra_data.primary_id_col)
        this.formSearchedColumn.controls.gene_name_col.setValue(value.extra_data.gene_name_col)
        this.formSearchedColumn.controls.uniprot_id_col.setValue(value.extra_data.uniprot_id_col)
      } else if (value.file_category === "copy_number") {
        this.formCopyNumberColumn.controls.primary_id_col.setValue(value.extra_data.primary_id_col)
        this.formCopyNumberColumn.controls.gene_name_col.setValue(value.extra_data.gene_name_col)
        this.formCopyNumberColumn.controls.uniprot_id_col.setValue(value.extra_data.uniprot_id_col)
        this.formCopyNumberColumn.controls.rank_col.setValue(value.extra_data.rank_col)
        this.formCopyNumberColumn.controls.copy_number_col.setValue(value.extra_data.copy_number_col)
      }
    }
    this.web.getProjectFileColumns(value.id).subscribe((data) => {
      this.columns = data
    })
  }

  get file(): ProjectFile {
    return this._file!
  }

  formDFColumn = this.fb.group({
    primary_id_col: new FormControl("", Validators.required),
    gene_name_col: new FormControl(""),
    uniprot_id_col: new FormControl(""),
    peptide_seq_col: new FormControl(""),
    modification_position_in_peptide_col: new FormControl(""),
    modification_position_in_protein_col: new FormControl(""),
    localization_prob_col: new FormControl(""),
  })

  formSearchedColumn = this.fb.group({
    primary_id_col: new FormControl("", Validators.required),
    gene_name_col: new FormControl(""),
    uniprot_id_col: new FormControl(""),
  })

  formCopyNumberColumn = this.fb.group({
    primary_id_col: new FormControl("", Validators.required),
    gene_name_col: new FormControl(""),
    uniprot_id_col: new FormControl(""),
    rank_col: new FormControl(""),
    copy_number_col: new FormControl(""),
  })


  columns: string[] = []

  constructor(private fb: FormBuilder, private matDialogRef: MatDialogRef<FileExtraDataModalComponent>, private web: WebService) {
  }

  save() {
    const payload: any = {file_category: this.file.file_category, extra_data: {}}
    if (this.file.file_category === "df") {
      if (this.formDFColumn.controls.uniprot_id_col.value){
        payload["extra_data"]["uniprot_id_col"] = this.formDFColumn.controls.uniprot_id_col.value
      }
      if (this.formDFColumn.controls.primary_id_col.value){
        payload["extra_data"]["primary_id_col"] = this.formDFColumn.controls.primary_id_col.value
      }
      if (this.formDFColumn.controls.gene_name_col.value){
        payload["extra_data"]["gene_name_col"] = this.formDFColumn.controls.gene_name_col.value
      }
    } else if (this.file.file_category === "searched") {
      if (this.formSearchedColumn.controls.uniprot_id_col.value){
        payload["extra_data"]["uniprot_id_col"] = this.formSearchedColumn.controls.uniprot_id_col.value
      }
      if (this.formSearchedColumn.controls.primary_id_col.value){
        payload["extra_data"]["primary_id_col"] = this.formSearchedColumn.controls.primary_id_col.value
      }
      if (this.formSearchedColumn.controls.gene_name_col.value){
        payload["extra_data"]["gene_name_col"] = this.formSearchedColumn.controls.gene_name_col.value
      }
    }
    this.matDialogRef.close(payload)
  }

  cancel() {
    this.matDialogRef.close()
  }

}
