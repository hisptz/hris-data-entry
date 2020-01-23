import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { RecordValue } from 'src/app/models/record-value.model';

import { BaseState, initialBaseState } from '../base.state';

export interface RecordValueState extends EntityState<RecordValue>, BaseState {}

export const recordValueAdapter: EntityAdapter<RecordValue> = createEntityAdapter<
  RecordValue
>();

export const initialRecordValueState: RecordValueState = recordValueAdapter.getInitialState(
  {
    ...initialBaseState
  }
);
