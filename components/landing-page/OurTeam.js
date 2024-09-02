import React from "react";
import Image from "next/image";
import Link from "next/link";
const OurTeam = () => {
  return (
    <div className="h-screen mx-8 md:mx-20 lg:mx-36 flex flex-col justify-center">
      <h1 className="text-[36px] font-bold">
        Creating Connections and Learning Together
      </h1>
      <p className="text-[18px] mt-4 text-secondary-text">
        QWIC is a community for all women, underrepresented minorities, and
        anyone who is passionate about technology and share the same values of
        equality.
      </p>
      <div className="self-center p-4">
        <Image
          src="/landing-page/ourTeam.png"
          width={1500}
          height={900}
          alt="Collage of QWIC team pictures"
        />
      </div>
      <div className="flex justify-end">
        <Link href="/our-team">
          <div className="flex justify-between items-center gap-6 w-full px-6 py-6 transition ease-in-out delay-100 hover:translate-x-2">
            <span className="text-[20px] font-semi-bold">Meet our team</span>
            <Image
              src={`/assets/arrow.svg`}
              alt="Learn More"
              width={25}
              height={25}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default OurTeam;
