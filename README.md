# Learning Material

A collection of interactive learning apps built with modern web technologies.

## Projects

### Animal Quiz

An interactive quiz game that tests your knowledge of animals, habitats, and wildlife. Built with React and Vite.

**Features:**
- 4 difficulty levels: Easy, Medium, Hard, and Extra Hard
- 88 unique questions across categories like General Animals, Fun Facts, and Wildlife & Habitats
- Two question types: multiple choice and true/false
- 15 randomly selected questions per quiz session from the difficulty's question pool
- Countdown timer that adjusts per difficulty (4:30 down to 1:00)
- Instant answer feedback with visual highlights (correct/incorrect)
- Score tracking with percentage-based grade results
- Persistent leaderboard (top 20 scores stored in localStorage)
- Save your name to the leaderboard after each quiz
- Nature-themed UI with animated background

**Difficulty levels:**

| Level | Timer | Description |
|---|---|---|
| Easy | 4:30 | Perfect for beginners |
| Medium | 3:00 | A fair challenge |
| Hard | 2:00 | For true animal experts |
| Extra Hard | 1:00 | Only the bravest dare |

**Question categories:**
- **General Animals** - anatomy, species identification, animal groups, and biology
- **Fun Facts** - surprising and lesser-known facts about the animal kingdom
- **Wildlife & Habitats** - ecosystems, conservation, and where animals live

**Tech stack:** React 19, Vite 7, ESLint 9

**Project structure:**
```
animal-quiz/
  src/
    components/    # UI components (StartScreen, Quiz, Question, Results, Leaderboard, Timer)
    data/          # Question bank organized by difficulty
    hooks/         # Custom hooks (useTimer, useLeaderboard)
    App.jsx        # Main app with screen routing
    main.jsx       # Entry point
```

### Getting Started

**Prerequisites:** Node.js (v18+)

```bash
cd animal-quiz
npm install
npm run dev
```

The dev server will start at `http://localhost:5173` by default.

**Available scripts:**

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## Contributing

To add a new learning app:
1. Create a new directory at the repository root
2. Set up the project with its own `package.json` and build tooling
3. Update this README with a section describing the new app

## License

This project is for educational purposes.
