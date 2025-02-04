"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  // keep track of hamburger menu state
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex lg:items-center lg:justify-between justify-end p-6">
      {/* logo to home */}
      <div className="hidden lg:block">
        <Link href="/">
          <Image
            src={`/assets/logo_1.png`}
            alt="QWIC Logo"
            width="75"
            height="75"
          />
        </Link>
      </div>
      <nav className="flex flex-col lg:w-fit w-full">
        {/* mobile menu  */}
        <section className="flex flex-col lg:hidden w-full">
          <div className="flex w-full justify-end">
            <div
              className="flex items-center justify-end w-10 h-10 cursor-pointer"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              {!isNavOpen ? (
                <div className="space-y-2">
                  <span className="block h-0.5 w-8 bg-black"></span>
                  <span className="block h-0.5 w-8 bg-black"></span>
                  <span className="block h-0.5 w-8 bg-black"></span>
                </div>
              ) : (
                <svg
                  className="h-8 w-8 text-black"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              )}
            </div>
          </div>
          <div
            className={`justify-self-center pb-3 lg:block md:pb-0 md:mt-0 ${
              isNavOpen ? "p-12 md:p-0 block" : "hidden"
            }`}
          >
            <ul className="h-screen md:h-auto items-center md:flex flex flex-col gap-4">
              <li>
                <Link
                  href="/"
                  className="hover:text-dark-purple text-xl py-4"
                  onClick={() => setIsNavOpen(!isNavOpen)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="hover:text-dark-purple text-xl py-4"
                  onClick={() => setIsNavOpen(!isNavOpen)}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/hackher"
                  className="hover:text-dark-purple text-xl py-4"
                  onClick={() => setIsNavOpen(!isNavOpen)}
                >
                  HackHer
                </Link>
              </li>
              <li>
                <Link
                  href="/sponsorships"
                  className="hover:text-dark-purple text-xl py-4"
                  onClick={() => setIsNavOpen(!isNavOpen)}
                >
                  Sponsorships
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="hover:text-dark-purple text-xl py-4"
                  onClick={() => setIsNavOpen(!isNavOpen)}
                >
                  Resources For Students
                </Link>
              </li>
              <li>
                <Link
                  href="/mentorship"
                  className="hover:text-dark-purple text-xl py-4"
                  onClick={() => setIsNavOpen(!isNavOpen)}
                >
                  Mentorship
                </Link>
              </li>
              <li>
                <Link
                  href="/our-team"
                  className="hover:text-dark-purple text-xl py-4"
                  onClick={() => setIsNavOpen(!isNavOpen)}
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="hover:text-dark-purple text-xl py-4"
                  onClick={() => setIsNavOpen(!isNavOpen)}
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="hover:text-dark-purple text-xl pb-6"
                  onClick={() => setIsNavOpen(!isNavOpen)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </section>
        {/* desktop menu  */}
        <ul className="hidden lg:flex">
          <ul className="flex flex-row gap-10 text-[15px] font-bold">
            <li>
              <Link href="/events" className="hover:text-dark-purple">
                Events
              </Link>
            </li>
            <li>
              <Link href="/hackher" className="hover:text-dark-purple">
                HackHer
              </Link>
            </li>
            <li>
              <Link href="/sponsorships" className="hover:text-dark-purple">
                Sponsorships
              </Link>
            </li>
            <li>
              <Link href="/resources" className="hover:text-dark-purple">
                Resources For Students
              </Link>
            </li>
            <li>
              <Link href="/mentorship" className="hover:text-dark-purple">
                Mentorship
              </Link>
            </li>
            <li>
              <Link href="/our-team" className="hover:text-dark-purple">
                Our Team
              </Link>
            </li>
            <li>
              <Link href="/community" className="hover:text-dark-purple">
                Community
              </Link>
            </li>
            {/* <li>
              <Link href="/shop" className="hover:text-dark-purple">
                Shop
              </Link>
            </li> */}
          </ul>
        </ul>
      </nav>
      <div className="hidden lg:flex">
        <Link
          href="/contact-us"
          className="hover:text-dark-blue text-[15px] font-bold"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
