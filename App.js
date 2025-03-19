import React, { useState } from "react";
import "./styles.css";

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
];

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };
  
  return (
    <div className="container">
      <div className="quiz-box">
        {showResult ? (
          <div className="result">
            <h2>Quiz Completed!</h2>
            <p>Your score: {score} / {quizData.length}</p>
            <button onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
              setShowResult(false);
            }}>Restart Quiz</button>
          </div>
        ) : (
          <div>
            <h2>{quizData[currentQuestion].question}</h2>
            <div className="options">
              {quizData[currentQuestion].options.map((option, index) => (
                <button key={index} onClick={() => handleAnswerClick(option)}>
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
