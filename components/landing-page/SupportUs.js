import React from "react";
import SponserScroll from "./SponserScroll";
import Image from "next/image";
import Link from "next/link";

const SupportUs = () => {
  return (
    <div className="relative flex flex-col justify-center my-20">
      <h1 className="text-[36px] font-bold mx-8 md:mx-20 lg:mx-36 mb-4">
        Support Our Mission
      </h1>
      {/* Container for background and main content */}
      <div className="relative mx-8 md:mx-20 lg:mx-36 flex flex-row items-center justify-between mb-20">
        {/* Background Box */}
        <div className="absolute inset-0 z-0 bg-dark-blue rounded-2xl transform -translate-x-5 translate-y-5"></div>

        {/* Main Content Box */}
        <div className="relative flex flex-row items-center border border-black bg-light-blue justify-between rounded-2xl py-6 px-12 z-10">
          <div className="flex flex-col w-3/6 justify-center">
            <h2 className="text-[24px] font-bold">Sponsor Us</h2>
            <p className="text-[18px] mt-4 text-secondary-text">
              Our sponsors make it possible for us to build an inclusive
              community for women, underrepresented minorities, and technology
              enthusiasts. Partner with us to promote your Kingston business and
              support our 4th annual QWIC hackathon, where students will
              innovate and excel
            </p>
            <p className="mt-4 text-[18px] text-secondary-text">
              Want to help support our club? Email our senior advisor, Keely
              McSpurren at{" "}
              <a href="mailto:20kjmm@queensu.ca">
                <span className="font-extrabold underline">
                  20kjmm@queensu.ca
                </span>
              </a>
            </p>
            <a
              href="mailto:20kjmm@queensu.ca"
              className="flex flex-row pt-6 transition ease-in-out delay-100 hover:translate-x-2"
            >
              <span className="text-[20px] font-semi-bold pr-6">
                Become a sponsor
              </span>
              <Image
                src={`/assets/arrow.svg`}
                alt="Learn More"
                width={25}
                height={25}
              />
            </a>
          </div>
          <div className="hidden sm:block overflow-hidden">
            <Image
              src="/landing-page/support.svg"
              width={331}
              height={331}
              alt="Collage of QWIC team pictures"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-light-grey mb-2"></div>
      <SponserScroll />
      <div className="border-t border-light-grey mt-2"></div>
    </div>
  );
};

export default SupportUs;
