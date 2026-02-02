import { Directive } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

/**
 * Base Form Component
 * Provides common form functionality for all form components
 */
@Directive()
export abstract class BaseFormComponent {
  abstract form: FormGroup;

  /**
   * Get control by name
   */
  getControl(name: string): FormControl {
    return this.form.get(name) as FormControl;
  }

  /**
   * Check if control has error
   */
  hasError(controlName: string, errorName: string): boolean {
    const control = this.getControl(controlName);
    return control.hasError(errorName) && (control.dirty || control.touched);
  }

  /**
   * Get error message for control
   */
  getErrorMessage(controlName: string): string {
    const control = this.getControl(controlName);

    if (!control.errors || !control.touched) {
      return '';
    }

    const errors = control.errors;

    if (errors['required']) {
      return 'This field is required';
    }

    if (errors['email']) {
      return 'Please enter a valid email address';
    }

    if (errors['minlength']) {
      return `Minimum length is ${errors['minlength'].requiredLength} characters`;
    }

    if (errors['maxlength']) {
      return `Maximum length is ${errors['maxlength'].requiredLength} characters`;
    }

    if (errors['min']) {
      return `Minimum value is ${errors['min'].min}`;
    }

    if (errors['max']) {
      return `Maximum value is ${errors['max'].max}`;
    }

    if (errors['passwordStrength']) {
      return 'Password must contain at least 8 characters, including uppercase, lowercase, number, and special character';
    }

    if (errors['mustMatch']) {
      return 'Passwords must match';
    }

    if (errors['unique']) {
      return 'This value is already taken';
    }

    return 'Invalid value';
  }

  /**
   * Mark all controls as touched
   */
  validateAllFormFields(): void {
    Object.keys(this.form.controls).forEach((field) => {
      const control = this.form.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }

  /**
   * Reset form with default values
   */
  resetForm(): void {
    this.form.reset();
  }

  /**
   * Check if form is valid
   */
  isValid(): boolean {
    this.validateAllFormFields();
    return this.form.valid;
  }
}
