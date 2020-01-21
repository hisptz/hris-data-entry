import { createAction, props } from '@ngrx/store';
import { FormModel } from 'src/app/models/form.model';
import { ErrorMessage } from '@iapps/ngx-dhis2-http-client';
enum FormActionTypes {
  LoadForms = '[Form] LOAD_FORMS',
  AddForms = '[Form] ADD_FORMS',
  HandleLoadFormsError = '[Form] HANDLE_LOAD_FORM_ERROR'
}

export const loadForms = createAction(FormActionTypes.LoadForms);

export const addForms = createAction(
  FormActionTypes.AddForms,
  props<{ forms: FormModel[] }>()
);

export const handleLoadFormsError = createAction(
  FormActionTypes.HandleLoadFormsError,
  props<{ error: ErrorMessage }>()
);
