import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
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
import {
  AnalysisGroupGeneralMetadataComponent
} from "../analysis-group-general-metadata/analysis-group-general-metadata.component";
import {MetadataColumn} from "../metadata-column";
import {forkJoin} from "rxjs";
import {MatDivider} from "@angular/material/divider";

@Component({
    selector: 'app-analysis-group-view',
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
        MatProgressBar,
        AnalysisGroupGeneralMetadataComponent,
        MatDivider
    ],
    templateUrl: './analysis-group-view.component.html',
    styleUrl: './analysis-group-view.component.scss'
})
export class AnalysisGroupViewComponent {
  @ViewChild('generalMetadata') generalMetadata?: AnalysisGroupGeneralMetadataComponent
  associatedProject?: Project|undefined
  private _analysisGroup: AnalysisGroup|undefined
  analysisType: string = "proteomics"
  reorderMetadataColumnSourceFile: MetadataColumn[] = []
  canEdit: boolean = false

  composingCurtainProgress: any = {
    progress: 0,
    message: "",
    completed: false,
    error: false,
    started: false,
    downloadedBytes: 0,
    totalBytes: 0,
    // Enhanced progress tracking
    overallProgress: 0,
    currentPhase: "",
    phaseProgress: 0,
    estimatedRemainingSeconds: null,
    phaseDetails: {},
    timestamp: null
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
    name: new FormControl({value: "", disabled: false}, {validators: [Validators.required]}),
    description: new FormControl({value: "", disabled: false}, {validators: [Validators.required]}),
    curtain_link: new FormControl({value: "", disabled: false})
  })

  curtainData?: CurtainData

  metadataDeletionList: MetadataColumn[] = []

  constructor(private sb: MatSnackBar, private dataService: DataService, private titleService: Title, private fb: FormBuilder, private web: WebService, private matDialog: MatDialog, public accounts: AccountsService, private ws: WebsocketService) {
    this.ws.curtainWSConnection?.subscribe((data) => {
      if (data.analysis_group_id === this.analysisGroup?.id || data.id) {
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
        } else if (data.type === "curtain_progress") {
          // Handle real-time download progress updates (backward compatible)
          switch (data.status) {
            case "downloading":
              this.composingCurtainProgress.progress = data.percentage || 0
              this.composingCurtainProgress.message = data.message || "Downloading data from Curtain"
              this.composingCurtainProgress.downloadedBytes = data.downloaded_bytes
              this.composingCurtainProgress.totalBytes = data.total_bytes
              // Track download as active operation if not already tracked
              const downloadOpId = `download_${data.id || this.analysisGroup?.id}`
              this.ws.addCurtainOperation(downloadOpId)
              break
            case "download_complete":
              this.composingCurtainProgress.progress = 100
              this.composingCurtainProgress.message = data.message || "Download complete, processing data"
              // Remove download operation as it's complete
              const completeOpId = `download_${data.id || this.analysisGroup?.id}`
              this.ws.removeCurtainOperation(completeOpId)
              break
          }
        } else if (data.type === "curtain_progress_enhanced") {
          // Handle enhanced progress messages with phase tracking
          this.composingCurtainProgress.overallProgress = data.overall_progress || 0
          this.composingCurtainProgress.progress = data.overall_progress || 0 // Backward compatibility
          this.composingCurtainProgress.currentPhase = data.current_phase || ""
          this.composingCurtainProgress.phaseProgress = data.phase_progress || 0
          this.composingCurtainProgress.estimatedRemainingSeconds = data.estimated_remaining_seconds
          this.composingCurtainProgress.phaseDetails = data.details || {}
          this.composingCurtainProgress.timestamp = data.timestamp
          
          // Update message with enhanced information
          const phaseDisplay = data.current_phase ? data.current_phase.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Processing'
          let message = `${phaseDisplay} (${data.phase_progress?.toFixed(1) || 0}%)`
          
          // Add step details if available
          if (data.details?.step) {
            message += ` - ${data.details.step}`
          }
          
          // Add time estimation if available
          if (data.estimated_remaining_seconds) {
            const minutes = Math.floor(data.estimated_remaining_seconds / 60)
            const seconds = data.estimated_remaining_seconds % 60
            if (minutes > 0) {
              message += ` - Est. ${minutes}m ${seconds}s remaining`
            } else {
              message += ` - Est. ${seconds}s remaining`
            }
          }
          
          this.composingCurtainProgress.message = message
          
          // Track active operation
          const enhancedOpId = `enhanced_${data.id || this.analysisGroup?.id}`
          this.ws.addCurtainOperation(enhancedOpId)
        } else if (data.type === "curtain_phase_complete") {
          // Handle phase completion messages
          const phaseDisplay = data.phase?.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Phase'
          this.sb.open(`${phaseDisplay} completed`, "Dismiss", {duration: 3000})
        } else if (data.type === "curtain_partial_success") {
          // Handle partial success messages
          const successCount = data.successful_operations?.length || 0
          const failureCount = Object.keys(data.failed_operations || {}).length
          const message = `Import partially completed: ${successCount} succeeded, ${failureCount} failed`
          this.sb.open(message, "Dismiss", {duration: 8000})
        } else if (data.type === "curtain_compose_status") {
          switch (data.status) {
            case "started":
              this.sb.open("Composing data from Curtain started", "Dismiss", {duration: 5000})
              this.composingCurtainProgress.progress = 0
              this.composingCurtainProgress.message = "Starting data composition from Curtain"
              // Track this as an active operation
              this.ws.addCurtainOperation(`compose_${this.analysisGroup?.id}`)
              break
            case "complete":
              this.sb.open("Composing data from Curtain completed. Please manually set Condition A and Condition B in Comparison Matrix.", "Dismiss")
              this.composingCurtainProgress.progress = 100
              this.composingCurtainProgress.message = "Composing data from Curtain completed. Please manually set Condition A and Condition B in Comparison Matrix."
              this.composingCurtainProgress.completed = true
              // Remove from active operations
              this.ws.removeCurtainOperation(`compose_${this.analysisGroup?.id}`)
              this.web.getAnalysisGroup(this.analysisGroup!.id).subscribe((data) => {
                this.analysisGroup = data
              })
              break
            case "error":
              this.sb.open("Error composing data from Curtain", "Dismiss", {duration: 5000})
              this.composingCurtainProgress.error = true
              // Remove from active operations on error
              this.ws.removeCurtainOperation(`compose_${this.analysisGroup?.id}`)
              break
          }
        }
      }
    })
  }

  async updateAnalysisGroup() {
    if (this.form.invalid) {
      return
    }
    if (this.metadataDeletionList.length > 0) {
      for (const metadata of this.metadataDeletionList) {
        await this.web.deleteMetaDataColumn(metadata.id).toPromise()
        this.sb.open(`Metadata column ${metadata.name} deleted`, "Dismiss", {duration: 5000})
        if (metadata.source_file && this.generalMetadata) {
          const columnsWithSamePosition = this.generalMetadata.sourceFiles.map((s) => s.metadata_columns).flat().filter((m) => m.column_position === metadata.column_position)
          if (columnsWithSamePosition.length === 1) {
            const sourceFile = this.generalMetadata.sourceFiles.find((s) => s.id === metadata.source_file)
            if (sourceFile) {
              sourceFile.metadata_columns = sourceFile.metadata_columns.filter((m) => m.column_position !== metadata.column_position)
            }
          }
        }
      }
    }

    if (this.generalMetadata) {
      for (const sourceFileID in this.generalMetadata.sourcefileFormMap) {
        if (this.generalMetadata.sourcefileFormMap[sourceFileID].dirty) {
          await this.web.updateSourceFile(parseInt(sourceFileID), this.generalMetadata.sourcefileFormMap[sourceFileID].value.name, this.generalMetadata.sourcefileFormMap[sourceFileID].value.description).toPromise()
          this.generalMetadata.sourcefileFormMap[sourceFileID].markAsPristine()
          this.sb.open(`Source file ${this.generalMetadata.sourcefileFormMap[sourceFileID].value.name} updated`, "Dismiss", {duration: 5000})
        }
      }
      for (const metadataID in this.generalMetadata.metadataFormMap) {
        if (this.generalMetadata.metadataFormMap[metadataID].dirty) {
          await this.web.updateMetaDataColumn(parseInt(metadataID), undefined, undefined, this.generalMetadata.metadataFormMap[metadataID].value.value, this.generalMetadata.metadataFormMap[metadataID].value.not_applicable).toPromise()
          this.generalMetadata.metadataFormMap[metadataID].markAsPristine()
          this.sb.open(`Metadata column ${this.generalMetadata.metadataFormMap[metadataID].value.name} updated`, "Dismiss", {duration: 5000})
        }
      }
    }
    // @ts-ignore
    const data = await this.web.updateAnalysisGroup(this.analysisGroup!.id, this.form.value.name, this.form.value.description, this.form.value.curtain_link, this.web.searchSessionID).toPromise()
    this.metadataDeletionList = []
    this.updated.emit(data)
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
      this.web.getProjectFileSampleAnnotations(file.id).subscribe((data) => {
        this.sampleAnnotations = data
      })
      this.sb.open("Searched File uploaded", "Dismiss", {duration: 5000})
    } else if (file_category === "df"){
      this.analysisGroupDF = file
      this.web.getProjectFileComparisonMatrix(this.analysisGroupDF.id).subscribe((data) => {
        this.comparisonMatrix = data
      })
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
      error: false,
      started: false,
      downloadedBytes: 0,
      totalBytes: 0,
      // Enhanced progress tracking
      overallProgress: 0,
      currentPhase: "",
      phaseProgress: 0,
      estimatedRemainingSeconds: null,
      phaseDetails: {},
      timestamp: null
    }
    if (this.analysisGroup && this.web.searchSessionID) {
      this.composingCurtainProgress.started = true
      this.web.composeAnalysisGroupFilesFromCurtainData(this.analysisGroup.id, this.web.searchSessionID).subscribe((data) => {
        this.composingCurtainProgress.progress = 5
        this.composingCurtainProgress.message = "Data composition initiated"
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

  updateDeletionList(metadataColumn: MetadataColumn) {
    if (this.metadataDeletionList.includes(metadataColumn)) {
      this.metadataDeletionList = this.metadataDeletionList.filter((a) => a !== metadataColumn)
    } else {
      this.metadataDeletionList.push(metadataColumn)
    }
  }

  updateDeletionListSourceFile(metadataColumn: MetadataColumn) {
    if (this.generalMetadata) {
      const columns = this.generalMetadata?.sourceFiles.map((s) => s.metadata_columns).flat()
      const selectedColumns = columns.filter((m) => m.column_position === metadataColumn.column_position)
      if (this.metadataDeletionList.includes(metadataColumn)) {
        this.metadataDeletionList = this.metadataDeletionList.filter((a) => a.id !== metadataColumn.id)
      } else {
        this.metadataDeletionList.push(metadataColumn)
        for (const m of selectedColumns) {
          if (m !== metadataColumn) {
            this.metadataDeletionList = this.metadataDeletionList.filter((md) => md.id !== m.id)
          }
        }
      }
    }
    console.log(this.metadataDeletionList)
  }

  reorderMetadataColumn(columnsChanged: MetadataColumn[]) {
    if (this.analysisGroup) {
      this.web.reorganizeColumns(columnsChanged, this.analysisGroup.id).subscribe((data) => {
        this.sb.open("Metadata columns reordered", "Dismiss", {duration: 5000})
      })
    }
  }

  handleMetadataImport(ag: AnalysisGroup) {
    if (this.analysisGroup) {
      this.analysisGroup.metadata_columns = ag.metadata_columns
      this.analysisGroup.source_files = ag.source_files
    }
  }

  formatBytes(bytes: number): string {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  }
}
