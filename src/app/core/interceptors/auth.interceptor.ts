import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptorFn,
  HttpInterceptor,
  HttpHandlerFn
} from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * JWT Auth Interceptor
 * Adds authentication token to outgoing HTTP requests
 */
export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  // Get token from localStorage (or from a service in real app)
  const token = localStorage.getItem('auth_token');

  if (token) {
    // Clone request and add authorization header
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(authReq);
  }

  return next(req);
};
