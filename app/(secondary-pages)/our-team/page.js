// our team
"use client";
import React from "react";
import { useState } from "react";
import CardImgPink from "@/components/cards/card-img-pink";
import MemberProfile from "./member-profile";
import Filter from "@/components/filter-bar";

import members from "@/app/(secondary-pages)/our-team/members.js";

export default function OurTeam() {
  const [activeTag, setActiveTag] = useState("All");
  let tagList = [
    "All",
    "Co-Chairs",
    "Community",
    "HackHer",
    "Marketing",
    "Mentorship",
    "Operations",
  ];

  const handleTag = (tag) => {
    setActiveTag(tag);
  };

  const filterTags = (array) => {
    if (activeTag.toLowerCase() === "all") {
      return array;
    } else {
      return array.filter(
        (el) =>
          el?.portfolio?.toLocaleLowerCase() === activeTag.toLocaleLowerCase()
      );
    }
  };

  let filteredList = filterTags(members);

  return (
    <div>
      <div className="pt-10 mx-4 sm:mx-8 md:mx-16 lg:mx-36">
        {" "}
        <div className="flex flex-col gap-20">
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl mb-3 sm:mb-4 lg:mb-6 font-bold">
              Our Team
            </h2>
            <div className="z-10 absolute top-0 -left-10 w-44 h-44 bg-light-pink rounded-full mix-blend-multiply filter blur-2xl opacity-95 animate-blob"></div>
            <div className="z-10 absolute right-10 w-44 h-44 bg-light-purple rounded-full filter mix-blend-multiply blur-2xl opacity-95 animate-blob animation-delay-4000"></div>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 lg:mb-8 text-secondary-text">
              QWIC is a community for all women, underrepresented minorities,
              and anyone who is passionate about technology and shares the same
              values of equality.
            </p>
          </div>

          <Filter
            tagList={tagList}
            activeTag={activeTag}
            handleTag={handleTag}
          />
        </div>
        {/* Responsive grid for filtered team profiles */}
        <div className="flex w-full justify-center xl:justify-between">
          <div className="grid grid-cols-1 mt-14 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10 xl:gap-x-12">
            {filteredList.map((member, index) => (
              <div key={index}>
                <MemberProfile
                  card={<CardImgPink img={member.src} />}
                  name={member.name}
                  role={member.role}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-40"></div>
    </div>
  );
}
