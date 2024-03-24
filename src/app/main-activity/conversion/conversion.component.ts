import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-conversion',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './conversion.component.html',
  styleUrl: './conversion.component.css'
})

export class ConversionComponent {
  decimal: number = 0;
  binary: string = '0';
  octal: string = '0';
  hexadecimal: string = '0';

  convertFromDecimal() {
    const value = this.decimal;
    this.binary = value.toString(2);
    this.octal = value.toString(8);
    this.hexadecimal = value.toString(16).toUpperCase();
  }

  convertFromBinary() {
    const value = parseInt(this.binary.toString(), 2);
    this.decimal = value;
    this.octal = value.toString(8);
    this.hexadecimal = value.toString(16).toUpperCase();
  }

  convertFromOctal() {
    const value = parseInt(this.octal.toString(), 8);
    this.decimal = value;
    this.binary = value.toString(2);
    this.hexadecimal = value.toString(16).toUpperCase();
  }

  convertFromHexadecimal() {
    const value = parseInt(this.hexadecimal.toString(), 16);
    this.decimal = value;
    this.binary = value.toString(2);
    this.octal = value.toString(8);
  }

}
