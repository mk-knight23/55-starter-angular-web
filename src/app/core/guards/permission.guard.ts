import { inject } from '@angular/core';
import {
  CanActivateFn,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

/**
 * Permission Guard
 * Checks if user has required permissions/roles
 * Usage: { path: 'admin', canActivate: [permissionGuard('admin')] }
 */
export const permissionGuard = (requiredPermission: string): CanActivateFn => {
  return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const router = inject(Router);

    // Get user permissions (replace with actual permissions from auth service)
    const userPermissions: string[] = JSON.parse(
      localStorage.getItem('user_permissions') || '[]'
    );

    if (userPermissions.includes(requiredPermission)) {
      return true;
    }

    // User lacks required permission
    router.navigate(['/error/forbidden'], {
      queryParams: { required: requiredPermission }
    });
    return false;
  };
};
