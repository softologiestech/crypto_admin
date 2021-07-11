import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubAdminPage } from './sub-admin.page';

const routes: Routes = [
  {
    path: '',
    component: SubAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubAdminPageRoutingModule {}
