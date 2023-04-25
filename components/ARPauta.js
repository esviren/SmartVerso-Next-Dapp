import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic'

import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const ARfeatures = [
  "Tu marca en Vídeo Juegos",
  "Publicidad Digital",
  "Sponsor Life-time",
  "Nuevos Mercados",
  "Reconocimiento de Marca"
];

const ARModelViewer = dynamic(
  () => import('./misc/ARViewer'),
  { ssr: false }
);

const ARSection = () => {
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
              src="/assets/3D/Valla-1.glb"
              ios_src="/assets/3D/Valla-1.usdz"
              alt="Sofa Comercio Experiencial AR"
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
        <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
          <h2 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
           Ten Tu Valla Publicitaria
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
        </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default ARSection;
