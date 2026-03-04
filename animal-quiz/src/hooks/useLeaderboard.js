import { useState, useCallback } from "react";

const STORAGE_KEY = "animal-quiz-leaderboard";

function loadLeaderboard() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveLeaderboard(entries) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

export default function useLeaderboard() {
  const [entries, setEntries] = useState(loadLeaderboard);

  const addEntry = useCallback((name, score, total, difficulty, timeUsed) => {
    const newEntry = {
      id: Date.now(),
      name,
      score,
      total,
      difficulty,
      timeUsed,
      date: new Date().toLocaleDateString(),
    };
    setEntries((prev) => {
      const updated = [...prev, newEntry]
        .sort((a, b) => b.score / b.total - a.score / a.total || a.timeUsed - b.timeUsed)
        .slice(0, 20);
      saveLeaderboard(updated);
      return updated;
    });
    return newEntry;
  }, []);

  const clearLeaderboard = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setEntries([]);
  }, []);

  return { entries, addEntry, clearLeaderboard };
}
