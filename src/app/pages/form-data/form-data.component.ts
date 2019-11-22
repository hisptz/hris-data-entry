import { Component, OnInit } from '@angular/core';
import { recordType } from '../../../assets/dummy-data/forms';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {

  recordTypes: any[] = recordType;
  constructor() { }

  ngOnInit() {
  }

}
