import React from "react";

const page = () => {
  return (
    <div>
      {/* Heading */}
      <div className="flex justify-center items-center pt-10 mx-36">
        <div className="relative">
          <h1 className="text-[36px] font-bold">Our Team</h1>
          <div className="z-10 absolute top-0 -left-10 w-44 h-44  bg-light-pink rounded-full mix-blend-multiply filter blur-2xl opacity-95 animate-blob"></div>
          <div className="z-10 absolute right-10 w-44 h-44  bg-light-purple rounded-full filter mix-blend-multiply blur-2xl opacity-95 animate-blob animation-delay-4000"></div>
          <p className="text-secondary-text text-[18px] mt-4">
            QWIC is a community for all women, underrepresented minorities, and
            anyone who is passionate about technology and share the same values
            of equality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
