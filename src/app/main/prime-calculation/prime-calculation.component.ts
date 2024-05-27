import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthService} from "../../auth.service";

@Component({
  selector: 'prime-calculation',
  templateUrl: './prime-calculation.component.html',
  styleUrls: ['./prime-calculation.component.css']
})
export class PrimeCalculationComponent {
  start: number = 2;
  max: number = 10000000;
  threads: number = 4;
  cycleParam: number = 10000;
  result: string = '';
  time: string = '';
  error: string = '';
  constructor(private http: HttpClient, private authService: AuthService) {

  }

  calculate() {
    const request = {
      start: this.start,
      max: this.max,
      threads: this.threads,
      cycleParam: this.cycleParam
    };

    this.authService.calculatePrimeCount(request).subscribe(
      (response) => {
        this.result = response.result;
        this.time = response.time;
      },
      (error) => {
        this.error = error;
      }
    );
  }




  // Пример использования других методов контроллера аналогичны
}
