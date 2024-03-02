import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-registration',
  standalone: true,
  templateUrl: './registration.component.html',
  imports: [
    RouterLink
  ],
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

}
