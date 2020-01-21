import { Component, OnInit } from '@angular/core';
import { OrgUnitFilterConfig } from '@iapps/ngx-dhis2-org-unit-filter';
import { Store, select } from '@ngrx/store';
import { go } from 'src/app/store/router/router.actions';
import { State } from 'src/app/store/store.reducer';
import { Observable } from 'rxjs';
import { FormModel } from 'src/app/models/form.model';
import { getForms } from 'src/app/store/form/form.selectors';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
  orgUnitFilterConfig: OrgUnitFilterConfig;
  recordTypes: any[];
  forms$: Observable<FormModel[]>;
  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.forms$ = this.store.pipe(select(getForms));
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
