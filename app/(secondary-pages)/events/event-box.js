import React from "react";

{/* Make responsive fixes for text, needs to be underneath and fit with the size of the img box */}

const EventBox = ({ card, date, name, info }) => (
  <div className="flex flex-col items-start w-1/3">
    <div>
      <p className="mb-6 mt-10 text-[18px] text-secondary-text font-semibold">{date}</p>
      <div className="mb-10">{card}</div>
      <h1 className="text-[24px] font-semibold mb-4">{name}</h1>
      <p className="text-[18px] text-secondary-text">{info}</p>
    </div>
  </div>
);

export default EventBox;
