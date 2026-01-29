import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="py-12 px-6 border-t-2 border-[#33ff00]/30 bg-[#0a0a0a]">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div class="flex items-center gap-4">
          <div class="w-10 h-10 bg-[#33ff00] flex items-center justify-center">
            <span class="text-[#0a0a0a] font-bold text-xl">&gt;_</span>
          </div>
          <div>
            <div class="font-mono font-bold text-[#33ff00]">RETRO_ANGULAR</div>
            <div class="font-mono text-xs text-[#33ff00]/60">EST. 2026 // V2.0</div>
          </div>
        </div>

        <div class="flex flex-wrap justify-center gap-8 font-mono text-sm">
          <a href="#" class="text-[#33ff00]/60 hover:text-[#33ff00)] transition-colors">[DOCS]</a>
          <a href="#" class="text-[#33ff00]/60 hover:text-[#33ff00)] transition-colors">[GITHUB]</a>
          <a href="#" class="text-[#33ff00]/60 hover:text-[#33ff00)] transition-colors">[NPM]</a>
          <a href="#" class="text-[#33ff00]/60 hover:text-[#33ff00)] transition-colors">[LICENSE]</a>
        </div>

        <div class="font-mono text-xs text-[#33ff00]/40">
          CPU: 100% | MEM: 64KB | UP: FOREVER
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}
