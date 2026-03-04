import { useState, useCallback, useEffect, useRef } from "react";
import Question from "./Question";
import Timer from "./Timer";
import useTimer from "../hooks/useTimer";
import { getRandomQuestions } from "../data/questions";

const TIMER_SECONDS = {
  easy: 420,
  medium: 285,
  hard: 195,
  "extra-hard": 105,
};

export default function Quiz({ difficulty, onFinish }) {
  const [questions] = useState(() => getRandomQuestions(difficulty));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const startTime = useRef(null);
  useEffect(() => {
    startTime.current = Date.now();
  }, []);

  const handleFinish = useCallback(
    (finalScore) => {
      const timeUsed = Math.round((Date.now() - startTime.current) / 1000);
      onFinish(finalScore, questions.length, timeUsed);
    },
    [onFinish, questions.length],
  );

  const handleTimeUp = useCallback(() => {
    handleFinish(score);
  }, [handleFinish, score]);

  const timer = useTimer(TIMER_SECONDS[difficulty], handleTimeUp);

  useEffect(() => {
    timer.start();
  }, [timer]);

  const handleAnswer = useCallback(
    (isCorrect) => {
      const newScore = isCorrect ? score + 1 : score;
      if (isCorrect) setScore(newScore);

      if (currentIndex + 1 >= questions.length) {
        timer.pause();
        handleFinish(newScore);
      } else {
        setCurrentIndex((prev) => prev + 1);
      }
    },
    [score, currentIndex, questions.length, timer, handleFinish],
  );

  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="quiz-screen">
      <div className="quiz-top-bar">
        <Timer formatted={timer.formatted} seconds={timer.seconds} />
        <div className="score-display">
          Score: {score}/{questions.length}
        </div>
      </div>

      <div className="progress-bar" role="progressbar" aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100} aria-label={`Question ${currentIndex + 1} of ${questions.length}`}>
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <Question
        key={currentIndex}
        question={questions[currentIndex]}
        questionNumber={currentIndex + 1}
        total={questions.length}
        onAnswer={handleAnswer}
      />
    </div>
  );
}
