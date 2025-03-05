
import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";
import { Button } from "@/components/ui/button";

const ResultPage: React.FC = () => {
  const navigate = useNavigate();
  const { score, totalQuestions, resetQuiz } = useQuiz();
  
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const handlePlayAgain = () => {
    resetQuiz();
    navigate("/quiz");
  };
  
  const handleExit = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 bg-background">
      <div className="quiz-container p-8 text-center max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6">Quiz Results</h1>
        
        <div className="mb-8 p-6 bg-secondary rounded-xl">
          <p className="text-xl mb-2">Your score:</p>
          <p className="text-5xl font-bold text-primary mb-2">{score}/{totalQuestions}</p>
          <p className="text-lg">{percentage}%</p>
        </div>
        
        {percentage >= 70 ? (
          <p className="text-lg mb-8 text-green-600">Great job! You know your African geography well!</p>
        ) : percentage >= 40 ? (
          <p className="text-lg mb-8 text-amber-600">Not bad! Keep practicing to improve your knowledge.</p>
        ) : (
          <p className="text-lg mb-8 text-red-600">You might need more practice with African geography.</p>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={handlePlayAgain} className="w-full sm:w-auto">
            Play Again
          </Button>
          <Button onClick={handleExit} variant="outline" className="w-full sm:w-auto">
            Exit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
