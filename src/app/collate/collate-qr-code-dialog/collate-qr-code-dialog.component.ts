import {AfterViewInit, Component, Input} from '@angular/core';
import QRCodeStyling from "qr-code-styling";
import {Options} from "qr-code-styling";
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";

@Component({
    selector: 'app-collate-qr-code-dialog',
    imports: [
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
        MatButton
    ],
    templateUrl: './collate-qr-code-dialog.component.html',
    styleUrl: './collate-qr-code-dialog.component.scss'
})
export class CollateQrCodeDialogComponent implements AfterViewInit {
  private _url: string = ""
  @Input() set url(value: string) {
    this.config.data = value
    this._url = value
  }
  config: Options = {
    width: 250,
    height: 250,
    data: this.url,
    //image: "assets/favicon.png",
    margin: 5,
    dotsOptions: {
      color: "#780101",
      type: "dots",
    },
    backgroundOptions: {
      color: "#ffffff",
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 0
    }
    //image: "assets/favicon.png",
  }
  qrCode?: QRCodeStyling

  constructor(private dialogRef: MatDialogRef<CollateQrCodeDialogComponent>) {
  }

  ngAfterViewInit() {
    const qrCode = new QRCodeStyling(this.config);
    const canvas = document.getElementById("canvas")
    if (canvas) {
      qrCode.append(canvas)
    }
    this.qrCode = qrCode
  }

  close() {
    this.dialogRef.close()
  }

  download() {
    if (this.qrCode) {
      this.qrCode.download({
        name: "qrcode",
        extension: "svg"
      }).then(() => {

      })
    }
  }
}
