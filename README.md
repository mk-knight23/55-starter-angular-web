# AngularCanonical - Production-Grade Angular Starter

<div align="center">

![Angular](https://img.shields.io/badge/Angular_21- DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**The gold standard Angular 21 starter featuring Signals, standalone components, and inline SVG icons**

[Live Demo](https://angularcanonical.vercel.app) | [GitHub](https://github.com/mk-knight23/58-Angular-Web-Starter)

</div>

---

## Overview

AngularCanonical is a production-grade starter kit that establishes the gold standard for modern Angular development. It features Angular 21's latest innovations including Signals architecture and standalone components.

### Problem Statement

Many Angular starters rely on outdated patterns, heavy dependencies, and complex configurations that slow down development and increase bundle sizes.

### Solution

AngularCanonical provides:
- **Angular 21 Signals**: Fine-grained reactivity with zero Zone.js overhead
- **Standalone Components**: Minimal footprint, no ngModules
- **Zero External Icons**: Inline SVGs eliminate runtime dependencies
- **Theme Persistence**: Dark/Light mode with localStorage

---

## Features Comparison

| Feature | Legacy Angular | AngularCanonical (v2.0) |
| :--- | :--- | :--- |
| **Framework** | Angular 14-18 | **Angular 21** |
| **Reactivity** | Zone.js | **Fine-grained Signals** |
| **Architecture** | NgModules | **Standalone Components** |
| **Icons** | External library | **Zero-dependency inline SVGs** |
| **Theme** | Fixed | **Dark + Light with persistence** |
| **Change Detection** | Full tree | **Component-level** |

---

## Tech Stack

- **Framework**: Angular 21 (Standalone + Signals)
- **Styling**: Tailwind CSS 3.4
- **Icons**: Inline SVGs (no external dependencies)
- **TypeScript**: 5.9+ with strict mode

---

## Architecture

```
src/
└── app/
    ├── app.component.ts     # Root with Signals & theme
    ├── app.config.ts        # Application configuration
    ├── app.routes.ts        # Route definitions
    └── main.ts              # Bootstrap entry point
```

---

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/mk-knight23/58-Angular-Web-Starter.git
cd 58-Angular-Web-Starter

# Install dependencies
npm install

# Start development server
ng serve

# Build for production
ng build
```

---

## Theme System

AngularCanonical includes a fully-featured dark/light mode with:

- **System Detection**: Auto-detects OS preference
- **Manual Toggle**: Switch via navbar button
- **Persistence**: Preference saved in localStorage
- **Smooth Transitions**: 500ms CSS transitions

---

## Signal Architecture

The starter demonstrates Angular 21's signal-based reactivity:

```typescript
export class App {
  isDarkMode = signal(true);
  count = signal(42);

  toggleTheme() {
    this.isDarkMode.update(v => !v);
    this.applyTheme();
    localStorage.setItem('theme', this.isDarkMode() ? 'dark' : 'light');
  }
}
```

---

## Accessibility

The theme includes comprehensive accessibility features:

- **ARIA Labels**: All interactive elements labeled
- **Keyboard Navigation**: Full keyboard support
- **Focus States**: Visible focus indicators
- **Color Contrast**: WCAG AA compliant

---

## Deployment

Compatible with any static hosting:

- **Vercel**: `npx vercel --prod`
- **Netlify**: Connect repository
- **GitHub Pages**: Deploy `dist/` folder

```bash
# Deploy to Vercel
npx vercel --prod --name angularcanonical

# Preview production build
ng build && npm run preview
```

---

## License

MIT License - See [LICENSE](LICENSE) for details.

---

<div align="center">

**Built with Angular 21 + Signals + Tailwind CSS**

</div>
