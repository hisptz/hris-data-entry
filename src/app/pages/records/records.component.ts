import { Component, OnInit, ViewChild } from '@angular/core';
import { OrgUnitFilterConfig } from '@iapps/ngx-dhis2-org-unit-filter';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/store.reducer';
import { go } from 'src/app/store/router/router.actions';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
  orgUnitFilterConfig: OrgUnitFilterConfig;
  recordTypes: any[];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.orgUnitFilterConfig = {
      singleSelection: true,
      showOrgUnitLevelGroupSection: false,
      showUserOrgUnitSection: false
    };

    this.recordTypes = [
      {
        id: 'PRIVATE',
        name: 'Employee Form'
      },
      {
        id: 'PUBLIC',
        name: 'Sponsorship form'
      }
    ];
  }

  onSelectRecord(record) {
    this.store.dispatch(go({ path: [`record/${record.position}`] }));
  }
}
