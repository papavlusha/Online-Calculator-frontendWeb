import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: "./home.component.html",
  styleUrl: './home.component.css'
})
export class HomeComponent {
  downloadFile() {
    const link = document.createElement('a');
    link.href = 'assets/about.pdf';  // путь к вашему файлу в папке assets
    link.download = 'about.pdf';  // имя файла для скачивания
    link.click();
  }
}
