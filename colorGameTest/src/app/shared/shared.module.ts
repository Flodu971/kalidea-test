import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field/form-field.component';
import { LoadingComponent } from './loading/loading.component';
import { IfUserDirectiveDirective } from './if-user-directive.directive';
import { IfNoUserDirectiveDirective } from './if-no-user-directive.directive';



@NgModule({
  declarations: [
    FormFieldComponent,
    LoadingComponent,
    IfUserDirectiveDirective,
    IfNoUserDirectiveDirective
  ],
  exports: [
    LoadingComponent,
    IfUserDirectiveDirective,
    IfNoUserDirectiveDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
