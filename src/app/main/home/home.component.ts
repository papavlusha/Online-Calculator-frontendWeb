import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {TranslateModule, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-home',
  templateUrl: "./home.component.html",
  styleUrl: './home.component.css'
})
export class HomeComponent {


      constructor(private translate: TranslateService) {
          // Устанавливаем язык по умолчанию
          this.translate.setDefaultLang('en');
          // Загружаем языковые файлы
          this.translate.use('en');
        }

}
