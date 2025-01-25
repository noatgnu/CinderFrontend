import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder} from "@angular/forms";
import jsSHA from "jssha";
import {WebService} from "../../../web.service";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";

@Component({
    selector: 'app-analysis-group-metadata-import',
    imports: [
        MatIconButton,
        MatButton,
        MatMenu,
        MatMenuItem,
        MatMenuTrigger
    ],
    templateUrl: './analysis-group-metadata-import.component.html',
    styleUrl: './analysis-group-metadata-import.component.scss'
})
export class AnalysisGroupMetadataImportComponent {
  importTypes: string[] = ["Spectronaut Condition Setup File", "SDRF"]
  fileProgressMap: {[key: string]: {progress: number, total: number}} = {};
  fileList: File[] = [];

  @Input() analysisGroupId: number = 0;


  fileType: string = ""
  allowFileType: string[] = ["csv", "txt", "tsv"]

  @Output() fileUploaded = new EventEmitter<any>()

  constructor(private web: WebService) {

  }

  submit() {

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
    const extension = this.getFileExntension(file);
    if (this.allowFileType.indexOf(extension) === -1) {
      return;
    }
    if (chunkSize > fileSize && this.web.searchSessionID) {
      const chunk = await file.arrayBuffer();
      hashObj.update(chunk)
      const hashDigest = hashObj.getHash("HEX");
      const result = await this.web.uploadDataChunkComplete("", hashDigest, file, file.name).toPromise()
      this.fileProgressMap[file.name].progress = fileSize;
      console.log(result)
      if (result?.completed_at) {
        this.web.bindUploadedMetadataFile(this.analysisGroupId, result?.id, this.fileType, this.web.searchSessionID).subscribe((data) => {

          //this.fileUploaded.emit(data)
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
        if (result?.completed_at && this.web.searchSessionID) {
          this.web.bindUploadedMetadataFile(this.analysisGroupId, result?.id, this.fileType, this.web.searchSessionID).subscribe((data) => {
            this.fileProgressMap[file.name].progress = fileSize;
            //this.fileUploaded.emit(data)
          })
        }
      }
    }
  }

}
