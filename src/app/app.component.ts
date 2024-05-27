import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {AuthService} from "./auth.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineCalculator';
  library = 'cpp';

  constructor(private translate: TranslateService, private authService: AuthService) {
    translate.setDefaultLang('by');
    translate.use('by');
  }

  changeLanguage(event: any): void {
    const lang = event.target.value;
    if (lang) {
      this.translate.use(lang);
    }
  }

  changeLibrary(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const library = selectElement.value;
    this.authService.changeLibrary(library);
  }
}
