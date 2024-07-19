import React from "react";
import SponserScroll from "./SponserScroll";

const SupportUs = () => {
  return (
    <div className="h-screen mx-36 flex flex-col">
      <div className="mb-40">
        <h1 className="text-[56px] font-semibold">Want to help support us?</h1>
        <p className="text-[18px] mt-2 w-4/6">
          We would love to partner with you to promote your local Kingston
          business, offer students exciting prizes and build the relationship
          between Queen’s and Kingston community. If you are interested, our
          contacts are below, and we would love to speak with you about
          partnership opportunities.
        </p>
      </div>
      <div className="border-t border-light-grey mb-2"></div>
      <SponserScroll />
      <div className="border-t border-light-grey mt-2"></div>
    </div>
  );
};

export default SupportUs;
