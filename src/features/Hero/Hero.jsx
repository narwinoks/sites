import React from "react";
import LOGO from "../../assets/hero-logo.png";
const Hero = () => {
  return (
    <div className="flex flex-col-reverse items-start justify-between px-4 xs:px-0 sm:flex-row sm:items-center">
      <div className="flex max-w-md flex-col">
        <h1 className="font-bold my-3 text-3xl">Winarno</h1>
        <p className="mt-1 text-lg font-semibold">Software Developer</p>
        <p className="mt-3">
          Software developer specialized in web development using PHP and
          Javascript.
        </p>
      </div>
      <div className="w-24 pb-6 sm:mx-auto sm:w-32 sm:px-4 sm:pb-0">
        <img src={LOGO} alt="image-hero" className="w-[300px]" />
      </div>
    </div>
  );
};

export default Hero;
