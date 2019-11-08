import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ManageRecordComponent } from './pages/manage-record/manage-record.component';
import { RecordsComponent } from './pages/records/records.component';

export const routes: Routes = [
  {
    path: '',
    component: RecordsComponent
  },
  {
    path: 'record/:id',
    component: ManageRecordComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class RoutingModule {}
