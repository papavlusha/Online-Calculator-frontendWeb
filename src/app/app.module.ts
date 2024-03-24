import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import {RegistrationComponent} from "./registration/registration.component";
import {LoginComponent} from "./login/login.component";
import {MainActivityModule} from "./main-activity/main-activity.module";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    MainActivityModule,
    HttpClientModule
  ],
  providers: [],
  exports: [
    LoginComponent,
    RegistrationComponent
  ],
  bootstrap: []
})
export class AppModule { }
