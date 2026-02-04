import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseFormComponent } from '../../../shared/forms';
import { AppValidators } from '../../../shared/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="login-container">
      <div class="card login-card">
        <h1>Login</h1>
        <p class="text-secondary">Enter your credentials to access your account</p>

        <form [formGroup]="form" (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              type="email"
              formControlName="email"
              [class.error]="hasError('email', 'email')"
            />
            @if (hasError('email', 'required')) {
              <small class="error-message">Email is required</small>
            }
            @if (hasError('email', 'email')) {
              <small class="error-message">Please enter a valid email</small>
            }
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input
              id="password"
              type="password"
              formControlName="password"
            />
            @if (hasError('password', 'required')) {
              <small class="error-message">Password is required</small>
            }
          </div>

          <button type="submit" class="btn btn-primary" [disabled]="form.invalid">
            Login
          </button>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .login-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 400px;
    }

    .login-card {
      max-width: 400px;
      width: 100%;
    }

    .form-group {
      margin-bottom: var(--spacing-lg);
    }

    label {
      display: block;
      margin-bottom: var(--spacing-sm);
      font-weight: 500;
    }

    input {
      width: 100%;
    }

    .error-message {
      display: block;
      color: var(--error-color);
      font-size: var(--font-size-sm);
      margin-top: var(--spacing-xs);
    }

    button[type="submit"] {
      width: 100%;
    }
  `]
})
export class LoginComponent extends BaseFormComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  form = this.fb.group({
    email: ['', [Validators.required, AppValidators.email]],
    password: ['', Validators.required]
  });

  constructor() {
    super();
  }

  onSubmit(): void {
    if (this.isValid()) {
      // Handle login logic here
      console.log('Login form submitted:', this.form.value);
      this.router.navigate(['/dashboard']);
    }
  }
}
