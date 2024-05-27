import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// Интерфейсы для типизации
export interface UserData {
  username: string;
  email: string;
  password: string;
}

export interface LoginData {
  login: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    username: string;
    email: string;
  };
}

interface PrimeCountRequest {
  start: number;
  max: number;
  threads: number;
  cycleParam: number;
}


interface ErrorResponse {
  error: string;
}

interface PrimeCountResponse {
  result: string;
  time: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8082/OnlineCalculator';

  constructor(private httpClient: HttpClient) { }

  register(userData: UserData): Observable<AuthResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.httpClient.post<AuthResponse>(`${this.baseUrl}/signup`, userData, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  login(login: string, password: string): Observable<AuthResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const loginData: LoginData = { login, password };

    return this.httpClient.post<AuthResponse>(`${this.baseUrl}/signin`, loginData, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  calculatePrimeCount(request: PrimeCountRequest): Observable<PrimeCountResponse> {
    const url = `${this.baseUrl}/prime-count`;
    return this.httpClient.post<PrimeCountResponse>(url, request, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(
      catchError(this.handleError)
    );
  }

  // Универсальный обработчик ошибок
  private handleError(error: any): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Server-side error: ${error.status} ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
