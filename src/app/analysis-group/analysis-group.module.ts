import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AnalysisGroupComponent} from "./analysis-group.component";

const routes: Routes = [
  {
    path: '',
    component: AnalysisGroupComponent,
  },
  {
    path: ':analysisGroupID',
    component: AnalysisGroupComponent
  }
  ]


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class AnalysisGroupModule { }
