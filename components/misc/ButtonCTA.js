import React from "react";

const ButtonCTA = ({ children, addClass }) => {
  return (
    <button
      className={
        "py-3 lg:py-4 px-12 sm:px-4 lg:px-16 lg:text-3xl md:text-3xl sm:text-lg hover:underline-offset-4 text-white-500 font-semibold rounded-lg bg-teal-500 hover:shadow-teal-md transition-all outline-none " +
        addClass
      }
    >
      {children}
    </button>
  );
};

export default ButtonCTA;
