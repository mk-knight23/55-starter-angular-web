import { Directive, ElementRef, Output, EventEmitter, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

/**
 * Click Outside Directive
 * Detects clicks outside the element
 * Usage: <div (clickOutside)="onClose()"></div>
 */
@Directive({
  selector: '[clickOutside]',
  standalone: true
})
export class ClickOutsideDirective {
  private elementRef = inject(ElementRef<HTMLElement>);
  private hasClickedOutside = false;

  @Output() clickOutside = new EventEmitter<void>();

  constructor() {
    // Listen for clicks on document
    document.addEventListener('click', (event: MouseEvent) => {
      const clickedInside = this.elementRef.nativeElement.contains(
        event.target as Node
      );

      if (!clickedInside && this.hasClickedOutside) {
        this.clickOutside.emit();
      }

      this.hasClickedOutside = true;
    });
  }
}
