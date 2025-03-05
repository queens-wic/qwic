import React from "react";
import CardImgBlue from "@/components/cards/card-img-blue";
import CardImgPink from "@/components/cards/card-img-pink";
import CardImgPurple from "@/components/cards/card-img-purple";
import EventBox from "./event-box";
import ButtonPink from "./button-pink";
import ButtonBlue from "./button-blue";
import ButtonPurple from "./button-purple";

const Page = () => {
  return (
    <div className="h-fit">
      <div className="pt-10 mx-4 sm:mx-8 md:mx-16 lg:mx-36">
        {/* Title, blobs and buttons to IG, no additional responsive fix necessary */}
        <div className="relative">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl mb-3 sm:mb-4 lg:mb-6 font-bold">
            Current Events
          </h2>
          <p className="text-secondary-text text-[18px] mt-4">
            Visit our LinkTree linked below to sign up for events!
          </p>
          <div className="z-10 absolute top-0 -left-10 w-44 h-44  bg-light-pink rounded-full mix-blend-multiply filter blur-2xl opacity-95 animate-blob"></div>
          <div className="z-10 absolute right-10 w-44 h-44  bg-light-purple rounded-full filter mix-blend-multiply blur-2xl opacity-95 animate-blob animation-delay-4000"></div>
        </div>
        <div>
          <div className="flex flex-col space-y-4 mt-6 md:flex-row md:space-y-0 md:space-x-4 justify-start">
            <ButtonPink
              username={"QWIC Linktree"}
              link={"https://linktr.ee/qwic"}
            />
            <ButtonBlue
              username={"@queenswic"}
              link={"https://www.instagram.com/queenswic/"}
            />
            <ButtonPurple
              username={"@qwic_community"}
              link={"https://www.instagram.com/qwic_community/"}
            />
          </div>

          {/* Current Events, adjust to flex-cols, with rows of 3 at xl breakpoint (row of 2 at lg breakpint???) */}

          <div
            className="flex flex-col w-full flex-wrap justify-between
          lg:flex-row lg:gap-8 lg:mt-2 lg:mb-10 
          xl:grid xl:grid-cols-3 xl:gap-8"
          >
            <EventBox
              card={<CardImgPink img="/events/hackher_event.png" />}
              date={"March 8th - March 9th, 2025"}
              name={"HackHer Hackathon"}
              timeplace={"Queen's University, hybrid"}
              info={
                "Hackher appiclations are open! Go to the Hackher page or our LinkTree to access the application form. Keep an eye out for pre-hackathon events!"
              }
            />
            <EventBox
              card={<CardImgBlue img="/events/hackher_prep.png" />}
              date={"March 1st, 2025"}
              name={"HackHer Prep Workshop"}
              timeplace={"Jeffrey Hall, Room 128"}
              info={
                "Want to brush up on your technical skills, learn some new techniques, or start right at the beginning with starting a project? Join us for the hackHer 2025 Prep Workshop!"
              }
            />
            <EventBox
              card={<CardImgPurple img="/events/hackher_cafe.png" />}
              date={"Feb 28th, 2025"}
              name={"HackHer Team Building Cafe"}
              timeplace={"CasLab, Goodwin Hall"}
              info={
                "Join us in the caslab for our cafe-themed pre-hackathon event! Find a team if you haven’t already, those who do have a team are also encouraged to come!"
              }
            />

            <EventBox
              card={<CardImgPink img="/events/karaoke.png" />}
              date={"February 4th, 2025"}
              name={"QWIC x COMPSA Karaoke"}
              timeplace={"The Mansion"}
              info={
                "Gather for a night out at The Mansion (19+ Venue). Perform to your hearts content or just hang out, all are welcome! RSVP on the form in our LinkTree, FREE ENTRY!"
              }
            />
            <EventBox
              card={<CardImgBlue img="/events/fireside_chat.png" />}
              date={"November 19th, 2024"}
              name={"Women at Microsoft Fireside Chat"}
              timeplace={"MacCorry D214, 12pm-1pm"}
              info={
                "Join us for a panel of female leaders at Microsoft, discussing career growth, resiliency, and empowerment!"
              }
            />
            <EventBox
              card={<CardImgPurple img="/events/spinco_2024.jpeg" />}
              date={"November 9th, 2024"}
              name={"QWIC x SpinCo"}
              timeplace={"SpinCo Kingston, 3pm"}
              info={
                "SpinCo is back! To secure your spot, sign up via our linktree and e-transfer to finance@qwic.org . We cant wait!"
              }
            />
            <EventBox
              card={<CardImgPink img="/events/meet_mentors.png" />}
              date={"September 23rd, 2024"}
              name={"Meet the Mentors Game Night"}
              timeplace={"CasLab, 6-7:30pm"}
              info={
                "Interested in becoming a mentee in our bits and bytes mentorship program? Join us for a night of games and meet the mentors!"
              }
            />
            <EventBox
              card={<CardImgBlue img="/events/bracelet_making_event.png" />}
              date={"September 15, 2024"}
              name={"Bracelet Making"}
              timeplace={"MacDonald Park, 12-2pm"}
              info={
                "Kick off the school year with bracelet making with QWIC! Join us in MacDonald Park near the tube sculpture."
              }
            />
          </div>
        </div>

        {/* Previous Events, adjust to flex-cols, with rows of 3 at xl breakpoint (row of 2 at lg breakpint???) */}
        <hr className="w-full border-t my-10 mx-0 border-black" />
        <h2 className="text-3xl sm:text-4xl lg:text-4xl mb-3 sm:mb-4 lg:mb-6 font-bold">
          Previous Events
        </h2>

        <div
          className="flex flex-col w-full flex-wrap justify-between
          lg:flex-row lg:gap-8 lg:mt-6 lg:mb-10 
          xl:grid xl:grid-cols-3 xl:gap-8"
        >
          <EventBox
            card={<CardImgPink img="/events/gitpub.jpg" />}
            date={"April 3rd, 2024"}
            name={"GitPub"}
            timeplace={"DAFT Brewing, 10pm-2am"}
            info={
              "Join us for a night out of dancing and singing at DAFT brewing! Tickets are $15 through the link in our Instagram bio."
            }
          />
          <EventBox
            card={<CardImgBlue img="/events/hackher.jpg" />}
            date={"March 9-10th, 2024"}
            name={"HackHer"}
            info={
              "QWIC's annual Hackathon is coming this March! Applications open Feb 2, 2024. Stay tuned for panels, sponsors and other details!"
            }
          />
          <EventBox
            card={<CardImgPurple img="/events/spinco_feb.jpg" />}
            date={"February 11th, 2024"}
            name={"QWIC x SpinCo"}
            timeplace={"SpinCo Kingston, 1:30pm"}
            info={
              "We had such a blast last semester at spinco that WE HAD to bring it back! Tickets are live in our Instagram bio, get them before they sell out!"
            }
          />

          <EventBox
            card={<CardImgPink img="/events/techpanel.jpg" />}
            date={"November 15th, 2023"}
            name={"Technical Internship Panel"}
            info={
              "Interested in learning what goes on during an internship? Meet panelists from companies such as Microsoft, Whitehorse Liquidity Partners, Bank of Canada, Toronto Blue Jays and more!"
            }
          />
          <EventBox
            card={<CardImgBlue img="/events/spinco_nov.jpg" />}
            date={"November 4th, 2023"}
            name={"QWIC x SpinCo"}
            timeplace={"SpinCo Kingston, 3pm"}
            info={
              "QWIC takes over SpinCo! Going to be super fun with great music and even better vibes. Tickets are $15 through the link in our Instagram bio, get them before they sell out!"
            }
          />
          <EventBox
            card={<CardImgPurple img="/events/braceletmaking.jpg" />}
            date={"September 16th, 2023"}
            name={"Bracelet Making"}
            timeplace={"MacDonald Park, 1-3pm"}
            info={
              "Kick the year off by joining us at MacDonald Park from 1-3pm for some bracelet making! All are welcome, come meet people or bring a friend!"
            }
          />
        </div>
      </div>

      <div className="h-40"></div>
    </div>
  );
};

export default Page;
