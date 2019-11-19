import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-selection',
  templateUrl: './form-selection.component.html',
  styleUrls: ['./form-selection.component.css']
})
export class FormSelectionComponent implements OnInit {

  isFormSelected: boolean;
  selectedForm: any;

  constructor() { }

  ngOnInit() {
  }

  formSelect(e) {
    this.isFormSelected = true;
    this.selectedForm =  e.target.value;
  }

}
