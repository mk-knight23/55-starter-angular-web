import { Component, signal, computed, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-500">

      <!-- Canonical Navigation -->
      <nav class="h-24 border-b border-slate-200 dark:border-white/5 px-10 flex items-center justify-between sticky top-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md z-50">
         <div class="flex items-center space-x-3">
            <div class="w-12 h-12 bg-angular-primary rounded-2xl flex items-center justify-center text-white shadow-xl shadow-angular-primary/30">
               <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <h1 class="text-2xl font-display font-black tracking-tight uppercase dark:text-white">Angular<span class="text-angular-primary">Canonical</span></h1>
         </div>

         <div class="hidden lg:flex items-center space-x-12">
            <a href="#" class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 hover:text-angular-primary transition-colors">Architecture</a>
            <a href="#" class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 hover:text-angular-primary transition-colors">Signals</a>
            <a href="#" class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 hover:text-angular-primary transition-colors">Patterns</a>
         </div>

         <div class="flex items-center space-x-6">
            <button (click)="toggleTheme()" class="p-3 rounded-2xl bg-slate-100 dark:bg-white/5 text-slate-400 transition-all hover:text-angular-primary" [attr.aria-label]="isDarkMode() ? 'Switch to light mode' : 'Switch to dark mode'">
               <svg *ngIf="isDarkMode()" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
               <svg *ngIf="!isDarkMode()" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
            </button>
            <a href="https://github.com/mk-knight23/58-Angular-Web-Starter" target="_blank" rel="noopener noreferrer" class="p-3 rounded-2xl bg-slate-100 dark:bg-white/5 text-slate-400 transition-all hover:text-angular-primary" aria-label="GitHub">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
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
                     Clone Repository <svg class="ml-3 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" [innerHTML]="feat.iconPath"></svg>
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
                        <button (click)="count.set(count() - 1)" class="w-12 h-12 bg-slate-100 dark:bg-white/5 rounded-xl flex items-center justify-center font-black" aria-label="Decrement counter">-</button>
                        <button (click)="count.set(count() + 1)" class="w-12 h-12 bg-slate-100 dark:bg-white/5 rounded-xl flex items-center justify-center font-black" aria-label="Increment counter">+</button>
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
                     <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>
                     <span class="text-[8px] font-black uppercase tracking-widest">Store Definition</span>
                  </div>
               </div>
            </div>
         </section>
      </main>

      <!-- Global Footer -->
      <footer class="py-24 px-10 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 text-slate-400">
         <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-angular-primary"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
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
  private platformId = inject(PLATFORM_ID);
  isDarkMode = signal(true);
  count = signal(42);

  features = [
    { title: 'Standalone', desc: 'Minimal footprint architecture with zero ngModules. Optimized for lazy loading.', iconPath: '<polyline points="2 12 22 12 12 2 12 22"/><polyline points="12 2 12 12"/>' },
    { title: 'Reactive Signals', desc: 'Synchronous state management with fine-grained change detection.', iconPath: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>' },
    { title: 'Typed Routing', desc: 'End-to-end type safety for data resolvers, guards, and params.', iconPath: '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>' },
    { title: 'Enterprise Kit', desc: 'Ready-to-use services for auth, storage, and cross-field forms.', iconPath: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>' }
  ];

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('theme');
      if (saved) {
        this.isDarkMode.set(saved === 'dark');
      } else {
        this.isDarkMode.set(!window.matchMedia('(prefers-color-scheme: light)').matches);
      }
      this.applyTheme();
    }
  }

  applyTheme() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.isDarkMode()) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }

  toggleTheme() {
    this.isDarkMode.update(v => !v);
    if (isPlatformBrowser(this.platformId)) {
      this.applyTheme();
      localStorage.setItem('theme', this.isDarkMode() ? 'dark' : 'light');
    }
  }
}
