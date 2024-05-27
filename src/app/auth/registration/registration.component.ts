import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
//import { AuthService } from './auth.service';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { Router } from '@angular/router';
import {AuthService} from "../../auth.service";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  providers: [HttpClient, AuthService],
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  login: string = "";
  email: string = "";
  password: string = "";
  confirmPassword: string = "";

  constructor(private authService: AuthService, private router: Router) {
  }

  register(): void {
    if (this.password !== this.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    const userData = {
      login: this.login,
      email: this.email,
      password: this.password
    };

    this.authService.register(userData).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
        alert('Registration successful');
        this.authService.setToken(response.accessToken);
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Registration failed', error);
        alert('Registration failed');
      }
    });
  }
}
