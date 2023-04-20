import React from 'react';

const HeroSmartRacing = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-0 left-0 w-full h-full lg:h-full desktop:h-full">
        <img className="object-cover w-full h-full" src="/assets/smart-racing-bg.jpg" alt="Smart Racing" />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        
        
        <img className="object-cover w-full h-full" src="/assets/smart-racing-logo.png" alt="Smart Racing" />
        <h1 className="text-4xl font-bold text-gray-400">Partisipa de un ecosistema tecnológico con SmartRACING</h1>
      </div>
    </div>
  );
};

export default HeroSmartRacing;