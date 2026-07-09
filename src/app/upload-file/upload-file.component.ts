import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostListener, Input, OnDestroy, Output} from '@angular/core';
import {DecimalPipe} from "@angular/common";
import {WebService} from "../web.service";
import {WebsocketService} from "../websocket.service";
import jsSHA from "jssha";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {ProjectFile} from "../project-file";
import {MatProgressBar} from "@angular/material/progress-bar";
import {MatTooltip} from "@angular/material/tooltip";
import {firstValueFrom, Subject, takeUntil} from "rxjs";

type UploadStatus = 'idle' | 'uploading' | 'binding' | 'success' | 'error';

interface PendingBind {
  resolve: (file: ProjectFile) => void;
  reject: (error: unknown) => void;
}

interface FileUploadState {
  file: File;
  progress: number;
  total: number;
  status: UploadStatus;
  error?: string;
}

@Component({
  selector: 'app-upload-file',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DecimalPipe,
    MatIconButton,
    MatButton,
    MatIcon,
    MatProgressBar,
    MatTooltip
  ],
  templateUrl: './upload-file.component.html',
  styleUrl: './upload-file.component.scss'
})
export class UploadFileComponent implements OnDestroy {
  @Input() fileType: string = "";
  @Input() fileCategory: string = "";
  @Input() analysisGroupId: number = 0;
  @Input() compact: boolean = true;

  @Output() fileUploaded: EventEmitter<ProjectFile> = new EventEmitter<ProjectFile>();

  uploadStates: Map<string, FileUploadState> = new Map();
  isDragOver = false;
  allowedFileTypes = ["csv", "tsv", "txt"];

  private destroy$ = new Subject<void>();
  private pendingBinds: Map<string, PendingBind> = new Map();

  constructor(
    private web: WebService,
    private ws: WebsocketService,
    private cdr: ChangeDetectorRef
  ) {
    this.ws.curtainWSConnection?.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      if (data?.type !== 'file_bind_status') return;
      if (data.analysis_group_id !== this.analysisGroupId || data.file_category !== this.fileCategory) return;

      const pending = this.pendingBinds.get(data.file_name);
      if (!pending) return;

      if (data.status === 'complete') {
        this.pendingBinds.delete(data.file_name);
        const file: ProjectFile = data.file;
        if (file?.extra_data) {
          file.extra_data = JSON.parse(file.extra_data);
        }
        pending.resolve(file);
      } else if (data.status === 'error') {
        this.pendingBinds.delete(data.file_name);
        pending.reject(new Error(data.message || 'Binding failed'));
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private bindUploadedFile(fileName: string, extension: string, uploadId: string): Promise<ProjectFile> {
    return new Promise<ProjectFile>((resolve, reject) => {
      this.pendingBinds.set(fileName, {resolve, reject});
      firstValueFrom(
        this.web.bindUploadedFile(this.analysisGroupId, extension, this.fileCategory, fileName, uploadId, this.web.searchSessionID)
      ).catch((error) => {
        this.pendingBinds.delete(fileName);
        reject(error);
      });
    });
  }

  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = true;
    this.cdr.markForCheck();
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
    this.cdr.markForCheck();
  }

  @HostListener('drop', ['$event'])
  async onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      await this.processFiles(files);
    }
    this.cdr.markForCheck();
  }

  async onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      await this.processFiles(input.files);
      input.value = '';
    }
  }

  private async processFiles(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const extension = this.getFileExtension(file);

      if (!this.allowedFileTypes.includes(extension)) {
        this.uploadStates.set(file.name, {
          file,
          progress: 0,
          total: file.size,
          status: 'error',
          error: `Invalid file type. Allowed: ${this.allowedFileTypes.join(', ')}`
        });
        this.cdr.markForCheck();
        continue;
      }

      this.uploadStates.set(file.name, {
        file,
        progress: 0,
        total: file.size,
        status: 'uploading'
      });
      this.cdr.markForCheck();

      await this.uploadFile(file);
    }
  }

  private getFileExtension(file: File): string {
    const parts = file.name.split(".");
    return parts.length > 1 ? parts[parts.length - 1].toLowerCase() : "";
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  }

  getProgressPercent(state: FileUploadState): number {
    if (state.total === 0) return 0;
    return (state.progress / state.total) * 100;
  }

  removeFile(fileName: string) {
    this.uploadStates.delete(fileName);
    this.cdr.markForCheck();
  }

  get hasActiveUploads(): boolean {
    return Array.from(this.uploadStates.values()).some(s => s.status === 'uploading' || s.status === 'binding');
  }

  get uploadStatesList(): FileUploadState[] {
    return Array.from(this.uploadStates.values());
  }

  private async uploadFile(file: File) {
    const chunkSize = 1024 * 1024;
    const fileSize = file.size;
    const hashObj = new jsSHA("SHA-256", "ARRAYBUFFER");
    const extension = this.getFileExtension(file);

    try {
      if (chunkSize > fileSize) {
        const chunk = await file.arrayBuffer();
        hashObj.update(chunk);
        const hashDigest = hashObj.getHash("HEX");

        const result = await firstValueFrom(
          this.web.uploadDataChunkComplete("", hashDigest, file, file.name)
        );

        this.updateProgress(file.name, fileSize);

        if (result?.completed_at) {
          this.setUploadBinding(file.name);
          const boundFile = await this.bindUploadedFile(file.name, extension, result.id);
          this.setUploadSuccess(file.name);
          this.fileUploaded.emit(boundFile);
        }
      } else {
        let currentURL = "";
        let currentOffset = 0;

        while (fileSize > currentOffset) {
          let end = currentOffset + chunkSize;
          if (end >= fileSize) {
            end = fileSize;
          }

          const chunk = await file.slice(currentOffset, end).arrayBuffer();
          hashObj.update(chunk);
          const filePart = new File([chunk], file.name, {type: file.type});
          const contentRange = `bytes ${currentOffset}-${end - 1}/${fileSize}`;

          const result = await firstValueFrom(
            this.web.uploadDataChunk(currentURL, filePart, file.name, contentRange)
          );

          if (result) {
            currentURL = result.url;
            currentOffset = result.offset;
            this.updateProgress(file.name, currentOffset);
          }
        }

        if (currentURL !== "") {
          const hashDigest = hashObj.getHash("HEX");
          const result = await firstValueFrom(
            this.web.uploadDataChunkComplete(currentURL, hashDigest)
          );

          if (result?.completed_at) {
            this.updateProgress(file.name, fileSize);
            this.setUploadBinding(file.name);
            const boundFile = await this.bindUploadedFile(file.name, extension, result.id);
            this.setUploadSuccess(file.name);
            this.fileUploaded.emit(boundFile);
          }
        }
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Upload failed. Please try again.';
      this.setUploadError(file.name, message);
    }
  }

  private updateProgress(fileName: string, progress: number) {
    const state = this.uploadStates.get(fileName);
    if (state) {
      state.progress = progress;
      this.cdr.markForCheck();
    }
  }

  private setUploadBinding(fileName: string) {
    const state = this.uploadStates.get(fileName);
    if (state) {
      state.status = 'binding';
      this.cdr.markForCheck();
    }
  }

  private setUploadSuccess(fileName: string) {
    const state = this.uploadStates.get(fileName);
    if (state) {
      state.status = 'success';
      this.cdr.markForCheck();
    }
  }

  private setUploadError(fileName: string, error: string) {
    const state = this.uploadStates.get(fileName);
    if (state) {
      state.status = 'error';
      state.error = error;
      this.cdr.markForCheck();
    }
  }
}
