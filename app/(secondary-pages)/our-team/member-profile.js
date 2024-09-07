import React from "react";

const MemberProfile = ({ card, name, role }) => (
  <div className="flex flex-col items-start">
    <div className="mb-24">{card}</div>
    <h1 className="text-[24px] font-semibold mb-4">{name}</h1>
    <p className="text-[18px] text-secondary-text">{role}</p>
  </div>
);

export default MemberProfile;
