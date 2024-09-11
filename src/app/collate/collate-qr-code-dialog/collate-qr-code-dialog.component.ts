import {Component, Input} from '@angular/core';
import {NgxQrcodeStylingModule, Options} from "ngx-qrcode-styling";
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-collate-qr-code-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    NgxQrcodeStylingModule,
    MatDialogActions,
    MatButton
  ],
  templateUrl: './collate-qr-code-dialog.component.html',
  styleUrl: './collate-qr-code-dialog.component.scss'
})
export class CollateQrCodeDialogComponent {
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

  constructor(private dialogRef: MatDialogRef<CollateQrCodeDialogComponent>) {
  }

  close() {
    this.dialogRef.close()
  }
}
