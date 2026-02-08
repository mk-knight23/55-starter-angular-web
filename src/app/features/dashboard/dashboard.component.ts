import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatCardModule],
  template: `
    <div class="dashboard">
      <div class="page-header">
        <h1>Dashboard</h1>
        <p class="text-secondary">Welcome to your enterprise dashboard</p>
      </div>

      <div class="stats-grid">
        <div class="card stat-card">
          <div class="stat-icon text-primary">📊</div>
          <div class="stat-content">
            <div class="stat-label">Total Users</div>
            <div class="stat-value">2,543</div>
          </div>
        </div>

        <div class="card stat-card">
          <div class="stat-icon text-success">✓</div>
          <div class="stat-content">
            <div class="stat-label">Active Sessions</div>
            <div class="stat-value">892</div>
          </div>
        </div>

        <div class="card stat-card">
          <div class="stat-icon text-warning">⚠</div>
          <div class="stat-content">
            <div class="stat-label">Pending Tasks</div>
            <div class="stat-value">147</div>
          </div>
        </div>

        <div class="card stat-card">
          <div class="stat-icon text-error">✕</div>
          <div class="stat-content">
            <div class="stat-label">Failed Jobs</div>
            <div class="stat-value">23</div>
          </div>
        </div>
      </div>

      <div class="content-section">
        <div class="card">
          <div class="card-header">
            <h2>Quick Actions</h2>
          </div>
          <div class="actions-grid">
            <a routerLink="/profile" class="action-card">
              <div class="action-icon">👤</div>
              <div class="action-content">
                <h3>Update Profile</h3>
                <p class="text-secondary">Edit your personal information and settings</p>
              </div>
            </a>
            <a routerLink="/dashboard" class="action-card">
              <div class="action-icon">📈</div>
              <div class="action-content">
                <h3>View Analytics</h3>
                <p class="text-secondary">Track your performance and metrics</p>
              </div>
            </a>
            <a routerLink="/settings" class="action-card">
              <div class="action-icon">⚙️</div>
              <div class="action-content">
                <h3>Settings</h3>
                <p class="text-secondary">Configure your preferences</p>
              </div>
            </a>
          </div>
        </div>

        <div class="card">
          <h2>Recent Activity</h2>
          <table>
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>User</th>
                <th>Action</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2025-02-02 14:30</td>
                <td>John Doe</td>
                <td>Created new project</td>
                <td><span class="badge badge-success">Success</span></td>
              </tr>
              <tr>
                <td>2025-02-02 14:25</td>
                <td>Jane Smith</td>
                <td>Updated settings</td>
                <td><span class="badge badge-success">Success</span></td>
              </tr>
              <tr>
                <td>2025-02-02 14:20</td>
                <td>Bob Johnson</td>
                <td>Deleted file</td>
                <td><span class="badge badge-warning">Pending</span></td>
              </tr>
              <tr>
                <td>2025-02-02 14:15</td>
                <td>Alice Brown</td>
                <td>Failed login attempt</td>
                <td><span class="badge badge-error">Failed</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard {
      animation: fadeIn 0.3s ease-in;
    }

    .page-header {
      margin-bottom: var(--spacing-xl);
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: var(--spacing-lg);
      margin-bottom: var(--spacing-xl);
    }

    .stat-card {
      display: flex;
      align-items: center;
      gap: var(--spacing-md);
    }

    .stat-icon {
      font-size: 2rem;
      padding: var(--spacing-md);
      border-radius: var(--radius-lg);
    }

    .stat-label {
      font-size: var(--font-size-sm);
      color: var(--text-secondary);
      margin-bottom: var(--spacing-xs);
    }

    .stat-value {
      font-size: var(--font-size-2xl);
      font-weight: 600;
    }

    .content-section {
      margin-top: var(--spacing-xl);
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--spacing-lg);
    }

    .actions-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: var(--spacing-lg);
      margin-bottom: var(--spacing-xl);
    }

    .action-card {
      display: flex;
      align-items: center;
      gap: var(--spacing-md);
      padding: var(--spacing-lg);
      border: 1px solid var(--border-color);
      border-radius: var(--border-radius-md);
      text-decoration: none;
      color: inherit;
      transition: all 0.2s;
    }

    .action-card:hover {
      border-color: var(--primary-color);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transform: translateY(-1px);
    }

    .action-icon {
      font-size: 2rem;
    }

    .action-content h3 {
      margin: 0 0 var(--spacing-xs) 0;
      color: var(--text-primary);
    }

    .action-content p {
      margin: 0;
      color: var(--text-secondary);
      font-size: var(--font-size-sm);
    }

    table {
      margin-top: var(--spacing-md);
    }

    .badge {
      display: inline-block;
      padding: var(--spacing-xs) var(--spacing-sm);
      border-radius: var(--radius-full);
      font-size: var(--font-size-xs);
      font-weight: 500;
    }

    .badge-success {
      background-color: #e8f5e9;
      color: #2e7d32;
    }

    .badge-warning {
      background-color: #fff3e0;
      color: #e65100;
    }

    .badge-error {
      background-color: #ffebee;
      color: #c62828;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class DashboardComponent {}
