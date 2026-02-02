import { inject } from '@angular/core';
import {
  CanActivateFn,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

/**
 * Authentication Guard
 * Prevents unauthenticated users from accessing protected routes
 */
export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);

  // Check if user is authenticated (replace with actual auth check)
  const isAuthenticated = localStorage.getItem('auth_token') !== null;

  if (isAuthenticated) {
    return true;
  }

  // Not authenticated, redirect to login with return URL
  router.navigate(['/auth/login'], {
    queryParams: { returnUrl: state.url }
  });
  return false;
};
