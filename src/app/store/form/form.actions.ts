import { createAction } from '@ngrx/store';

export const loadForms = createAction('[Form] Load all forms');
export const addForms = createAction('[Form] Add all forms');
export const handleLoadFormsError = createAction(
  '[Form] Handle load form errors'
);
