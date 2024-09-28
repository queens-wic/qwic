import React from "react";
import SponserScroll from "./SponserScroll";
import Image from "next/image";

const SupportUs = () => {
  return (
    <div className="relative flex flex-col justify-center my-20">
      <h2 className="text-3xl sm:text-4xl lg:text-4xl mb-3 sm:mb-4 lg:mb-6 ml-4 md:ml-20 lg:ml-36 font-bold">
        Support Our Mission
      </h2>
      {/* Container for background and main content */}
      <div className="relative mx-4 md:mx-20 lg:mx-36 flex flex-row items-center justify-between mb-20">
        {/* Background Box */}
        <div className="absolute inset-0 z-0 bg-dark-blue ml-6 rounded-2xl transform -translate-x-5 translate-y-5"></div>

        {/* Main Content Box */}
        <div className="relative flex flex-col-reverse lg:flex-row items-center border border-black ml-6 bg-light-blue justify-between rounded-2xl py-6 px-12 z-10">
          <div className="flex flex-col lg:w-3/6 w-full justify-center">
            <h2 className="text-2xl sm:text-3xl lg:text-3xl mb-2 sm:mb-3 lg:mb-4 font-bold">
              Sponsor Us
            </h2>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 lg:mb-8 text-secondary-text">
              Our sponsors make it possible for us to build an inclusive
              community for women, underrepresented minorities, and technology
              enthusiasts. Partner with us to promote your Kingston business and
              support our 4th annual QWIC hackathon, where students will
              innovate and excel
            </p>
            <a
              href="mailto:QWIC_finance@compsa.queensu.ca"
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
          <div className="overflow-hidde pb-4">
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
