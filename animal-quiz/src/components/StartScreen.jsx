import { useState } from "react";

const DIFFICULTY_INFO = {
  easy: { label: "Easy", time: "5:00", emoji: "🌱", description: "Perfect for beginners" },
  medium: { label: "Medium", time: "3:30", emoji: "🌿", description: "A fair challenge" },
  hard: { label: "Hard", time: "2:30", emoji: "🌲", description: "For true animal experts" },
  "extra-hard": { label: "Extra Hard", time: "1:30", emoji: "🔥", description: "Only the bravest dare" },
};

export default function StartScreen({ onStart, onShowLeaderboard }) {
  const [difficulty, setDifficulty] = useState("easy");

  return (
    <div className="start-screen">
      <div className="logo">
        <span className="logo-icon">🦁</span>
        <h1>Animal Quiz</h1>
        <p className="subtitle">Test your knowledge of the animal kingdom</p>
      </div>

      <div className="difficulty-selector">
        <h2>Choose Difficulty</h2>
        <div className="difficulty-options">
          {Object.entries(DIFFICULTY_INFO).map(([key, info]) => (
            <button
              key={key}
              className={`difficulty-btn ${difficulty === key ? "active" : ""}`}
              onClick={() => setDifficulty(key)}
            >
              <span className="diff-emoji">{info.emoji}</span>
              <span className="diff-label">{info.label}</span>
              <span className="diff-desc">{info.description}</span>
              <span className="diff-time">Timer: {info.time}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="start-actions">
        <button className="btn-primary" onClick={() => onStart(difficulty)}>
          Start Quiz
        </button>
        <button className="btn-secondary" onClick={onShowLeaderboard}>
          Leaderboard
        </button>
      </div>
    </div>
  );
}
