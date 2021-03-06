import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { sharedComponents } from './components';
import { services } from './services';
import { materialModules } from './material-modules';
import { FormSelectionComponent } from './components/form-selection/form-selection.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ...materialModules
  ],
  declarations: [
    ...sharedComponents,
    FormSelectionComponent,
  ],
  exports: [...sharedComponents, ...materialModules],
  providers: [...services]
})
export class SharedModule { }
