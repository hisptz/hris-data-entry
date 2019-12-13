import { createReducer, on } from '@ngrx/store';

import {
  addCurrentUser,
  loadCurrentUser,
  loadCurrentUserFail
} from './user.actions';
import { initialUserState, UserState } from './user.state';
import {
  loadingBaseState,
  loadedBaseState,
  errorBaseState
} from '../base.state';

export const reducer = createReducer(
  initialUserState,
  on(loadCurrentUser, state => ({
    ...state,
    ...loadingBaseState
  })),
  on(addCurrentUser, (state, { currentUser }) => ({
    ...state,
    ...loadedBaseState,
    currentUser
  })),
  on(loadCurrentUserFail, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    error
  }))
);

export function userReducer(state, action): UserState {
  return reducer(state, action);
}
