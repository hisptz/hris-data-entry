import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-public-employee-form',
  templateUrl: './public-employee-form.component.html',
  styleUrls: ['./public-employee-form.component.css']
})
export class PublicEmployeeFormComponent implements OnInit {

  @Input() formname: any;
  
  constructor() { }

  ngOnInit() {
  }

}
