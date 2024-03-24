import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import { AuthService } from './auth.service';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-registration',
  standalone: true,
  templateUrl: './registration.component.html',
  imports: [
    RouterLink,
    FormsModule
  ],
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  username: string = "";
  email: string = "";
  password: string = "";
  confirmPassword: string = "";
  // если разкоментить форма не отображается, так как проблемы с инициализацией
  // как я понял когда правильно подключишься  должно быть лучше
  // constructor(private authService: AuthService) { }

  register(): void {
    if (this.password !== this.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    const userData = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    // this.authService.register(userData)
    //   .subscribe(
    //     response => {
    //       console.log('Registration successful');
    //       // Здесь вы можете добавить перенаправление на страницу входа или другие действия по вашему усмотрению
    //     },
    //     error => {
    //       console.error('Registration failed:', error);
    //       // Здесь вы можете обработать ошибки регистрации, например, отображение сообщений об ошибке пользователю
    //     }
    //   );
  }
}
