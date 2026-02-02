import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Loading Spinner Component
 * Reusable loading indicator
 */
@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loading-spinner" [class.small]="size() === 'small'" [class.large]="size() === 'large'">
      <div class="spinner"></div>
      @if (message()) {
        <p class="loading-message">{{ message() }}</p>
      }
    </div>
  `,
  styles: [`
    .loading-spinner {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }

    .spinner {
      width: 50px;
      height: 50px;
      border: 4px solid #f3f3f3;
      border-top: 4px solid #3498db;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    .loading-spinner.small .spinner {
      width: 30px;
      height: 30px;
      border-width: 3px;
    }

    .loading-spinner.large .spinner {
      width: 80px;
      height: 80px;
      border-width: 5px;
    }

    .loading-message {
      margin-top: 1rem;
      color: #666;
      font-size: 0.9rem;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `]
})
export class LoadingSpinnerComponent {
  size = input<'small' | 'medium' | 'large'>('medium');
  message = input<string>('');
}
