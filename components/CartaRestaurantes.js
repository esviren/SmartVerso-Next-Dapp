import React from 'react';
import ButtonCTA from "./misc/ButtonCTA";
import Link from "next/link";


const CartaRestaurantes = () => {
  return (
    <div className="relative w-full h-screen">
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        
        <div className="sm:mb-12 md:mb-4 lg:mb-4 sm:mt-16 md:mt-32 p-8 lg:mt-32">
          <img className="object-cover w-full h-full" src="/assets/logo-smartlab.png" alt="Smart Menú" />
          <h1 className="text-4xl font-bold mt-16 text-teal-500">Menús y Cartas Para Restaurantes En Realidad Aumentada</h1>
          {/*<h2 className="text-4xl font-bold mt-8 text-gray-400">Lleva tu menú a la mesa de todos los comensales</h2>*/}
        </div>
      </div>
        
      
    </div>
  );
};

export default CartaRestaurantes;