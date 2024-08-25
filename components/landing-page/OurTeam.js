import React from "react";
import Image from "next/image";

const OurTeam = () => {
  return (
    <div className="h-screen mx-36 flex flex-col justify-center">
      <h1 className="text-[36px] font-bold">
        Creating Connections and Learning Together
      </h1>
      <p className="text-[18px] mt-4 text-secondary-text">
        QWIC is a community for all women, underrepresented minorities, and
        anyone who is <br /> passionate about technology and share the same
        values of equality.
      </p>
      <div className="self-center p-4">
        <Image
          src="/landing-page/OurTeamImage.png"
          width={1000}
          height={900}
          alt="Collage of QWIC team pictures"
        />
      </div>
      <div className="flex justify-end">
        <button className="bg-qwic-pink transition ease-in-out delay-100 hover:translate-x-1 hover:bg-light-purple rounded-full border border-black py-2 px-4 font-semibold">
          Meet Our Team
        </button>
      </div>
    </div>
  );
};

export default OurTeam;
