import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCalendarCheck,
} from "@fortawesome/free-regular-svg-icons";

const page = () => {
  return (
    <div>
      {/* Heading */}
      <heading className="flex justify-center items-center pt-10 mx-36 mb-40">
        <div className="relative">
          <h1 className="text-[36px] font-bold">HackHer Hackathon</h1>
          <div className="z-10 absolute top-0 -left-10 w-44 h-44  bg-light-pink rounded-full mix-blend-multiply filter blur-2xl opacity-95 animate-blob"></div>
          <div className="z-10 absolute right-10 w-44 h-44  bg-light-purple rounded-full filter mix-blend-multiply blur-2xl opacity-95 animate-blob animation-delay-4000"></div>
          <p className="text-secondary-text text-[18px] mt-4">
            At hackHer, we aim to be a welcoming space where individuals of all
            technical skill levels are empowered and encouraged to develop their
            abilities.
          </p>
          <section className="mt-8">
            <div className="flex items-center gap-5 mt-4">
              <FontAwesomeIcon className="size-10" icon={faCalendarDays} />
              <p className="text-secondary-text text-[18px] font-black">
                March 8th - March 9th, 2025
              </p>
            </div>
            <div className="flex items-center gap-5 mt-4">
              <FontAwesomeIcon icon={faCalendarCheck} className="size-10" />
              <p className="text-secondary-text text-[18px] font-black">
                Applications open February 1st, 2025
              </p>
            </div>
          </section>
        </div>
      </heading>
    </div>
  );
};

export default page;
