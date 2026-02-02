import { Directive, ElementRef, AfterViewInit } from '@angular/core';

/**
 * Auto Focus Directive
 * Automatically focuses the element when rendered
 * Usage: <input appAutoFocus />
 */
@Directive({
  selector: '[appAutoFocus]',
  standalone: true
})
export class AutoFocusDirective implements AfterViewInit {
  constructor(private elementRef: ElementRef<HTMLInputElement>) {}

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.focus();
  }
}
