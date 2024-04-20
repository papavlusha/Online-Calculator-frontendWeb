import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {RegistrationComponent} from "./auth/registration/registration.component";
import {LoginComponent} from "./auth/login/login.component";
import {AppModule} from "./app.module";
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import {AuthModule} from "./auth/auth.module";
import {MainModule} from "./main/main.module";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    AuthModule,
    MainModule
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  // constructor(private translate: TranslateService) {
  //   // Устанавливаем язык по умолчанию
  //   this.translate.setDefaultLang('en');
  //   // Загружаем языковые файлы
  //   this.translate.use('en');
  // }
  // changeLanguage() {
  //   // Implement language change logic here
  //   this.translate.use('en');
  //   console.log('Change language logic goes here');
  // }
  title = 'OnlineCalculator';
}
