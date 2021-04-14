import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field/form-field.component';
import { LoadingComponent } from './loading/loading.component';
import { IfUserDirectiveDirective } from './if-user-directive.directive';
import { IfNoUserDirectiveDirective } from './if-no-user-directive.directive';
import { FormFieldInputDirective } from './form-field-input.directive';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    FormFieldComponent,
    LoadingComponent,
    IfUserDirectiveDirective,
    IfNoUserDirectiveDirective,
    FormFieldInputDirective
  ],
  exports: [
    LoadingComponent,
    IfUserDirectiveDirective,
    IfNoUserDirectiveDirective,
    FormFieldComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
