import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Error Message Component
 * Displays error messages with optional retry action
 */
@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="error-message">
      <div class="error-icon">⚠️</div>
      <h3 class="error-title">{{ title() }}</h3>
      @if (message()) {
        <p class="error-text">{{ message() }}</p>
      }
      @if (showRetry() && onRetry()) {
        <button (click)="onRetry()!()" class="retry-button">
          Retry
        </button>
      }
    </div>
  `,
  styles: [`
    .error-message {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      text-align: center;
      background-color: #fee;
      border: 1px solid #fcc;
      border-radius: 8px;
      margin: 1rem 0;
    }

    .error-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .error-title {
      color: #c33;
      margin: 0 0 0.5rem 0;
      font-size: 1.25rem;
    }

    .error-text {
      color: #666;
      margin: 0 0 1rem 0;
      max-width: 400px;
    }

    .retry-button {
      padding: 0.5rem 1.5rem;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
    }

    .retry-button:hover {
      background-color: #2980b9;
    }
  `]
})
export class ErrorMessageComponent {
  title = input('An error occurred');
  message = input('');
  showRetry = input(false);
  onRetry = input<(() => void) | undefined>(undefined);
}
