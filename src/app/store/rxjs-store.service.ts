import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';

/**
 * RxJS Store
 * Global state management using RxJS BehaviorSubjects
 * Use this for complex async state or when you need observables
 */
@Injectable({
  providedIn: 'root'
})
export class RxjsStoreService {
  // Private subjects
  private userSubject = new BehaviorSubject<UserState | null>(null);
  private uiSubject = new BehaviorSubject<UIState>({
    sidebarOpen: true,
    theme: 'dark',
    loading: false
  });

  // Public observables
  readonly user$ = this.userSubject.asObservable();
  readonly ui$ = this.uiSubject.asObservable();
  readonly isAuthenticated$ = this.user$.pipe(map((user) => user !== null));

  // Computed observables
  readonly userDisplayName$ = this.user$.pipe(
    map((user) => (user ? `${user.firstName} ${user.lastName}` : 'Guest'))
  );

  readonly state$ = combineLatest({
    user: this.user$,
    ui: this.ui$
  });

  // Actions
  setUser(user: UserState | null): void {
    this.userSubject.next(user);
  }

  updateUser(updates: Partial<UserState>): void {
    const currentUser = this.userSubject.value;
    if (currentUser) {
      this.userSubject.next({ ...currentUser, ...updates });
    }
  }

  setUIState(updates: Partial<UIState>): void {
    const currentUI = this.uiSubject.value;
    this.uiSubject.next({ ...currentUI, ...updates });
  }

  toggleSidebar(): void {
    const currentUI = this.uiSubject.value;
    this.uiSubject.next({ ...currentUI, sidebarOpen: !currentUI.sidebarOpen });
  }

  toggleTheme(): void {
    const currentUI = this.uiSubject.value;
    this.uiSubject.next({
      ...currentUI,
      theme: currentUI.theme === 'light' ? 'dark' : 'light'
    });
  }

  setLoading(loading: boolean): void {
    const currentUI = this.uiSubject.value;
    this.uiSubject.next({ ...currentUI, loading });
  }

  // Selectors (computed observables)
  select<T>(selector: (state: CombinedState) => T): Observable<T> {
    return this.state$.pipe(map(selector));
  }

  // Cleanup
  destroy(): void {
    this.userSubject.complete();
    this.uiSubject.complete();
  }
}

/**
 * State interfaces
 */
export interface UserState {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  roles: string[];
  permissions: string[];
}

export interface UIState {
  sidebarOpen: boolean;
  theme: 'light' | 'dark';
  loading: boolean;
}

export interface CombinedState {
  user: UserState | null;
  ui: UIState;
}
