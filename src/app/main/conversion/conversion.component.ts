import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrl: './conversion.component.css'
})

export class ConversionComponent {
  binary: string = '0';
  octal: string = '0';
  decimal: string = '0';
  hexadecimal: string = '0';
  lib: string = 'Cpp'
  constructor(private http: HttpClient, private authService: AuthService) {}

  convert(sourceBase: string, number: string, lib: string) {

      lib = this.authService.getLib();
      const request = { sourceBase, number, lib};
      this.authService.convertNumber(request).subscribe(
        response => {
          this.binary = response.binaryNumber;
          this.decimal = response.decimalNumber;
          this.octal = response.octalNumber;
          this.hexadecimal = response.hexadecimalNumber;
        },
        error => {
          console.error('Ошибка при выполнении запроса:', error);
        }
      );
  }


  convertFromBinary() {
    this.convert('2', this.binary, this.lib);
  }

  convertFromOctal() {
    this.convert('8', this.octal, this.lib);
  }

  convertFromDecimal() {
    this.convert('10', this.decimal, this.lib);
  }

  convertFromHexadecimal() {
    this.convert('16', this.hexadecimal, this.lib);
  }
}
