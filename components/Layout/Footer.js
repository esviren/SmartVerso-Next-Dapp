import React from "react";
import Link from "next/link";
import LogoSmartLAB from "../../public/assets/logo-smartlab.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";

const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <Link href={"/"} >
            <a>
              <LogoSmartLAB className="h-28 w-auto mb-6" />
            </a>
          </Link>
          <p className="mb-4">
            <strong className="font-medium">SmartLAB</strong> Es Un Compromiso Expandir Las Experiencias Virtual En Todo El Mundo.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Link href={"https://www.facebook.com/profile.php?id=100089909291432"}>
                <a>
                  <Facebook className="h-6 w-6" />
                </a>
              </Link>
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Twitter className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Link href={"https://www.instagram.com/laboratoriosmartlab5/"}>
                <a>
                  <Instagram className="h-6 w-6" />
                </a>
              </Link>
            </div>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()} - SmartLAB</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Servicios</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-teal-500 cursor-pointer transition-all">
              <Link href="/desarrollo-3d">
                Desarrollo 3D
              </Link>
            </li>
            <li className="my-2 hover:text-teal-500 cursor-pointer transition-all">
              <Link href="/educacion-tecnologica">
                Educación Tecnológica
              </Link>
            </li>
            <li className="my-2 hover:text-teal-500 cursor-pointer transition-all">
              <Link href="softwareaplicaciones">
              Sorftware y Aplicaciones
              </Link>
            </li>
            
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Laboratorio</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-teal-500 cursor-pointer transition-all">
              <Link href="/smart-racing">
                SMARTRACING
              </Link>
            </li>
            <li className="my-2 hover:text-teal-500 cursor-pointer transition-all">
              SMARTVERSO{" "}
            </li>
            <li className="my-2 hover:text-teal-500 cursor-pointer transition-all">
              Privacy Policy{" "}
            </li>
            <li className="my-2 hover:text-teal-500 cursor-pointer transition-all">
              Terminos y Condiciones{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Gana Dinero</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-teal-500 cursor-pointer transition-all">
              Afiliate{" "}
            </li>
            <li className="my-2 hover:text-teal-500 cursor-pointer transition-all">
              Se un Angel{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
