import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      {/* Heading */}
      <div className="flex justify-center items-center pt-10 mx-4 sm:mx-8 md:mx-16 lg:mx-36">
        <div className="relative">
          <h1 className="text-[36px] font-bold">
            Bits and Bytes Mentorship Program
          </h1>
          <div className="z-10 absolute top-0 -left-10 w-44 h-44  bg-light-pink rounded-full mix-blend-multiply filter blur-2xl opacity-95 animate-blob"></div>
          <div className="z-10 absolute right-10 w-44 h-44  bg-light-purple rounded-full filter mix-blend-multiply blur-2xl opacity-95 animate-blob animation-delay-4000"></div>
          <p className="text-secondary-text text-[18px] mt-4">
            QWIC's Bits and Bytes peer mentorship program is a chance for you to
            be paired with an upper year student in Computing. Whether you need
            help selecting your classes, want to engage in coffee chats about
            their experiences and managing course loads, study dates, and more.
          </p>
        </div>
      </div>
      {/* What's in it for you? */}
      <div className="h-full flex justify-center items-center mx-4 sm:mx-8 md:mx-16 lg:mx-36 py-36 md:py-44 sm:py-41">
        <div>
          <h2 className="text-[30px] font-bold">What's in it for you?</h2>
          <div className="flex lg:flex-row flex-col gap-12 lg:gap-0 justify-between mt-8 ">
            <div className="flex-1 px-4">
              <div className="flex justify-center">
                <Image
                  src="/mentorship/personalGrowth.png"
                  width={200}
                  height={200}
                  alt="Digital illustration of a two people smiling at eachother and giving thumbs up."
                />
              </div>
              <h3 className="text-[26px] font-bold mt-4">Personal Growth</h3>
              <div>
                <p className="text-[18px] mt-4 text-secondary-text">
                  This program fosters personal growth for both mentors and
                  mentees. Mentors enhance leadership skills, while mentees gain
                  confidence and resilience with upper-year guidance.
                </p>
              </div>
            </div>
            <div className="flex-1 px-4">
              <div className="flex justify-center">
                <Image
                  src="/mentorship/networking.png"
                  className="align-center"
                  width={220}
                  height={220}
                  alt="Digital illustration of a girl smiling and making an OK symbol with her left hand."
                />
              </div>
              <h3 className="text-[26px] font-bold mt-4">Networking</h3>
              <p className="text-[18px] mt-4 text-secondary-text">
                Network within Queen's Women in Computing community. Both
                mentors and mentees build lasting connections, opening doors to
                future collaborations, friendships, and career opportunities.
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
              <h3 className="text-[26px] font-bold mt-4">
                Career Enhancements
              </h3>
              <p className="text-[18px] mt-4 text-secondary-text">
                Boost career prospects for both mentors and mentees. Mentors
                gain leadership experience, while mentees receive personalized
                advice on courses, internships, and career paths, enhancing
                their resumes and personal development.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* What students say section */}
      <div className="h-fit bg-gradient-to-b from-[#DDDBF5]/30 to-[#E0A4D7]/30 z-0 flex flex-col px-4 sm:px-8 md:px-16 lg:x-36 py-36 md:py-44 sm:py-41">
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
          <div className="grid grid-cols-12 md:grid-rows-2 grid-rows-3 gap-4">
            <div className="p-6 bg-white rounded-2xl md:col-start-2 col-span-12 md:col-span-4 h-auto flex flex-col justify-center px-6">
              <p className="text-secondary-text text-[18px]">
                Mentoring was an opportunity for me to give back to the
                community that helped me so much during my own first year. The
                bond I formed with my mentee was incredible, and knowing I could
                make a positive impact on someone’s university experience was
                deeply fulfilling.
              </p>
              <div className="pt-4">
                <h3 className="text-[24px] font-semibold">
                  Upper Year Computing Student
                </h3>
                {/* <p className="text-secondary-text text-[18px]">
                  1st Year Bio Comp Student
                </p> */}
              </div>
            </div>
            <div className="p-6 bg-white rounded-2xl col-span-12 md:col-span-6 h-auto md:ml-20 flex flex-col justify-center mt-10 row-start-2 md:row-auto">
              <p className="text-secondary-text text-[18px]">
                I was so nervous starting university, but having a mentor made
                all the difference. My mentor was always there to answer my
                questions and give me advice, whether it was about academics,
                social life, or career plans. I felt supported every step of the
                way, and I’m so grateful for the guidance I received.
              </p>
              <div className="pt-4">
                <h3 className="text-[24px] font-semibold">
                  First Year Computing Student
                </h3>
                {/* <p className="text-secondary-text text-[18px]">
                  First Year Computing Student
                </p> */}
              </div>
            </div>
            <div className="p-6 bg-white rounded-2xl col-span-12 md:col-span-6 md:col-start-4 h-auto flex flex-col justify-center mt-10">
              <p className="text-secondary-text text-[18px]">
                Being a mentor in the Bit-Byte program was one of the most
                rewarding experiences of my time at Queen's. I loved being able
                to share my knowledge and help my mentee navigate the
                complexities of university life. It’s amazing to see how much my
                mentee has grown, and I’ve learned so much from the experience
                too.
              </p>
              <div className="pt-4">
                <h3 className="text-[24px] font-semibold">
                  Upper Year Computing Student
                </h3>
                {/* <p className="text-secondary-text text-[18px]">
                  1st Year Bio Comp Student
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Join the program */}
      <div className="h-full flex flex-col justify-center mx-4 sm:mx-8 md:mx-16 lg:mx-36 py-36 md:py-44 sm:py-41">
        <h2 className="text-[30px] font-bold">Join the mentorship program</h2>
        <div>
          <div className="flex flex-col md:flex-row justify-around items-stretch mt-10 w-full gap-10">
            <div className="relative md:w-1/2  ml-5">
              {/* Background Box */}
              <div className="absolute inset-0 z-0 bg-dark-blue rounded-2xl transform -translate-x-5 translate-y-5"></div>
              {/* Main Content Box */}
              <div className="relative flex flex-row items-center border flex-1 h-full border-black bg-light-blue justify-between rounded-2xl py-6 px-12 z-10">
                <div className="flex flex-col justify-center">
                  <h2 className="text-[24px] font-bold">
                    Apply to be a mentor
                  </h2>
                  <p className="text-[18px] mt-4 text-secondary-text">
                    As a mentor in the Bit-Byte Mentorship Program, you'll have
                    the chance to make a meaningful impact on a student’s
                    university experience. This role will help you develop
                    leadership and communication skills while giving back to the
                    QWIC community. Your guidance can shape someone’s academic
                    and social life, making their transition into university
                    smoother and more enjoyable.
                  </p>
                  <a
                    href="https://forms.gle/4Ap8mz8EvPBdxQhA9"
                    className="flex flex-row pt-6 transition ease-in-out delay-100 hover:translate-x-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-[20px] font-semi-bold pr-6">
                      Become a mentor
                    </span>
                    <Image
                      src={`/assets/arrow.svg`}
                      alt="Learn More"
                      width={25}
                      height={25}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="relative md:w-1/2  ml-5">
              {/* Background Box */}
              <div className="absolute inset-0 z-0 flex-1 h-full bg-dark-blue rounded-2xl transform -translate-x-5 translate-y-5"></div>
              {/* Main Content Box */}
              <div className="relative flex flex-row items-center border border-black bg-light-blue justify-between rounded-2xl py-6 px-12 z-10">
                <div className="flex flex-col justify-center">
                  <h2 className="text-[24px] font-bold">
                    Apply to be a mentee
                  </h2>
                  <p className="text-[18px] mt-4 text-secondary-text">
                    Being a mentee in the Bit-Byte Mentorship Program is your
                    chance to gain a friend and guide in an upper-year student
                    who has been through what you’re about to experience. This
                    is an opportunity to ask all your questions, gain
                    confidence, and feel supported during your transition into
                    university. You’ll be part of a close-knit community that’s
                    here to help you succeed.
                  </p>
                  <a
                    href="https://forms.gle/4mkQc1QQYyazdFsW7"
                    className="flex flex-row pt-6 transition ease-in-out delay-100 hover:translate-x-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-[20px] font-semi-bold pr-6">
                      Become a mentee
                    </span>
                    <Image
                      src={`/assets/arrow.svg`}
                      alt="Learn More"
                      width={25}
                      height={25}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
