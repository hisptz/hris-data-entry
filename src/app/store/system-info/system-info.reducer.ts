import { createReducer, on } from '@ngrx/store';

import {
  addSystemInfo,
  loadSystemInfo,
  loadSystemInfoFail
} from '../system-info/system-info.actions';
import { initialSystemInfoState, SystemInfoState } from './system-info.state';
import {
  loadingBaseState,
  loadedBaseState,
  errorBaseState
} from '../base.state';

export const reducer = createReducer(
  initialSystemInfoState,
  on(loadSystemInfo, state => ({
    ...state,
    ...loadingBaseState
  })),
  on(addSystemInfo, (state, { systemInfo }) => ({
    ...state,
    ...loadedBaseState,
    systemInfo
  })),
  on(loadSystemInfoFail, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    error
  }))
);

export function systemInfoReducer(state, action): SystemInfoState {
  return reducer(state, action);
}
