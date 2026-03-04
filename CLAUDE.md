# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the `learning-material` repository containing interactive educational apps. The first app is an **Animal Quiz** — a React-based quiz game with multiple difficulty levels, a timer, and a leaderboard.

## Repository Structure

```
learning-material/
├── CLAUDE.md
├── README.md
├── .gitignore
└── animal-quiz/          # React quiz app
    ├── package.json
    ├── vite.config.js
    ├── eslint.config.js
    ├── index.html
    └── src/
        ├── App.jsx           # Root component
        ├── App.css / index.css
        ├── main.jsx          # Entry point
        ├── components/       # UI components (StartScreen, Quiz, Question, Timer, Results, Leaderboard)
        ├── data/questions.js # Quiz question data
        └── hooks/            # Custom hooks (useTimer, useLeaderboard)
```

## Tech Stack

- **Framework:** React 19 with JSX
- **Build Tool:** Vite 7
- **Linting:** ESLint 9 (flat config) with react-hooks and react-refresh plugins
- **Package Manager:** npm

## Common Commands

All commands run from the `animal-quiz/` directory:

```bash
npm install          # Install dependencies
npm run dev          # Start dev server
npm run build        # Production build
npm run lint         # Run ESLint
npm run preview      # Preview production build
```

## Coding Conventions

- Components use `.jsx` extension and live in `src/components/`
- Custom hooks live in `src/hooks/` with `use` prefix
- Static data (e.g., quiz questions) lives in `src/data/`
- ESLint enforces react-hooks rules; unused vars prefixed with uppercase or `_` are allowed
- No test runner is configured yet — add one (e.g., Vitest) when tests are needed
