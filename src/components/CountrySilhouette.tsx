
import React from "react";
import { Country } from "../data/africanCountries";

interface CountrySilhouetteProps {
  country: Country;
}

const CountrySilhouette: React.FC<CountrySilhouetteProps> = ({ country }) => {
  return (
    <div className="flex justify-center items-center p-4 mb-6">
      <div className="w-64 h-64 relative">
        <svg 
          viewBox="0 0 100 100" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path 
            d={country.svgPath} 
            fill="#3b82f6" 
            stroke="#1e40af" 
            strokeWidth="1"
            className="shadow-lg transition-all duration-300"
          />
        </svg>
      </div>
    </div>
  );
};

export default CountrySilhouette;
