import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AnalysisGroup} from "../analysis-group";
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {WebService} from "../../web.service";
import {UploadFileComponent} from "../../upload-file/upload-file.component";
import {ProjectFile} from "../../project-file";
import {MatDialog} from "@angular/material/dialog";
import {
  AnalysisGroupSampleAnnotationModalComponent
} from "../analysis-group-sample-annotation-modal/analysis-group-sample-annotation-modal.component";
import {SampleAnnotation} from "../../sample-annotation";
import {
  AnalysisGroupComparisonMatrixModalComponent
} from "../analysis-group-comparison-matrix-modal/analysis-group-comparison-matrix-modal.component";
import {ComparisonMatrix} from "../../comparison-matrix";
import {Project} from "../../project/project";
import {SearchModalComponent} from "../../search-modal/search-modal.component";
import {FileExtraDataModalComponent} from "../file-extra-data-modal/file-extra-data-modal.component";
import {AccountsService} from "../../accounts/accounts.service";

@Component({
  selector: 'app-analysis-group-view',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatFormField,
    MatIcon,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    UploadFileComponent
  ],
  templateUrl: './analysis-group-view.component.html',
  styleUrl: './analysis-group-view.component.scss'
})
export class AnalysisGroupViewComponent {
  associatedProject?: Project|undefined
  private _analysisGroup: AnalysisGroup|undefined
  @Input() set analysisGroup(value: AnalysisGroup|undefined) {
    this._analysisGroup = value
    if (value) {
      this.web.getProject(value.project).subscribe((data) => {
        this.associatedProject = data
      })
      this.form.controls.name.setValue(value.name)
      this.form.controls.description.setValue(value.description)
      this.form.controls.curtain_link.setValue(value.curtain_link)
      this.web.getAnalysisGroupFiles(value.id).subscribe((data) => {
        this.analysisGroupDF = data.find((file) => file.file_category === "df")
        this.analysisGroupSearched = data.find((file) => file.file_category === "searched")
        if (this.analysisGroupSearched) {
          this.web.getProjectFileSampleAnnotations(this.analysisGroupSearched.id).subscribe((data) => {
            this.sampleAnnotations = data
          })
        }
        if (this.analysisGroupDF) {
          this.web.getProjectFileComparisonMatrix(this.analysisGroupDF.id).subscribe((data) => {
            this.comparisonMatrix = data
          })
        }
      })
    }
  }

  get analysisGroup(): AnalysisGroup|undefined {
    return this._analysisGroup
  }

  analysisGroupDF?: ProjectFile|undefined
  analysisGroupSearched?: ProjectFile|undefined
  sampleAnnotations?: SampleAnnotation|undefined
  comparisonMatrix?: ComparisonMatrix|undefined
  @Output() deleted: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output() updated: EventEmitter<AnalysisGroup> = new EventEmitter<AnalysisGroup>()

  form = this.fb.group({
    name: new FormControl({value: "", disabled: !this.accounts.loggedIn}, {validators: [Validators.required]}),
    description: new FormControl({value: "", disabled: !this.accounts.loggedIn}, {validators: [Validators.required]}),
    curtain_link: new FormControl({value: "", disabled: !this.accounts.loggedIn})
  })

  constructor(private fb: FormBuilder, private web: WebService, private matDialog: MatDialog, public accounts: AccountsService) {

  }

  updateAnalysisGroup() {
    if (this.form.invalid) {
      return
    }
    // @ts-ignore
    this.web.updateAnalysisGroup(this.analysisGroup!.id, this.form.value.name, this.form.value.description).subscribe((data) => {
      this.updated.emit(data)
    })
  }

  handleFileUploaded(file: ProjectFile, file_category: "searched"| "df") {
    if (file_category === "searched") {
      this.analysisGroupSearched = file
    } else {
      this.analysisGroupDF = file
    }
  }

  setAnnotationModal(annotationFile: ProjectFile) {
    const ref = this.matDialog.open(AnalysisGroupSampleAnnotationModalComponent)
    ref.componentInstance.projectFile = annotationFile
    if (this.sampleAnnotations) {
      ref.componentInstance.annotation = this.sampleAnnotations
    }
    ref.afterClosed().subscribe((data) => {
      if (data) {
        console.log(this.sampleAnnotations)
        if (!this.sampleAnnotations) {
          // @ts-ignore
          this.web.createSampleAnnotation(this.analysisGroup!.id, this.analysisGroup?.name + " sample annotation", data, this.analysisGroupSearched.id).subscribe((data) => {
            this.sampleAnnotations = data
          })
        } else {
          this.web.updateSampleAnnotation(this.sampleAnnotations!.id, this.sampleAnnotations!.name, data).subscribe((data) => {
            this.sampleAnnotations = data
          })
        }

      }
    })
  }

  setComparisonMatrixModal(sampleAnnotations: SampleAnnotation, analysisGroupSearched: ProjectFile, analysisGroupDF: ProjectFile) {
    const ref = this.matDialog.open(AnalysisGroupComparisonMatrixModalComponent)
    ref.componentInstance.sampleAnnotations = sampleAnnotations
    ref.componentInstance.projectFile = analysisGroupDF
    if (this.comparisonMatrix) {
      ref.componentInstance.comparisonMatrix = this.comparisonMatrix
    }
    ref.afterClosed().subscribe((data) => {
      if (data) {
        if (this.comparisonMatrix) {
          this.web.updateComparisonMatrix(this.comparisonMatrix.id, this.comparisonMatrix.name, data).subscribe((data) => {
            this.comparisonMatrix = data
          })
        } else {
          this.web.createComparisonMatrix(this.analysisGroup!.id, this.analysisGroup?.name + " comparison matrix", data, analysisGroupDF.id).subscribe((data) => {
            this.comparisonMatrix = data
          })
        }

      }
    })
  }

  deleteAnalysisGroup() {
    this.web.deleteAnalysisGroup(this.analysisGroup!.id).subscribe(() => {
      this.deleted.emit(true)
    })
  }

  openSearchModal() {
    const ref = this.matDialog.open(SearchModalComponent)
    ref.componentInstance.analysisGroupIDs = [this.analysisGroup!.id]
    ref.afterClosed().subscribe((data) => {
      if (data) {
        window.open(`/#/search-session/${data}`, "_blank")
      }
    })
  }

  openExtraDataModal(file: ProjectFile) {
    const ref = this.matDialog.open(FileExtraDataModalComponent)
    ref.componentInstance.file = file
    ref.afterClosed().subscribe((data) => {
      if (data) {
        console.log(data)
        this.web.updateProjectFileExtraData(file.id, data.extra_data).subscribe(() => {
          if (file.file_category === "df") {
            this.analysisGroupDF = file
          } else {
            this.analysisGroupSearched = file
          }
        })
      }
    })
  }
}
