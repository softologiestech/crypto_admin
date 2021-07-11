import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateSubAdminPageRoutingModule } from './create-sub-admin-routing.module';

import { CreateSubAdminPage } from './create-sub-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateSubAdminPageRoutingModule
  ],
  declarations: [CreateSubAdminPage]
})
export class CreateSubAdminPageModule {}
