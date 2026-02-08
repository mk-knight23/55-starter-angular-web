import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error-boundary',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="hasError" class="error-boundary">
      <div class="error-content">
        <h2 class="error-title">Oops! Something went wrong</h2>
        <p class="error-message">{{ errorMessage }}</p>
        @if (details) {
          <details class="error-details">
            <summary>Error Details</summary>
            <pre>{{ details }}</pre>
          </details>
        }
        <button (click)="reset()" class="btn btn-primary">
          Try Again
        </button>
      </div>
    </div>
    <ng-content *ngIf="!hasError"></ng-content>
  `,
  styles: [`
    .error-boundary {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 400px;
      padding: var(--spacing-xl);
      background-color: var(--error-background, #fee);
      border-radius: var(--border-radius-md);
      margin: var(--spacing-lg) 0;
    }

    .error-content {
      text-align: center;
      max-width: 600px;
      width: 100%;
    }

    .error-title {
      color: var(--error-color);
      margin-bottom: var(--spacing-md);
      font-size: var(--font-size-lg);
    }

    .error-message {
      color: var(--text-secondary);
      margin-bottom: var(--spacing-md);
      line-height: 1.6;
    }

    .error-details {
      text-align: left;
      background: var(--background-secondary);
      border: 1px solid var(--border-color);
      border-radius: var(--border-radius-sm);
      padding: var(--spacing-md);
      margin: var(--spacing-md) 0;
      max-height: 200px;
      overflow-y: auto;
    }

    .error-details pre {
      margin: 0;
      white-space: pre-wrap;
      word-break: break-word;
      font-size: var(--font-size-xs);
      color: var(--text-secondary);
    }

    button {
      margin-top: var(--spacing-md);
    }
  `]
})
export class ErrorBoundaryComponent implements OnInit {
  hasError = false;
  errorMessage = 'An unexpected error occurred';
  details = '';

  constructor() {}

  ngOnInit(): void {
    window.addEventListener('error', (event) => {
      this.handleError(event.error);
    });

    window.addEventListener('unhandledrejection', (event) => {
      this.handleError(event.reason);
    });
  }

  handleError(error: any): void {
    this.hasError = true;

    // User-friendly error messages
    if (error) {
      if (error.message) {
        this.errorMessage = error.message;
      }

      // Check for common errors
      if (error.message.includes('Failed to fetch')) {
        this.errorMessage = 'Network error. Please check your internet connection.';
      } else if (error.message.includes('Access denied')) {
        this.errorMessage = 'Access denied. You may need to log in first.';
      } else if (error.message.includes('Not Found')) {
        this.errorMessage = 'The requested resource was not found.';
      }

      // Store error details for debugging
      this.details = JSON.stringify(error, null, 2);
    }
  }

  reset(): void {
    this.hasError = false;
    this.errorMessage = 'An unexpected error occurred';
    this.details = '';
    window.location.reload();
  }
}