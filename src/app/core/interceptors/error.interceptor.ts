import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Error Interceptor
 * Handles HTTP errors globally with proper routing for auth failures
 */
export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        // Unauthorized - redirect to login
        router.navigate(['/auth/login'], {
          queryParams: { returnUrl: router.url }
        });
      } else if (error.status === 403) {
        // Forbidden - redirect to access denied
        router.navigate(['/error/forbidden']);
      } else if (error.status === 404) {
        // Not found - redirect to 404 page
        router.navigate(['/error/not-found']);
      } else if (error.status >= 500) {
        // Server error - redirect to error page
        router.navigate(['/error/server']);
      }

      // Return user-friendly error message
      const errorMessage = error.error?.message || error.statusText || 'Unknown error';
      return throwError(() => new Error(errorMessage));
    })
  );
};
