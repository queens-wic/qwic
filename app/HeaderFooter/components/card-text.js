import React from 'react';
import Image from 'next/image';
import Vector from '../assets/Vector.png';

const CardText = ({bcolor, fcolor, title, body}) => {

    return (
        <div className="relative w-[250px] h-[350px]">
          <div className={`absolute top-0 left-5 z-40 w-[250px] h-[300px] rounded-2xl border-1 border-black ${fcolor ? `bg-${fcolor}` : ''}`}>
            <Image src={Vector} alt="Card Image" width={32} height={32} className="m-8 mb-2" />
            <h2 className="m-8 mb-0 text-2xl">{title}</h2>
            <p className="m-8 mt-2 mb-2 text-sm">{body}</p>
            <p className="m-8 mt-2 text-md">Learn More</p>
          </div>
          <div className={`absolute top-5 left-0 z-30 w-[250px] h-[300px] rounded-2xl ${bcolor ? `bg-${bcolor}` : ''}`}></div>
        </div>
      );
};

export default CardText;