import { Action, createReducer, on } from '@ngrx/store';

import { loadedBaseState } from '../base.state';
import { addRecordValues } from './record-value.actions';
import {
  initialRecordValueState,
  recordValueAdapter,
  RecordValueState
} from './record-value.state';

const reducer = createReducer(
  initialRecordValueState,
  on(addRecordValues, (state, { recordValues }) =>
    recordValueAdapter.addAll(recordValues, { ...state, ...loadedBaseState })
  )
);

export function recordValueReducer(state: RecordValueState, action: Action) {
  return reducer(state, action);
}
