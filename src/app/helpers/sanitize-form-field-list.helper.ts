import { Field } from '../models/field.model';
export function sanitizeFormFieldList(formFieldMembers: any[]): Field[] {
  return (formFieldMembers || []).map((fieldMember: any) => {
    const { field } = fieldMember;
    return {
      id: field.id,
      name: field.caption,
      description: field.description,
      dataType: field.dataType ? field.dataType.name : '',
      inputType: field.fieldInputType ? field.fieldInputType.name : '',
      compulsory: field.compulsory,
      fieldOptions: field.fieldOptions,
      sortOrder: fieldMember.sort,
      hasHistory: fieldMember.hasHistory
    };
  });
}
