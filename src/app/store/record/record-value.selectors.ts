import { createSelector } from '@ngrx/store';

import { getRootState, State } from '../store.reducer';
import { recordValueAdapter } from './record-value.state';

export const getRecordValueState = createSelector(
  getRootState,
  (state: State) => state.recordValue
);

export const {
  selectAll: getRecordValues,
  selectEntities: getRecordValueEntities
} = recordValueAdapter.getSelectors(getRecordValueState);
