import React from "react";
import Image from "next/image";
import Link from "next/link";

const ResourceBoxPink = ({ title, description, img, link }) => (
  <div className="relative w-[325px] h-[375px]">
    <div className="absolute top-0 left-5 z-40 w-[325px] h-[375px] rounded-2xl border-1 border-black bg-light-pink">
      <div className="m-6">
        {/* Container for img and title to be aligned and centered when needed */}
        <div className="flex items-center mb-4">
          {img && (
            <Image
              src={img}
              alt="Card Image"
              className="mr-4 overflow-hidden flex-none"
              width={80}
              height={80}
            />
          )}
          <h3 className="text-xl sm:text-2xl lg:text-2xl mb-1 sm:mb-2 lg:mb-3">
            {title}
          </h3>
        </div>
        <p className="text-base sm:text-lg mb-4 sm:mb-6 lg:mb-8 text-secondary-text">{description}</p>
      </div>
      
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <div className="flex justify-between items-center absolute bottom-0 left-0 w-full px-6 py-6 transition ease-in-out delay-100 hover:translate-x-2">
          <span className="text-[20px] font-semi-bold">Learn More!</span>
          <Image
            src={`/assets/arrow.svg`}
            alt="Learn More"
            width={25}
            height={25}
          />
        </div>
      </Link>
    </div>
    <div className="absolute top-5 left-0 z-30 w-[325px] h-[375px] rounded-2xl bg-dark-pink"></div>
  </div>
);

export default ResourceBoxPink;