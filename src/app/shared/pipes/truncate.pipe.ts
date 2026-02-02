import { Pipe, PipeTransform } from '@angular/core';

/**
 * Truncate Pipe
 * Truncates text to specified length
 * Usage: {{ text | truncate:100 }}
 */
@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, length: number = 50, suffix: string = '...'): string {
    if (!value) return '';

    if (value.length <= length) return value;

    return value.substring(0, length) + suffix;
  }
}
