import React from "react";

const ButtonCTA = ({ children, addClass }) => {
  return (
    <button
      className={
        "py-3 lg:py-4 px-12 lg:px-16 text-3xl hover:underline-offset-4 text-white-500 font-semibold rounded-lg bg-teal-500 hover:shadow-teal-md transition-all outline-none " +
        addClass
      }
    >
      {children}
    </button>
  );
};

export default ButtonCTA;
