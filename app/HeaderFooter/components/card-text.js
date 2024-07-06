import React from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import Vector from '../assets/Vector.png';

const CardText = ({ bcolor, fcolor }) => {
    // const bgClass = classNames({
    //     [`bg-${bcolor}`]: bcolor,
    //     [`bg-${fcolor}`]: fcolor,
    // });

    return (
        <div className="relative w-[200px] h-[300px]">
            <div className="absolute top-0 left-5 z-40 w-[250px] h-[300px] rounded-2xl border-1 border-black bg-light-pink">
                <img src={Vector} alt="Card Image" className="w-8 h-8 m-8" />
                <h2 className="m-8 mb-0 text-2xl">Title</h2>
                <p className="m-8 mt-2 mb-2 text-sm">Fostering community for all women, underrepresented minorities, and anyone passionate about technology.</p>
                <p className="m-8 mt-0 text-md">Learn More</p>
            </div>
            <div className="absolute top-5 left-0 z-30 w-[250px] h-[300px] rounded-2xl bg-dark-pink"></div>
        </div>
    );
};

export default CardText;