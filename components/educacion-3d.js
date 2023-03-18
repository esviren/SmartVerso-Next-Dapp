import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const RealidadVirtuals = [
  "Video Vuegos",
  "APP Educativas",
  "Educacion 3D",
  "Hardware VR",
  "Aplicaciones Decentralizadas",
  "BockChain",
  "Educación Modelado 3D",
  "SmarVerso"
]

const Educacion3D = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="RealidadVirtual"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p mt-24 y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/Illustration2.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>

        <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
          <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
            Educación en Tecnologias de Realidad Virtual
          </h3>
          <p className="my-2 text-black-500">
            Nam vitae dui convallis, lobortis purus vitae, ultrices diam. Suspendisse potenti. In in pharetra mauris, 
            Cras eget enim bibendum, interdum justo quis, facilisis nisi. Ut id orci vitae ante egestas scelerisque.
          </p>
          <ul className="text-black-500 self-start list-inside ml-8">
            {RealidadVirtuals.map((RealidadVirtual, index) => (
              <motion.li
                className="relative circle-check custom-list"
                custom={{duration: 2 + index}}
                variants={scrollAnimation}
                key={RealidadVirtual}
                whileHover={{
                scale : 1.1,
                transition: {
                  duration: .2
                }
                }}>
                  {RealidadVirtual}
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

export default Educacion3D;