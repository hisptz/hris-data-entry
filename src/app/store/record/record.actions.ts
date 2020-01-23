import { ErrorMessage } from '@iapps/ngx-dhis2-http-client';
import { createAction, props } from '@ngrx/store';
import { Record } from 'src/app/models/record.model';

enum RecordActionTypes {
  LoadRecords = '[Record] LOAD_RECORDS',
  AddRecords = '[Record] ADD_RECORDS',
  HandleLoadRecordsError = '[Record] HANDLE_LOAD_RECORDS_ERROR'
}

export const loadRecords = createAction(RecordActionTypes.LoadRecords);

export const addRecords = createAction(
  RecordActionTypes.AddRecords,
  props<{ records: Record[] }>()
);

export const handleLoadRecordsError = createAction(
  RecordActionTypes.HandleLoadRecordsError,
  props<{ error: ErrorMessage }>()
);
