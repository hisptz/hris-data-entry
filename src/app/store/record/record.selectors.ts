import { createSelector } from '@ngrx/store';

import { getRootState, State } from '../store.reducer';
import { recordAdapter } from './record.state';

export const getRecordState = createSelector(
  getRootState,
  (state: State) => state.record
);

export const {
  selectAll: getRecords,
  selectEntities: getRecordEntities
} = recordAdapter.getSelectors(getRecordState);
