import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubManagerPageRoutingModule } from './sub-manager-routing.module';

import { SubManagerPage } from './sub-manager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubManagerPageRoutingModule
  ],
  declarations: [SubManagerPage]
})
export class SubManagerPageModule {}
