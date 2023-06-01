import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic'

import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const ARfeatures = [
  "Pan Artesanal",
  "Lechuga",
  "Carne de Res Artesanal de 125 Gramos",
  "Queso de Bufala Amarillo",
  "Pepinillos Agridulces",
  "1 porción Papas Fritas"
];
const ARfutas = [
  "5 Bananos",
  "3 Aguacates",
  "5 Kiwis",
  "Una bola de helado"
];

const ARCalentados = [
  "Huevo",
  "Arroz",
  "Trozos de Chicharron",
  "Frijoles",
  "Pepino",
  "Tomate"
];

const ARPizzas = [
  "Masa Artesana",
  "Queso Mozarella",
  "Jamon Serrano",
  "Albaca",
  "Fina hierva"
];

const ARMalteadas = [
  "200 gramos de Carne de Res",
  "Papas Fritas", 
  "Lechuga",
  "Pan de Ajo",
  "Tomates"
  ];

const ARModelViewer = dynamic(
  () => import('./misc/ARViewer'),
  { ssr: false }
);

const ARMenu = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-32 mb-6 sm:mt-18 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-4 p  y-8 my-8">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <ARModelViewer
              src="/assets/3D/Calentado.glb"
              ios_src="/assets/3D/Calentado.usdz"
              alt="Calentado Comercio Experiencial AR"
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
        <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
          <h2 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
           Desayuno Calendo 
          </h2>
          <ul className="text-black-500 self-start list-inside ml-8">
            {ARCalentados.map((ARCalentado, index) => (
              <motion.li
                className="relative circle-check custom-list"
                custom={{duration: 2 + index}}
                variants={scrollAnimation}
                key={ARCalentado}
                whileHover={{
                scale : 1.1,
                transition: {
                  duration: .2
                }
                }}>
                  {ARCalentado}
              </motion.li>
              )
            )}
          </ul>
          <h3 className="text-2xl lg:text-2xl font-medium leading-relaxed text-black-600">$18.000 COP</h3>
        </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-4 p  y-8 my-8">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <ARModelViewer
              src="/assets/3D/pizza.glb"
              ios_src="/assets/3D/pizza.usdz"
              alt="Hamburguesa Comercio Experiencial AR"
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
        <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
          <h2 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
           Pizza Jamon Serrano
          </h2>
          <ul className="text-black-500 self-start list-inside ml-8">
            {ARPizzas.map((ARPizza, index) => (
              <motion.li
                className="relative circle-check custom-list"
                custom={{duration: 2 + index}}
                variants={scrollAnimation}
                key={ARPizza}
                whileHover={{
                scale : 1.1,
                transition: {
                  duration: .2
                }
                }}>
                  {ARPizza}
              </motion.li>
              )
            )}
          </ul>
          <h3 className="text-2xl lg:text-2xl font-medium leading-relaxed text-black-600">$42.000 COP</h3>
        </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-4 p  y-8 my-8">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <ARModelViewer
              src="/assets/3D/carne_ensalada.glb"
              ios_src="/assets/carne_ensalada.usdz"
              alt="Carne Al Pastor Comercio Experiencial AR"
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
        <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
          <h2 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
          Trozos Res 
          </h2>
          <ul className="text-black-500 self-start list-inside ml-8">
            {ARMalteadas.map((ARMalteada, index) => (
              <motion.li
                className="relative circle-check custom-list"
                custom={{duration: 2 + index}}
                variants={scrollAnimation}
                key={ARMalteada}
                whileHover={{
                scale : 1.1,
                transition: {
                  duration: .2
                }
                }}>
                  {ARMalteada}
              </motion.li>
              )
            )}
          </ul>
          <h3 className="text-2xl lg:text-2xl font-medium leading-relaxed text-black-600">$35.000 COP</h3>
        </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-4 p  y-8 my-8">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <ARModelViewer
              src="/assets/3D/hamburger_2.glb"
              ios_src="/assets/3D/hamburger_2.usdz"
              alt="Hamburguesa Comercio Experiencial AR"
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
        <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
          <h2 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
           2 Hamburguesa 125 Gr
          </h2>
          <ul className="text-black-500 self-start list-inside ml-8">
            {ARfeatures.map((ARfeature, index) => (
              <motion.li
                className="relative circle-check custom-list"
                custom={{duration: 2 + index}}
                variants={scrollAnimation}
                key={ARfeature}
                whileHover={{
                scale : 1.1,
                transition: {
                  duration: .2
                }
                }}>
                  {ARfeature}
              </motion.li>
              )
            )}
          </ul>
          <h3 className="text-2xl lg:text-2xl font-medium leading-relaxed text-black-600">$35.000 COP</h3>
        </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-4 p  y-8 my-8">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <ARModelViewer
              src="/assets/3D/Aguagates.glb"
              ios_src="/assets/3D/Aguagates.usdz"
              alt="Amburguesa Comercio Experiencial AR"
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
        <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
          <h2 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
           Ensalada De Frutas
          </h2>
          <ul className="text-black-500 self-start list-inside ml-8">
            {ARfutas.map((ARfuta, index) => (
              <motion.li
                className="relative circle-check custom-list"
                custom={{duration: 2 + index}}
                variants={scrollAnimation}
                key={ARfuta}
                whileHover={{
                scale : 1.1,
                transition: {
                  duration: .2
                }
                }}>
                  {ARfuta}
              </motion.li>
              )
            )}
          </ul>
          <h3 className="text-2xl lg:text-2xl font-medium leading-relaxed text-black-600">$10.000 COP</h3>
        </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default ARMenu;
