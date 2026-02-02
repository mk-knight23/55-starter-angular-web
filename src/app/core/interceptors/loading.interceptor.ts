import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { inject } from '@angular/core';

/**
 * Loading Interceptor
 * Shows/hides loading indicator during HTTP requests
 */
export const loadingInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  // You can inject a loading service here
  // const loadingService = inject(LoadingService);

  // Show loading
  // loadingService.show();

  return next(req).pipe(
    finalize(() => {
      // Hide loading
      // loadingService.hide();
    })
  );
};
