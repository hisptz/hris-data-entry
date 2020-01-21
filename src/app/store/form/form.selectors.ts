import { createSelector } from '@ngrx/store';
import { getRootState, State } from '../store.reducer';
import { formAdapter } from './form.state';

export const getFormState = createSelector(
  getRootState,
  (state: State) => state.form
);

export const { selectAll: getForms } = formAdapter.getSelectors(getFormState);
