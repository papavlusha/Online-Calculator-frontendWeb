import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthService} from "../../auth.service";

@Component({
  selector: 'prime-calculation',
  templateUrl: './prime-calculation.component.html',
  styleUrls: ['./prime-calculation.component.css']
})
export class PrimeCalculationComponent {
  constructor(private http: HttpClient, private authService: AuthService) {}

  calculatePrimes(max: number, start: number, threads: number, cycleParam: number): void {
    const requestData = {max, start, threads, cycleParam};


    // @ts-ignore
    this.authService.login().subscribe(token => {
      const headers = {'Authorization': `Bearer ${token}`};

      this.http.post('http://localhost:8082/OnlineCalculator/primes', requestData, {headers})
        .subscribe(response => {
          console.log('Primes calculation successful', response);
        }, error => {
          console.error('Primes calculation error', error);
        });
    });
  }
  // Пример использования других методов контроллера аналогичны
}
