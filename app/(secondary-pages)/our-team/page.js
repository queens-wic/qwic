import React from "react";
import CardImgBlue from "@/components/cards/card-img-blue";
import CardImgPink from "@/components/cards/card-img-pink";
import CardImgPurple from "@/components/cards/card-img-purple";
import MemberProfile from "./member-profile";

import profiles from "@/app/(secondary-pages)/our-team/members.js";

const Page = () => {
  return (
    <div>
      {/* Heading */}
      <div className="flex justify-center items-center pt-10 mx-36">
        <div className="relative">
          <h1 className="text-[36px] font-bold">Our Team</h1>
          <div className="z-10 absolute top-0 -left-10 w-44 h-44  bg-light-pink rounded-full mix-blend-multiply filter blur-2xl opacity-95 animate-blob"></div>
          <div className="z-10 absolute right-10 w-44 h-44  bg-light-purple rounded-full filter mix-blend-multiply blur-2xl opacity-95 animate-blob animation-delay-4000"></div>
          <p className="text-secondary-text text-[18px] mt-4">
            QWIC is a community for all women, underrepresented minorities, and
            anyone who is passionate about technology and share the same values
            of equality.
          </p>
        </div>
      </div>
      <div className="mx-36 mt-20">
        <div className="grid grid-cols-3 gap-x-40 gap-y-20">
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

// {profiles.map((profile, index) => (
//   <div key={index}>
//     <MemberProfile
//       card={<CardImgPink img={gitpub}/>}
//       name={profile.name}
//       role={profile.role}
//     />
//   </div>
// ))}
