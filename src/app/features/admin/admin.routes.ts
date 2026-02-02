import { Routes } from '@angular/router';
import { authGuard } from '../../core';
import { permissionGuard } from '../../core';

export const adminRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./admin.component').then((m) => m.AdminComponent),
    canActivate: [authGuard, permissionGuard('admin')]
  }
];
