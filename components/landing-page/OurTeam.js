import React from "react";
import Image from "next/image";

const OurTeam = () => {
  return (
    <div className="h-screen mx-36 flex flex-col justify-center">
      <h1 className="text-[56px] font-semibold">
        Creating Connections and Learning Together
      </h1>
      <p className="text-[18px] mt-2">
        QWIC is a community for all women, underrepresented minorities, and
        anyone who is <br /> passionate about technology and share the same
        values of equality.
      </p>
      <div className="self-center">
        <Image
          src="/OurTeamImage.png"
          width={850}
          height={850}
          alt="Collage of QWIC team pictures"
        />
      </div>
      <div className="flex justify-end">
        <button className="bg-qwic-pink rounded-full border border-black py-2 px-4 font-semibold">
          Meet Our Team
        </button>
      </div>
    </div>
  );
};

export default OurTeam;
