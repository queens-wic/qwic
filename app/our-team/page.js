import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CardImgBlue from "@/components/cards/card-img-blue";
import CardImgPink from "@/components/cards/card-img-pink";
import CardImgPurple from "@/components/cards/card-img-purple";
import MemberProfile from "./member-profile";
import gitpub from "@/public/assets/gitpub.jpg";

import profiles from "./members";

const Page = () => {
  const cardColors = [CardImgPink, CardImgBlue, CardImgPurple];
  return (
    <div className='h-screen'>
      <div className="p-4" />
      <Header />

      <div className="mx-36">
        <h1 className="text-[40px] font-bold pt-16 px-0">Meet our Team</h1>
        <p className="pt-10 pb-16 px-0">
          QWIC is a community for all women, underrepresented minorities, and anyone who is passionate about technology and share the same values of equality.
        </p>

        <div className="flex flex-wrap justify-between justify-center px-0">
          {profiles.map((profile, index) => (
            <div key={index}>
              <MemberProfile
                card={<CardImgPink img={gitpub}/>}
                name={profile.name}
                role={profile.role}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="h-40"></div>
      <Footer />
    </div>
  );
};

export default Page;


