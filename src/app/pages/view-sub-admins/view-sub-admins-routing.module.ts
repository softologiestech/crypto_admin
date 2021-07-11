import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewSubAdminsPage } from './view-sub-admins.page';

const routes: Routes = [
  {
    path: '',
    component: ViewSubAdminsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewSubAdminsPageRoutingModule {}
