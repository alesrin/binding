import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from '../login/login.module';
import { RegistertemplateComponent } from './registertemplate/registertemplate.component';



@NgModule({
  declarations: [
    RegistertemplateComponent
  ],
  imports: [
    CommonModule,
    LoginModule
  ]
})
export class RegisterModule { }
