import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const RealidadVirtuals = [
  "Aplicaiones Web",
  "Apps Mobile",
  "Sistemas SQL",
  "Web 3.0",
  "Cadena de Bloques",
  "Aplicaciones de Escritorio",
  "Android",
  "Automatización"
]

const RealidadVirtual = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="RealidadVirtual"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p mt-32 y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/smartlab_img6.png"
              alt="SmartLAB Desarrollo 3D"
              layout="responsive"
              quality={100}
              height={383}
              width={612}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>

        <motion.div className="flex flex-col items-end justify-center mt-0 ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
          <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
            Desarrollo de Software y Aplicaciones
          </h3>
          <p className="my-2 text-black-500 text-justify">
          El Area de desarrollo de software y aplicaciones ofrecemos una amplia variedad de servicios para ayudar a sus clientes a diseñar, desarrollar, 
          implementar y mantener aplicaciones y sistemas informáticos personalizados que se adapten a sus necesidades y requisitos específicos.
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

export default RealidadVirtual;