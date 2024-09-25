import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AnalysisGroup, CurtainData} from "../analysis-group";
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton, MatIconButton} from "@angular/material/button";
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
import {Title} from "@angular/platform-browser";
import {DataService} from "../../data.service";
import {WebsocketService} from "../../websocket.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {VolcanoPlotComponent} from "../volcano-plot/volcano-plot.component";
import {MatProgressBar} from "@angular/material/progress-bar";
import {AreYouSureDialogComponent} from "../../are-you-sure-dialog/are-you-sure-dialog.component";

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
    UploadFileComponent,
    MatIconButton,
    VolcanoPlotComponent,
    MatProgressBar
  ],
  templateUrl: './analysis-group-view.component.html',
  styleUrl: './analysis-group-view.component.scss'
})
export class AnalysisGroupViewComponent {
  associatedProject?: Project|undefined
  private _analysisGroup: AnalysisGroup|undefined
  analysisType: string = "proteomics"

  canEdit: boolean = false

  composingCurtainProgress: any = {
    progress: 0,
    message: "",
    completed: false,
    error: false,
    started: false
  }
  @Input() set analysisGroup(value: AnalysisGroup|undefined) {
    this._analysisGroup = value
    if (value) {
      this.accounts.getAnalysisGroupPermissions(value.id).subscribe((data) => {
        this.canEdit = data.edit
      })
    }

    this.curtainData = undefined
    if (value) {
      if (value.curtain_link) {
        this.getCurtainData()
      }
      this.dataService.analysisGroupChoices.forEach((choice) => {
        if (choice.value === value.analysis_group_type) {
          this.analysisType = choice.label
        }
      })
      this.titleService.setTitle(`AG - ${value.name}`)
      this.web.getProject(value.project).subscribe((data) => {
        this.associatedProject = data
      })
      this.form.controls.name.setValue(value.name)
      this.form.controls.description.setValue(value.description)
      this.form.controls.curtain_link.setValue(value.curtain_link)
      this.getFiles(value);
    }
  }

  private getFiles(value: AnalysisGroup) {
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

  get analysisGroup(): AnalysisGroup|undefined {
    return this._analysisGroup
  }

  analysisGroupDF?: ProjectFile|undefined
  analysisGroupSearched?: ProjectFile|undefined
  analysisGroupCopyNumber?: ProjectFile|undefined
  sampleAnnotations?: SampleAnnotation|undefined
  comparisonMatrix?: ComparisonMatrix|undefined
  @Output() deleted: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output() updated: EventEmitter<AnalysisGroup> = new EventEmitter<AnalysisGroup>()

  form = this.fb.group({
    name: new FormControl({value: "", disabled: !this.accounts.loggedIn}, {validators: [Validators.required]}),
    description: new FormControl({value: "", disabled: !this.accounts.loggedIn}, {validators: [Validators.required]}),
    curtain_link: new FormControl({value: "", disabled: !this.accounts.loggedIn})
  })

  curtainData?: CurtainData

  constructor(private sb: MatSnackBar, private dataService: DataService, private titleService: Title, private fb: FormBuilder, private web: WebService, private matDialog: MatDialog, public accounts: AccountsService, private ws: WebsocketService) {
    this.ws.curtainWSConnection?.subscribe((data) => {
      if (data.analysis_group_id === this.analysisGroup?.id) {
        if (data.type === "curtain_status") {
          switch (data.status) {
            case "started":
              this.sb.open("Curtain link retrieval started", "Dismiss", {duration: 5000})
              break
            case "complete":
              this.sb.open("Curtain link retrieval complete", "Dismiss", {duration: 5000})
              this.getCurtainData()
              break
          }
        } else if (data.type === "curtain_compose_status") {
          switch (data.status) {
            case "started":
              this.sb.open("Composing data from Curtain started", "Dismiss", {duration: 5000})
              this.composingCurtainProgress.progress = 30
              this.composingCurtainProgress.message = "Removed analysis group associated data if exist"
              break
            case "complete":
              this.sb.open("Composing data from Curtain completed. Please manually set Condition A and Condition B in Comparison Matrix.", "Dismiss")
              this.composingCurtainProgress.progress = 100
              this.composingCurtainProgress.message = "Composing data from Curtain completed. Please manually set Condition A and Condition B in Comparison Matrix."
              this.composingCurtainProgress.completed = true
              this.web.getAnalysisGroup(this.analysisGroup!.id).subscribe((data) => {
                this.analysisGroup = data
              })
              break
            case "error":
              this.sb.open("Error composing data from Curtain", "Dismiss", {duration: 5000})
              this.composingCurtainProgress.error = true
              break
          }
        }
      }
    })
  }

  updateAnalysisGroup() {
    if (this.form.invalid) {
      return
    }
    // @ts-ignore
    this.web.updateAnalysisGroup(this.analysisGroup!.id, this.form.value.name, this.form.value.description, this.form.value.curtain_link, this.web.searchSessionID).subscribe((data) => {
      this.updated.emit(data)
    })
  }

  getCurtainData() {
    if (this.analysisGroup) {
      this.sb.open("Retrieving curtain visualization", "Dismiss", {duration: 5000})
      this.web.getCurtainLinkData(this.analysisGroup.id).subscribe((data) => {
        this.curtainData = data
        this.sb.open("Curtain visualization retrieved", "Dismiss", {duration: 5000})
      }, (error) => {
        this.sb.open("Error retrieving curtain visualization", "Dismiss", {duration: 5000})
        this.curtainData = undefined
      })
    }
  }

  handleFileUploaded(file: ProjectFile, file_category: "searched"| "df"|"copy_number"){
    if (file_category === "searched") {
      this.analysisGroupSearched = file
      this.sb.open("Searched File uploaded", "Dismiss", {duration: 5000})
    } else if (file_category === "df"){
      this.analysisGroupDF = file
      this.sb.open("Differential Analysis File uploaded", "Dismiss", {duration: 5000})
    } else if (file_category === "copy_number") {
      this.analysisGroupCopyNumber = file
      this.sb.open("Copy Number Analysis File uploaded", "Dismiss", {duration: 5000})
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
            this.sb.open("Sample annotation created", "Dismiss", {duration: 5000})
          })
        } else {
          this.web.updateSampleAnnotation(this.sampleAnnotations!.id, this.sampleAnnotations!.name, data).subscribe((data) => {
            this.sampleAnnotations = data
            this.sb.open("Sample annotation updated", "Dismiss", {duration: 5000})
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
            this.sb.open("Comparison matrix updated", "Dismiss", {duration: 5000})
          })
        } else {
          this.web.createComparisonMatrix(this.analysisGroup!.id, this.analysisGroup?.name + " comparison matrix", data, analysisGroupDF.id).subscribe((data) => {
            this.comparisonMatrix = data
            this.sb.open("Comparison matrix created", "Dismiss", {duration: 5000})
          })
        }

      }
    })
  }

  deleteAnalysisGroup() {
    this.matDialog.open(AreYouSureDialogComponent).afterClosed().subscribe((data) => {
      if (data) {
        this.web.deleteAnalysisGroup(this.analysisGroup!.id).subscribe(() => {
          this.deleted.emit(true)
          this.sb.open("Analysis Group deleted", "Dismiss", {duration: 5000})
        })
      }
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
    ref.componentInstance.analysisGroupType = this.analysisGroup?.analysis_group_type
    ref.componentInstance.file = file
    ref.afterClosed().subscribe((data) => {
      if (data) {
        this.web.updateProjectFileExtraData(file.id, data.extra_data).subscribe((new_file_data) => {
          if (file.file_category === "df") {
            this.analysisGroupDF = new_file_data
            this.sb.open("Differential Analysis extra data updated", "Dismiss", {duration: 5000})
          } else if (file.file_category === "searched"){
            this.analysisGroupSearched = new_file_data
            this.sb.open("Searched extra data updated", "Dismiss", {duration: 5000})
          } else if (file.file_category === "copy_number") {
            this.analysisGroupCopyNumber = new_file_data
            this.sb.open("Copy Number extra data updated", "Dismiss", {duration: 5000})
          }
        })
      }
    })
  }

  refreshCurtainLink() {
    if (this.analysisGroup && this.web.searchSessionID) {
      this.web.refreshCurtainLink(this.analysisGroup.id, this.web.searchSessionID).subscribe((data) => {
        this.analysisGroup = data
        this.sb.open("Curtain data content refreshed", "Dismiss", {duration: 5000})
      })
    }
  }

  handleVolcanoSelection(selected: {
    "Primary ID": string,
    "Gene Names": string | null,
    "Entry": string,
    "Fold Change": number,
    "P-value": number
  }[]) {
    console.log(selected)
  }

  composeDataFromCurtain() {
    this.composingCurtainProgress = {
      progress: 0,
      message: "",
      completed: false,
      error: false
    }
    if (this.analysisGroup && this.web.searchSessionID) {
      this.composingCurtainProgress.started = true
      this.web.composeAnalysisGroupFilesFromCurtainData(this.analysisGroup.id, this.web.searchSessionID).subscribe((data) => {
        this.composingCurtainProgress.progress = 10
        this.composingCurtainProgress.message = "Data composition started"
        this.sb.open("Data composition started", "Dismiss", {duration: 5000})
      })
    }
  }

  deleteFile(file: ProjectFile) {
    this.matDialog.open(AreYouSureDialogComponent).afterClosed().subscribe((data) => {
      if (data) {
        this.web.deleteProjectFile(file.id).subscribe(
          () => {
            if (file.file_category === "df") {
              this.analysisGroupDF = undefined
              this.sb.open("Differential Analysis File deleted", "Dismiss", {duration: 5000})
            } else if (file.file_category === "searched") {
              this.analysisGroupSearched = undefined
              this.sb.open("Searched File deleted", "Dismiss", {duration: 5000})
            } else if (file.file_category === "copy_number") {
              this.analysisGroupCopyNumber = undefined
              this.sb.open("Copy Number Analysis File deleted", "Dismiss", {duration: 5000})
            }
          }
        )
      }
    })

  }

  downloadFile(file: ProjectFile) {
    this.web.getFileDownloadToken(file.id).subscribe((data) => {
      window.open(`${this.web.baseURL}/api/project_files/download/?token=${data.token}`)
    })
  }
}
