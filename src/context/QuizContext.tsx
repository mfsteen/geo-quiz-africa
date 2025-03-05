
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Country, africanCountries, getQuizOptions } from "../data/africanCountries";

interface QuizContextType {
  currentQuestion: number;
  totalQuestions: number;
  currentCountry: Country | null;
  options: Country[];
  score: number;
  selectedAnswer: string | null;
  isAnswered: boolean;
  checkAnswer: (countryId: string) => void;
  nextQuestion: () => void;
  resetQuiz: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};

interface QuizProviderProps {
  children: ReactNode;
}

export const QuizProvider = ({ children }: QuizProviderProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [totalQuestions] = useState(10);
  const [currentCountry, setCurrentCountry] = useState<Country | null>(null);
  const [options, setOptions] = useState<Country[]>([]);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const getRandomCountry = () => {
    const randomIndex = Math.floor(Math.random() * africanCountries.length);
    return africanCountries[randomIndex];
  };

  const setNewQuestion = () => {
    const country = getRandomCountry();
    setCurrentCountry(country);
    setOptions(getQuizOptions(country));
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  // Initialize the quiz when the component mounts
  React.useEffect(() => {
    setNewQuestion();
  }, []);

  const checkAnswer = (countryId: string) => {
    setSelectedAnswer(countryId);
    setIsAnswered(true);
    
    if (countryId === currentCountry?.id) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
      setNewQuestion();
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(1);
    setScore(0);
    setNewQuestion();
  };

  return (
    <QuizContext.Provider
      value={{
        currentQuestion,
        totalQuestions,
        currentCountry,
        options,
        score,
        selectedAnswer,
        isAnswered,
        checkAnswer,
        nextQuestion,
        resetQuiz
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
