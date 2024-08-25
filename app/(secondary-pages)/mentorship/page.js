import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      {/* Heading */}
      <div className="bg-[url('/mentorship/blobs.png')] bg-cover bg-center h-[250px] flex justify-center items-center pt-10">
        <div className="mx-36">
          <h1 className="text-[36px] font-bold">
            Bits and Bytes Mentorship Program
          </h1>
          <p className="text-secondary-text text-[18px] mt-4">
            QWIC's Bits and Bytes peer mentorship program is a chance for you to
            be paired with an upper year student in Computing. Whether you need
            help selecting your classes, want to engage in coffee chats about
            their experiences and managing course loads, study dates, and more.
          </p>
        </div>
      </div>
      {/* What's in it for you? */}
      <div className="h-full mx-36 flex justify-center items-center py-28">
        <div>
          <h2 className="text-[30px] font-bold">What's in it for you?</h2>
          <div className="flex flex-row justify-between mt-8 ">
            <div className="flex-1 px-4">
              <div className="flex justify-center">
                <Image
                  src="/mentorship/personalGrowth.png"
                  className="align-center"
                  width={200}
                  height={200}
                  alt="Digital illustration of a girl smiling and making an OK symbol with her left hand."
                />
              </div>
              <h3 className="text-[26px] font-bold mt-4">Foster Connections</h3>
              <p className="text-[18px] mt-4 text-secondary-text">
                Create and strengthen meaningful connections within a supportive
                community. Build relationships with peers who share similar
                interests and experiences, enriching your university life and
                professional network.
              </p>
            </div>
            <div className="flex-1 px-4">
              <div className="flex justify-center">
                <Image
                  src="/mentorship/networking.png"
                  width={220}
                  height={220}
                  alt="Digital illustration of a two people smiling at eachother and giving thumbs up."
                />
              </div>
              <h3 className="text-[26px] font-bold mt-4">Personal Growth</h3>
              <p className="text-[18px] mt-4 text-secondary-text">
                Grow through meaningful interactions. Mentors enhance leadership
                skills, while mentees gain confidence and insights for their
                journey.
              </p>
            </div>
            <div className="flex-1 px-4">
              <div className="flex justify-center">
                <Image
                  src="/mentorship/careerEnhan.png"
                  width={200}
                  height={200}
                  alt="Digital illustration of a girl in a wheel chair sitting at her desk working at the computer."
                />
              </div>
              <h3 className="text-[26px] font-bold mt-4">Guidance & Support</h3>
              <p className="text-[18px] mt-4 text-secondary-text">
                Receive and provide valuable guidance tailored to your unique
                needs and goals. From advice on course selection or sharing
                career insights, both mentors and mentees will find support and
                encouragement to navigate their university experience
                effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* What students say section */}
      <div className="h-fit px-36 bg-[url('/mentorship/bg.png')] flex flex-col py-10">
        <div className="relative">
          <h2 className="text-[30px] font-bold z-10 pt-10 pl-16 relative">
            What previous students <br /> have to say about the program
          </h2>
          <Image
            src="/mentorship/quotes.svg"
            className="z-0 absolute left-0 top-0"
            width={100}
            height={100}
            alt="Pink quotation marks"
          />
        </div>
        <div className="mx-auto mt-10">
          <div className="grid grid-cols-12 grid-rows-2 gap-4">
            <div className="p-6 bg-white rounded-2xl col-start-2 col-span-4 h-auto flex flex-col justify-center px-6">
              <p className="text-secondary-text text-[18px]">
                I was able to connect with a peer mentor who helped me select my
                classes and made my first year a lot less stressful.
              </p>
              <div className="pt-4">
                <h3 className="text-[24px] font-semibold">Jane Smith</h3>
                <p className="text-secondary-text text-[18px]">
                  1st Year Bio Comp Student
                </p>
              </div>
            </div>
            <div className="p-6 bg-white rounded-2xl col-span-6 h-auto ml-20 flex flex-col justify-center mt-10">
              <p className="text-secondary-text text-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
              <div className="pt-4">
                <h3 className="text-[24px] font-semibold">Jane Smith</h3>
                <p className="text-secondary-text text-[18px]">
                  1st Year Bio Comp Student
                </p>
              </div>
            </div>
            <div className="p-6 bg-white rounded-2xl col-start-4 col-span-6 h-auto flex flex-col justify-center mt-10">
              <p className="text-secondary-text text-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
              <div className="pt-4">
                <h3 className="text-[24px] font-semibold">Jane Smith</h3>
                <p className="text-secondary-text text-[18px]">
                  1st Year Bio Comp Student
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Join the program */}
      <div className="h-full px-36 flex flex-col justify-center py-28">
        <div>
          <h2 className="text-[30px] font-bold">Join the mentorship program</h2>
          <div className="flex justify-around items-center h-full mt-10 w-full gap-10">
            <div className="p-8 bg-white rounded-xl drop-shadow-[0_0px_10px_rgba(0,0,0,0.15)] w-2/5">
              <h3 className="text-[24px] font-bold mt-4">
                Apply to be a mentee
              </h3>
              <p className="text-secondary-text text-[18px] py-4">
                Gain valuable guidance and support from experienced peers.
                Connect with a mentor who can help you navigate your academic
                and personal journey.
              </p>
              <button className="bg-qwic-pink transition ease-in-out delay-100 hover:translate-x-1 hover:bg-light-purple rounded-full border border-black py-2 px-4 font-semibold">
                Become a Mentee
              </button>
            </div>
            <div className="p-8 bg-white rounded-xl drop-shadow-[0_0px_10px_rgba(0,0,0,0.15)] w-2/5">
              <h3 className="text-[24px] font-bold mt-4">
                Apply to be a mentor
              </h3>
              <p className="text-secondary-text text-[18px] py-4">
                Make a positive impact by supporting fellow students. Share your
                knowledge and experiences while developing your own leadership
                skills.
              </p>
              <button className="bg-qwic-pink transition ease-in-out delay-100 hover:translate-x-1 hover:bg-light-purple rounded-full border border-black py-2 px-4 font-semibold">
                Become a Mentor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
