import { Component, OnInit } from '@angular/core';
import * as fromHelpers from './shared/helpers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isFormSelected: boolean;
  isPeriodSelected: boolean;
  selectedForm: any;
  periods: any[];

  constructor() {
    this.periods = fromHelpers.getPeriodsBasedOnType('Yearly', new Date().getFullYear());
  }

  ngOnInit() {}

  

  periodSelect(e) {
    this.isPeriodSelected = true;
  }
}
