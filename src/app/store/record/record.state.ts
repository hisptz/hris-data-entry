import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Record } from 'src/app/models/record.model';

import { BaseState, initialBaseState } from '../base.state';

export interface RecordState extends EntityState<Record>, BaseState {}

export const recordAdapter: EntityAdapter<Record> = createEntityAdapter<
  Record
>();

export const initialRecordState: RecordState = recordAdapter.getInitialState({
  ...initialBaseState
});
