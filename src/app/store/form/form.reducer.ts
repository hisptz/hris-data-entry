import { createReducer, Action } from '@ngrx/store';
import { initialFormState, FormState } from './form.state';

const reducer = createReducer(initialFormState);

export function formReducer(state: FormState, action: Action) {
  return reducer(state, action);
}
