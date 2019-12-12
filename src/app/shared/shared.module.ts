import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from './components/table/table.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [CommonModule, MaterialModule],
  exports: [TableComponent, MaterialModule],
  declarations: [TableComponent]
})
export class SharedModule {}
