import { createAction, props } from '@ngrx/store';
import { User, ErrorMessage } from '@iapps/ngx-dhis2-http-client';

export const loadCurrentUser = createAction('[User] Load current User');

export const addCurrentUser = createAction(
  '[User] Add Current User',
  props<{ currentUser: User }>()
);

export const loadCurrentUserFail = createAction(
  '[User] Load Current User fail',
  props<{ error: ErrorMessage }>()
);
