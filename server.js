const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;
app.use(cors());
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
app.get("/api/quiz", (req, res) => {
  res.json(quizData);
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
