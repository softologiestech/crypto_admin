import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateSubManagerPage } from './create-sub-manager.page';

const routes: Routes = [
  {
    path: '',
    component: CreateSubManagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateSubManagerPageRoutingModule {}
