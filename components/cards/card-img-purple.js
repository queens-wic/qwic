import React from "react";
import Image from "next/image";

const CardImgPurple = ({ img }) => (
  <div className="relative w-[300px] h-[300px]">
    <div className="overflow-hidden absolute top-0 left-5 z-40 w-[300px] h-[300px] rounded-2xl border-1 border-black">
      <Image
        src={img}
        alt="Card Image"
        className="object-cover w-full h-full"
      />
    </div>
    <div className="absolute top-5 left-0 z-30 w-[300px] h-[300px] rounded-2xl bg-dark-purple"></div>
  </div>
);

export default CardImgPurple;
