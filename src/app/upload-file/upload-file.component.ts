import {Component, EventEmitter, Input, Output} from '@angular/core';
import {WebService} from "../web.service";
import jsSHA from "jssha";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {ProjectFile} from "../project-file";
import {MatProgressBar} from "@angular/material/progress-bar";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
    selector: 'app-upload-file',
    imports: [
        MatIconButton,
        MatIcon,
        MatProgressBar,
        ReactiveFormsModule
    ],
    templateUrl: './upload-file.component.html',
    styleUrl: './upload-file.component.scss'
})
export class UploadFileComponent {
  fileProgressMap: {[key: string]: {progress: number, total: number}} = {};
  fileList: File[] = [];
  @Input() fileType: string = "";
  @Input() fileCategory: string = "";
  @Input() analysisGroupId: number = 0;

  @Output() fileUploaded: EventEmitter<ProjectFile> = new EventEmitter<ProjectFile>();

  allowFileType = ["csv", "tsv", "txt"]
  constructor(private web: WebService) {

  }

  async uploadData(event: Event){
    const files = (event.target as HTMLInputElement).files
    if (files) {
      this.fileList = []
      for (let i = 0; i < files.length; i++) {
        this.fileList.push(files[i])
        this.fileProgressMap[files[i].name] = {progress: 0, total: files[i].size}
      }
      for (let i = 0; i < files.length; i++) {
        await this.uploadFile(files[i]);
      }
    }
  }

  getFileExntension(file: File) {
    const parts = file.name.split(".");
    if (parts.length > 1) {
      return parts[parts.length - 1]
    }
    return ""
  }

  private async uploadFile(file: File) {
    const chunkSize = 1024 * 1024;
    const fileSize = file.size;
    const hashObj = new jsSHA("SHA-256", "ARRAYBUFFER");
    this.fileType = this.getFileExntension(file);

    if (this.allowFileType.indexOf(this.fileType) === -1) {
      return;
    }
    if (chunkSize > fileSize) {
      const chunk = await file.arrayBuffer();
      hashObj.update(chunk)
      const hashDigest = hashObj.getHash("HEX");
      const result = await this.web.uploadDataChunkComplete("", hashDigest, file, file.name).toPromise()
      this.fileProgressMap[file.name].progress = fileSize;
      if (result?.completed_at) {
        this.web.bindUploadedFile(this.analysisGroupId, this.fileType, this.fileCategory, file.name, result?.id).subscribe((data) => {

          this.fileUploaded.emit(data)
        })
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
        hashObj.update(chunk)
        const filePart = new File([chunk], file.name, {type: file.type})
        console.log(filePart.size)
        const contentRange = `bytes ${currentOffset}-${end - 1}/${fileSize}`;
        console.log(contentRange)
        const result = await this.web.uploadDataChunk(currentURL, filePart, file.name, contentRange).toPromise()
        if (result) {
          currentURL = result.url;
          currentOffset = result.offset;
          this.fileProgressMap[file.name].progress = currentOffset;
        }
      }
      if (currentURL !== "") {
        const hashDigest = hashObj.getHash("HEX");
        const result = await this.web.uploadDataChunkComplete(currentURL, hashDigest).toPromise()
        if (result?.completed_at) {
          this.web.bindUploadedFile(this.analysisGroupId, this.fileType, this.fileCategory, file.name, result?.id).subscribe((data) => {
            this.fileProgressMap[file.name].progress = fileSize;
            this.fileUploaded.emit(data)
          })
        }
      }
    }
  }
}
