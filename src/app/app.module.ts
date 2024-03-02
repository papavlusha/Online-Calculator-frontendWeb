import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import {RegistrationComponent} from "./registration/registration.component";
import {LoginComponent} from "./login/login.component"; // Убедитесь, что AppComponent импортирован из соответствующего файла

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
  ],
  providers: [],
  exports: [
    LoginComponent,
    RegistrationComponent
  ],
  bootstrap: []
})
export class AppModule { }
