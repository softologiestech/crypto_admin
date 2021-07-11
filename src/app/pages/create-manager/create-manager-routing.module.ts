import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateManagerPage } from './create-manager.page';

const routes: Routes = [
  {
    path: '',
    component: CreateManagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateManagerPageRoutingModule {}
