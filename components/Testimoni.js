import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Testimoni = ({
  listTestimoni = [
    {
      name: "Stevenson Cardona",
      image: "/assets/Stevenson.png",
      city: "CEO",
      country: "PRINCIPAL",
      rating: "4.5",
      testimoni:
        " Comunicador social.",
    },
    {
      name: "Arley Sanchez",
      image: "/assets/people-1.png",
      city: "CEO",
      country: "COMERCIAL",
      rating: "4.5",
      testimoni:
        "Negociador internacional.",
    },
    {
      name: "Jorge Alvarez",
      image: "/assets/people-3.png",
      city: "Líder",
      country: "DESARROLLO 3D",
      rating: "4.5",
      testimoni:
        "Tecnólogo en animación 3D y experto en producción 2D y 3D ademas de integración multilenguaje",
    },
    {
      name: "Oswaldo Ramires",
      image: "/assets/Oswall.png",
      city: "CEO",
      country: "PRODUCTOR",
      rating: "4.5",
      testimoni:
        " Escritor y redactor de producción",
    },
    {
      name: "Andrés Ocampo",
      image: "/assets/Andres.png",
      city: "CEO",
      country: "ADMINISTRADOR",
      rating: "4.5",
      testimoni:
        "Administrador de empresas, experto en gestión de personal",
    },
    {
      name: "Jhon Sebastian G.",
      image: "/assets/Ruso.png",
      city: "Líder",
      country: "BACKEND DEV",
      rating: "4.5",
      testimoni:
        "Técnico en desarrollo de software, experto en seguridad informática",
    },
    {
      name: "Alexander Durango",
      image: "/assets/Alexander.png",
      city: "Líder",
      country: "MULTIMEDIA",
      rating: "4.5",
      testimoni:
        "Tecnólogo en diseño gráfico, experto en modelado 3D",
    },
    {
      name: "Steevens Rodriguez",
      image: "/assets/Steevens.png",
      city: "Líder",
      country: "FULLSTACK DEV",
      rating: "4.5",
      testimoni:
        "Apasionado por el software libre experto en escritura de código BlockChain e integración multilenguaje",
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-teal-500 transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <Image
                    src={listTestimonis.image}
                    height={50}
                    width={50}
                    alt="Icon People"
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm text-black-500 capitalize">
                      {listTestimonis.city},{listTestimonis.country}
                    </p>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm">{listTestimonis.rating}</p>
                  <span className="flex ml-4">
                    <Stars className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left">“{listTestimonis.testimoni}”.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-teal-500 border hover:bg-teal-500 hover:text-white-500 transition-all text-teal-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-teal-500 border hover:bg-teal-500 hover:text-white-500 transition-all text-teal-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
