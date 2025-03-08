import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './modules/login/login.module';
import { RegisterModule } from './modules/register/register.module';
import { FormsModule } from '@angular/forms';
import { EcommerceModule } from './modules/ecommerce/ecommerce.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RegisterModule,
    FormsModule,
    EcommerceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
