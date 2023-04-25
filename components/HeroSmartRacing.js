import React from 'react';
import ButtonCTA from "./misc/ButtonCTA";
import Link from "next/link";


const HeroSmartRacing = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-0 left-0 w-full h-full lg:h-full desktop:h-full">
        <img className="object-cover w-full h-full" src="/assets/smart-racing-fondo.jpg" alt="Smart Racing" />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        
        <div className="sm:mb-16 md:mb-1 lg:mb-1">
          <img className="object-cover w-full h-full sm:px-50" src="/assets/smart-racing-logo.png" alt="Smart Racing" />
        </div>
        <div className="sm:mt-16">
          <Link href="/registro-smart-racing" className="">
            <a>
            <ButtonCTA className="">¡Registrate Ya!</ButtonCTA>
            </a>
          </Link>
        </div>
        {/* <h1 className="text-4xl font-bold text-gray-400">Partisipa de un ecosistema tecnológico con SmartRACING</h1> */}
      </div>
    </div>
  );
};

export default HeroSmartRacing;