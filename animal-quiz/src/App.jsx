import { useState, useCallback } from "react";
import StartScreen from "./components/StartScreen";
import Quiz from "./components/Quiz";
import Results from "./components/Results";
import Leaderboard from "./components/Leaderboard";
import useLeaderboard from "./hooks/useLeaderboard";
import "./App.css";

export default function App() {
  const [screen, setScreen] = useState("start");
  const [difficulty, setDifficulty] = useState("easy");
  const [results, setResults] = useState(null);
  const { entries, addEntry, clearLeaderboard } = useLeaderboard();

  const handleStart = useCallback((diff) => {
    setDifficulty(diff);
    setResults(null);
    setScreen("quiz");
  }, []);

  const handleFinish = useCallback(
    (score, total, timeUsed) => {
      setResults({ score, total, difficulty, timeUsed });
      setScreen("results");
    },
    [difficulty],
  );

  const handleSaveScore = useCallback(
    (name, score, total, diff, timeUsed) => {
      addEntry(name, score, total, diff, timeUsed);
    },
    [addEntry],
  );

  return (
    <div className="app">
      <div className="nature-bg" />
      <div className="container">
        {screen === "start" && (
          <StartScreen
            onStart={handleStart}
            onShowLeaderboard={() => setScreen("leaderboard")}
          />
        )}
        {screen === "quiz" && (
          <Quiz difficulty={difficulty} onFinish={handleFinish} />
        )}
        {screen === "results" && results && (
          <Results
            score={results.score}
            total={results.total}
            difficulty={results.difficulty || difficulty}
            timeUsed={results.timeUsed}
            onSaveScore={handleSaveScore}
            onPlayAgain={() => handleStart(difficulty)}
            onHome={() => setScreen("start")}
          />
        )}
        {screen === "leaderboard" && (
          <Leaderboard
            entries={entries}
            onClear={clearLeaderboard}
            onBack={() => setScreen("start")}
          />
        )}
      </div>
    </div>
  );
}
