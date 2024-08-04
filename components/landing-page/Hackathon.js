import React from "react";

const Hackathon = () => {
  return (
    <div className="h-screen px-36 bg-[url('/landing-page/hackathonbg.svg')] flex flex-col justify-center">
      <div>
        <h1 className="text-[36px] font-bold">HackHer x Google Hackathon</h1>
        <p className="text-[18px] mt-2 text-secondary-text">
          At hackHer, we aim to be a welcoming space where individuals of all
          technical skill levels <br /> are empowered and encouraged to develop
          their abilities.
        </p>
        <div className="flex justify-end">
          <button className="bg-qwic-pink rounded-full border border-black py-2 px-4 font-semibold">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hackathon;
