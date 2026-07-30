# Syncrio

A responsive, dependency-free static landing page for Syncrio's AI-powered enterprise transformation website.

## Requirements

- Node.js 18 or newer
- No package installation is required because the app uses only built-in Node.js modules and browser-native HTML/CSS/JavaScript.

## How to test

1. Build the static site:

   ```bash
   npm run build
   ```

   This recreates the `dist/` directory and copies `index.html` and `src/` assets into it.

2. Preview the built site locally:

   ```bash
   npm run preview
   ```

   Open `http://localhost:4173` in a browser.

3. Optional development server:

   ```bash
   npm run dev
   ```

   This serves the repository root directly at `http://localhost:4173` for quick local edits.

## Project structure

- `index.html` — page markup and section structure.
- `src/styles.css` — responsive visual design, layout, colors, cards, dashboard mockup, and breakpoints.
- `src/main.js` — renders repeated card/timeline content from small data arrays.
- `scripts/build.mjs` — dependency-free static build script.
- `scripts/dev-server.mjs` — dependency-free local static server for development and preview.
