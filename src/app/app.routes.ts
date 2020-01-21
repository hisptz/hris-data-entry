import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ManageRecordComponent } from './containers/manage-record/manage-record.component';
import { RecordsComponent } from './containers/records/records.component';
import { CurrentRecordComponent } from './containers/current-record/current-record.component';

export const routes: Routes = [
  {
    path: '',
    component: RecordsComponent,
    children: [
      {
        path: 'records/:formid/orgUnit/:orgunitid',
        component: CurrentRecordComponent
      }
    ]
  },
  {
    path: 'record/:id',
    component: CurrentRecordComponent
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
