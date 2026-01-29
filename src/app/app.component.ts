import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent, HeroComponent, FeaturesComponent, SignalsDemoComponent, FooterComponent } from './components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, HeroComponent, FeaturesComponent, SignalsDemoComponent, FooterComponent],
  template: `
    <div class="min-h-screen crt-overlay">
      <app-navbar />
      <main>
        <app-hero />
        <app-features />
        <app-signals-demo />
      </main>
      <app-footer />
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class App {}
