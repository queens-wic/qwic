"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import CardShadowPurple from "@/components/cards/card-shadow-purple";
import EpisodeBox from "./episode-box.js";
import Slider from "../../../components/Slider";
import { SwiperSlide } from "swiper/react";

const guestSpeakers = [
  {
    name: "Anna Wood",
    image: "/qwic_chat/AnnaWood.jpeg",
    description:
      "Anna Wood was a Community Chair at QWIC and currently works as a Data Analyst at Suncor",
  },
  {
    name: "Maya Steckly",
    image: "/qwic_chat/MayaSteckley.jpeg",
    description:
      "Maya Steckly was a Co Chair at QWIC and currently works as an Analyst at Dawson Partners",
  },
  {
    name: "Wendy Powley",
    image: "/qwic_chat/WendyPowley.jpeg",
    description:
      "Wendy Powley was a professor of computing at Queens and is the founder of QWIC",
  },
];

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

const PodcastPage = () => {
  const isMobile = useIsMobile();

  return (
    <div className="pt-10 mx-4 sm:mx-8 md:mx-16 lg:mx-36">
      <div className="relative">
        <h2 className="text-3xl md:text-4xl mb-6 sm:mb-10 lg:mb-6 font-bold">
          QWIC Chat
        </h2>
      </div>

      <div className="flex flex-col gap-12 mt-2">
        <EpisodeBox
          title="Wendy Powley on Bringing More Women into Tech"
          description="Wendy Powley, founder of QWIC, sits down with us to talk about the work she’s done, her drive and motivation for doing do, what she’s learned along the way, and the role of schools in continuing this work"
          guests={["Wendy Powley"]}
          imgSrc="/qwic_chat/wendy.png"
          spotifyButtonImg="/qwic_chat/spotify-button.png"
          spotifyUrl="https://open.spotify.com/episode/0TBAuOipyxTI4tBAnKWqjl"
          CardComponent={CardShadowPurple}
        />

        <EpisodeBox
          title="Navigating the Industry Post Grad with QWIC Alumni Maya Steckly and Anna Wood"
          description="Maya Steckly and Anna Wood, former Queens and QWIC alumni, join us to talk about transitioning into the tech industry, a shared love for QWIC and finding community."
          guests={["Maya Steckly", "Anna Wood"]}
          imgSrc="/qwic_chat/anna-maya.png"
          spotifyButtonImg="/qwic_chat/spotify-button.png"
          spotifyUrl="https://open.spotify.com/episode/2utLBxzbylIW3kALEcx6DS"
          CardComponent={CardShadowPurple}
        />
      </div>

      <p className="py-8 md:py-16 md:text-[18px] text-[14px]">
        More episodes coming soon!
      </p>

      {/* 🎙 Guest Speakers Section */}
      <div className=" md:mt-200">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Check out some of our past podcasts and guest speakers!
        </h2>
        <div className="max-w-xs md:max-w-5xl mx-auto">
          <Slider isMobile={isMobile}>
            {guestSpeakers.map((speaker, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col items-center bg-white rounded-2xl shadow-md px-8 py-8 w-72 border-2 border-[#E0A4D7]">
                  <div className="w-36 h-36 mb-4 rounded-full overflow-hidden border-4 border-[#E0A4D7]">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      width={144}
                      height={144}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="text-xl font-bold mb-2 text-center">
                    {speaker.name}
                  </div>
                  <div className="text-center text-base text-gray-700">
                    {speaker.description}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Slider>
        </div>
      </div>

      <div className="h-40"></div>
    </div>
  );
};

export default PodcastPage;
