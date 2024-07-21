import React from "react";
import SponserScroll from "./SponserScroll";
import Image from "next/image";

const SupportUs = () => {
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="mx-36 flex flex-row justify-between mb-10">
        <div className="flex flex-col w-4/6 mr-4">
          <h1 className="text-[40px] font-bold">Want to help support us?</h1>
          <p className="text-[18px] mt-2 text-secondary-text">
            We would love to partner with you to promote your local Kingston
            business, offer students exciting prizes and build the relationship
            between Queen’s and Kingston community. If you are interested, our
            contacts are below, and we would love to <br /> speak with you about
            partnership opportunities.
          </p>
          <button className="bg-qwic-pink rounded-full border border-black py-2 px-4 font-semibold mt-4 w-fit">
            Become a sponsor
          </button>
        </div>
        <Image
          src="/landing-page/support.png"
          width={331}
          height={331}
          alt="Collage of QWIC team pictures"
        />
      </div>
      <div className="border-t border-light-grey mb-2"></div>
      <SponserScroll />
      <div className="border-t border-light-grey mt-2"></div>
    </div>
  );
};

export default SupportUs;
