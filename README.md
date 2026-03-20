# Letter Land

An interactive alphabet learning PWA for kids ages 3-6. Explore all 26 letters with friendly SVG illustrations, phonetic sounds via Web Speech API, and progress tracking.

## Features

- **Explore Mode** — Tap any letter tile to see its full-screen card with illustration, hear the letter name, phonetic sound, and word
- **Learn Mode** — Walk through A-Z one letter at a time with auto-playing audio narration
- **Alphabet Train** — Visual progress bar showing which letters have been explored
- **Offline Support** — PWA with full offline caching
- **Accessible** — Keyboard navigation, reduced motion support, high contrast support, descriptive ARIA labels
- **No ads, no data collection** — Safe for kids

## Tech Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS
- @ducanh2912/next-pwa for PWA/offline support
- Web Speech API for narration
- Web Audio API for tap sound effects
- 26 hand-crafted inline SVG React components

## Getting Started

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # Production build (generates service worker)
```

## Deploy

```bash
npx vercel --prod
```
