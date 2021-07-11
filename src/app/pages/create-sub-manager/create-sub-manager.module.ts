import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateSubManagerPageRoutingModule } from './create-sub-manager-routing.module';

import { CreateSubManagerPage } from './create-sub-manager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateSubManagerPageRoutingModule
  ],
  declarations: [CreateSubManagerPage]
})
export class CreateSubManagerPageModule {}
