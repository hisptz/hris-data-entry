import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { FormDataComponent, RecordsComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'records',
    pathMatch: 'full'
  },
  {
    path: 'records',
    component: RecordsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
