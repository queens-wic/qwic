import React from 'react';
import Image from 'next/image';
import arrow from '../assets/arrow.png';

const CardText = ({bcolor, fcolor, title, body, img, more}) => {
    // bcolor: back card color
    // fcolor: front card color
    return (
      <div className="relative w-[250px] h-[350px]">

        <div className={`absolute top-0 left-5 z-40 w-[225px] h-[275px] rounded-2xl border-1 border-black ${fcolor ? `bg-${fcolor}` : ''}`}>
          {img && <Image src={img} alt="Card Image" width={50} height={50} className="m-6 mt-8 mb-4" />}
          <h2 className="m-6 mb-2 text-xl">{title}</h2>
          <p className="m-6 mt-2 text-xs">{body}</p>
          <div className="flex justify-between items-center absolute bottom-0 left-0 w-full px-6 py-6">
            <span className="text-md">{more}</span>
            <Image src={arrow} alt="Learn More" width={25} height={25} />
          </div>
        </div>

        <div className={`absolute top-5 left-0 z-30 w-[225px] h-[275px] rounded-2xl ${bcolor ? `bg-${bcolor}` : ''}`}></div>

      </div>
    );
};

export default CardText;