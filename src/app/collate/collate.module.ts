import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CollateComponent} from "./collate.component";
import {CollateViewComponent} from "./collate-view/collate-view.component";
import {CollateEditorComponent} from "./collate-editor/collate-editor.component";

const routes: Routes = [
  {
    component: CollateComponent,
    path: '',
  },
  {
    component: CollateViewComponent,
    path: 'view',
  },
  {
    component: CollateViewComponent,
    path: 'view/:collateId',
  },
  {
    component: CollateViewComponent,
    path: 'view/:collateId/:sessionId',
  },
  {
    component: CollateEditorComponent,
    path: 'edit',
  },
  {
    component: CollateEditorComponent,
    path: 'edit/:collateId',
  }

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class CollateModule { }
