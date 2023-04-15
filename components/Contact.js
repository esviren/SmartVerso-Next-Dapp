import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import ButtonPrimary from "./misc/ButtonPrimary";
import Link from "next/link";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Contact = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="RealidadVirtual"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p mt-32 y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15864.436419824842!2d-75.5626702!3d6.2493516!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429e1b654c3bd%3A0xa16111ac4ba32527!2sLenteja%20Express%20Centro!5e0!3m2!1ses!2sco!4v1681578225176!5m2!1ses!2sco" 
            width="100%" 
            height="450" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>

        <motion.div className="flex flex-col items-end justify-center mt-0 ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
          <h1 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
            Contáctenos
          </h1>
          <h3 className="text-2xl lg:text-3xl font-medium leading-relaxed text-black-600">
            Horarios
          </h3>
          <p className="my-2 text-black-500 text-justify">
            9AM - 6PM Lunes-Sábado
          </p>
          <h3 className="text-2xl lg:text-3xl font-medium leading-relaxed text-black-600">
            Teléfonos
          </h3>
          <p className="my-2 text-black-500 text-justify">
            +57 324 406 7841 -Andres 
          </p>      
          <h3 className="text-2xl lg:text-3xl font-medium leading-relaxed text-black-600">
            Dirección
          </h3>
          <p className="my-2 text-black-500 text-justify">
            Calle. 53 #43 - 65 Oficina 202
          </p>
          <h5 className="mb-8 text-black-500 text-justify">
            (Segundo Piso Lentejs Express)
          </h5>   
          <Link href="https://wa.link/iqfl4f">
            <a>
                <ButtonPrimary >WhatApp</ButtonPrimary>
            </a>
          </Link>
        </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Contact;