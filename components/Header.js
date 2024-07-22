import React from 'react';
import Image from 'next/image';
import logo from '../public/assets/logo_1.png';

const Header = () => {
    return (
        <div className="flex justify-between font-bold text-[#202632] bg-transparent p-20">
            <div className="w-[122px] h-[37px] items-center">
                <Image src={logo} alt="Logo" className="object-contain w-full h-full" />
            </div>
            <div className="flex gap-20 items-center">
                <div className="font-HeaderFont text-[15px]">Who Are We</div>
                <div className="font-HeaderFont text-[15px]">Events</div>
                <div className="font-HeaderFont text-[15px]">Resources For Students</div>
                <div className="font-HeaderFont text-[15px]">Partnerships</div>
                <div className="font-HeaderFont text-[15px]">Our Team</div>
            </div>
            <div className="flex items-center">
                <div className="font-HeaderFont text-[15px]">Contact Us</div>
            </div>
        </div>
    );
}

export default Header;
