import { createSelector } from '@ngrx/store';
import { getRootState, State } from '../store.reducer';
import { formAdapter, FormState } from './form.state';
import { FormModel } from 'src/app/models/form.model';
import { Field } from 'src/app/models/field.model';
import { take, sortBy } from 'lodash';

export const getFormState = createSelector(
  getRootState,
  (state: State) => state.form
);

export const {
  selectAll: getForms,
  selectEntities: getFormEntities
} = formAdapter.getSelectors(getFormState);

export const getCurrentFormId = createSelector(
  getFormState,
  (formState: FormState) => formState.currentFormId
);

export const getCurrentForm = createSelector(
  getFormEntities,
  getCurrentFormId,
  (formEntities: any, currentFormId: string) =>
    formEntities ? formEntities[currentFormId] : null
);

export const getCurrentFormFields = createSelector(
  getCurrentForm,
  (currentForm: FormModel) => (currentForm ? currentForm.fields : [])
);

export const getCurrentFieldIdsForRecordList = createSelector(
  getCurrentFormFields,
  (formFields: Field[]) => {
    return take(sortBy(formFields, 'sortOrder'), 8).map(
      (formField: Field) => formField.id
    );
  }
);

export const getCurrentFieldEntities = createSelector(
  getCurrentFormFields,
  (formFields: Field[]) => {
    const fieldEntities = {};
    (formFields || []).forEach((formField: Field) => {
      fieldEntities[formField.id] = formField.name;
    });

    return fieldEntities;
  }
);
