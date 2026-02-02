import { Pipe, PipeTransform } from '@angular/core';

/**
 * Keys Pipe
 * Returns object keys for iteration
 * Usage: *ngFor="let key of obj | keys"
 */
@Pipe({
  name: 'keys',
  standalone: true
})
export class KeysPipe implements PipeTransform {
  transform(value: Record<string, unknown>): string[] {
    return Object.keys(value);
  }
}
