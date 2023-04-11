import React, { useState, useEffect } from "react";
import Link from "next/link";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "../misc/ButtonOutline.";
import LogoSmartLAB from "../../public/assets/logo-smartlab.svg";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-gray-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <LogoSmartLAB className="h-16 w-auto" />
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "Inicio"
                  ? " text-teal-500 animation-active "
                  : " text-black-500 hover:text-teal-500 a")
              }
            >
              Inicio
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="feature"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("feature");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "feature"
                  ? " text-teal-500 animation-active "
                  : " text-black-500 hover:text-teal-500 ")
              }
            >
              Laboratorio
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("pricing");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "pricing"
                  ? " text-teal-500 animation-active "
                  : " text-black-500 hover:text-teal-500 ")
              }
            >
              Portafolio
            </LinkScroll>
            <Link href="/proyectos">
              <LinkScroll
                activeClass="active"
                to={"/proyectos"}
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink("/proyectos");
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                  (activeLink === "/proyectos"
                    ? " text-teal-500 animation-active "
                    : " text-black-500 hover:text-teal-500 ")
                }
              >
                Proyectos
              </LinkScroll>
            </Link>
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <Link href="/">
              <a className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-teal-500 transition-all">
                  XR
              </a>
            </Link>
            <Link href="/">
              <a>
                <ButtonOutline>Home</ButtonOutline>
              </a>
            </Link>
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            <Link href={"/"}>
              <LinkScroll
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink("about");
                }}
                className={
                  "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                  (activeLink === "about"
                    ? "  border-teal-500 text-teal-500"
                    : " border-transparent")
                }
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -3 72 72" aria-labelledby="title"
                aria-describedby="desc" role="img">
                  <title>House</title>
                  <desc>SmartLAB ICONS.</desc>
                  <path data-name="layer1"
                  d="M54 26.267l7.555 7.3a.25.25 0 0 1-.174.43H54V62H40V44H24v18H10V34H2.618a.25.25 0 0 1-.174-.43L32 5l13 12.567V12h9z"
                  fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10"
                  stroke-width="2" stroke-linejoin="round"></path>
                </svg>
                SmartLAB
              </LinkScroll>
            </Link>
            <LinkScroll
              activeClass="active"
              to="feature"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("feature");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "feature"
                  ? "  border-teal-500 text-teal-500"
                  : " border-transparent ")
              }
            >
              <svg viewBox="-5 -3 72 72" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title"
              aria-describedby="desc" role="img" >
                <title>Data App</title>
                <desc>A line styled icon from Orion Icon Library.</desc>
                <path d="M2 23v22l30.082 14L62 45V23L32 37.048 2 23zm30 14.048V59m25.332-38.178L62 23M37.459 11.548l9.148 4.269m-29.232.009l9.147-4.27M2 23l4.742-2.213"
                stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor"
                fill="none" data-name="layer2"></path>
                <ellipse stroke-width="2" stroke-linejoin="round" stroke-linecap="round"
                stroke="currentColor" fill="none" ry="4" rx="7" cy="19" cx="13" data-name="layer1"></ellipse>
                <ellipse stroke-width="2" stroke-linejoin="round" stroke-linecap="round"
                stroke="currentColor" fill="none" ry="4" rx="7" cy="25" cx="32" data-name="layer1"></ellipse>
                <ellipse stroke-width="2" stroke-linejoin="round" stroke-linecap="round"
                stroke="currentColor" fill="none" ry="4" rx="7" cy="9" cx="32" data-name="layer1"></ellipse>
                <ellipse stroke-width="2" stroke-linejoin="round" stroke-linecap="round"
                stroke="currentColor" fill="none" ry="4" rx="7" cy="19" cx="51" data-name="layer1"></ellipse>
              </svg>
              Servicios
            </LinkScroll>
            <Link href={"/proyectos"}>
              <LinkScroll
                activeClass="active"
                to="Contacto"
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink("Contacto");
                }}
                className={
                  "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                  (activeLink === "Contacto"
                    ? "  border-teal-500 text-teal-500"
                    : " border-transparent")
                }
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -3 72 72" aria-labelledby="title"
                aria-describedby="desc" role="img" >
                  <title>Messaging App</title>
                  <desc>A line styled icon from Orion Icon Library.</desc>
                  <path data-name="layer2"
                  d="M34 32a21.3 21.3 0 0 0 8 2v8l9.8-9.8c6-2.7 10.2-8 10.2-14.2 0-8.8-8.5-16-19-16S24 9.2 24 18c0 0 .1 1.3.2 2"
                  fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2"></path>
                  <circle data-name="layer2" cx="43" cy="18" r="1" fill="none" stroke="currentColor"
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle>
                  <circle data-name="layer2" cx="35" cy="18" r="1" fill="none"
                  stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle>
                  <circle data-name="layer2" cx="51" cy="18" r="1" fill="none"
                  stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle>
                  <path data-name="layer1" d="M37.4 54.3c-8.2-1.4-7.4-3.5-7.4-4.9v-2.5a13.9 13.9 0 0 0 4-10.1v-6.7C34 22.8 28.7 20 24 20s-10 2.8-10 10.1v6.7a13.8 13.8 0 0 0 4.1 10.1v2.5c0 1.4.7 3.5-7.4 4.9S2 60 2 62h44c0-2-1.3-6.4-8.6-7.7z"
                  fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2"></path>
                </svg>
                Contacto
              </LinkScroll>
            </Link>
            <Link href={"/proyectos"}>
              <LinkScroll
                activeClass="active"
                to="Gallery"
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink("Gallery");
                }}
                className={
                  "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                  (activeLink === "Gallery"
                    ? "  border-teal-500 text-teal-500"
                    : " border-transparent ")
                }
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -3 72 72" aria-labelledby="title"
                aria-describedby="desc" role="img">
                  <title>Gamepad</title>
                  <desc>A line styled icon from Orion Icon Library.</desc>
                  <path data-name="layer1"
                  fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" d="M2 34h60v28H2z"></path>
                  <circle data-name="layer2" cx="48" cy="42" r="2" fill="none" stroke="currentColor"
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle>
                  <circle data-name="layer2" cx="42" cy="48" r="2" fill="none"
                  stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle>
                  <circle data-name="layer2" cx="54" cy="48" r="2" fill="none"
                  stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle>
                  <circle data-name="layer2" cx="48" cy="54" r="2" fill="none"
                  stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle>
                  <path data-name="layer2" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="2" d="M14 42v12m-6-6h12"></path>
                  <path data-name="layer1" d="M32 34v-7a9 9 0 0 1 9-9h5a8 8 0 0 0 8-8V2"
                  fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2"></path>
                </svg>
                Proyectos
              </LinkScroll>
            </Link>
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;