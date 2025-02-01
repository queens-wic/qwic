import React from "react";
import Link from "next/link";

const ButtonPurple = ({ username, link }) => (
  <Link href={link} target="_blank" rel="noopener noreferrer">
    <div className="w-48 h-12 flex items-center justify-center bg-light-purple border-dark-purple border-1 m-4 ms-0 rounded-xl hover:border-2 ease-in-out ">
      <p className="text-center text-secondary-text text-[18px]">{username}</p>
    </div>
  </Link>
);

export default ButtonPurple;
