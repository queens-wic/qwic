import React from 'react';
import Image from 'next/image';
import arrow from '../assets/arrow.png';

const CardText = ({bcolor, fcolor, title, body, img, more}) => {
    // bcolor: back card color
    // fcolor: front card color
    return (
      <div className="relative w-[250px] h-[350px]">

        <div className={`absolute top-0 left-5 z-40 w-[225px] h-[275px] rounded-2xl border-1 border-black ${fcolor ? `bg-${fcolor}` : ''}`}>
          {img && <Image src={img} alt="Card Image" width={38} height={38} className="m-6 mt-8 mb-4" />}
          <h2 className="m-6 mt-2 mb-2 text-xl">{title}</h2>
          <p className="m-6 mt-2 mb-2 text-sm">{body}</p>
          <div className="flex items-center justify-end m-6 mt-2 text-md">
            <span>{more}</span>
            <Image src={arrow} alt="Learn More" width={16} height={16} className="ml-2" />
          </div>
        </div>

        <div className={`absolute top-5 left-0 z-30 w-[225px] h-[275px] rounded-2xl ${bcolor ? `bg-${bcolor}` : ''}`}></div>

      </div>
    );
};

export default CardText;