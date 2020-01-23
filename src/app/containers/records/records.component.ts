import { Component, OnInit } from '@angular/core';
import { OrgUnitFilterConfig } from '@iapps/ngx-dhis2-org-unit-filter';
import { Store, select } from '@ngrx/store';
import { go } from 'src/app/store/router/router.actions';
import { State } from 'src/app/store/store.reducer';
import { Observable } from 'rxjs';
import { FormModel } from 'src/app/models/form.model';
import {
  getForms,
  getCurrentFormId,
  getCurrentFieldIdsForRecordList,
  getCurrentFieldEntities
} from 'src/app/store/form/form.selectors';
import { setCurrentForm } from 'src/app/store/form/form.actions';
import { getRecordsValuesBasedOnFieldId } from 'src/app/store/record/record.selectors';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
  orgUnitFilterConfig: OrgUnitFilterConfig;
  recordTypes: any[];
  forms$: Observable<FormModel[]>;
  currentFormId$: Observable<string>;
  fieldIds$: Observable<string[]>;
  fieldEntities$: Observable<any>;
  recordValues$: Observable<any[]>;
  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.forms$ = this.store.pipe(select(getForms));
    this.currentFormId$ = this.store.pipe(select(getCurrentFormId));
    this.fieldIds$ = this.store.pipe(select(getCurrentFieldIdsForRecordList));
    this.fieldEntities$ = this.store.pipe(select(getCurrentFieldEntities));
    this.recordValues$ = this.store.pipe(
      select(getRecordsValuesBasedOnFieldId)
    );

    this.orgUnitFilterConfig = {
      singleSelection: true,
      showOrgUnitLevelGroupSection: false,
      showUserOrgUnitSection: false
    };
  }

  onSelectRecord(record: any) {
    this.currentFormId$.pipe(take(1)).subscribe((currentFormId: string) => {
      this.store.dispatch(
        go({ path: [`form/${currentFormId}/record/${record.id}`] })
      );
    });
  }

  onSetCurrentForm({ value }) {
    this.store.dispatch(setCurrentForm({ currentFormId: value }));
  }
}
