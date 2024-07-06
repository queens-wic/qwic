import React from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import image from '../assets/img_7.png';

const CardImg = () => {
    // const bgClass = classNames({
    //     [`bg-${bcolor}`]: bcolor,
    //     [`bg-${fcolor}`]: fcolor,
    // });

    return (
        <div className="relative w-[200px] h-[200px]">
            <div className="absolute top-0 left-5 z-40 w-[250px] h-[250px] rounded-2xl border-1 border-black bg-light-pink">
                <Image src={image} alt="img" className="object-contain w-full h-full" />
            </div>
            <div className="absolute top-5 left-0 z-30 w-[250px] h-[250px] rounded-2xl bg-dark-pink"></div>
        </div>
    );
};

export default CardImg;