import { AbstractControl, ValidationErrors, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';

/**
 * Custom Validators
 * Reusable validation functions for reactive forms
 */
export class AppValidators {
  /**
   * Email validator
   */
  static email(control: AbstractControl): ValidationErrors | null {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(control.value) ? null : { email: true };
  }

  /**
   * Password strength validator
   * Requires: 8+ chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
   */
  static passwordStrength(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const isValid = value.length >= 8 && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;

    return isValid ? null : { passwordStrength: true };
  }

  /**
   * Must match validator (for password confirmation)
   */
  static mustMatch(controlName: string, matchingControlName: string): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const formGroup = group as { [key: string]: AbstractControl };
      const control = formGroup[controlName];
      const matchingControl = formGroup[matchingControlName];

      if (!control || !matchingControl) {
        return null;
      }

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return null;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
        return { mustMatch: true };
      } else {
        matchingControl.setErrors(null);
        return null;
      }
    };
  }

  /**
   * Required file type validator
   */
  static allowedFileTypes(types: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      const file = control.value as File;
      const fileExtension = file.name.split('.').pop()?.toLowerCase();

      if (!fileExtension || !types.includes(`.${fileExtension}`)) {
        return { allowedFileTypes: { allowed: types.join(', ') } };
      }

      return null;
    };
  }

  /**
   * Max file size validator (in MB)
   */
  static maxFileSize(maxSizeMB: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      const file = control.value as File;
      const maxSizeBytes = maxSizeMB * 1024 * 1024;

      if (file.size > maxSizeBytes) {
        return { maxFileSize: { maxSize: maxSizeMB, actualSize: (file.size / (1024 * 1024)).toFixed(2) } };
      }

      return null;
    };
  }

  /**
   * Async unique validator (for checking email uniqueness, etc.)
   */
  static unique(
    checkFn: (value: string) => Observable<boolean>
  ): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (!control.value) {
        return new Observable((observer) => observer.next(null));
      }

      return new Observable((observer) => {
        checkFn(control.value).subscribe({
          next: (isUnique) => {
            observer.next(isUnique ? null : { unique: true });
            observer.complete();
          },
          error: () => {
            observer.next(null);
            observer.complete();
          }
        });
      });
    };
  }

  /**
   * Minimum age validator (for date of birth)
   */
  static minAge(minAge: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      const birthDate = new Date(control.value);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      const actualAge =
        monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())
          ? age - 1
          : age;

      return actualAge >= minAge ? null : { minAge: { required: minAge, actual: actualAge } };
    };
  }
}
