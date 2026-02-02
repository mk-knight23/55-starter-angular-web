import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="app-container">
      <header class="app-header">
        <nav class="navbar">
          <div class="nav-brand">
            <a href="/">Enterprise Angular</a>
          </div>
          <ul class="nav-menu">
            <li><a routerLink="/dashboard">Dashboard</a></li>
            <li><a routerLink="/admin">Admin</a></li>
            <li><a routerLink="/auth/login">Login</a></li>
          </ul>
        </nav>
      </header>

      <main class="app-main">
        <router-outlet></router-outlet>
      </main>

      <footer class="app-footer">
        <p>&copy; 2025 Enterprise Angular Starter. Built with Angular 21.</p>
      </footer>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    .app-header {
      background-color: var(--surface-color);
      box-shadow: var(--shadow-sm);
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .navbar {
      max-width: 1200px;
      margin: 0 auto;
      padding: var(--spacing-md) var(--spacing-lg);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav-brand a {
      font-size: var(--font-size-xl);
      font-weight: 600;
      color: var(--primary-color);
    }

    .nav-menu {
      display: flex;
      gap: var(--spacing-lg);
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .nav-menu a {
      color: var(--text-secondary);
      font-weight: 500;
      transition: color var(--transition-fast);
    }

    .nav-menu a:hover,
    .nav-menu a.router-link-active {
      color: var(--primary-color);
    }

    .app-main {
      flex: 1;
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
      padding: var(--spacing-xl) var(--spacing-lg);
    }

    .app-footer {
      background-color: var(--secondary-color);
      color: white;
      padding: var(--spacing-lg);
      text-align: center;
    }

    .app-footer p {
      color: rgba(255, 255, 255, 0.7);
      margin: 0;
    }

    @media (max-width: 768px) {
      .navbar {
        flex-direction: column;
        gap: var(--spacing-md);
      }

      .nav-menu {
        flex-direction: column;
        text-align: center;
        gap: var(--spacing-md);
      }
    }
  `]
})
export class AppComponent {}
