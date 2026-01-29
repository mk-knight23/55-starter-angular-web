# Architecture: 55-starter-angular-web

## Overview
A zoneless Angular 21 application featuring Signals-based reactivity with 90s CRT terminal aesthetics.

## Tech Stack
- **Framework**: Angular 21+
- **Change Detection**: Zoneless (no zone.js)
- **Reactivity**: Angular Signals
- **Styling**: Tailwind CSS v4

## Zoneless Configuration
```typescript
// app.config.ts
import { provideZonelessChangeDetection } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes)
  ]
};
```

## Signal Patterns
```typescript
// Signal declaration
count = signal(42);

// Computed values
double = computed(() => this.count() * 2);

// Update signals
increment() {
  this.count.update(v => v + 1);
}
```

## Folder Structure
```
src/app/
├── components/
│   ├── navbar.component.ts
│   ├── hero.component.ts
│   ├── features.component.ts
│   ├── signals-demo.component.ts
│   └── footer.component.ts
├── services/
├── models/
├── app.component.ts
├── app.config.ts
└── app.routes.ts
```

## Performance Benefits
- No zone.js overhead
- Fine-grained change detection
- Synchronous reactivity
- Smaller bundle size
