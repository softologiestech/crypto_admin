import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'login',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'create_sub_admin',
    loadChildren: () =>
      import('./pages/create-sub-admin/create-sub-admin.module').then(
        (m) => m.CreateSubAdminPageModule
      ),
  },
  {
    path: 'create_manager',
    loadChildren: () =>
      import('./pages/create-manager/create-manager.module').then(
        (m) => m.CreateManagerPageModule
      ),
  },
  {
    path: 'create_sub_manager',
    loadChildren: () =>
      import('./pages/create-sub-manager/create-sub-manager.module').then(
        (m) => m.CreateSubManagerPageModule
      ),
  },
  {
    path: 'create_user',
    loadChildren: () =>
      import('./pages/create-user/create-user.module').then(
        (m) => m.CreateUserPageModule
      ),
  },
  {
    path: 'view_sub_admins',
    loadChildren: () =>
      import('./pages/view-sub-admins/view-sub-admins.module').then(
        (m) => m.ViewSubAdminsPageModule
      ),
  },
  {
    path: 'view_managers',
    loadChildren: () =>
      import('./pages/view-managers/view-managers.module').then(
        (m) => m.ViewManagersPageModule
      ),
  },
  {
    path: 'view_sub_managers',
    loadChildren: () =>
      import('./pages/view-sub-managers/view-sub-managers.module').then(
        (m) => m.ViewSubManagersPageModule
      ),
  },
  {
    path: 'view_users',
    loadChildren: () =>
      import('./pages/view-users/view-users.module').then(
        (m) => m.ViewUsersPageModule
      ),
  },
  {
    path: 'sub_admin/:id',
    loadChildren: () =>
      import('./pages/sub-admin/sub-admin.module').then(
        (m) => m.SubAdminPageModule
      ),
  },
  {
    path: 'manager/:id',
    loadChildren: () =>
      import('./pages/manager/manager.module').then((m) => m.ManagerPageModule),
  },
  {
    path: 'sub_manager/:id',
    loadChildren: () =>
      import('./pages/sub-manager/sub-manager.module').then(
        (m) => m.SubManagerPageModule
      ),
  },
  {
    path: 'user/:id',
    loadChildren: () =>
      import('./pages/user/user.module').then((m) => m.UserPageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
