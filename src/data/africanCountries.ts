
export interface Country {
  id: string;
  name: string;
  svgPath: string;
}

// SVG paths simplified for demonstration purposes
export const africanCountries: Country[] = [
  {
    id: "algeria",
    name: "Algeria",
    svgPath: "M50,10 L90,10 L90,50 L70,70 L50,70 L30,50 Z"
  },
  {
    id: "egypt",
    name: "Egypt",
    svgPath: "M70,20 L90,20 L90,40 L70,40 L70,30 L60,30 L60,40 L50,40 L50,20 Z"
  },
  {
    id: "nigeria",
    name: "Nigeria",
    svgPath: "M40,40 L60,40 L60,60 L40,60 Z"
  },
  {
    id: "kenya",
    name: "Kenya",
    svgPath: "M70,50 L80,40 L90,50 L80,60 L70,60 Z"
  },
  {
    id: "southafrica",
    name: "South Africa",
    svgPath: "M50,70 L70,70 L70,80 L60,90 L40,90 L30,80 L50,70"
  },
  {
    id: "morocco",
    name: "Morocco",
    svgPath: "M30,10 L50,10 L50,30 L30,30 Z"
  },
  {
    id: "ethiopia",
    name: "Ethiopia",
    svgPath: "M80,40 L90,40 L90,60 L70,60 L80,50 Z"
  },
  {
    id: "tanzania",
    name: "Tanzania",
    svgPath: "M60,60 L80,60 L70,70 L60,70 Z"
  },
  {
    id: "ghana",
    name: "Ghana",
    svgPath: "M30,50 L40,40 L40,60 L30,60 Z"
  },
  {
    id: "sudan",
    name: "Sudan",
    svgPath: "M60,30 L70,30 L70,40 L60,40 Z"
  },
  {
    id: "cameroon",
    name: "Cameroon",
    svgPath: "M50,50 L60,50 L60,60 L50,60 Z"
  },
  {
    id: "uganda",
    name: "Uganda",
    svgPath: "M65,55 L70,50 L75,55 L70,60 Z"
  }
];

export const getRandomCountries = (count: number, excludeId?: string): Country[] => {
  const availableCountries = excludeId 
    ? africanCountries.filter(country => country.id !== excludeId)
    : [...africanCountries];
  
  const randomCountries: Country[] = [];
  
  for (let i = 0; i < count && availableCountries.length > 0; i++) {
    const randomIndex = Math.floor(Math.random() * availableCountries.length);
    randomCountries.push(availableCountries[randomIndex]);
    availableCountries.splice(randomIndex, 1);
  }
  
  return randomCountries;
};

export const getQuizOptions = (correctCountry: Country): Country[] => {
  // Get 3 random incorrect options
  const incorrectOptions = getRandomCountries(3, correctCountry.id);
  
  // Combine with correct option and shuffle
  const options = [...incorrectOptions, correctCountry];
  
  // Fisher-Yates shuffle algorithm
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  
  return options;
};
