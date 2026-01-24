import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  Zap, 
  Shield, 
  Layers, 
  Cpu, 
  Github, 
  Sun, 
  Moon,
  ChevronRight,
  Code2,
  Library,
  Terminal,
  Database,
  Search,
  Layout,
  ExternalLink
} from 'lucide-angular';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      
      <!-- Canonical Navigation -->
      <nav class="h-24 border-b border-slate-200 dark:border-white/5 px-10 flex items-center justify-between sticky top-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md z-50">
         <div class="flex items-center space-x-3">
            <div class="w-12 h-12 bg-angular-primary rounded-2xl flex items-center justify-center text-white shadow-xl shadow-angular-primary/30">
               <lucide-icon name="code2" [size]="28"></lucide-icon>
            </div>
            <h1 class="text-2xl font-display font-black tracking-tight uppercase dark:text-white">Angular<span class="text-angular-primary">Canonical</span></h1>
         </div>

         <div class="hidden lg:flex items-center space-x-12">
            <a href="#" class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 hover:text-angular-primary transition-colors">Architecture</a>
            <a href="#" class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 hover:text-angular-primary transition-colors">Signals</a>
            <a href="#" class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 hover:text-angular-primary transition-colors">Patterns</a>
         </div>

         <div class="flex items-center space-x-6">
            <button (click)="toggleTheme()" class="p-3 rounded-2xl bg-slate-100 dark:bg-white/5 text-slate-400 transition-all hover:text-angular-primary">
               <lucide-icon [name]="isDarkMode() ? 'sun' : 'moon'" [size]="20"></lucide-icon>
            </button>
            <a href="https://github.com/mk-knight23/58-Angular-Web-Starter" target="_blank" class="p-3 rounded-2xl bg-slate-100 dark:bg-white/5 text-slate-400 transition-all hover:text-angular-primary">
               <lucide-icon name="github" [size]="20"></lucide-icon>
            </a>
            <button class="btn-canonical btn-primary">Reference SDK</button>
         </div>
      </nav>

      <main class="flex-1">
         
         <!-- Hero -->
         <section class="max-w-7xl mx-auto px-10 py-32 space-y-16">
            <div class="max-w-3xl space-y-10">
               <div class="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-angular-primary/10 text-angular-primary border border-angular-primary/20">
                  <span class="w-1.5 h-1.5 bg-angular-primary rounded-full animate-ping"></span>
                  <span class="text-[10px] font-black uppercase tracking-[0.2em]">Framework Canonical Implementation</span>
               </div>
               <h2 class="text-7xl md:text-9xl font-display font-black tracking-tighter leading-[0.8] uppercase dark:text-white">
                  The Gold <br />
                  <span class="text-angular-primary italic underline decoration-8 decoration-angular-primary/10">Standard</span> <br />
                  Starter.
               </h2>
               <p class="text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl">A technical blueprint for modern Angular development. Featuring standalone components, reactive signals, and advanced modularity.</p>
               
               <div class="flex flex-wrap gap-6 pt-6">
                  <button class="px-12 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-[2rem] font-black text-xl flex items-center group shadow-2xl active:scale-95 transition-all">
                     Clone Repository <lucide-icon name="chevron-right" class="ml-3 group-hover:translate-x-1 transition-transform" [size]="24"></lucide-icon>
                  </button>
                  <button class="px-12 py-5 glass-card border border-slate-200 dark:border-white/10 rounded-[2rem] font-black text-xl dark:text-white">Learn Core Patterns</button>
               </div>
            </div>
         </section>

         <!-- Core Pillars -->
         <section class="bg-white dark:bg-slate-900 py-32 border-y border-slate-100 dark:border-white/5">
            <div class="max-w-7xl mx-auto px-10 space-y-20">
               <div class="flex flex-col md:flex-row md:items-end justify-between gap-10">
                  <div class="space-y-4">
                     <h3 class="text-4xl font-display font-black uppercase tracking-tighter dark:text-white">The Four Pillars</h3>
                     <p class="text-slate-500 font-medium max-w-sm italic">Architectural foundations designed for sub-second performance and infinite scale.</p>
                  </div>
                  <div class="flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.3em] text-angular-primary italic underline underline-offset-8">
                     Examine Infrastructure
                  </div>
               </div>

               <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div *ngFor="let feat of features" class="feature-card group">
                     <div class="w-14 h-14 bg-slate-50 dark:bg-white/5 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-angular-primary group-hover:bg-angular-primary/5 transition-all duration-500">
                        <lucide-icon [name]="feat.icon" [size]="28"></lucide-icon>
                     </div>
                     <div class="mt-8 space-y-4">
                        <h4 class="text-2xl font-display font-black uppercase tracking-tight dark:text-white">{{ feat.title }}</h4>
                        <p class="text-sm text-slate-500 leading-relaxed font-medium italic">{{ feat.desc }}</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <!-- Reactive Demo (Signals) -->
         <section class="py-32 px-10">
            <div class="max-w-7xl mx-auto glass-card p-16 grid lg:grid-cols-2 gap-20 items-center overflow-hidden relative">
               <div class="absolute -top-40 -right-40 w-96 h-96 bg-angular-primary/5 blur-[120px] rounded-full"></div>
               <div class="space-y-8 relative z-10">
                  <h3 class="text-5xl font-display font-black uppercase tracking-tighter dark:text-white leading-none">Powered by <br/> <span class="text-angular-primary italic">Signals.</span></h3>
                  <p class="text-xl text-slate-500 font-medium italic leading-relaxed">Experience zero-zone, fine-grained reactivity. The most efficient way to manage state in the modern web era.</p>
                  <div class="flex items-center space-x-10">
                     <div class="space-y-1">
                        <p class="text-[10px] font-black uppercase tracking-widest text-slate-400">Current Value</p>
                        <p class="text-4xl font-mono font-black text-angular-primary">{{ count() }}</p>
                     </div>
                     <div class="flex space-x-4">
                        <button (click)="count.set(count() - 1)" class="w-12 h-12 bg-slate-100 dark:bg-white/5 rounded-xl flex items-center justify-center font-black">-</button>
                        <button (click)="count.set(count() + 1)" class="w-12 h-12 bg-slate-100 dark:bg-white/5 rounded-xl flex items-center justify-center font-black">+</button>
                     </div>
                  </div>
               </div>
               <div class="bg-slate-950 p-10 rounded-[2.5rem] border-4 border-white/5 shadow-2xl relative">
                  <pre class="text-blue-400 font-mono text-xs overflow-x-auto"><code>// src/app/store/counter.store.ts
export const counterStore = () => &#123;
  const count = signal(0);
  const double = computed(() => count() * 2);
  return &#123; count, double &#125;;
&#125;</code></pre>
                  <div class="absolute bottom-6 right-10 flex items-center space-x-2 text-angular-primary opacity-50">
                     <lucide-icon name="terminal" [size]="14"></lucide-icon>
                     <span class="text-[8px] font-black uppercase tracking-widest">Store Definition</span>
                  </div>
               </div>
            </div>
         </section>
      </main>

      <!-- Global Footer -->
      <footer class="py-24 px-10 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 text-slate-400">
         <div class="flex items-center space-x-2">
            <lucide-icon name="code2" class="text-angular-primary" [size]="20"></lucide-icon>
            <span class="font-display font-black text-xl tracking-tighter uppercase dark:text-white">AngularCanonical</span>
         </div>
         <p class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600">Established 2026 // Production Ready</p>
         <div class="flex items-center space-x-8 text-[10px] font-black uppercase tracking-widest">
            <a href="#" class="hover:text-angular-primary">Changelog</a>
            <a href="#" class="hover:text-angular-primary">Architecture</a>
            <a href="#" class="hover:text-angular-primary">Legal</a>
         </div>
      </footer>
    </div>
  `,
  styles: [`
    :host { display: block; }
    .glass-card { @apply bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5; }
  `]
})
export class App {
  isDarkMode = signal(true);
  count = signal(42);

  features = [
    { title: 'Standalone', desc: 'Minimal footprint architecture with zero ngModules. Optimized for lazy loading.', icon: 'layers' },
    { title: 'Reactive Signals', desc: 'Synchronous state management with fine-grained change detection.', icon: 'zap' },
    { title: 'Typed Routing', desc: 'End-to-end type safety for data resolvers, guards, and params.', icon: 'compass' },
    { title: 'Enterprise Kit', desc: 'Ready-to-use services for auth, storage, and cross-field forms.', icon: 'shield' }
  ];

  constructor() {
    if (this.isDarkMode()) document.documentElement.classList.add('dark');
  }

  toggleTheme() {
    this.isDarkMode.set(!this.isDarkMode());
    document.documentElement.classList.toggle('dark');
  }
}
