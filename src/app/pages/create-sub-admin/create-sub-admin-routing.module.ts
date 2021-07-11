import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateSubAdminPage } from './create-sub-admin.page';

const routes: Routes = [
  {
    path: '',
    component: CreateSubAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateSubAdminPageRoutingModule {}
