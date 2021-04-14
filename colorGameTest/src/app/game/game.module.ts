import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponent } from './new/new.component';
import { CaseComponent } from './case/case.component';
import { RouterModule, Routes } from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'new', component: NewComponent
      },
    ]
  },

];

@NgModule({
  declarations: [
    NewComponent,
    CaseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class GameModule { }
