import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RegistrationComponent} from "./registration/registration.component";
import {LoginComponent} from "./login/login.component";
import {MainActivityComponent} from "./main-activity/main-activity.component";
import {MatrixComponent} from "./main-activity/matrix/matrix.component";
import {ConversionComponent} from "./main-activity/conversion/conversion.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'main-activity',
    component: MainActivityComponent,
    children: [
      { path: 'matrix', component: MatrixComponent },
      { path: 'conversion', component: ConversionComponent }
    ]},
  { path: '**', redirectTo: '' }
];

export class AppRoutingModule { }
