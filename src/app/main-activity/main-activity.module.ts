// main-activity.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MainActivityRoutingModule } from './main-activity-routing.module';
import { MatrixComponent } from './matrix/matrix.component';
import { ConversionComponent } from './conversion/conversion.component';
import { MainActivityComponent } from "./main-activity.component";
import {FormsModule} from "@angular/forms";
import {RouterLink, RouterOutlet} from "@angular/router";

@NgModule({
  declarations: [
    MainActivityComponent
  ],
  imports: [
    CommonModule,
    // MainActivityRoutingModule,
    MatrixComponent,
    ConversionComponent,
    FormsModule,
    RouterOutlet,
    RouterLink
  ]
})
export class MainActivityModule { }
