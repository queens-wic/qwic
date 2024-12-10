import React from "react";
import CardImgBlue from "@/components/cards/card-img-blue";
import CardImgPink from "@/components/cards/card-img-pink";
import CardImgPurple from "@/components/cards/card-img-purple";
import MemberProfile from "./member-profile";

import profiles from "@/app/(secondary-pages)/our-team/members.js";

const Page = () => {
  return (
    <div>
      <div className="pt-10 mx-4 sm:mx-8 md:mx-16 lg:mx-36">
        <div className="relative">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl mb-3 sm:mb-4 lg:mb-6 font-bold">
            Our Team
          </h2>
          <div className="z-10 absolute top-0 -left-10 w-44 h-44 bg-light-pink rounded-full mix-blend-multiply filter blur-2xl opacity-95 animate-blob"></div>
          <div className="z-10 absolute right-10 w-44 h-44 bg-light-purple rounded-full filter mix-blend-multiply blur-2xl opacity-95 animate-blob animation-delay-4000"></div>
          <p className="text-base sm:text-lg mb-4 sm:mb-6 lg:mb-8 text-secondary-text">
            QWIC is a community for all women, underrepresented minorities, and
            anyone who is passionate about technology and share the same values
            of equality.
          </p>
        </div>
      </div>
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-36 mt-20 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10 lg:gap-x-12">
          {profiles.map((profile, index) => (
            <div key={index}>
              <MemberProfile
                card={<CardImgPink img={profile.src} />}
                name={profile.name}
                role={profile.role}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="h-40"></div>
    </div>
  );
};

export default Page;
