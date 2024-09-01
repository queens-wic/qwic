import React from "react";
import { RoughNotation } from "react-rough-notation";
import Navbar from "../Navbar";
import Image from "next/image";
import CardTextPink from "../cards/card-text-pink";
import CardTextBlue from "../cards/card-text-blue";
import CardTextPurple from "../cards/card-text-purple";

const Hero = () => {
  return (
    <div>
      <div className="lg:h-4/6 h-auto flex flex-col text-center justify-center items-center relative">
        <div className="z-40 mb-auto w-full">
          <Navbar />
        </div>
        {/* <div className="absolute inset-0 inverted-radius bg-gradient-to-b from-[#DDDBF5]/50 to-[#E0A4D7]/40 z-0"></div> */}
        <div className="relative">
          <div className="z-10 absolute top-20 -left-44 w-2/6 h-2/6  bg-light-pink rounded-full mix-blend-multiply filter blur-2xl opacity-95 animate-blob"></div>
          {/* <div className="z-10 absolute bottom-0 -right-4 w-3/6 h-3/6  bg-light-blue rounded-full mix-blend-multiply filter blur-2xl opacity-95 animate-blob animation-delay-2000"></div> */}
          <div className="z-10 absolute left-3/4 w-96 h-96  bg-light-purple rounded-full filter mix-blend-multiply blur-2xl opacity-95 animate-blob animation-delay-4000"></div>
          <div className="relative flex-grow flex flex-col justify-center items-center z-40 mx-8 md:mx-20 lg:mx-36 py-36 md:py-44 sm:py-41">
            <h1 className=" text-6xl font-semibold">
              Helping you discover technology
            </h1>
            <h1 className="text-6xl font-semibold pt-2">and feel empowered</h1>
            <p className="text-lg mt-6 text-secondary-text">
              Fostering community for all women, underrepresented minorities,
              and anyone passionate about technology.
            </p>
          </div>
          {/* <div className="bg-[#F5F5F5] w-full h-16 z-10 mt-auto rounded-t-[70px]"></div> */}
          <Image
            src="/landing-page/hero.png"
            // className="align-center"
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
