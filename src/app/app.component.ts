import { Component, OnInit } from '@angular/core';
import { formsMetadata } from '../assets/dummy-data/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  forms: any = formsMetadata;

  constructor() {}

  ngOnInit() {}

}
