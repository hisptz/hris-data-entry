import { RecordValue } from '../models/record-value.model';

export function sanitizeRecordValueList(
  recordValuesResponse: any[],
  recordId: string
): RecordValue[] {
  return (recordValuesResponse || []).map((recordValueResponse: any) => ({
    id: recordValueResponse.recordvalueid,
    created: recordValueResponse.created,
    lastUpdated: recordValueResponse.lastUpdated,
    value: recordValueResponse.value,
    fieldId: recordValueResponse.field ? recordValueResponse.field.id : '',
    recordId
  }));
}
