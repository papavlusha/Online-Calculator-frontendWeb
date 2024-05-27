import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// Интерфейсы для типизации
export interface UserData {
  login: string;
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
    login: string;
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

interface ConvertRequest {
  sourceBase: string;
  number: string;
  lib: string;
}

interface ConvertResponse {
  binaryNumber: string;
  decimalNumber: string;
  octalNumber: string;
  hexadecimalNumber: string;
  error?: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8082/OnlineCalculator';

  private librarySource = 'Cpp';

  getLib() {
    return this.librarySource;
  }

  private token : string = "";

  setToken(token_ : string) {
    this.token = token_;
  }

  getToken() {
    return this.token;
  }

  constructor(private httpClient: HttpClient) { }

  changeLibrary(library: string) {
    this.librarySource = library;
  }

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
    const url = `${this.baseUrl}/primes`;
    return this.httpClient.post<PrimeCountResponse>(url, request, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(
      catchError(this.handleError)
    );
  }

  convertNumber(request: ConvertRequest): Observable<ConvertResponse> {
    const url = `${this.baseUrl}/converter`;
    return this.httpClient.post<ConvertResponse>(url, request, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'  ,
        'Authorization': `Bearer ${this.token}`
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
