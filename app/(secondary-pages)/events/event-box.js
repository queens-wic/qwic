import React from "react";

const EventBox = ({ card, date, name, info }) => (
  <div className="flex flex-col items-start w-1/3">
    <p className="mb-6 text-[18px] text-secondary-text font-semibold">{date}</p>
    <div className="mb-10">{card}</div>
    <h1 className="text-[24px] font-semibold mb-4">{name}</h1>
    <p className="text-[18px] text-secondary-text">{info}</p>
  </div>
);

export default EventBox;
