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
  "Pepinillos Agridulces"
];
const ARfutas = [
  "5 Bananos",
  "3 Aguacates",
  "5 Kiwis",
  "Una bola de helado"
];

const ARMalteadas = [
    "1 Cereza",
    "Crema Chantilly",
    "3 Bolas de Helado Batidas",
    "Salsa De Chocolate"
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
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-4 p  y-8 my-8">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <ARModelViewer
              src="/assets/3D/hamburger_1.glb"
              ios_src="/assets/3D/hamburger_1.usdz"
              alt="Amburguesa Comercio Experiencial AR"
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
        <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
          <h2 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
           Hamburguesa 125 Gr
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
          <h3 className="text-2xl lg:text-2xl font-medium leading-relaxed text-black-600">$20.000 COP</h3>
        </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-4 p  y-8 my-8">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <ARModelViewer
              src="/assets/3D/Nuttella_Latte.glb"
              ios_src="/assets/3D/Nuttella_Latte.usdz"
              alt="Malteada Comercio Experiencial AR"
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
        <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
          <h2 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
           Malteada Latte Oreo
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
          <h3 className="text-2xl lg:text-2xl font-medium leading-relaxed text-black-600">$15.000 COP</h3>
        </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default ARMenu;
