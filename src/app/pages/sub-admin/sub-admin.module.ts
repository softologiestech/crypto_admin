import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubAdminPageRoutingModule } from './sub-admin-routing.module';

import { SubAdminPage } from './sub-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubAdminPageRoutingModule
  ],
  declarations: [SubAdminPage]
})
export class SubAdminPageModule {}
