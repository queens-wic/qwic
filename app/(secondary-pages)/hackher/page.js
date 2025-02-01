import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCalendarCheck,
} from "@fortawesome/free-regular-svg-icons";
import ButtonPink from "../events/button-pink";
import PinkCard from "@/components/cards/PinkCard";
import BlueCard from "@/components/cards/BlueCard";
import PurpleCard from "@/components/cards/PurpleCard";

const page = () => {
  return (
    <div>
      {/* Heading */}
      <heading className="flex justify-center items-center pt-10 mx-36 mb-40">
        <div className="relative">
          <h1 className="text-[36px] font-bold">HackHer Hackathon</h1>
          <div className="z-10 absolute top-0 -left-10 w-44 h-44  bg-light-pink rounded-full mix-blend-multiply filter blur-2xl opacity-95 animate-blob"></div>
          <div className="z-10 absolute right-10 w-44 h-44  bg-light-purple rounded-full filter mix-blend-multiply blur-2xl opacity-95 animate-blob animation-delay-4000"></div>
          <p className="text-secondary-text text-[18px] mt-4">
            HackHer 2025 is a 24-hour coding sprint, running from 10am on March
            8th to 10am on March 9th. Participants can compete solo or in teams
            to create projects that meet specific challenge requirements.
            Projects will be judged across multiple categories by a panel of
            expert judges.
          </p>
          <section className="mt-8 flex flex-col gap-y-2">
            <ButtonPink
              username={"Apply Now!"}
              link={
                "https://docs.google.com/forms/d/e/1FAIpQLSf_HAKRnhIi5ZgGeg_nuWXRpO_tB_ZkYmX-jsSWV_2AR08dzA/viewform"
              }
            />
            <div className="flex items-center gap-5 mt-4">
              <FontAwesomeIcon className="size-10" icon={faCalendarDays} />
              <p className="text-secondary-text text-[18px] font-black">
                March 8th - March 9th, 2025
              </p>
            </div>
            <div className="flex items-center gap-5 mt-4">
              <FontAwesomeIcon icon={faCalendarCheck} className="size-10" />
              <p className="text-secondary-text text-[18px] font-black">
                Applications open February 1st, 2025
              </p>
            </div>
            <div className="flex items-center gap-5 mt-4"></div>
          </section>
          <div className="mt-10 flex flex-col xl:h-[475px] xl:flex-row xl:gap-4 justify-center">
            <PinkCard
              title="Location"
              desc="Code with us in person at Queen’s University for food, workshops, presentations, games, and more! Prizes await the winners. Can’t make it in person? No worries— participate online."
              cta="More"
              link="https://docs.google.com/forms/d/e/1FAIpQLSf_HAKRnhIi5ZgGeg_nuWXRpO_tB_ZkYmX-jsSWV_2AR08dzA/viewform"
              img={"/assets/location.png"}
            />
            <BlueCard
              title="Beginner Friendly"
              desc="No coding experience required! This is a great opportunity to learn, collaborate, and network with students, professors, and industry professionals."
              cta="More"
              link="https://docs.google.com/forms/d/e/1FAIpQLSf_HAKRnhIi5ZgGeg_nuWXRpO_tB_ZkYmX-jsSWV_2AR08dzA/viewform"
              img={"/assets/beginnerFriendly.png"}
            />
            <PurpleCard
              title="Guest Speakers"
              desc="Industry leaders from Amazon, Microsoft, Ericsson, Intermap, Incognito, and Datadog will share their expertise."
              cta="More"
              link="https://docs.google.com/forms/d/e/1FAIpQLSf_HAKRnhIi5ZgGeg_nuWXRpO_tB_ZkYmX-jsSWV_2AR08dzA/viewform"
              img={"/assets/guestSpeaker.png"}
            />
          </div>
        </div>
      </heading>
    </div>
  );
};

export default page;
