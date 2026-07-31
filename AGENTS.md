# Figma Make App (Mobile-Friendly Octen Pricing)

React 19 + Vite 8 + TypeScript + Tailwind CSS v4 project for Octen Pricing mobile-friendly web application.

## 🛠️ Development Server

A Vite development server is configured for real-time hot-reloading:
- **Local Dev Server**: `pnpm dev` or `npm run dev` (`vite --host 0.0.0.0`)
- **Build Production**: `pnpm build` or `npm run build`

## 📁 Project Structure

- `src/main.tsx` - React entrypoint; imports `src/index.css` and mounts `src/App.tsx`
- `src/App.tsx` - Primary application component & main UI logic
- `src/index.css` - Global CSS entrypoint with Tailwind CSS v4 `@import 'tailwindcss';` & font definitions
- `index.html` - Vite HTML shell with `#root` mount point
- `package.json` - Project dependencies (React 19, Tailwind v4, Vite 8, TypeScript 5.7)
- `vite.config.ts` - Vite configuration with React & Tailwind plugins and `@` path alias

## 🎨 Styling & Design Aesthetics

1. **Design Tokens & Theme**:
   - **Primary Font**: `DM Sans` (`'DM Sans', system-ui, -apple-system, sans-serif`)
   - **Monospace Font**: `JetBrains Mono`
   - **Theme Aesthetics**: Obsidian Dark Glass (`#06090A`), Cyber Emerald Neon (`#00E599` / `#00FF7F`), and crisp high-contrast UI elements.
   - **Container Width**: Max 1280px, responsive padding, full mobile-first adaptivity.

2. **Tailwind CSS v4 Usage**:
   - Uses `@tailwindcss/vite` plugin.
   - Global CSS imports in `src/index.css`.
   - Font size standard: 14px / 16px for body & UI controls, integer pixel sizes for headers.

## 💻 Code Quality & Engineering Standards

- **TypeScript**: Strict type definitions for component props and state.
- **Components**: Default exports for main views/components.
- **JSX Safety**: Ensure all tags are properly closed and string apostrophes escaped or double-quoted.
- **Mobile First**: Fluid flex/grid layouts with touch-friendly targets and collapsible tab navigation.

## 🔄 Context Handoff Protocol

- When switching tasks or accounts, document progress, key design decisions, and unresolved tasks in `handoff.md`.
