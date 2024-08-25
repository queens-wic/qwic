import React from "react";
import Image from "next/image";

const CardTextPink = ({ title, body, img, more }) => (
  <div className="relative w-[350px] h-[400px]">
    <div className="absolute top-0 left-5 z-40 w-[350px] h-[400px] rounded-2xl border-1 border-black bg-light-pink">
      <div>
        {img && (
          <Image
            src={img}
            alt="Card Image"
            className="m-6 mt-8 mb-4"
            width={75}
            height={75}
          />
        )}
        <h2 className="m-6 mb-2 text-[24px] font-semibold">{title}</h2>
        <p className="m-6 mt-2 text-[18px] text-secondary-text">{body}</p>
      </div>
      <div className="flex justify-between items-center absolute bottom-0 left-0 w-full px-6 py-6 transition ease-in-out delay-100 hover:translate-x-2">
        <span className="text-[20px] font-semi-bold">{more}</span>
        <Image
          src={`/assets/arrow.svg`}
          alt="Learn More"
          width={25}
          height={25}
        />
      </div>
    </div>
    <div className="absolute top-5 left-0 z-30 w-[350px] h-[400px] rounded-2xl bg-dark-pink"></div>
  </div>
);

export default CardTextPink;
