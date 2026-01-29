import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="fixed top-0 left-0 right-0 h-16 bg-[#0a0a0a] border-b-2 border-[#33ff00] z-50 pixel-border">
      <div class="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div class="flex items-center gap-4">
          <div class="w-10 h-10 bg-[#33ff00] flex items-center justify-center">
            <span class="text-[#0a0a0a] font-bold text-xl">&gt;_</span>
          </div>
          <h1 class="text-2xl font-mono tracking-wider glitch-text">
            <span class="text-[#33ff00]">RETRO</span>
            <span class="text-[#33ff00]/60">_ANGULAR</span>
          </h1>
        </div>

        <div class="hidden md:flex items-center gap-8">
          @for (link of navLinks; track link.label) {
            <a [href]="link.href" 
               class="font-mono text-lg hover:bg-[#33ff00] hover:text-[#0a0a0a] px-3 py-1 transition-colors corner-brackets">
              {{ link.label }}
            </a>
          }
        </div>

        <div class="flex items-center gap-4">
          <div class="hidden lg:flex items-center gap-2 font-mono text-sm">
            <span class="text-[#33ff00]/60">SYS:</span>
            <span class="text-[#33ff00]">ONLINE</span>
            <span class="w-2 h-4 bg-[#33ff00] animate-pulse ml-1"></span>
          </div>
          
          <button (click)="toggleMenu()" 
                  class="md:hidden font-mono text-2xl text-[#33ff00] hover:bg-[#33ff00] hover:text-[#0a0a0a] px-2 py-1">
            {{ isMenuOpen() ? 'X' : '☰' }}
          </button>
        </div>
      </div>

      @if (isMenuOpen()) {
        <div class="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a] border-b-2 border-[#33ff00] p-6 pixel-border">
          <div class="flex flex-col gap-4">
            @for (link of navLinks; track link.label) {
              <a [href]="link.href" 
                 (click)="isMenuOpen.set(false)"
                 class="font-mono text-xl text-[#33ff00] hover:bg-[#33ff00] hover:text-[#0a0a0a] px-4 py-2 block">
                &gt; {{ link.label }}
              </a>
            }
          </div>
        </div>
      }
    </nav>
  `
})
export class NavbarComponent {
  isMenuOpen = signal(false);

  navLinks = [
    { label: 'DOCS', href: '#docs' },
    { label: 'COMPONENTS', href: '#components' },
    { label: 'PATTERNS', href: '#patterns' },
    { label: 'DOWNLOAD', href: '#download' },
  ];

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }
}
