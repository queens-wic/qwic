import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="">
      {/* Heading */}
      <div className="bg-[url('/mentorship/blobs.png')] bg-cover bg-center h-[300px] flex justify-center items-center">
        <div className="mx-36">
          <h1 className="text-[36px] font-bold">
            Bits and Bytes Mentorship Program
          </h1>
          <p className="text-secondary-text text-[18px] mt-4">
            QWIC's annual summer mentorship program is a chance for you to be
            paired with a professional and engage in one on one conversations
            about their experiences, professional development, job hunting, and
            so much more.
          </p>
        </div>
      </div>
      {/* What's in it for you? */}
      <div className="h-screen mx-36 flex justify-center items-center">
        <div>
          <h2 className="text-[30px] font-bold">What's in it for you?</h2>
          <div className="flex flex-row justify-between mt-8 ">
            <div>
              <Image
                src="/mentorship/personalGrowth.png"
                width={200}
                height={200}
                alt="Digital illustration of a girl smiling and making an OK symbol with her left hand."
              />
              <h3 className="text-[26px] font-bold mt-4">Personal Growth</h3>
              <p className="text-[18px] mt-4 text-secondary-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
            </div>
            <div>
              <Image
                src="/mentorship/networking.png"
                width={200}
                height={200}
                alt="Digital illustration of a two people smiling at eachother and giving thumbs up."
              />
              <h3 className="text-[26px] font-bold mt-4">Networking</h3>
              <p className="text-[18px] mt-4 text-secondary-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
            </div>
            <div>
              <Image
                src="/mentorship/careerEnhan.png"
                width={200}
                height={200}
                alt="Digital illustration of a girl in a wheel chair sitting at her desk working at the computer."
              />
              <h3 className="text-[26px] font-bold mt-4">Career Enhancement</h3>
              <p className="text-[18px] mt-4 text-secondary-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* What students say section */}
      <div className="h-screen px-36 bg-[url('/mentorship/bg.png')] ">
        <h2 className="text-[30px] font-bold">
          What previous students <br /> have to say about the program
        </h2>
      </div>
      {/* Join the program */}
      <div className="h-screen px-36 flex justify-center items-center">
        <div className="p-4 bg-white rounded-xl">
          <h3 className="text-[26px] font-bold mt-4">Apply to be a mentee</h3>
        </div>
        <div className="p-4 bg-white rounded-xl">
          <h3 className="text-[26px] font-bold mt-4">Apply to be a mentor</h3>
        </div>
      </div>
    </div>
  );
};

export default page;
