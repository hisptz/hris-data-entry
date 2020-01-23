import { createAction, props } from '@ngrx/store';
import { RecordValue } from 'src/app/models/record-value.model';

enum RecordValueActionTypes {
  AddRecordValues = '[RecordValue] ADD_RECORDS'
}

export const addRecordValues = createAction(
  RecordValueActionTypes.AddRecordValues,
  props<{ recordValues: RecordValue[] }>()
);
