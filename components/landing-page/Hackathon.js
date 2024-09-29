import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hackathon = () => {
  return (
    <div className="py-20 px-4 md:px-20 lg:px-36 bg-[url('/landing-page/hackathonbg.svg')] flex relative flex-row justify-between h-fit">
      <div>
        <div className="relative hidden lg:block">
          <div className="absolute inset-0 z-0 bg-dark-pink rounded-2xl transform -translate-x-5 translate-y-5"></div>
          <div className="relative z-10">
            <Image
              src="/landing-page/hackHer.png"
              className="align-center rounded-2xl"
              width={500}
              height={500}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 w-full z-10 flex flex-col justify-center">
        <div className="flex justify-end">
          <div className="bg-light-pink py-2 px-4 rounded-full w-fit h-min rotate-12 font-semibold mb-4">
            <p className="text-base sm:text-lg">200+ Hackers</p>
          </div>
        </div>
        <div className="ml-4">
          <h1 className="text-3xl sm:text-4xl lg:text-4xl mb-3 sm:mb-4 lg:mb-6 font-bold">
            HackHer x Google Hackathon
          </h1>
          <p className="text-base sm:text-lg mb-4 sm:mb-6 lg:mb-8 mt-2 text-secondary-text w-3/4">
            At hackHer, we aim to be a welcoming space where individuals of all
            technical skill levels are empowered and encouraged to develop their
            abilities.
          </p>
          <Link href="/hackher">
            <div className="flex justify-between items-center gap-6 w-fit py-4 transition ease-in-out delay-100 hover:translate-x-2">
              <span className="text-[20px] font-semi-bold">Learn More</span>
              <Image
                src={`/assets/arrow.svg`}
                alt="Learn More"
                width={25}
                height={25}
              />
            </div>
          </Link>
        </div>
        <div className="flex justify-end">
          <div className="bg-light-pink py-2 px-4 rounded-full w-fit h-min -rotate-12 font-semibold">
            <p className="text-base sm:text-lg">$2000+ in Prizes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hackathon;
