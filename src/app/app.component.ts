import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineCalculator';
  library = 'cpp';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('by');
    translate.use('by');
  }

  changeLanguage(event: any): void {
    const lang = event.target.value;
    if (lang) {
      this.translate.use(lang);
    }
  }

  changeLibrary(event: any): void {

  }
}
