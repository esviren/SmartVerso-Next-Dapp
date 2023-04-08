import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
  "Realid Aumetada",
  "Realidad Virtual",
  "Realidad Mixta",
  "Educación modelado 3D",
  "Web App",
  "DAPPs (Aplicaciones Blockchain)",
  "SmarVerso"
]

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-32 mb-6 sm:mt-18 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-4 p  y-8 my-8">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/smartlab_img2.png"
              alt="SmartLAB Servicios"
              layout="responsive"
              quality={100}
              height={383}
              width={612}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
        <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
          <h2 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
            Experiencias Tecnologicas Para Diferentes Dispositivos
          </h2>
          <p className="my-2 text-black-500 text-justify">
            ¡Bienvenidos al Smart Lab! Somos un laboratorio de realidad virtual ubicado en Medellín, Colombia, 
            que ofrece experiencias de inmersión en mundos virtuales para diversas aplicaciones. En Smart Lab, 
            estamos comprometidos con la innovación y la tecnología de vanguardia. Utilizamos equipos y software 
            de última generación para garantizar la mejor calidad en nuestras experiencias de realidad virtual. 
            Si está buscando una experiencia única y emocionante de realidad virtual, no busque más allá de Smart 
            Lab en Medellín. ¡Esperamos verlo pronto en nuestro laboratorio!
          </p>
          <ul className="text-black-500 self-start list-inside ml-8">
            {features.map((feature, index) => (
              <motion.li
                className="relative circle-check custom-list"
                custom={{duration: 2 + index}}
                variants={scrollAnimation}
                key={feature}
                whileHover={{
                scale : 1.1,
                transition: {
                  duration: .2
                }
                }}>
                  {feature}
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

export default Feature;
