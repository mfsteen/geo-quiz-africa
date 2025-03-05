
import React from "react";
import { Country } from "../data/africanCountries";
import { useQuiz } from "../context/QuizContext";

interface AnswerOptionsProps {
  options: Country[];
}

const AnswerOptions: React.FC<AnswerOptionsProps> = ({ options }) => {
  const { checkAnswer, selectedAnswer, isAnswered, currentCountry } = useQuiz();

  const getOptionClassName = (country: Country) => {
    const baseClass = "option-container p-4 mb-2 rounded-lg border-2 transition-all duration-300 cursor-pointer hover:border-blue-500";
    
    if (!isAnswered) return baseClass;
    
    if (country.id === currentCountry?.id) {
      return `${baseClass} border-green-500 bg-green-100`;
    }
    
    if (country.id === selectedAnswer && country.id !== currentCountry?.id) {
      return `${baseClass} border-red-500 bg-red-100`;
    }
    
    return `${baseClass} opacity-70`;
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {options.map((country) => (
        <div
          key={country.id}
          className={getOptionClassName(country)}
          onClick={() => !isAnswered && checkAnswer(country.id)}
        >
          <p className="text-lg font-medium">{country.name}</p>
        </div>
      ))}
    </div>
  );
};

export default AnswerOptions;
