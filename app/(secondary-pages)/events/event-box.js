import React from "react";

{/* Make responsive fixes for text, needs to be underneath and fit with the size of the img box */}

const EventBox = ({ card, date, timeplace, name, info }) => (
  <div className="flex flex-col items-start w-1/3">
    <div>
      <p className="mb-3 mt-10 text-[18px] text-secondary-text font-semibold">{date}</p>
      <div className="mb-10">{card}</div>
      <h3 className="text-xl sm:text-2xl lg:text-2xl mb-1 sm:mb-1 lg:mb-1">{name}</h3>
      <p className="mb-2 mt-0 text-[18px] font-bold">{timeplace}</p>
      <p className="text-base sm:text-lg mb-0 sm:mb-0 lg:mb-0 text-secondary-text">{info}</p>
    </div>
  </div>
);

export default EventBox;
