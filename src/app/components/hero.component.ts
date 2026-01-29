import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="min-h-screen pt-32 pb-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="mb-12 inline-flex items-center gap-3 px-4 py-2 border border-[#33ff00] bg-[#33ff00]/5">
          <span class="w-3 h-3 bg-[#33ff00] rounded-full animate-pulse"></span>
          <span class="font-mono text-sm tracking-widest text-[#33ff00]">SYSTEM_READY_v2.0</span>
        </div>

        <h1 class="text-6xl md:text-8xl lg:text-9xl font-mono font-bold tracking-tighter mb-8 leading-none">
          <span class="text-[#33ff00] glitch-text">&gt;_</span>
          <br />
          <span class="text-[#33ff00]">RETRO</span>
          <br />
          <span class="text-[#33ff00]/60 italic">ANGULAR</span>
          <br />
          <span class="text-[#ffb000]">SYSTEM</span>
        </h1>

        <p class="text-xl md:text-2xl font-mono max-w-2xl mb-12 text-[#33ff00]/70 leading-relaxed">
          A 90s-styled Angular 21 starter with Zoneless signals, CRT effects, and pixel-perfect aesthetics. 
          <span class="text-[#33ff00]">_INIT_SYSTEM()</span>
        </p>

        <div class="flex flex-wrap gap-6">
          <button class="pixel-button px-8 py-4 text-xl">
            &gt; INITIALIZE
          </button>
          <button class="pixel-button px-8 py-4 text-xl border-[#ffb000] text-[#ffb000] hover:bg-[#ffb000] hover:text-[#0a0a0a]">
            VIEW_SOURCE
          </button>
        </div>

        <div class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          @for (stat of stats; track stat.label) {
            <div class="p-6 border border-[#33ff00]/30 bg-[#33ff00]/5 pixel-border">
              <div class="text-sm font-mono text-[#33ff00]/60 mb-2">{{ stat.label }}</div>
              <div class="text-3xl font-mono font-bold text-[#33ff00]">{{ stat.value }}</div>
            </div>
          }
        </div>
      </div>

      <div class="scanline"></div>
    </section>
  `
})
export class HeroComponent {
  stats = [
    { label: 'ZONES_DISABLED', value: 'TRUE' },
    { label: 'SIGNALS_ACTIVE', value: '100%' },
    { label: 'RETRO_LEVEL', value: 'MAX' },
  ];
}
