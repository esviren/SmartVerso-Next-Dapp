import React from 'react';
import ButtonCTA from "./misc/ButtonCTA";
import Link from "next/link";


const CartaRestaurantes = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-0 left-0 w-full h-full lg:h-full desktop:h-full">
        <img className="object-cover w-full h-full sm:ma-h-75" src="/assets/reastaurante-1-min.jpeg" alt="Smart Racing" />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        
        <div className="sm:mb-16 md:mb-4 lg:mb-4 sm:mt-16 md:mt-32 p-8 lg:mt-32">
          <img className="object-cover w-full h-full" src="/assets/logo-smartlab.png" alt="Smart Menú" />
          <h1 className="text-4xl font-bold my-16 text-teal-500">Menús y Cartas Para Restaurantes En Realidad Aumentada</h1>
          {/*<h2 className="text-4xl font-bold mt-8 text-gray-400">Lleva tu menú a la mesa de todos los comensales</h2>*/}
        </div>
        {/* <h1 className="text-4xl font-bold text-gray-400">Partisipa de un ecosistema tecnológico con SmartRACING</h1> */}
      </div>
    </div>
  );
};

export default CartaRestaurantes;