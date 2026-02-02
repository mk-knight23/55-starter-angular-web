import { NgFor, NgForOf } from '@angular/common';
import { Directive, input } from '@angular/core';

/**
 * TrackBy Directive
 * Simplifies *ngFor with trackBy
 * Usage: *ngFor="let item of items; trackBy: trackById"
 * Then: @Input('trackById') trackById = (index: number, item: any) => item.id
 */
@Directive({
  selector: '[ngFor][trackBy]',
  standalone: true,
  hostDirectives: [NgFor]
})
export class TrackByDirective {
  trackBy = input<(index: number, item: unknown) => unknown>();
}
