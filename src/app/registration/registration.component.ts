import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import { AuthService } from './auth.service';
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-registration',
  standalone: true,
  templateUrl: './registration.component.html',
  imports: [
    RouterLink,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClient, AuthService],
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  username: string = "";
  email: string = "";
  password: string = "";
  confirmPassword: string = "";

  constructor(private authService: AuthService) {
  }

  register(): void {
    if (this.password !== this.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    const userData = {
      login: this.username,
      email: this.email,
      password: this.password
    };

    this.authService.register(userData).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
      },
      error: (error) => {
        console.error('Registration failed', error);
      }
    });
  }
}
