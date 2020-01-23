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
import { RecordState } from './record/record.state';
import { recordReducer } from './record/record.reducer';
import { RecordValueState } from './record/record-value.state';
import { recordValueReducer } from './record/record-value.reducer';

export interface State {
  user: UserState;
  systemInfo: SystemInfoState;
  router: RouterReducerState;
  form: FormState;
  record: RecordState;
  recordValue: RecordValueState;
}

export const reducers: ActionReducerMap<State> = {
  user: userReducer,
  systemInfo: systemInfoReducer,
  router: routerReducer,
  form: formReducer,
  record: recordReducer,
  recordValue: recordValueReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [storeFreeze]
  : [];

/**
 * Root state selector
 */
export const getRootState = (state: State) => state;
