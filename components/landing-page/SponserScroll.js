import React from "react";

const SponserScroll = () => {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden text-[18px]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-16 [&_img]:max-w-none animate-infinite-scroll text-light-grey">
        <li>
          <p>SAP</p>
        </li>
        <li>
          <p>RBC</p>
        </li>
        <li>
          <p>Balsamiq</p>
        </li>
        <li>
          <p>Lumentum</p>
        </li>
        <li>
          <p>CIBC</p>
        </li>
        <li>
          <p>LoblawDigital</p>
        </li>
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-16 [&_img]:max-w-none animate-infinite-scroll text-light-grey"
        aria-hidden="true"
      >
        <li>
          <p>SAP</p>
        </li>
        <li>
          <p>RBC</p>
        </li>
        <li>
          <p>Balsamiq</p>
        </li>
        <li>
          <p>Lumentum</p>
        </li>
        <li>
          <p>CIBC</p>
        </li>
        <li>
          <p>LoblawDigital</p>
        </li>
      </ul>
    </div>
  );
};

export default SponserScroll;
