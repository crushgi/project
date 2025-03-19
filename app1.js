import React, { useState, useEffect } from "react";
export default function QuizApp() {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  useEffect(() => {
    fetch("cd C:\Users\WELCOME\Downloads\online quiz app\quiz-backend")
      .then((response) => response.json())
      .then((data) => setQuizData(data))
      .catch((error) => console.error("Error fetching quiz data:", error));
  } 
);
  if (quizData.length === 0) return <p>Loading...</p>;
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
