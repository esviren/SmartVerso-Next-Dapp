import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ButtonPrimary from "./misc/ButtonPrimary";
import YoutubeVideo from './misc/YoutubeVideo';
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const SmartRacing = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div
            className="max-w-screen-xl mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
            id="RealRacing"
        >
            <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-4 y-8 my-8">
                <ScrollAnimationWrapper className="flex w-full justify-end">
                    <motion.div className="h-full w-full px-4" variants={scrollAnimation}>
                        <YoutubeVideo videoId="55X2mC23zcU" />
                    </motion.div>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper>
                    <motion.div className="flex flex-col items-end justify-center ml-auto w-full px-4" variants={scrollAnimation}>
                        <h2 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
                            Pauta Con Nosostros
                        </h2>
                        <p className="my-2 text-black-500 text-justify">
                            Conoce una nueva forma de promocionar tu Empresa o Marca; siendo parte de uno de los mercados
                            emergentes más grandes y populares del momento.<br />
                            Se parte de del videojuego SmartRACING siendo Sponsor en diferentes Sitios del videoJuego.
                        </p>
                        <Link href="/pauta-smart-racing">
                            <a>
                                <ButtonPrimary>
                                    Conoce Más
                                </ButtonPrimary>
                            </a>
                        </Link>

                    </motion.div>
                </ScrollAnimationWrapper>
            </div>
            <div className="flex flex-col w-full mt-16 text-center">
                <ScrollAnimationWrapper>
                    <motion.h3
                        variants={scrollAnimation}
                        className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
                        Carreras Con Ganacias Reales{" "}
                    </motion.h3>
                    <motion.p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12" variants={scrollAnimation}>
                        Preparate para Ganar SmartVerso Coins Mientras Te diviertes.
                        <br />Muy Pronto!
                    </motion.p>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper>
                    <motion.div className="py-12 w-full px-4 mt-4" variants={scrollAnimation}>
                        <YoutubeVideo videoId="mueYocJkyb0" />
                    </motion.div>
                </ScrollAnimationWrapper>
            </div>
            <div className="flex flex-col w-full mb-32">
                <ScrollAnimationWrapper className="relative w-full mt-16">
                    <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
                        <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                            <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                                <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                                    Permanece con la información y noticias más relevante de SmartRACING!
                                </h5>
                                <p>¡Suscríbete Ahora!</p>
                            </div>
                            <Link href="/pauta-smart-racing">
                                <a>
                                    <ButtonPrimary >Suscribete</ButtonPrimary>
                                </a>
                            </Link>
                        </div>
                        <div
                            className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                            style={{ filter: "blur(114px)" }}
                        ></div>
                    </motion.div>
                </ScrollAnimationWrapper>
            </div>
        </div>
    );
};

export default SmartRacing;