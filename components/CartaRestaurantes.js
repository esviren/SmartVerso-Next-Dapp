import React from 'react';
import ButtonCTA from "./misc/ButtonCTA";
import Link from "next/link";


const CartaRestaurantes = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-0 left-0 w-full h-full lg:h-full desktop:h-full">
        <img className="object-cover w-full h-full" src="/assets/black-backgraundi.jpeg" alt="Smart Racing" />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        
        <div className="sm:mb-16 md:mb-4 lg:mb-4 sm:mt-16 md:mt-32 lg:mt-32">
          <h1 className="text-4xl font-bold text-gray-400">Menús y Cartas Para Restaurantes En Realidad Aumentada</h1>
          <img className="object-cover w-full h-full sm:px-50" src="/assets/MenuSmartLAb.png" alt="Smart Menú" />
        </div>
        <div className="sm:mt-4">
          <Link href="/registro-smart-racing" className="">
            <a>
            <ButtonCTA className="">¡Ordena Yá!</ButtonCTA>
            </a>
          </Link>
        </div>
        {/* <h1 className="text-4xl font-bold text-gray-400">Partisipa de un ecosistema tecnológico con SmartRACING</h1> */}
      </div>
    </div>
  );
};

export default CartaRestaurantes;