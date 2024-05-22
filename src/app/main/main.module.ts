import { NgModule } from '@angular/core';
import {CommonModule, NgForOf} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {MatrixComponent} from "./matrix/matrix.component";
import {MainActivityComponent} from "./main-activity/main-activity.component";
import {HomeComponent} from "./home/home.component";
import {ConversionComponent} from "./conversion/conversion.component";
import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {ChatComponent} from "./chat/chat.component";
import {PrimeCalculationComponent} from "./prime-calculation/prime-calculation.component";


@NgModule({
  declarations: [MatrixComponent,
    MainActivityComponent,
    HomeComponent,
    ConversionComponent,
    ChatComponent,
    PrimeCalculationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgForOf,
    RouterModule,
    TranslateModule
  ]
})
export class MainModule { }
