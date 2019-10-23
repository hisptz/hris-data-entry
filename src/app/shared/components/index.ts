import { CustomFormComponent } from './custom-form/custom-form.component';
import { PublicEmployeeFormComponent } from './public-employee-form/public-employee-form.component';

export const sharedComponents: any[] = [
    CustomFormComponent, PublicEmployeeFormComponent
];

export * from './custom-form/custom-form.component';
export * from './public-employee-form/public-employee-form.component';
