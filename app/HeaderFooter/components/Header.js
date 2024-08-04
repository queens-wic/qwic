import React from "react";
import Image from "next/image";
import logo from "../assets/logo_1.png";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-row justify-between my-5 px-5">
      <div>
        <Image src={logo} alt="Logo" className="object-contain w-full h-full" />
      </div>
      <div>
        <ul className="flex flex-row gap-16 text-[15px] font-bold">
          <li>
            {/* Temporarily blue but colour needs to be changed */}
            <Link href="/who-we-are" className="hover:text-dark-blue">
              Who Are We
            </Link>
          </li>
          <li>
            <Link href="/events" className="hover:text-dark-blue">
              Events
            </Link>
          </li>
          <li>
            <Link href="/resources" className="hover:text-dark-blue">
              Resources For Students
            </Link>
          </li>
          <li>
            <Link href="/partnerships" className="hover:text-dark-blue">
              Partnerships
            </Link>
          </li>
          <li>
            <Link href="/our-team" className="hover:text-dark-blue">
              Our Team
            </Link>
          </li>
        </ul>
      </div>
      <Link
        href="/contact"
        className="hover:text-dark-blue text-[15px] font-bold"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default Header;
