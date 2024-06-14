import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SearchSessionComponent} from "./search-session.component";

const routes: Routes = [
  {
    path: '',
    component: SearchSessionComponent
  },
  {
    path: ':searchID',
    component: SearchSessionComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class SearchSessionModule { }
