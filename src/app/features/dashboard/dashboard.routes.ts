import { Routes } from '@angular/router';
import { authGuard } from '../../core';

export const dashboardRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./dashboard.component').then((m) => m.DashboardComponent),
    canActivate: [authGuard]
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./profile-form/profile-form.component').then((m) => m.ProfileFormComponent),
    canActivate: [authGuard]
  }
];
