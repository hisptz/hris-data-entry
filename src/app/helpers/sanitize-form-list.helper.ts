import { FormModel } from '../models/form.model';
import { sanitizeFormFieldList } from './sanitize-form-field-list.helper';

export function sanitizeFormList(formResponse: any): FormModel[] {
  return (formResponse ? formResponse.forms || [] : []).map(
    (formDetails: any) => {
      return {
        id: formDetails.id,
        name: formDetails.title,
        fields: sanitizeFormFieldList(
          formDetails ? formDetails.formFieldMembers : []
        )
      };
    }
  );
}
