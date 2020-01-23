import { createSelector } from '@ngrx/store';

import { getRootState, State } from '../store.reducer';
import { recordAdapter } from './record.state';
import { getRecordValueEntities } from './record-value.selectors';
import { Record } from 'src/app/models/record.model';
import { groupBy, keys } from 'lodash';
import { RecordValue } from 'src/app/models/record-value.model';

export const getRecordState = createSelector(
  getRootState,
  (state: State) => state.record
);

export const {
  selectAll: getRecords,
  selectEntities: getRecordEntities
} = recordAdapter.getSelectors(getRecordState);

export const getRecordsValuesBasedOnFieldId = createSelector(
  getRecords,
  getRecordValueEntities,
  (records: Record[], recordValueEntities: any) => {
    return (records || []).map((record: Record) => {
      const sanitizedRecordValues = { id: record.id };

      (record.recordValues || [])
        .map((recordValueId: string) => recordValueEntities[recordValueId])
        .forEach((recordValue: RecordValue) => {
          if (recordValue) {
            sanitizedRecordValues[recordValue.fieldId] = recordValue.value;
          }
        });

      return sanitizedRecordValues;
    });
  }
);
