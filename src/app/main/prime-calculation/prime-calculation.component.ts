import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthService} from "../../auth.service";

@Component({
  selector: 'prime-calculation',
  templateUrl: './prime-calculation.component.html',
  styleUrls: ['./prime-calculation.component.css']
})
export class PrimeCalculationComponent {
  constructor(private http: HttpClient, private authService: AuthService) {
    this.ax = 0;
    this.start = 0;
    this.threads = 1;
    this.cycleParam = 1;
    // @ts-ignore
    this.result = null;
  }

  ax: number;
  start: number;
  threads: number;
  cycleParam: number;
  result: { time: number, speedup: number, primeCount: number };



  calculatePrimes() {
    const params = {
      ax: this.ax,
      start: this.start,
      threads: this.threads,
      cycleParam: this.cycleParam
    };

    this.http.post<any>('/api/calculate-primes', params).subscribe(response => {
      this.result = {
        time: response.time,
        speedup: response.speedup,
        primeCount: response.primeCount
      };
    });
  }


  // Пример использования других методов контроллера аналогичны
}
