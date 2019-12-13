import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { FormModel } from 'src/app/models/form.model';

import { BaseState, initialBaseState } from '../base.state';

export interface FormState extends EntityState<FormModel>, BaseState {}

export const formAdapter: EntityAdapter<FormModel> = createEntityAdapter<
  FormModel
>();

export const initialFormState: FormState = formAdapter.getInitialState({
  ...initialBaseState
});
