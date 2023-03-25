import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";

import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Link from "next/link";

const Servicios = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Servicios
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Nuestros principales pilares comerciales que demuestran el Alcance e impacto de SmartLAB. Siempre estando a la vanguardia tecnológica.
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row lg:grid-flow-col md:grid-flow-col sm:grid-flow-col grid-cols-1 md:grid-cols-3 sm:grid-cols-3 gap-8 md:gap-8 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col md:flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                viewport={{ once: true, amount: 0.75 }}
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/Icon/desarrollo-3d.svg"
                    width={145}
                    height={165}
                    alt="Desarrollo 3D"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Desarrollo 3D
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Aplicaciones VR
                  </li>
                  <li className="relative check custom-list my-2">
                    Aplicaciones AR
                  </li>
                  <li className="relative check custom-list my-2">
                    Aplicaciones 3D Mixtas
                  </li>
                  <li className="relative check custom-list my-2">
                    Video Juegos
                  </li>
                  <li className="relative check custom-list my-2">
                    Experiencias Formativas
                  </li>
                  <li className="relative check custom-list my-2">
                    Experiencias Comerciales 
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-600 text-center mb-4 ">
                    AR + VR = XR 
                  </p>
                  <Link href={"/desarrollo-3d"}>
                    <a>
                      <ButtonOutline>Conoce Más</ButtonOutline>
                    </a>
                  </Link>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 md:px-8 lg:px-12 xl:px-20"
                viewport={{ once: true, amount: 0.75 }}
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/Icon/educacion-tecnologica.svg"
                  width={145}
                  height={165}
                  alt="Standard Plan"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Educación {"Tecnológica"}
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  Modelado 3D
                </li>
                <li className="relative check custom-list my-2">
                  Experiencias Eduativas
                </li>
                <li className="relative check custom-list my-2">
                  Capacitación Empresarial
                </li>
                <li className="relative check custom-list my-2">
                  Capacitacion de Cliente
                </li>
                <li className="relative check custom-list my-2">
                  {"Cripto Monedas y Activos Digitales"}
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-black-600 text-center mb-4 ">
                  Programas <span className="text-black-500">3D</span>
                </p>
                <Link href={"/educacion-tecnologica"}>
                    <a>
                      <ButtonOutline>Conoce Más</ButtonOutline>
                    </a>
                  </Link>
              </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                viewport={{ once: true, amount: 0.75 }}
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/Icon/software-aplicaciones.svg"
                  width={145}
                  height={165}
                  alt="Software y Aplicaciones"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Software y  {"Aplicaciones "}
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  Web APPs
                </li>
                <li className="relative check custom-list my-2">
                  DAPPs
                </li>
                <li className="relative check custom-list my-2">
                  Blockchain
                </li>
                <li className="relative check custom-list my-2">
                  APPs multiplataforma
                </li>
                <li className="relative check custom-list my-2">
                  Software Offline
                </li>
                <li className="relative check custom-list my-2">
                  SQL {"Data Bases"}
                </li>
                <li className="relative check custom-list my-2">
                  {"E-Commerce"}
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-black-600 text-center mb-4 ">
                  Empresarial <span className="text-black-500"></span>
                </p>
                <Link href={"/softwareaplicaciones"}>
                  <a>
                    <ButtonOutline>Conoce Más</ButtonOutline>
                  </a>
                </Link>
              </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
