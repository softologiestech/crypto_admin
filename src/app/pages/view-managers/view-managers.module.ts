import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewManagersPageRoutingModule } from './view-managers-routing.module';

import { ViewManagersPage } from './view-managers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewManagersPageRoutingModule
  ],
  declarations: [ViewManagersPage]
})
export class ViewManagersPageModule {}
