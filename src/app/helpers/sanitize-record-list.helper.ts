import { Record } from '../models/record.model';
import { sanitizeRecordValueList } from './sanitize-record-value-list.helper';
import { RecordValue } from '../models/record-value.model';
import { flatten } from 'lodash';

export function sanitizeRecordListAndValues(
  recordsResponse: any[]
): { records: Record[]; recordValues: RecordValue[] } {
  const recordList = (recordsResponse || []).map((recordResponse: any) => ({
    id: recordResponse.id,
    recordValues: sanitizeRecordValueList(
      recordResponse.recordValues,
      recordResponse.id
    )
  }));

  return {
    records: recordList.map((record: any) => {
      return {
        ...record,
        recordValues: record.recordValues.map(
          (recordValue: any) => recordValue.id
        )
      };
    }),
    recordValues: flatten(recordList.map((record: any) => record.recordValues))
  };
}
