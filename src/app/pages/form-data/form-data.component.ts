import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { formsMetadata } from '../../../assets/dummy-data/forms';
import { userDummyData } from '../../../assets/dummy-data/dummyUserData';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {

  forms: any = formsMetadata;
  elementData: any[] = userDummyData;
  tableHeaders: string[] = ['index', 'name', 'designation', 'lastupdated', 'actions'];
  dataSource = new MatTableDataSource<any>(this.elementData);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
  }

}
