import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {AuthService} from "./auth.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [
    RouterLink,
    FormsModule
  ],
  styleUrl: './login.component.css'
})

export class LoginComponent {
  email: string = '';
  password: string = '';
  // смотреть комент к регистрации

  // constructor(private authService: AuthService) { }

  login(): void {
    // this.authService.login(this.email, this.password)
    //   .subscribe(
    //     response => {
    //       console.log('Login successful');
    //       // Здесь вы можете добавить перенаправление на главную страницу или другие действия по вашему усмотрению
    //     },
    //     error => {
    //       console.error('Login failed:', error);
    //       // Здесь вы можете обработать ошибки аутентификации, например, отображение сообщений об ошибке пользователю
    //     }
    //   );
  }

}
