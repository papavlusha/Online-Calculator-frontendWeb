import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent {
  rows: number = 0;
  cols: number = 0;
  matrixA: any[][] = [];
  matrixB: any[][] = [];
  result: number = 0;
  // buttons: number[] = [1, 2, 3, 4, 5, 6, 7];
  buttons: string[] = ['Найти определитель', 'Найти оратную', 'Транспонировать', 'Умножить на А', 'A+B', 'A*B', 'A-B'];


  createMatrix(): void {
    this.matrixA = [];
    for (let i = 0; i < this.rows; i++) {
      let row: any[] = [];
      for (let j = 0; j < this.cols; j++) {
        row.push('');
      }
      this.matrixA.push(row);
    }

    // Assuming matrixB has the same dimensions as matrixA initially
    this.matrixB = [];
    for (let i = 0; i < this.rows; i++) {
      let row: any[] = [];
      for (let j = 0; j < this.cols; j++) {
        row.push('');
      }
      this.matrixB.push(row);
    }
  }

  handleButtonClick(value: string): void {
    // Handle button click logic here
  }
}
