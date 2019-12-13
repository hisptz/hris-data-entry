import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../../environments/environment';
import { SystemInfoState } from './system-info/system-info.state';
import { UserState } from './user/user.state';
import { systemInfoReducer } from './system-info/system-info.reducer';
import { userReducer } from './user/user.reducer';
import { FormState } from './form/form.state';
import { formReducer } from './form/form.reducer';

export interface State {
  user: UserState;
  systemInfo: SystemInfoState;
  router: RouterReducerState;
  form: FormState;
}

export const reducers: ActionReducerMap<State> = {
  user: userReducer,
  systemInfo: systemInfoReducer,
  router: routerReducer,
  form: formReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [storeFreeze]
  : [];

/**
 * Root state selector
 */
export const getRootState = (state: State) => state;
