import React from "react";
import Image from "next/image";
import logo from "../assets/logo_1.png";

const Header = () => {
  return (
    <div className="flex flex-row justify-between my-5 px-5">
      <div>
        <Image src={logo} alt="Logo" className="object-contain w-full h-full" />
      </div>
      <div className="flex flex-row gap-16 text-[15px]">
        <div>Who Are We</div>
        <div>Events</div>
        <div>Resources For Students</div>
        <div>Partnerships</div>
        <div>Our Team</div>
      </div>
      <div className="text-[15px]">Contact Us</div>
    </div>
  );
};

export default Header;
