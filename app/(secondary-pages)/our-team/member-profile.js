import React from "react";

const MemberProfile = ({ card, name, role }) => (
  <div className="flex flex-col items-start">
    <div className="mb-12">{card}</div>
    <h3 className="text-xl sm:text-2xl lg:text-2xl mb-1 sm:mb-2 lg:mb-3">{name}</h3>
    <p className="text-base sm:text-lg mb-4 sm:mb-6 lg:mb-8 text-secondary-text">{role}</p>
  </div>
);

export default MemberProfile;
