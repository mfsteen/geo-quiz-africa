
import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";
import CountrySilhouette from "../components/CountrySilhouette";
import AnswerOptions from "../components/AnswerOptions";
import QuizProgress from "../components/QuizProgress";
import { Button } from "@/components/ui/button";

const QuizPage: React.FC = () => {
  const navigate = useNavigate();
  const { 
    currentQuestion, 
    totalQuestions, 
    currentCountry, 
    options, 
    isAnswered, 
    nextQuestion 
  } = useQuiz();

  const handleNext = () => {
    if (currentQuestion < totalQuestions) {
      nextQuestion();
    } else {
      navigate("/results");
    }
  };

  if (!currentCountry) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen py-8 px-4 bg-background">
      <div className="max-w-lg mx-auto quiz-container p-6">
        <QuizProgress current={currentQuestion} total={totalQuestions} />
        
        <h2 className="text-2xl font-bold text-center mb-8">
          Which African country is this?
        </h2>
        
        <CountrySilhouette country={currentCountry} />
        
        <AnswerOptions options={options} />
        
        {isAnswered && (
          <div className="mt-6 flex justify-center">
            <Button 
              onClick={handleNext}
              className="animate-fade-in"
            >
              {currentQuestion < totalQuestions ? "Next Question" : "See Results"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
