import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BaseFormComponent } from '../../../shared/forms';
import { AppValidators } from '../../../shared/forms';

@Component({
  selector: 'app-profile-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="profile-form-container">
      <div class="card">
        <h2>Profile Settings</h2>
        <p class="text-secondary">Update your personal information and preferences</p>

        <form [formGroup]="form" (ngSubmit)="onSubmit()">
          <div class="form-grid">
            <!-- Personal Information -->
            <div class="form-section">
              <h3>Personal Information</h3>

              <div class="form-group">
                <label for="firstName">First Name *</label>
                <input
                  id="firstName"
                  type="text"
                  formControlName="firstName"
                  [class.error]="hasControlError('firstName')"
                  aria-required="true"
                  aria-describedby="firstNameError"
                />
                <small id="firstNameError" class="error-message">
                  @if (hasError('firstName', 'required')) {
                    First name is required
                  }
                  @if (hasError('firstName', 'minlength')) {
                    First name must be at least 2 characters
                  }
                </small>
              </div>

              <div class="form-group">
                <label for="lastName">Last Name *</label>
                <input
                  id="lastName"
                  type="text"
                  formControlName="lastName"
                  [class.error]="hasControlError('lastName')"
                  aria-required="true"
                  aria-describedby="lastNameError"
                />
                <small id="lastNameError" class="error-message">
                  @if (hasError('lastName', 'required')) {
                    Last name is required
                  }
                  @if (hasError('lastName', 'minlength')) {
                    Last name must be at least 2 characters
                  }
                </small>
              </div>

              <div class="form-group">
                <label for="email">Email Address *</label>
                <input
                  id="email"
                  type="email"
                  formControlName="email"
                  [class.error]="hasControlError('email')"
                  aria-required="true"
                  aria-describedby="emailError"
                />
                <small id="emailError" class="error-message">
                  @if (hasError('email', 'required')) {
                    Email is required
                  }
                  @if (hasError('email', 'email')) {
                    Please enter a valid email address
                  }
                </small>
              </div>

              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  formControlName="phone"
                  [class.error]="hasControlError('phone')"
                  aria-describedby="phoneError"
                />
                <small id="phoneError" class="error-message">
                  @if (hasError('phone', 'pattern')) {
                    Please enter a valid phone number
                  }
                </small>
              </div>
            </div>

            <!-- Security Settings -->
            <div class="form-section">
              <h3>Security Settings</h3>

              <div class="form-group">
                <label for="currentPassword">Current Password *</label>
                <input
                  id="currentPassword"
                  type="password"
                  formControlName="currentPassword"
                  [class.error]="hasControlError('currentPassword')"
                  aria-required="true"
                  aria-describedby="currentPasswordError"
                />
                <small id="currentPasswordError" class="error-message">
                  @if (hasError('currentPassword', 'required')) {
                    Current password is required
                  }
                </small>
              </div>

              <div class="form-group">
                <label for="newPassword">New Password</label>
                <input
                  id="newPassword"
                  type="password"
                  formControlName="newPassword"
                  [class.error]="hasControlError('newPassword')"
                  aria-describedby="newPasswordError"
                />
                <small id="newPasswordError" class="error-message">
                  @if (hasError('newPassword', 'minlength')) {
                    Password must be at least 8 characters
                  }
                  @if (hasError('newPassword', 'passwordStrength')) {
                    Password must contain uppercase, lowercase, number, and special character
                  }
                </small>
              </div>

              <div class="form-group">
                <label for="confirmPassword">Confirm New Password</label>
                <input
                  id="confirmPassword"
                  type="password"
                  formControlName="confirmPassword"
                  [class.error]="hasControlError('confirmPassword')"
                  aria-describedby="confirmPasswordError"
                />
                <small id="confirmPasswordError" class="error-message">
                  @if (hasError('confirmPassword', 'mustMatch')) {
                    Passwords must match
                  }
                </small>
              </div>

              <div class="form-group">
                <label for="bio">Bio</label>
                <textarea
                  id="bio"
                  formControlName="bio"
                  rows="4"
                  [class.error]="hasControlError('bio')"
                  aria-describedby="bioError"
                ></textarea>
                <small id="bioError" class="error-message">
                  @if (hasError('bio', 'maxlength')) {
                    Bio must be less than 500 characters
                  }
                </small>
              </div>
            </div>
          </div>

          <div class="form-actions">
            <button type="button" (click)="resetForm()" class="btn btn-secondary">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary" [disabled]="form.invalid || form.pristine">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .profile-form-container {
      max-width: 1000px;
      margin: 0 auto;
    }

    .form-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--spacing-xl);
      margin-bottom: var(--spacing-xl);
    }

    .form-section {
      padding: var(--spacing-lg);
      background: var(--background-secondary);
      border-radius: var(--border-radius-md);
    }

    .form-section h3 {
      margin-bottom: var(--spacing-lg);
      color: var(--text-primary);
      border-bottom: 2px solid var(--border-color);
      padding-bottom: var(--spacing-sm);
    }

    .form-group {
      margin-bottom: var(--spacing-md);
    }

    label {
      display: block;
      margin-bottom: var(--spacing-xs);
      font-weight: 500;
      color: var(--text-primary);
    }

    input, textarea {
      width: 100%;
      padding: var(--spacing-sm);
      border: 1px solid var(--border-color);
      border-radius: var(--border-radius-sm);
      font-size: var(--font-size-base);
      transition: border-color 0.2s;
      background: var(--background);
    }

    input:focus, textarea:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
    }

    input.error, textarea.error {
      border-color: var(--error-color);
    }

    textarea {
      resize: vertical;
      min-height: 100px;
    }

    .form-actions {
      display: flex;
      gap: var(--spacing-md);
      justify-content: flex-end;
      margin-top: var(--spacing-xl);
      padding-top: var(--spacing-lg);
      border-top: 1px solid var(--border-color);
    }

    .btn {
      padding: var(--spacing-sm) var(--spacing-lg);
      border: none;
      border-radius: var(--border-radius-md);
      font-size: var(--font-size-base);
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
    }

    .btn-primary {
      background: var(--primary-color);
      color: white;
    }

    .btn-primary:hover:not(:disabled) {
      background: var(--primary-dark);
      transform: translateY(-1px);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .btn-secondary {
      background: var(--background-secondary);
      color: var(--text-primary);
      border: 1px solid var(--border-color);
    }

    .btn-secondary:hover {
      background: var(--background-tertiary);
    }

    .btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .error-message {
      color: var(--error-color);
      font-size: var(--font-size-sm);
      margin-top: var(--spacing-xs);
      display: block;
    }

    @media (max-width: 768px) {
      .form-grid {
        grid-template-columns: 1fr;
      }

      .form-actions {
        flex-direction: column;
      }

      .btn {
        width: 100%;
      }
    }
  `]
})
export class ProfileFormComponent extends BaseFormComponent {
  private fb = inject(FormBuilder);

  /**
   * Check if control has any error
   */
  hasControlError(controlName: string): boolean {
    const control = this.form.get(controlName);
    return !!control && control.invalid && (control.dirty || control.touched);
  }

  form = this.fb.group({
    // Personal Information
    firstName: ['', [
      Validators.required,
      Validators.minLength(2)
    ]],
    lastName: ['', [
      Validators.required,
      Validators.minLength(2)
    ]],
    email: ['', [
      Validators.required,
      AppValidators.email
    ]],
    phone: ['', [
      Validators.pattern(/^\+?1?\d{9,15}$/)
    ]],

    // Security Settings
    currentPassword: ['', Validators.required],
    newPassword: ['', [
      Validators.minLength(8),
      AppValidators.passwordStrength
    ]],
    confirmPassword: [''],
    bio: ['', Validators.maxLength(500)]
  }, {
    validators: AppValidators.mustMatch('newPassword', 'confirmPassword')
  });

  constructor() {
    super();
  }

  onSubmit(): void {
    if (this.isValid()) {
      // Handle form submission
      console.log('Profile form submitted:', this.form.value);

      // Remove passwords from log
      const { currentPassword, newPassword, confirmPassword, ...profileData } = this.form.value;
      console.log('Profile data:', profileData);

      // Show success message
      alert('Profile updated successfully!');

      // Reset form
      this.resetForm();
    }
  }

  override resetForm(): void {
    this.form.reset();
  }
}