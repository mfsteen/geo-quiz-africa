
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { africanCountries } from "@/data/africanCountries";

const Index = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate("/quiz");
  };

  // Randomly select 5 countries to show as examples
  const sampleCountries = React.useMemo(() => {
    const shuffled = [...africanCountries].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-background">
      <div className="max-w-3xl w-full mx-auto mt-12 text-center">
        <h1 className="text-4xl font-bold mb-4">African Geography Quiz</h1>
        <p className="text-xl mb-8">Test your knowledge of African countries by their shapes!</p>

        <div className="quiz-container p-6 mb-12">
          <h2 className="text-2xl font-bold mb-6">How to Play</h2>
          <ol className="text-left list-decimal list-inside space-y-3 mb-6">
            <li>You'll be shown the silhouette of an African country</li>
            <li>Choose the correct country name from four options</li>
            <li>Complete 10 questions and see your final score</li>
          </ol>

          <div className="flex justify-center">
            <Button onClick={handleStartQuiz} size="lg" className="px-8 py-6 text-lg">
              Start Quiz
            </Button>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Example Countries</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {sampleCountries.map(country => (
              <div key={country.id} className="option-container p-3 flex flex-col items-center">
                <svg viewBox="0 0 100 100" className="w-20 h-20 mb-2">
                  <path d={country.svgPath} fill="#3b82f6" stroke="#1e40af" strokeWidth="1"/>
                </svg>
                <span className="text-sm font-medium">{country.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
