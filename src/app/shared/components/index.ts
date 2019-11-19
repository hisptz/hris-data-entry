import { CustomFormComponent } from './custom-form/custom-form.component';
import { PublicEmployeeFormComponent } from './public-employee-form/public-employee-form.component';
import { FormSelectionComponent } from './form-selection/form-selection.component';

export const sharedComponents: any[] = [
    CustomFormComponent, PublicEmployeeFormComponent,
    FormSelectionComponent
];

export * from './custom-form/custom-form.component';
export * from './public-employee-form/public-employee-form.component';
export * from './form-selection/form-selection.component';
