import React from "react";
import CarouselSlider from "@/components/Carousel";

const page = () => {
  return (
    <div>
      {/* Heading */}
      <div className="flex justify-center items-center pt-10 mx-4 sm:mx-8 md:mx-16 lg:mx-36">
        <div className="relative">
          <h1 className="text-[36px] font-bold">Community</h1>
          <div className="z-10 absolute top-0 -left-10 w-44 h-44  bg-light-pink rounded-full mix-blend-multiply filter blur-2xl opacity-95 animate-blob"></div>
          <div className="z-10 absolute right-10 w-44 h-44  bg-light-purple rounded-full filter mix-blend-multiply blur-2xl opacity-95 animate-blob animation-delay-4000"></div>
          <p className="text-secondary-text text-[18px] mt-4">
            Know what’s happening on your campus. Build your network. Get the
            best resources to start your career. Be a part of your computing
            community. We’re putting all students interested in technology in
            touch with each other. When you join the QWIC Community, you'll be
            admitted into our tight knit private Instagram, to meet and have fun
            with amazing mentors and peers.
          </p>
        </div>
      </div>
      <div className="mx-4 my-20 sm:mx-8 md:mx-16 pt-10 lg:mx-36">
        <CarouselSlider />
      </div>
    </div>
  );
};

export default page;
