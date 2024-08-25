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
      <div className="flex flex-row">
        <div>
          <Image src={logo} alt="Logo" className="flex ml-84 mr-20 mt-84" />
        </div>
        <div className="flex flex-col ml-10">
          <div className="text-[16px] font-semibold mb-6">Connect with us</div>
          <div className="grid grid-rows-2 grid-cols-2 gap-8 mb-6">
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
              >
                Instagram
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
        <div className="flex flex-row justify-between mt-4">
          <div className="self-end text-[16px] text-secondary-text">
            © 2024 Queen's Women In Computing
          </div>
          {/* <div className="flex flex-row self-end gap-9">
            <a
              href="https://www.instagram.com/queenswic/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={instagram}
                alt="Instagram"
                className="w-[24px] h-[24px]"
              />
            </a>
            <a
              href="https://www.tiktok.com/@queenswic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={tiktok} alt="Tiktok" className="w-[24px] h-[24px]" />
            </a>
            <a
              href="https://ca.linkedin.com/company/queens-qwic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={linkedin}
                alt="LinkedIn"
                className="w-[24px] h-[24px]"
              />
            </a>
            <a
              href="https://www.facebook.com/QueensWIC/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={facebook}
                alt="Facebook"
                className="w-[24px] h-[24px]"
              />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
