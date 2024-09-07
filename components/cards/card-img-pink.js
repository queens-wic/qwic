import React from "react";
import Image from "next/image";

const CardImgPink = ({ img }) => (
  <div className="relative w-[300px] h-[300px]">
    <div className="overflow-hidden absolute top-0 left-5 z-40 w-[300px] h-[300px] rounded-2xl border-1 border-black">
      <Image
        src={img}
        alt="Card Image"
        width={300}
        height={300}
        className="object-cover w-full h-full"
      />
    </div>
    <div className="absolute top-5 left-0 z-30 w-[300px] h-[300px] rounded-2xl bg-dark-pink"></div>
  </div>
);

export default CardImgPink;
