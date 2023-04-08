import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Hero = ({
  listUser = [
    {
      name: "Realidad Aumentada",
      number: "AR",
      icon: "/assets/Icon/AR2.svg",
    },
    {
      name: "Realidad Virtual",
      number: "VR",
      icon: "/assets/Icon/VR2.svg",
    },
    {
      name: "Realidad Mixta",
      number: "XR",
      icon: "/assets/Icon/XR.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-32 px-8 xl:px-16 mx-auto"
      id="about"
    >
      <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-flow-row sm:grid-flow-cols-1 grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 pt-6 sm:pt-4"
            variants={scrollAnimation}>
            <div className=" flex flex-col justify-center items-start row-start-2 sm:pt-4 sm:row-start-1">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
                Laboratorio SmartLab <strong>Más alla de las fronteras</strong>.
              </h1>
              <p className="text-black-500 text-justify mt-4 mb-6">
                crecimiento social y educativo por medio de las nuevas tecnologías,
                 como lo son la realidad virtual, la realidad aumentada, la
                realidad mixta y las blockchain.
              </p>
              <ButtonPrimary>Servicios</ButtonPrimary>
            </div>
            <div className="flex w-full">
              <motion.div className="h-full w-full" variants={scrollAnimation}>
                <Image
                  src="/assets/smartlab_img1.png"
                  alt="SmartLav illustration"
                  quality={100}
                  width={612}
                  height={383}
                  layout="responsive"
                />
              </motion.div>
            </div>
          </motion.div>
      </ScrollAnimationWrapper>
      <div className="relative w-full flex">
        <ScrollAnimationWrapper
          className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{duration: 2 + index}}
              variants={scrollAnimation}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-gray-100 w-28 h-28 mr-6 sm:w-28 sm:h-28 rounded-full">
                  <img src={listUsers.icon} className="h-20 w-20" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number}+
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
       </ScrollAnimationWrapper>
       <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
       ></div>
      </div>
    </div>
  );
};

export default Hero;
