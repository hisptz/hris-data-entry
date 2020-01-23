export interface Field {
  id: string;
  name: string;
  description: string;
  dataType: string;
  inputType: string;
  compulsory: boolean;
  fieldOptions: any[];
  hasHistory: boolean;
}
