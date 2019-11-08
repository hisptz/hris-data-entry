import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-record',
  templateUrl: './manage-record.component.html',
  styleUrls: ['./manage-record.component.css']
})
export class ManageRecordComponent implements OnInit {
  recordTypes: any[];
  constructor() {}

  ngOnInit() {
    this.recordTypes = [
      {
        id: 'PRIVATE',
        name: 'Private'
      },
      {
        id: 'PUBLIC',
        name: 'Public'
      }
    ];
  }
}
