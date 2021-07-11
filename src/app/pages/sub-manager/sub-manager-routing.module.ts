import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubManagerPage } from './sub-manager.page';

const routes: Routes = [
  {
    path: '',
    component: SubManagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubManagerPageRoutingModule {}
