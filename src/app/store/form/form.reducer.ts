import { createReducer, Action, on } from '@ngrx/store';
import { initialFormState, FormState, formAdapter } from './form.state';
import {
  loadForms,
  addForms,
  handleLoadFormsError,
  setCurrentForm
} from './form.actions';
import {
  loadingBaseState,
  loadedBaseState,
  errorBaseState
} from '../base.state';

const reducer = createReducer(
  initialFormState,
  on(loadForms, state => ({
    ...state,
    ...loadingBaseState
  })),
  on(addForms, (state, { forms }) =>
    formAdapter.addAll(forms, { ...state, ...loadedBaseState })
  ),
  on(handleLoadFormsError, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    error
  })),
  on(setCurrentForm, (state, { currentFormId }) => ({
    ...state,
    currentFormId
  }))
);

export function formReducer(state: FormState, action: Action) {
  return reducer(state, action);
}
