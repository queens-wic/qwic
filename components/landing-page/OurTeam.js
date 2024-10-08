import React from "react";
import Image from "next/image";
import Link from "next/link";
const OurTeam = () => {
  return (
    <div className="xl:h-screen h-fit mb-20 xl:mb-0 mx-4 md:mx-20 lg:mx-36 flex flex-col justify-center">
      <h2 className="text-3xl sm:text-4xl lg:text-4xl mb-3 sm:mb-4 lg:mb-6 font-bold">
        Creating Connections and Learning Together
      </h2>
      <p className="text-base sm:text-lg mb-4 sm:mb-6 lg:mb-8 text-secondary-text">
        QWIC is a community for all women, underrepresented minorities, and
        anyone who is passionate about technology and share the same values of
        equality.
      </p>
      <div className="self-center p-2">
        {/* For medium screens and larger */}
        <div className="hidden xl:block">
          <Image
            src="/landing-page/ourTeam.png"
            width={1500}
            height={900}
            alt="Collage of QWIC team pictures"
          />
        </div>

        {/* For smaller screens */}
        <div className="block xl:hidden">
          <Image
            src="/landing-page/ourTeamSmall.png"
            width={900}
            height={500}
            alt="Collage of QWIC team pictures - smaller version"
          />
        </div>
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
