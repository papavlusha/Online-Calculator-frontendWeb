import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: "./home.component.html",
  imports: [
    RouterLink
  ],
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
