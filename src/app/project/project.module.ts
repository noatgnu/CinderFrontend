import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ProjectComponent} from "./project.component";

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent
  },
  {
    path: ':projectID',
    component: ProjectComponent
  }
  ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class ProjectModule { }
