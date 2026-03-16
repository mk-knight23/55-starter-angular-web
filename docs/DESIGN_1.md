# Design System: 55-starter-angular-web

## Visual Philosophy
The design follows a **90s Retro / CRT / Pixel UI** aesthetic inspired by vintage computer terminals and arcade machines.

## Design Patterns
- **Terminal Colors**: Primary green (#33ff00), accent amber (#ffb000)
- **Pixelated UI**: Sharp corners, no border-radius
- **CRT Effects**: Scanlines, flicker, text shadow glow
- **Monospace Typography**: VT323 at 1.25rem base

## Color Palette
- **Primary**: #33ff00 (Terminal Green)
- **Accent**: #ffb000 (Amber)
- **Background**: #0a0a0a (CRT Black)
- **Dark BG**: #1a1a1a (Dark Gray)
- **Error**: #ff3333 (Red)

## Typography
- **Primary**: VT323 (Google Font)
- **Fallback**: Courier New, monospace
- **Base Size**: 1.25rem / 20px
- **Line Height**: 1.5

## CRT Effects
```css
.scanline {
  animation: scanline 8s linear infinite;
}

.crt-overlay::before {
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0) 50%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.1)
  );
  background-size: 100% 4px;
}
```

## Pixel Border
```css
.pixel-border {
  box-shadow:
    -4px 0 0 0 var(--color-retro-green),
    4px 0 0 0 var(--color-retro-green),
    0 -4px 0 0 var(--color-retro-green),
    0 4px 0 0 var(--color-retro-green);
}
```

## Interactive Elements
- **Pixel Button**: 3px border, inset shadows
- **Corner Brackets**: [label] styling
- **Blinking Cursor**: 1px width animation
- **Glitch Text**: Text shadow animation
