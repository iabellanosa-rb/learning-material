import { useState } from "react";

function getGrade(score, total) {
  const pct = (score / total) * 100;
  if (pct === 100) return { emoji: "🏆", label: "Perfect!", message: "You're an animal genius!" };
  if (pct >= 80) return { emoji: "🌟", label: "Great job!", message: "You really know your animals!" };
  if (pct >= 60) return { emoji: "🦊", label: "Not bad!", message: "You know a thing or two about animals." };
  if (pct >= 40) return { emoji: "🐣", label: "Keep learning!", message: "There's a whole animal kingdom to explore." };
  return { emoji: "🪺", label: "Don't give up!", message: "Every expert was once a beginner." };
}

export default function Results({ score, total, difficulty, timeUsed, onSaveScore, onPlayAgain, onHome }) {
  const [name, setName] = useState("");
  const [saved, setSaved] = useState(false);
  const grade = getGrade(score, total);
  const pct = Math.round((score / total) * 100);

  const handleSave = () => {
    if (!name.trim()) return;
    onSaveScore(name.trim(), score, total, difficulty, timeUsed);
    setSaved(true);
  };

  return (
    <div className="results-screen">
      <div className="results-grade">
        <span className="grade-emoji">{grade.emoji}</span>
        <h1>{grade.label}</h1>
        <p className="grade-message">{grade.message}</p>
      </div>

      <div className="results-stats">
        <div className="stat">
          <span className="stat-value">{score}/{total}</span>
          <span className="stat-label">Correct</span>
        </div>
        <div className="stat">
          <span className="stat-value">{pct}%</span>
          <span className="stat-label">Accuracy</span>
        </div>
        <div className="stat">
          <span className="stat-value">{timeUsed}s</span>
          <span className="stat-label">Time Used</span>
        </div>
        <div className="stat">
          <span className="stat-value capitalize">{difficulty}</span>
          <span className="stat-label">Difficulty</span>
        </div>
      </div>

      {!saved ? (
        <div className="save-score">
          <h3>Save your score to the leaderboard</h3>
          <div className="save-input-row">
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={20}
              onKeyDown={(e) => e.key === "Enter" && handleSave()}
            />
            <button className="btn-primary" onClick={handleSave} disabled={!name.trim()}>
              Save
            </button>
          </div>
        </div>
      ) : (
        <p className="saved-message">Score saved!</p>
      )}

      <div className="results-actions">
        <button className="btn-primary" onClick={onPlayAgain}>
          Play Again
        </button>
        <button className="btn-secondary" onClick={onHome}>
          Home
        </button>
      </div>
    </div>
  );
}
