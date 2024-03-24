import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8082/CarRentalApp'; // Базовый URL Spring Boot приложения

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const loginData = {
      email: email,
      password: password
    };

    return this.httpClient.post<any>(`${this.baseUrl}/login`, loginData, { headers })
      .pipe(
        catchError((error: any) => {
          console.error(error);
          return throwError(error);
        })
      );
  }
}
