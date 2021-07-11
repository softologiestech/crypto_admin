import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateManagerPageRoutingModule } from './create-manager-routing.module';

import { CreateManagerPage } from './create-manager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateManagerPageRoutingModule
  ],
  declarations: [CreateManagerPage]
})
export class CreateManagerPageModule {}
