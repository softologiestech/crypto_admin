import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewSubManagersPageRoutingModule } from './view-sub-managers-routing.module';

import { ViewSubManagersPage } from './view-sub-managers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewSubManagersPageRoutingModule
  ],
  declarations: [ViewSubManagersPage]
})
export class ViewSubManagersPageModule {}
