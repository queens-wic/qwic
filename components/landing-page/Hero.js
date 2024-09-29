import React from "react";
import Navbar from "../Navbar";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="overflow-hidden">
      <div className="lg:h-4/6 h-auto flex flex-col text-center justify-center items-center relative">
        <div className="z-40 mb-auto w-full">
          <Navbar />
        </div>
        <div className="relative">
          <div className="z-10 absolute top-20 -left-44 w-2/6 h-2/6  bg-light-pink rounded-full mix-blend-multiply filter blur-2xl opacity-95 animate-blob"></div>
          <div className="z-10 absolute left-3/4 w-96 h-96  bg-light-purple rounded-full filter mix-blend-multiply blur-2xl opacity-95 animate-blob animation-delay-4000"></div>
          <div className="relative flex-grow flex flex-col justify-center items-center z-40 mx-4 sm:mx-8 md:mx-16 lg:mx-36 py-36 md:py-44 sm:py-41">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6 lg:mb-8 font-semibold">
              Helping you discover technology <br /> and feel empowered
            </h1>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 lg:mb-8 text-secondary-text">
              Fostering community for all women, underrepresented minorities,
              and anyone passionate about technology.
            </p>
          </div>
          <Image
            src="/landing-page/hero.png"
            width={1920}
            height={900}
            alt="Digital illustration of a girl smiling and making an OK symbol with her left hand."
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
