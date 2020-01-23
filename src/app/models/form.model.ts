import { Field } from './field.model';

export interface FormModel {
  id: string;
  name: string;
  fields: Field[];
}
