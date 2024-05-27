import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../auth.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [HttpClient, AuthService],
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  login: string = '';
  password: string = '';
  token: string = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  sign_in(): void {
    this.authService.login(this.login, this.password).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        alert('Login successful');
        console.log(response)
        console.log(response.accessToken)
        this.authService.setToken(response.accessToken);
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Login failed', error);
        alert('Login failed');
      }
    });
  }

}
