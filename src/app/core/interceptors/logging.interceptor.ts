import { HttpInterceptorFn, HttpEvent, HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

/**
 * Logging Interceptor
 * Logs HTTP requests and responses for debugging
 */
export const loggingInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const started = Date.now();
  let ok: string = 'ok';

  // Log request
  console.log(`%c[HTTP] ${req.method} ${req.url}`, 'color: #2196F3; font-weight: bold');

  return next(req).pipe(
    tap({
      next: (event) => {
        const elapsed = Date.now() - started;
        console.log(
          `%c[HTTP] ${req.method} ${req.url} - ${elapsed}ms - ${ok}`,
          'color: #4CAF50; font-weight: bold'
        );
      },
      error: (error) => {
        const elapsed = Date.now() - started;
        ok = 'failed';
        console.error(
          `%c[HTTP] ${req.method} ${req.url} - ${elapsed}ms - ${ok}`,
          'color: #F44336; font-weight: bold',
          error
        );
      }
    })
  );
};
