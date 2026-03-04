import { useState } from "react";

export default function Question({ question, questionNumber, total, onAnswer }) {
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);

  const handleSelect = (value) => {
    if (answered) return;
    setSelected(value);
    setAnswered(true);

    const isCorrect =
      question.type === "true-false" ? value === question.answer : value === question.answer;

    setTimeout(() => {
      onAnswer(isCorrect);
      setSelected(null);
      setAnswered(false);
    }, 1200);
  };

  const getOptionClass = (value) => {
    if (!answered) return "";
    const isCorrect =
      question.type === "true-false" ? value === question.answer : value === question.answer;
    if (value === selected && isCorrect) return "correct";
    if (value === selected && !isCorrect) return "incorrect";
    if (isCorrect) return "correct";
    return "dimmed";
  };

  return (
    <div className="question-card">
      <div className="question-header">
        <span className="question-number">
          Question {questionNumber} of {total}
        </span>
        <span className="question-category">{question.category}</span>
        <span className={`question-type ${question.type}`}>
          {question.type === "true-false" ? "True / False" : "Multiple Choice"}
        </span>
      </div>

      <h2 className="question-text">{question.question}</h2>

      <div className="options">
        {question.type === "true-false" ? (
          <div className="tf-options">
            {[true, false].map((value) => (
              <button
                key={String(value)}
                className={`option-btn tf-btn ${getOptionClass(value)}`}
                onClick={() => handleSelect(value)}
                disabled={answered}
              >
                {value ? "True" : "False"}
              </button>
            ))}
          </div>
        ) : (
          <div className="mc-options">
            {question.options.map((option, i) => (
              <button
                key={i}
                className={`option-btn mc-btn ${getOptionClass(option)}`}
                onClick={() => handleSelect(option)}
                disabled={answered}
              >
                <span className="option-letter">{String.fromCharCode(65 + i)}</span>
                <span className="option-text">{option}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
