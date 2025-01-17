import React from "react";
import Image from "next/image";
import logo from "../public/assets/logo_1.png";
import instagram from "../public/assets/instagram.png";
import facebook from "../public/assets/facebook.png";
import tiktok from "../public/assets/tiktok.png";
import linkedin from "../public/assets/linkedin.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#DDDBF5]/50 to-[#E0A4D7]/40 py-20 px-20">
      <div className="flex md:flex-row flex-col">
        <div>
          <Image
            src={logo}
            alt="Logo"
            className="flex ml-84 mr-20 mt-84 mb-10"
          />
        </div>
        <div className="flex flex-col md:ml-10">
          <div className="text-[16px] font-semibold mb-6">Connect with us</div>
          <div className="flex lg:flex-row flex-col gap-10 mb-6">
            {/* add gap stuff to grid*/}
            <div className="flex flex-row gap-3">
              <Image
                src={instagram}
                alt="Instagram"
                className="flex flex-row w-[24px] h-[24px]"
              ></Image>
              <a
                href="https://www.instagram.com/queenswic/"
                aria-label="Instagram"
                className="text-[14px] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                QWIC Instagram
              </a>
            </div>
            <div className="flex flex-row gap-3">
              <Image
                src={instagram}
                alt="Instagram"
                className="flex flex-row w-[24px] h-[24px]"
              ></Image>
              <a
                href="https://www.instagram.com/qwic_community/"
                aria-label="Instagram"
                className="text-[14px] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                QWIC Community Instagram
              </a>
            </div>
            <div className="flex flex-row gap-3">
              <Image
                src={facebook}
                alt="Facebook"
                className="flex flex-row w-[24px] h-[24px]"
              ></Image>
              <a
                href="https://www.facebook.com/QueensWIC/"
                aria-label="Facebook"
                className="text-[14px] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </div>
            <div className="flex flex-row gap-3">
              <Image
                src={tiktok}
                alt="Tiktok"
                className="flex flex-row w-[24px] h-[24px]"
              ></Image>
              <a
                href="https://www.tiktok.com/@queenswic"
                aria-label="TikTok"
                className="text-[14px] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok
              </a>
            </div>
            <div className="flex flex-row gap-3">
              <Image
                src={linkedin}
                alt="LinkedIn"
                className="flex flex-row w-[24px] h-[24px]"
              ></Image>
              <a
                href="https://ca.linkedin.com/company/queens-qwic"
                aria-label="LinkedIn"
                className="text-[14px] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full">
        <div className="flex justify-center mt-12 mb-10">
          <div className="w-full h-[1px] bg-[#202632]/25"></div>
        </div>
        <div className="flex justify-between mt-4">
          <div className="self-end text-[16px] text-secondary-text">
            © 2024 Queen's Women In Computing
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
