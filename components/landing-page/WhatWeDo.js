import React from "react";
import PurpleCard from "../cards/PurpleCard";
import PinkCard from "../cards/PinkCard";
import BlueCard from "../cards/BlueCard";

const WhatWeDo = () => {
  return (
    <div className="my-20 mx-4 md:mx-20 lg:mx-36 flex flex-col justify-center">
      <h1 className="text-3xl sm:text-4xl lg:text-4xl mb-3 sm:mb-4 lg:mb-6 font-bold">
        What We Do
      </h1>
      <div className="flex flex-col xl:h-[475px] xl:flex-row xl:gap-4 justify-center">
        <PinkCard
          title="Events"
          desc="Fostering a supportive community for all women, underrepresented minorities, and anyone who is passionate about technology and eager to connect with like-minded individuals. "
          cta="Discover Events"
          link="/events"
          img={"/who-are-we/calendar.png"}
        />
        <BlueCard
          title="Mentorship"
          desc="Helping students interested in tech improve their exposure to fields beyond undergrad and guide them along their journey with industry & academic professionals. "
          cta="Learn More"
          link="/mentorship"
          img={"/who-are-we/people.png"}
        />
        <PurpleCard
          title="Community"
          desc="Know what’s happening on your campus. Build your network. Get the best resources to start your career. Be a part of your computing community. "
          cta="Get Involved"
          link="/community"
          img={"/who-are-we/community.png"}
        />
      </div>
    </div>
  );
};

export default WhatWeDo;
