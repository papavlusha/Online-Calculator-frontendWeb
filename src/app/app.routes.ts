import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./main/home/home.component";
import {RegistrationComponent} from "./auth/registration/registration.component";
import {LoginComponent} from "./auth/login/login.component";
import {MainActivityComponent} from "./main/main-activity/main-activity.component";
import {MatrixComponent} from "./main/matrix/matrix.component";
import {ConversionComponent} from "./main/conversion/conversion.component";
import {NgModule} from "@angular/core";
import {ChatComponent} from "./main/chat/chat.component";
import {PrimeCalculationComponent} from "./main/prime-calculation/prime-calculation.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'main-activity',
    component: MainActivityComponent,
    children: [
      { path: 'matrix', component: MatrixComponent },
      { path: 'conversion', component: ConversionComponent },
      { path: 'chat', component: ChatComponent},
      { path: 'prime-calculation', component: PrimeCalculationComponent}
    ]},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
