import React from "react";
import CardImgBlue from "@/components/cards/card-img-blue";
import CardImgPink from "@/components/cards/card-img-pink";
import CardImgPurple from "@/components/cards/card-img-purple";
import EventBox from "./event-box";
import ButtonPink from "./button-pink";
import ButtonBlue from "./button-blue";

// old events
import gitpub from "@/public/events/gitpub.jpg";
import hackher from "@/public/events/hackher.jpg";
import spinco_feb from "@/public/events/spinco_feb.jpg";
import techpanel from "@/public/events/techpanel.jpg";
import spinco_nov from "@/public/events/spinco_nov.jpg";
import braceletmaking from "@/public/events/braceletmaking.jpg";
// new events
import braceletmaking2024 from "@/public/events/bracelet_making_event.png";
import meet_mentors from "@/public/events/meet_mentors.png";
import spinco2024 from "@/public/events/spinco_2024.jpeg";


const Page = () => {
  return (
    <div className="h-fit">
      <div className="mx-36 pt-10">

        {/* Title, blobs and buttons to IG, no additional responsive fix necessary */}
        <div className="relative">
          <h1 className="text-[36px] font-bold">Current Events</h1>
          <div className="z-10 absolute top-0 -left-10 w-44 h-44  bg-light-pink rounded-full mix-blend-multiply filter blur-2xl opacity-95 animate-blob"></div>
          <div className="z-10 absolute right-10 w-44 h-44  bg-light-purple rounded-full filter mix-blend-multiply blur-2xl opacity-95 animate-blob animation-delay-4000"></div>
        </div>
        <div>
          <div className="flex flex-row justify-start mt-6">
            <ButtonPink
              username={"@queenswic"}
              link={"https://www.instagram.com/queenswic/"}
            />
            <ButtonBlue
              username={"@qwic_community"}
              link={"https://www.instagram.com/qwic_community/"}
            />
          </div>

          {/* Current Events, adjust to flex-cols, with rows of 3 at xl breakpoint (row of 2 at lg breakpint???) */}
        
        <div className="flex flex-col w-full flex-wrap
          lg:flex-row lg:justify-between lg:gap-8 lg:mt-6 lg:mb-10 
          xl:grid xl:grid-cols-3 xl:gap-8"
        >
            <EventBox
              card={<CardImgPink img={spinco2024} />}
              date={"November 9th, 2024"}
              name={"QWIC x SpinCo"}
              info={
                "SpinCo is back! To secure your spot, sign up via our linktree and e-transfer to finance@qwic.org . We cant wait!"
              }
            />
            <EventBox
              card={<CardImgBlue img={meet_mentors} />}
              date={"September 23rd, 2024"}
              name={"Meet the Mentors Game Night"}
              info={
                "Interested in becoming a mentee in our bits and bytes mentorship program? Join us in CasLab from 6 - 7:30pm to meet the mentors!"
              }
            />
            <EventBox
              card={<CardImgPurple img={braceletmaking2024} />}
              date={"September 15, 2024"}
              name={"Bracelet Making"}
              info={
                "Kick off the school year with bracelet making with QWIC! Join us in MacDonald Park from 12 - 2pm near the tube sculpture"
              }
            />
          </div>
        </div>

        {/* Previous Events, adjust to flex-cols, with rows of 3 at xl breakpoint (row of 2 at lg breakpint???) */}
        <hr className="w-full border-t mt-10  border-black my-4" />
        <h1 className="text-[36px] font-bold mt-10 mb-4">Previous Events</h1>

        <div className="flex flex-col w-full flex-wrap
          lg:flex-row lg:justify-between lg:gap-8 lg:mt-6 lg:mb-10 
          xl:grid xl:grid-cols-3 xl:gap-8"
        >
          
          <EventBox
            card={<CardImgPink img={gitpub} />}
            date={"April 3rd, 2024"}
            name={"GitPub"}
            info={
              "Join us for a night out of dancing and singing at DAFT brewing! Tickets are $15 through the link in our Instagram bio."
            }
          />
          <EventBox
            card={<CardImgBlue img={hackher} />}
            date={"March 9-10th, 2024"}
            name={"HackHer"}
            info={
              "QWIC's annual Hackathon is coming this March! Applications open Feb 2, 2024. Stay tuned for panels, sponsors and other details!"
            }
          />
          <EventBox
            card={<CardImgPurple img={spinco_feb} />}
            date={"February 11th, 2024"}
            name={"QWIC x SpinCo"}
            info={
              "We had such a blast last semester at spinco that WE HAD to bring it back! Tickets are live in our Instagram bio, get them before they sell out!"
            }
          />

          <EventBox
            card={<CardImgPink img={techpanel} />}
            date={"November 15th, 2023"}
            name={"Technical Internship Panel"}
            info={
              "Interested in learning what goes on during an internship? Meet panelists from companies such as Microsoft, Whitehorse Liquidity Partners, Bank of Canada, Toronto Blue Jays and more!"
            }
          />
          <EventBox
            card={<CardImgBlue img={spinco_nov} />}
            date={"November 4th, 2023"}
            name={"QWIC x SpinCo"}
            info={
              "QWIC takes over SpinCo! Going to be super fun with great music and even better vibes. Tickets are $15 through the link in our Instagram bio, get them before they sell out!"
            }
          />
          <EventBox
            card={<CardImgPurple img={braceletmaking} />}
            date={"September 16th, 2023"}
            name={"Bracelet Making"}
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
