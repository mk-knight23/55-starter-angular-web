import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signals-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="patterns" class="py-20 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="flex items-center gap-4 mb-16">
          <span class="text-[#ffb000] font-mono text-xl">&gt;</span>
          <h2 class="text-4xl md:text-5xl font-mono font-bold text-[#ffb000]">
            SIGNALS_DEMO
          </h2>
          <div class="h-px flex-1 bg-[#ffb000]/30 ml-4"></div>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-8">
            <p class="font-mono text-lg text-[#ffb000]/70 leading-relaxed">
              Experience pure zoneless reactivity. The counter below uses Angular signals
              for instant, fine-grained updates without zone.js overhead.
            </p>

            <div class="p-8 border-2 border-[#ffb000] bg-[#0a0a0a] pixel-border">
              <div class="flex items-center justify-between mb-8">
                <span class="font-mono text-sm text-[#ffb000]/60">COUNTER_VALUE:</span>
                <span class="font-mono text-4xl font-bold text-[#ffb000] blink">{{ count() }}</span>
              </div>

              <div class="flex gap-4">
                <button (click)="decrement()" 
                        class="pixel-button flex-1 py-4 text-lg border-[#ffb000] text-[#ffb000] hover:bg-[#ffb000] hover:text-[#0a0a0a]">
                  - DEC
                </button>
                <button (click)="increment()" 
                        class="pixel-button flex-1 py-4 text-lg border-[#ffb000] text-[#ffb000] hover:bg-[#ffb000] hover:text-[#0a0a0a]">
                  + INC
                </button>
              </div>

              <div class="mt-8 pt-6 border-t border-[#ffb000]/20 space-y-3">
                <div class="flex justify-between font-mono text-sm">
                  <span class="text-[#ffb000]/60">DOUBLE:</span>
                  <span class="text-[#ffb000]">{{ double() }}</span>
                </div>
                <div class="flex justify-between font-mono text-sm">
                  <span class="text-[#ffb000]/60">SQUARED:</span>
                  <span class="text-[#ffb000]">{{ squared() }}</span>
                </div>
                <div class="flex justify-between font-mono text-sm">
                  <span class="text-[#ffb000]/60">BINARY:</span>
                  <span class="text-[#ffb000]">{{ toBinary() }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="p-8 bg-[#0a0a0a] border-2 border-[#ffb000]/30 font-mono text-sm overflow-hidden">
            <div class="flex items-center gap-2 mb-6 pb-4 border-b border-[#ffb000]/20">
              <div class="flex gap-2">
                <div class="w-4 h-4 rounded-full bg-[#ff3333]"></div>
                <div class="w-4 h-4 rounded-full bg-[#ffb000]"></div>
                <div class="w-4 h-4 rounded-full bg-[#33ff00]"></div>
              </div>
              <span class="text-[#ffb000]/60 ml-4">counter.store.ts</span>
            </div>

            <pre class="text-[#ffb000] overflow-x-auto"><code><span class="text-[#33ff00]">// Zoneless Signal Store</span>
<span class="text-[#ffb000]">export</span> <span class="text-[#33ff00]">const</span> counterStore = () => &#123;
  <span class="text-[#33ff00]">const</span> count = <span class="text-[#33ff00]">signal</span>(0);
  
  <span class="text-[#33ff00]">const</span> double = <span class="text-[#33ff00]">computed</span>(() => count() * 2);
  <span class="text-[#33ff00]">const</span> squared = <span class="text-[#33ff00]">computed</span>(() => count() ** 2);
  
  <span class="text-[#ffb000]">return</span> &#123; count, double, squared &#125;;
&#125;</code></pre>

            <div class="mt-6 pt-4 border-t border-[#ffb000]/20 flex items-center gap-2 text-[#ffb000]/60">
              <span class="animate-pulse">█</span>
              <span>READY_FOR_INPUT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class SignalsDemoComponent {
  count = signal(42);
  double = computed(() => this.count() * 2);
  squared = computed(() => this.count() ** 2);
  toBinary = computed(() => this.count().toString(2).toUpperCase());

  increment() {
    this.count.update(v => v + 1);
  }

  decrement() {
    this.count.update(v => v - 1);
  }
}
