import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import ButtonPrimary from "./misc/ButtonPrimary";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Ejemplos = [
  "Escuela de Educación Médica de Harvard: La escuela ha desarrollado una serie de programas de realidad virtual para ayudar a los estudiantes de medicina a practicar procedimientos y habilidades antes de trabajar con pacientes reales.",
  "Escuela de Negocios de INSEAD: La escuela ha desarrollado un programa de realidad virtual que permite a los estudiantes experimentar con diferentes escenarios de negocios y tomar decisiones en un ambiente controlado.",
  "Universidad de California, San Diego: La universidad ha desarrollado un programa de realidad virtual que permite a los estudiantes de ciencias experimentar con contenido de ciencias de una manera que es difícil de replicar en un aula tradicional.",
  "Universidad de Pittsburgh: La universidad ha creado un programa de realidad virtual para ayudar a los estudiantes de enfermería a practicar procedimientos y habilidades en un ambiente controlado antes de trabajar con pacientes reales.",
  "Escuela de Arquitectura de la Universidad de Columbia: La escuela ha utilizado la realidad virtual para permitir a los estudiantes experimentar con diseño arquitectónico y planificación urbana de una manera que no es posible en un aula tradicional."
]

const Educacion3D = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-32 px-8 xl:px-16 mx-auto"
      id="RealidadVirtual"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p mt-8 y-4 my-4">
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
            Nuestros espacios educativos pretenden revolucionar la pedagogía de la educación
            a través de un proceso multisensorial que logrará llevar el aprendizaje a un nivel de
            eficiencia mucho más elevado en cuanto a la relación tiempo/aprendizaje.
          </p>
          
        </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <div>
        <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
            variants={scrollAnimation}>
            <div className=" flex flex-col justify-center text-justify items-start row-start-2 sm:row-start-1">

              <p className="text-black-500 mt-4 mb-4">
                Tanto nuestra academia de desarrollo de realidad virtual, como nuestra escuela de
                negocios, utilizan técnicas audiovisuales interactivas propias de la realidad virtual,
                que permean los diferentes niveles cognitivos del estudiante, logrando que este
                entienda profundamente los diferentes conceptos sobre los que se está trabajando,
                en este sentido logra llevar al contexto de estudio todo tipo de imágenes y sonidos
                interactivos incluyendo al estudiante a través de todos sus sentidos al desarrollo de
                la trasmisión del conocimiento.
              </p>
              <p className="text-black-500 mt-4 mb-4">
                El entorno 3D a través de los dispositivos propios del mismo como las gafas de
                realidad virtual, aumentan drásticamente el nivel de concentración y atención del
                estudiante puesto que permiten a la persona relajarse en un ambiente con un nivel
                de ruido y distracción visual moderado y el dispositivo bloquea los estímulos
                externos. Esto sumado a la capacidad de inducir a la interacción propia de la
                realidad virtual, van a aumentar de manera considerable el nivel de atención,
                motivación y el rendimiento del estudiante.
              </p>
            </div>
            <div className="flex w-full ">
              <motion.div className="h-full w-full" variants={scrollAnimation}>
                <p className="text-black-500 text-justify mt-4 mb-6">
                  Nuestra academia de desarrollo de realidad virtual se perfila como el eslabón que
                  necesita esta naciente industria para arraigarse en las generaciones actuales como
                  un medio productivo accesible. Uno de los principales objetivos de esta academia es
                  potenciar el desarrollo y avance de la realidad virtual en pro de la sociedad.
                </p>
                <p className="text-black-500  text-justify mt-4 mb-6">
                  La escuela de negocios Smart Money nace en 2019 y hasta la fecha ha dedicado
                  cada esfuerzo en promover el aprendizaje de métodos y sistemas productivos y
                  diferentes formas de aprovecharlos, a la fecha cuenta con 417 estudiantes, donde
                  más de la mitad de estos han aprendido a generar rentabilidades reales a través de
                  negocios tanto físicos,como digitales. Está escuela de negocios que hace parte del
                  mismo grupo empresarial del laboratorio de desarrollo de realidad virtual, a través
                  del metaverso expande sus fronteras al infinito para seguir cambiando vidas e
                  impactando la sociedad de manera positiva.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <div className="mt-100">
        <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-4 py-4 sm:py-8"
            variants={scrollAnimation}>
            <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">

            <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
              <Image
                src="/assets/Illustration2.png"
                alt="SmartLAB Illustra"
                layout="responsive"
                quality={100}
                height={414}
                width={508}
              />
            </motion.div>
            </div>
            <div className="flex w-full text-justify">
              <motion.div className="h-full w-full" variants={scrollAnimation}>
                <p className="text-black-500 mt-4 mb-4">
                  Nuestra academia de desarrollo de realidad virtual se perfila como el eslabón que
                  necesita esta naciente industria para arraigarse en las generaciones actuales como
                  un medio productivo accesible. Uno de los principales objetivos de esta academia es
                  potenciar el desarrollo y avance de la realidad virtual en pro de la sociedad.
                </p>
                <p className="text-black-500 mt-4 mb-4">
                  La escuela de negocios Smart Money nace en 2019 y hasta la fecha ha dedicado
                  cada esfuerzo en promover el aprendizaje de métodos y sistemas productivos y
                  diferentes formas de aprovecharlos, a la fecha cuenta con 417 estudiantes, donde
                  más de la mitad de estos han aprendido a generar rentabilidades reales a través de
                  negocios tanto físicos,como digitales. Está escuela de negocios que hace parte del
                  mismo grupo empresarial del laboratorio de desarrollo de realidad virtual, a través
                  del metaverso expande sus fronteras al infinito para seguir cambiando vidas e
                  impactando la sociedad de manera positiva.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <div>
        <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-1 md:grid-rows-1 sm:grid-cols-1   gap-8 py-6 sm:py-16"
            variants={scrollAnimation}>
            <div className=" flex flex-col justify-center items-start row-start-1 sm:row-start-1">

            <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
              <p className="text-black-500  text-justify mt-4 mb-6">
                En primer lugar, la VR permite a los estudiantes experimentar con contenido de una
                manera que no es posible con los medios tradicionales. Los estudiantes pueden
                "visitar" lugares y lugares históricos, explorar cuerpos celulares y sistemas del
                cuerpo humano, y experimentar con escenarios de ciencia ficción de una manera
                que es difícil de replicar en un aula tradicional. Esto puede ayudar a aumentar la
                comprensión y la retención del contenido.
              </p>
              <p className="text-black-500  text-justify mt-4 mb-6">
                En segundo lugar, la VR también puede ayudar a mejorar la empatía y la
                comprensión cultural. Los estudiantes pueden experimentar con diferentes culturas
                y entornos de una manera que no es posible con los medios tradicionales. Esto
                puede ayudar a desarrollar la empatía y la comprensión hacia otras culturas y puede
                ayudar a fomentar una educación más inclusiva.
              </p>
              <p className="text-black-500  text-justify mt-4 mb-6">
                En tercer lugar, la VR también tiene el potencial de ayudar a mejorar la motivación y
                el interés en el aprendizaje. Los estudiantes pueden experimentar con contenido de
                una manera que es más atractiva y emocionante que los medios tradicionales, lo
                que puede ayudar a aumentar la motivación y el interés en el aprendizaje.
              </p>
              <p className="text-black-500  text-justify mt-4 mb-6">
                En cuarto lugar, la VR también puede ser utilizada para mejorar la formación y la
                educación en profesiones técnicas. Por ejemplo, los estudiantes de medicina y
                enfermería pueden practicar procedimientos y habilidades en un ambiente
                controlado antes de trabajar con pacientes reales, lo que puede ayudar a aumentar
                la confianza y la competencia.
              </p>
              <p className="text-black-500  text-justify mt-4 mb-6">
                
              </p>
            </motion.div>
            </div>

          </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <div>
        <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
            variants={scrollAnimation}>
            <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">

            <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
              <p className="text-black-500 text-justify mt-4 mb-6">
                En conclusión, la realidad virtual tiene el potencial de ofrecer una serie de beneficios
                en el campo de la educación. Puede ayudar a los estudiantes a experimentar con
                contenido de una manera que no es posible con los medios tradicionales, mejorar la
                empatía y la comprensión cultural, aumentar la motivación y el interés en el
                aprendizaje y mejorar la formación y educación en profesiones técnicas. A medida
                que la tecnología continúa evolucionando y se vuelve más accesible, es probable
                que llegue a más personas.
              </p>
              <p className="text-black-500 text-justify mt-4 mb-6">
                Hay varias instituciones educativas en todo el mundo que están utilizando la
                realidad virtual para mejorar el aprendizaje y la enseñanza. Algunos ejemplos son:
              </p>
            </motion.div>
            </div>
            <div className="flex w-full ">
              <motion.div className="h-full w-full" variants={scrollAnimation}>
              <ul className="text-black-500 self-start list-inside ml-8">
                {Ejemplos.map((RealidadVirtual, index) => (
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
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Educacion3D;