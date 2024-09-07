import React from "react";
import CardTextBlue from "../cards/card-text-blue";
import CardTextPink from "../cards/card-text-pink";
import CardTextPurple from "../cards/card-text-purple";

const WhoAreWe = () => {
  return (
    <div className="my-20 px-36 flex flex-col justify-center">
      <h1 className="text-[36px] font-bold">What We Do</h1>
      <div className="mt-8 flex flex-row gap-4 justify-between">
        <CardTextPink
          title={"Events"}
          body={
            "Fostering community for all women, underrepresented minorities, and anyone passionate about technology."
          }
          more={"Discover Events"}
          img={"/assets/event_img.png"}
          link={"/events"}
        />
        <CardTextBlue
          title={"Mentorship"}
          body={
            "Helping students interested in tech improve their exposure to fields beyond undergrad and guide them along their journey with industry & academic professionals"
          }
          more={"Learn More"}
          img={"/assets/ppl_img.png"}
          link={"/mentorship"}
        />
        <CardTextPurple
          title={"Community"}
          body={
            "Know what’s happening on your campus. Build your network. Get the best resources to start your career. Be a part of your computing community."
          }
          more={"Get Involved"}
          img={"/assets/comm_img.png"}
          link={"/community"}
        />
      </div>
    </div>
  );
};

export default WhoAreWe;
