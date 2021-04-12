import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'logout', component: LogoutComponent
      },
    ]
  },
];

@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
