import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Confirm Dialog Component
 * Reusable confirmation dialog
 */
@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="confirm-dialog-overlay" (click)="onOverlayClick()">
      <div class="confirm-dialog">
        <div class="dialog-header">
          <h3>{{ title() }}</h3>
        </div>
        <div class="dialog-body">
          <p>{{ message() }}</p>
        </div>
        <div class="dialog-footer">
          <button (click)="onCancel.emit()" class="cancel-button">
            {{ cancelText() }}
          </button>
          <button (click)="onConfirm.emit()" class="confirm-button" [class.danger]="isDangerous()">
            {{ confirmText() }}
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .confirm-dialog-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .confirm-dialog {
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
      max-width: 500px;
      width: 90%;
      padding: 1.5rem;
    }

    .dialog-header h3 {
      margin: 0 0 1rem 0;
      color: #333;
      font-size: 1.25rem;
    }

    .dialog-body p {
      margin: 0 0 1.5rem 0;
      color: #666;
      line-height: 1.5;
    }

    .dialog-footer {
      display: flex;
      justify-content: flex-end;
      gap: 0.75rem;
    }

    .cancel-button,
    .confirm-button {
      padding: 0.5rem 1.25rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
      transition: background-color 0.2s;
    }

    .cancel-button {
      background-color: #e0e0e0;
      color: #333;
    }

    .cancel-button:hover {
      background-color: #d0d0d0;
    }

    .confirm-button {
      background-color: #3498db;
      color: white;
    }

    .confirm-button:hover {
      background-color: #2980b9;
    }

    .confirm-button.danger {
      background-color: #e74c3c;
    }

    .confirm-button.danger:hover {
      background-color: #c0392b;
    }
  `]
})
export class ConfirmDialogComponent {
  title = input('Confirm Action');
  message = input('Are you sure you want to proceed?');
  confirmText = input('Confirm');
  cancelText = input('Cancel');
  isDangerous = input(false);
  closeOnOverlayClick = input(true);

  onConfirm = output<void>();
  onCancel = output<void>();

  onOverlayClick(): void {
    if (this.closeOnOverlayClick()) {
      this.onCancel.emit();
    }
  }
}
