import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import Header from "@/app/HeaderFooter/components/Header";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col text-center justify-center items-center">
      <div className="z-10 mb-auto w-full">
        <Header />
      </div>
      <div className="absolute inset-0 inverted-radius bg-gradient-to-b from-[#DDDBF5]/50 to-[#E0A4D7]/40 z-0"></div>
      <div className="flex-grow flex flex-col justify-center items-center z-10 px-36">
        <h1 className="text-7xl font-semibold">Helping you discover</h1>
        <h1 className="text-7xl font-semibold mt-6">
          <RoughNotation
            animationDuration={2000}
            type="highlight"
            show={true}
            color="#9FB9DE"
            strokeWidth={2.5}
          >
            technology
          </RoughNotation>{" "}
          and feel{" "}
          <RoughNotation
            animationDuration={2000}
            type="underline"
            show={true}
            color="#DD8BCF"
            strokeWidth={2.5}
          >
            empowered
          </RoughNotation>
        </h1>
        <p className="text-lg mt-5">
          Fostering community for all women, underrepresented minorities, and
          anyone passionate about technology.
        </p>
      </div>
      <div className="bg-[#F5F5F5] w-full h-16 z-10 mt-auto rounded-t-[70px]"></div>
    </div>
  );
};

export default Hero;
