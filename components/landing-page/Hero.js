import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col text-center justify-center items-center">
      <div className="absolute inset-0 inverted-radius bg-gradient-to-b from-[#DDDBF5]/70 to-[#E0A4D7]/50 z-0"></div>
      <div className="flex-grow flex flex-col justify-center items-center z-10 px-36">
        <h1 className="text-7xl font-semibold">
          Helping you discover <br /> technology and feel empowered
        </h1>
        <p className="text-lg mt-5">
          Fostering community for all women, underrepresented minorities, and
          anyone passionate about technology.
        </p>
      </div>
      <div className="bg-[#F5F5F5] w-full h-10 z-10 mt-auto rounded-t-[70px]"></div>
    </div>
  );
};

export default Hero;
