import { Injectable, signal, computed, inject } from '@angular/core';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';

/**
 * Signal Store
 * Global state management using Angular Signals
 */
@Injectable({
  providedIn: 'root'
})
export class SignalStoreService {
  // Auth state
  private userSignal = signal<{ id: string; name: string; email: string } | null>(null);
  private tokenSignal = signal<string | null>(null);

  // UI state
  private sidebarOpenSignal = signal<boolean>(true);
  private themeSignal = signal<'light' | 'dark'>('dark');
  private loadingSignal = signal<boolean>(false);

  // Data state
  private notificationsSignal = signal<Notification[]>([]);

  // Public readonly computed signals
  readonly user = this.userSignal.asReadonly();
  readonly token = this.tokenSignal.asReadonly();
  readonly isAuthenticated = computed(() => this.userSignal() !== null);

  readonly sidebarOpen = this.sidebarOpenSignal.asReadonly();
  readonly theme = this.themeSignal.asReadonly();
  readonly loading = this.loadingSignal.asReadonly();

  readonly notifications = this.notificationsSignal.asReadonly();
  readonly unreadCount = computed(() =>
    this.notificationsSignal().filter((n) => !n.read).length
  );

  // Auth actions
  setUser(user: { id: string; name: string; email: string } | null): void {
    this.userSignal.set(user);
  }

  setToken(token: string | null): void {
    this.tokenSignal.set(token);
  }

  login(user: { id: string; name: string; email: string }, token: string): void {
    this.userSignal.set(user);
    this.tokenSignal.set(token);
    this.persistState();
  }

  logout(): void {
    this.userSignal.set(null);
    this.tokenSignal.set(null);
    this.clearState();
  }

  // UI actions
  toggleSidebar(): void {
    this.sidebarOpenSignal.update((open) => !open);
  }

  setSidebarOpen(open: boolean): void {
    this.sidebarOpenSignal.set(open);
  }

  toggleTheme(): void {
    this.themeSignal.update((theme) => (theme === 'light' ? 'dark' : 'light'));
  }

  setLoading(loading: boolean): void {
    this.loadingSignal.set(loading);
  }

  // Notification actions
  addNotification(notification: Omit<Notification, 'id' | 'timestamp'>): void {
    const newNotification: Notification = {
      id: Date.now().toString(),
      timestamp: new Date(),
      ...notification
    };
    this.notificationsSignal.update((notifications) => [
      newNotification,
      ...notifications
    ]);
  }

  markAsRead(id: string): void {
    this.notificationsSignal.update((notifications) =>
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  }

  markAllAsRead(): void {
    this.notificationsSignal.update((notifications) =>
      notifications.map((n) => ({ ...n, read: true }))
    );
  }

  removeNotification(id: string): void {
    this.notificationsSignal.update((notifications) =>
      notifications.filter((n) => n.id !== id)
    );
  }

  // Persistence
  private persistState(): void {
    const state = {
      user: this.userSignal(),
      token: this.tokenSignal(),
      theme: this.themeSignal(),
      sidebarOpen: this.sidebarOpenSignal()
    };
    localStorage.setItem('app_state', JSON.stringify(state));
  }

  private clearState(): void {
    localStorage.removeItem('app_state');
  }

  loadState(): void {
    const stored = localStorage.getItem('app_state');
    if (stored) {
      try {
        const state = JSON.parse(stored);
        if (state.user) this.userSignal.set(state.user);
        if (state.token) this.tokenSignal.set(state.token);
        if (state.theme) this.themeSignal.set(state.theme);
        if (typeof state.sidebarOpen === 'boolean') {
          this.sidebarOpenSignal.set(state.sidebarOpen);
        }
      } catch (e) {
        console.error('Failed to load state from storage', e);
      }
    }
  }
}

/**
 * Notification interface
 */
export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  timestamp: Date;
}
