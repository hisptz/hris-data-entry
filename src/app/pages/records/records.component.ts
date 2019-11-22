import { Component, OnInit, ViewChild } from '@angular/core';
import { userDummyData } from 'src/assets/dummy-data/dummyUserData';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {

  elementData: any[] = userDummyData;
  tableHeaders: string[] = ['index', 'name', 'designation', 'lastupdated', 'actions'];
  dataSource = new MatTableDataSource<any>(this.elementData);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
  }

}
