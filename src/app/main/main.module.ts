import { NgModule } from '@angular/core';
import {CommonModule, NgForOf} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {MatrixComponent} from "./matrix/matrix.component";
import {MainActivityComponent} from "./main-activity/main-activity.component";
import {HomeComponent} from "./home/home.component";
import {ConversionComponent} from "./conversion/conversion.component";
import {RouterLink, RouterOutlet} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [MatrixComponent,
    MainActivityComponent,
    HomeComponent,
    ConversionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgForOf,
    RouterOutlet,
    RouterLink,
    TranslateModule
  ]
})
export class MainModule { }
