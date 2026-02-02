import { Injectable } from '@angular/core';
import {
  CanDeactivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

/**
 * Interface for components with canDeactivate logic
 */
export interface CanComponentDeactivate {
  canDeactivate: () => boolean | Observable<boolean> | Promise<boolean>;
}

/**
 * Can Deactivate Guard
 * Prevents navigation if user has unsaved changes
 * Usage: Add canDeactivate method to your component
 */
export const canDeactivateGuard: CanDeactivateFn<CanComponentDeactivate> = (
  component: CanComponentDeactivate,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot
) => {
  // Check if component implements canDeactivate
  if (component?.canDeactivate) {
    return component.canDeactivate();
  }

  // If no canDeactivate method, allow navigation
  return true;
};

// Add import at top if using Observable
import { Observable } from 'rxjs';
