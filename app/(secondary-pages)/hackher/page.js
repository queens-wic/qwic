import React from "react";
import Wip from "@/components/Wip";

const page = () => {
  return (
    <div>
      {/* Heading */}
      <div className="flex justify-center items-center pt-10 mx-36">
        <div className="relative">
          <h1 className="text-[36px] font-bold">HackHer x Google Hackathon</h1>
          <div className="z-10 absolute top-0 -left-10 w-44 h-44  bg-light-pink rounded-full mix-blend-multiply filter blur-2xl opacity-95 animate-blob"></div>
          <div className="z-10 absolute right-10 w-44 h-44  bg-light-purple rounded-full filter mix-blend-multiply blur-2xl opacity-95 animate-blob animation-delay-4000"></div>
          <p className="text-secondary-text text-[18px] mt-4">
            At hackHer, we aim to be a welcoming space where individuals of all
            technical skill levels are empowered and encouraged to develop their
            abilities.
          </p>
          <p className="text-secondary-text text-[18px] mt-4">
            The next Hackathon will be announced soon.
          </p>
        </div>
      </div>
      <Wip />
    </div>
  );
};

export default page;
