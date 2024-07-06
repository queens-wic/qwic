import React from 'react';
import Image from 'next/image';
import logo from '../assets/logo_1.png';

const Header = () => {
  return (
    <div className="relative flex font-bold text-[#202632] bg-transparent pr-20">
      <div className="relative top-[74px] w-[122px] h-[37px] mr-[375px] left-[74px]">
        <Image src={logo} alt="Logo" className="object-contain w-full h-full" />
      </div>
      <div className="relative top-[74px] flex gap-[120px] items-center">
        <div className="font-HeaderFont text-[15px]">Who Are We</div>
        <div className="font-HeaderFont text-[15px]">Events</div>
        <div className="font-HeaderFont text-[15px]">Resources For Students</div>
        <div className="font-HeaderFont text-[15px]">Partnerships</div>
        <div className="font-HeaderFont text-[15px]">Our Team</div>
      </div>
      <div className="relative top-[74px] flex items-center left-[270px]">
        <div className="font-HeaderFont text-[15px]">Contact Us</div>
      </div>
    </div>
  );
}

export default Header;
