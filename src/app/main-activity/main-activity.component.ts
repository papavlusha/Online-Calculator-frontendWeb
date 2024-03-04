// main-activity.component.ts

import { Component } from '@angular/core';
import {query} from "@angular/animations";

@Component({
  selector: 'main-activity',
  templateUrl: './main-activity.component.html',
  styleUrls: ['./main-activity.component.css']
})


export class MainActivityComponent {

  protected query = query;
  result: any;

  submitQuery() {

  }
}
