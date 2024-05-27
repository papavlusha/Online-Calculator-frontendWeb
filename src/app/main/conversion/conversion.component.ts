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

  constructor(private http: HttpClient, private authService: AuthService) {}

  convert(sourceBase: string, number: string) {
    let lib: string;

    this.authService.currentLibrary.subscribe(library => {
      if (library === 'Cpp') {
        lib = 'Cpp';
      } else if (library === 'Java') {
        lib = 'Java';
      }

      const request = { sourceBase, number, lib };
      this.authService.convertNumber(request).subscribe(response => {
        if (response.error) {
          console.error(response.error);
        } else {
          this.binary = response.binaryNumber;
          this.decimal = response.decimalNumber;
          this.octal = response.octalNumber;
          this.hexadecimal = response.hexadecimalNumber;
        }
      });
    });
  }
}
