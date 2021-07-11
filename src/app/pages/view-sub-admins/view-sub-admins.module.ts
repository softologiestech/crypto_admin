import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewSubAdminsPageRoutingModule } from './view-sub-admins-routing.module';

import { ViewSubAdminsPage } from './view-sub-admins.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewSubAdminsPageRoutingModule
  ],
  declarations: [ViewSubAdminsPage]
})
export class ViewSubAdminsPageModule {}
