import { createReducer, Action, on } from '@ngrx/store';
import { initialRecordState, RecordState, recordAdapter } from './record.state';
import {
  loadRecords,
  addRecords,
  handleLoadRecordsError
} from './record.actions';
import {
  loadingBaseState,
  loadedBaseState,
  errorBaseState
} from '../base.state';

const reducer = createReducer(
  initialRecordState,
  on(loadRecords, state => ({
    ...state,
    ...loadingBaseState
  })),
  on(addRecords, (state, { records }) =>
    recordAdapter.addAll(records, { ...state, ...loadedBaseState })
  ),
  on(handleLoadRecordsError, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    error
  }))
);

export function recordReducer(state: RecordState, action: Action) {
  return reducer(state, action);
}
