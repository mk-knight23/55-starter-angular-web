import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="components" class="py-20 px-6 bg-[#0f0f0f]">
      <div class="max-w-7xl mx-auto">
        <div class="flex items-center gap-4 mb-16">
          <span class="text-[#33ff00] font-mono text-xl">&gt;</span>
          <h2 class="text-4xl md:text-5xl font-mono font-bold text-[#33ff00]">
            FEATURE_MODULES
          </h2>
          <div class="h-px flex-1 bg-[#33ff00]/30 ml-4"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          @for (feature of features; track feature.title) {
            <div class="group p-8 border-2 border-[#33ff00]/20 hover:border-[#33ff00] bg-[#0a0a0a] pixel-border transition-all hover:bg-[#33ff00]/5 cursor-pointer">
              <div class="w-14 h-14 mb-6 border border-[#33ff00] flex items-center justify-center">
                <span class="text-[#33ff00] font-mono text-2xl group-hover:bg-[#33ff00] group-hover:text-[#0a0a0a)] transition-colors">
                  {{ feature.icon }}
                </span>
              </div>
              <h3 class="text-2xl font-mono font-bold text-[#33ff00] mb-3">{{ feature.title }}</h3>
              <p class="font-mono text-[#33ff00]/60 leading-relaxed">{{ feature.desc }}</p>
              <div class="mt-4 pt-4 border-t border-[#33ff00]/20">
                <span class="font-mono text-xs text-[#33ff00]/40">&gt; LOAD_MODULE</span>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class FeaturesComponent {
  features = [
    { title: 'ZONELESS', icon: 'Ø', desc: 'No zone.js overhead. Pure Angular 21 signals for maximum performance.' },
    { title: 'SIGNALS', icon: '~', desc: 'Fine-grained reactivity with synchronous state management patterns.' },
    { title: 'PIXEL_UI', icon: '█', desc: '90s CRT aesthetics with scanlines, glitch effects, and terminal styling.' },
    { title: 'RETRO_FONTS', icon: 'T', desc: 'VT323 monospace typography for authentic retro terminal experience.' },
  ];
}
