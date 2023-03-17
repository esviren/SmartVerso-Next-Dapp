import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import WorkCard from "../components/WorkCard";

// Local Data
import data from "../data/projects.json";

const Gallery = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div
            className="max-w-screen-xl mb-6 sm:mt-14 md:mt-40 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
            id="Gallery"
        >

            <h1 className="text-3xl font-medium">Proyectos desarrollados en 2D y 3D</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
                {data.projects_3d.map((project) => (
                    <ScrollAnimationWrapper>
                        <motion.div className="h-full w-full p-4" key={project.id} variants={scrollAnimation} >
                            <WorkCard
                                key={project.id}
                                img={project.imageSrc}
                                name={project.title}
                                description={project.description}
                                onClick={() => window.open(project.url)}
                            />
                        </motion.div>
                    </ScrollAnimationWrapper>
                ))}
            </div>
        </div>
    );
};

export default Gallery;