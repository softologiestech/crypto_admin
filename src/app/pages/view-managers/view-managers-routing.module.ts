import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewManagersPage } from './view-managers.page';

const routes: Routes = [
  {
    path: '',
    component: ViewManagersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewManagersPageRoutingModule {}
