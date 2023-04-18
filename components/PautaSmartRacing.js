import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Formulario from "../components/misc/FormSmartRacing";
import ButtonPrimary from "./misc/ButtonPrimary";
import YoutubeVideo from './misc/YoutubeVideo';
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const PautaSmartRacing = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div
            className="max-w-screen-xl mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
            id="RealRacing"
        >
            <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-4 y-8 mb-8  mt-36">
                <ScrollAnimationWrapper className="flex w-full justify-end">
                    <motion.div className="h-full w-full px-4" variants={scrollAnimation}>
                        <YoutubeVideo videoId="55X2mC23zcU" />
                        <div className="py-8 text-center">
                        <Link href="https://wa.link/iqfl4f" >
                            <a>
                            <ButtonPrimary >WhatApp</ButtonPrimary>
                            </a>
                        </Link>
                        </div>
                        <p className="my-2 text-black-500 text-justify">
                            Se dueño de una Valla Publicitaria en un video juego triple AAA para andrid e IOS.<br />
                            Esta pauta sera de forma vitalicia durante todas las diferentes etapas del juego.<br /> 
                            Participa Como partocinador en direente segmentos del videojuego
                        </p>
                    </motion.div>

                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper>
                    <motion.div className="flex flex-col items-center justify-center ml-auto w-full px-4" variants={scrollAnimation}>
                        <h2 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
                            Pauta Con Nosostros
                        </h2>
                        
                        <Formulario />
                    </motion.div>
                </ScrollAnimationWrapper>
            </div>
            <div className="flex flex-col w-full mt-16 text-center">
                <ScrollAnimationWrapper>
                    <motion.h3
                        variants={scrollAnimation}
                        className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-12/12 sm:w-6/12 lg:w-10/12 mx-auto">
                        Llega a nuevos publicos y posicionate en nuevos mercados{" "}
                    </motion.h3>
                    <motion.p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12" variants={scrollAnimation}>
                        Llega a nuevos publicos y posicionate en nuevos mercadosMediante espacios de inmercion y recordacion, 
                        Fortalese tu precencia dijital y pocisionamento de marca en SmartRACING<br />Muy Pronto!
                    </motion.p>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper>
                    <motion.div className="py-12 w-full px-4 mt-4" variants={scrollAnimation}>
                        <YoutubeVideo videoId="mueYocJkyb0" />
                    </motion.div>
                </ScrollAnimationWrapper>
            </div>
        </div>
    );
};

export default PautaSmartRacing;