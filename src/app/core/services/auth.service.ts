import { Injectable, signal, computed } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

/**
 * User interface
 */
export interface User {
  id: string;
  email: string;
  name: string;
  roles: string[];
  permissions: string[];
}

/**
 * Authentication Service
 * Manages user authentication state using Signals
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Private state with Signals
  private userSignal = signal<User | null>(null);
  private tokenSignal = signal<string | null>(null);

  // Public readonly signals
  public readonly user = this.userSignal.asReadonly();
  public readonly isAuthenticated = computed(() => this.userSignal() !== null);
  public readonly userRoles = computed(() => this.userSignal()?.roles || []);
  public readonly userPermissions = computed(() => this.userSignal()?.permissions || []);

  constructor() {
    // Initialize from localStorage
    this.loadFromStorage();
  }

  /**
   * Login with email and password
   */
  login(email: string, password: string): Observable<boolean> {
    // Replace with actual API call
    // return this.http.post<AuthResponse>('/auth/login', { email, password }).pipe(...)

    // Mock implementation
    return of({
      user: {
        id: '1',
        email,
        name: 'Demo User',
        roles: ['user'],
        permissions: ['read']
      },
      token: 'mock-jwt-token'
    }).pipe(
      tap((response: any) => {
        this.userSignal.set(response.user);
        this.tokenSignal.set(response.token);
        this.saveToStorage(response.user, response.token);
      }),
      map(() => true)
    );
  }

  /**
   * Logout current user
   */
  logout(): void {
    this.userSignal.set(null);
    this.tokenSignal.set(null);
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
    localStorage.removeItem('user_permissions');
  }

  /**
   * Check if user has specific permission
   */
  hasPermission(permission: string): boolean {
    return this.userPermissions().includes(permission);
  }

  /**
   * Check if user has any of the specified roles
   */
  hasRole(roles: string[]): boolean {
    const userRoles = this.userRoles();
    return roles.some(role => userRoles.includes(role));
  }

  /**
   * Get current auth token
   */
  getToken(): string | null {
    return this.tokenSignal();
  }

  private loadFromStorage(): void {
    const token = localStorage.getItem('auth_token');
    const userStr = localStorage.getItem('auth_user');

    if (token && userStr) {
      try {
        this.tokenSignal.set(token);
        this.userSignal.set(JSON.parse(userStr));
      } catch (e) {
        console.error('Failed to parse user from storage', e);
        this.logout();
      }
    }
  }

  private saveToStorage(user: User, token: string): void {
    localStorage.setItem('auth_token', token);
    localStorage.setItem('auth_user', JSON.stringify(user));
    localStorage.setItem('user_permissions', JSON.stringify(user.permissions));
  }
}
