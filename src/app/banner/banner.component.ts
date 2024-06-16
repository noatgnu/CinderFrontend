import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {AccountsService} from "../accounts/accounts.service";
import {WebService} from "../web.service";
import {MatDialog} from "@angular/material/dialog";
import {CreateProjectDialogComponent} from "../project/create-project-dialog/create-project-dialog.component";
import {
  CreateAnalysisGroupDialogComponent
} from "../analysis-group/create-analysis-group-dialog/create-analysis-group-dialog.component";

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatCard,
    MatCardSubtitle,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    MatIcon,
    MatCardActions,
    MatButton
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {

  projectCount = 0
  analysisGroupCount = 0

  constructor(public accounts: AccountsService, private web: WebService, private dialog: MatDialog) {
    this.web.getProjectCount().subscribe((data) => {
      this.projectCount = data.count
    })
    this.web.getAnalysisGroupCount().subscribe((data) => {
      this.analysisGroupCount = data.count
    })
  }

  openProjectCreateDialog() {
    const ref = this.dialog.open(CreateProjectDialogComponent)
    ref.afterClosed().subscribe((data) => {
      if (data) {
        this.web.createProject(data.name, data.description).subscribe((data) => {
          this.web.getProjectCount().subscribe((data) => {
            this.projectCount = data.count
          })
          window.open(`/#/project/${data.id}`, "_blank")
        })

      }
    })
  }

  openAnalysisGroupCreateDialog() {
    const ref = this.dialog.open(CreateAnalysisGroupDialogComponent)
    ref.componentInstance.enableProjectSelection = true
    ref.afterClosed().subscribe((data) => {
      if (data) {
        this.web.getAnalysisGroupCount().subscribe((data) => {
          this.analysisGroupCount = data.count
        })
        window.open(`/#/analysis-group/${data.id}`, "_blank")
      }
    })
  }

}
