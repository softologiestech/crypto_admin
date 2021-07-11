import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewSubManagersPage } from './view-sub-managers.page';

const routes: Routes = [
  {
    path: '',
    component: ViewSubManagersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewSubManagersPageRoutingModule {}
