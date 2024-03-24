import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "./auth.service";
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [
    RouterLink,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClient, AuthService],
  styleUrl: './login.component.css'
})

export class LoginComponent {
  login: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  sign_in(): void {
    this.authService.login(this.login, this.password).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        alert('Login successful');
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Login failed', error);
      }
    });
  }

}
