import React from 'react';

const HeroSmartRacing = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-0 left-0 w-full h-full lg:h-full desktop:h-full">
        <img className="object-cover w-full h-full" src="/assets/smart-racing-1.jpg" alt="Smart Racing" />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl font-bold text-white-500">SmartRACING!</h1>
        <p className="text-2xl text-white-300">
          Preparate para una experiencias unica en los videojuegos de carreras.<br/>
          Juega, Gana SmartVerso Coins y NFTs en un ecosistema local<br/>
          !MUY PRONTO¡</p>
      </div>
    </div>
  );
};

export default HeroSmartRacing;