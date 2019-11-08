import { Component, OnInit, ViewChild } from '@angular/core';
import { OrgUnitFilterConfig } from '@iapps/ngx-dhis2-org-unit-filter';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { go } from 'src/app/store/actions';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
];

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
  orgUnitFilterConfig: OrgUnitFilterConfig;
  recordTypes: any[];
  displayedColumns: string[] = [
    'position',
    'name',
    'age',
    'current-designation',
    'last-updated',
    'actions'
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.dataSource.sort = this.sort;

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

  onSelectRecord(e, record) {
    e.stopPropagation();
    this.store.dispatch(go({ path: [`record/${record.position}`] }));
  }
}
