import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { SubAdminComponent } from './sub-admin/sub-admin.component';
import { ManagerComponent } from './manager/manager.component';
import { SubManagerComponent } from './sub-manager/sub-manager.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    SubAdminComponent,
    ManagerComponent,
    SubManagerComponent,
    AddComponent,
  ],
  imports: [CommonModule, IonicModule, RouterModule, FormsModule],
  exports: [
    AdminComponent,
    SubAdminComponent,
    ManagerComponent,
    SubManagerComponent,
    AddComponent,
  ],
})
export class SharedModule {}
