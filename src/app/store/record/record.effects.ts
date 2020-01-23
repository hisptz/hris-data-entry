import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RecordService } from 'src/app/services/record.service';
import {
  loadRecords,
  handleLoadRecordsError,
  addRecords
} from './record.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ErrorMessage } from '@iapps/ngx-dhis2-http-client';
import { sanitizeRecordListAndValues } from 'src/app/helpers/sanitize-record-list.helper';
import { of } from 'rxjs';
import { Record } from 'src/app/models/record.model';
import { RecordValue } from 'src/app/models/record-value.model';
import { addRecordValues } from './record-value.actions';

@Injectable()
export class RecordEffects {
  loadRecords$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRecords),
      switchMap(() =>
        this.recordService.findAll().pipe(
          switchMap((recordsResponse: any[]) => {
            const recordDetails: {
              records: Record[];
              recordValues: RecordValue[];
            } = sanitizeRecordListAndValues(recordsResponse);
            return [
              addRecords({ records: recordDetails.records }),
              addRecordValues({ recordValues: recordDetails.recordValues })
            ];
          }),
          catchError((error: ErrorMessage) =>
            of(handleLoadRecordsError({ error }))
          )
        )
      )
    )
  );

  ngrxOnInitEffects() {
    return loadRecords();
  }

  constructor(
    private actions$: Actions,
    private recordService: RecordService
  ) {}
}
