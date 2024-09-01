import React from "react";

const page = () => {
  return (
    <div>
      {/* Heading */}
      <div className="flex justify-center items-center pt-10 mx-36 py-20">
        <div className="relative">
          <h1 className="text-[36px] font-bold">Contact Us</h1>
          <div className="z-10 absolute top-0 -left-10 w-44 h-44  bg-light-pink rounded-full mix-blend-multiply filter blur-2xl opacity-95 animate-blob"></div>
          <div className="z-10 absolute right-10 w-44 h-44  bg-light-purple rounded-full filter mix-blend-multiply blur-2xl opacity-95 animate-blob animation-delay-4000"></div>
          <p className="text-secondary-text text-[18px] mt-4">
            Have a question or need help finding resources? Reach out to our
            team. We want to hear from you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
