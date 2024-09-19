import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UserComponent} from "./user.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {
    path: "",
    component: UserComponent,
  },
  {
    path: "register/:token",
    component: RegisterComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class UserModule { }
