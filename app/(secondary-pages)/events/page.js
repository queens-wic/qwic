import React from "react";
import CardImgBlue from "@/components/cards/card-img-blue";
import CardImgPink from "@/components/cards/card-img-pink";
import CardImgPurple from "@/components/cards/card-img-purple";
import EventBox from "./event-box";
import ButtonPink from "./button-pink";
import ButtonBlue from "./button-blue";
import ButtonPurple from "./button-purple";

const events = [
{
id: 1,
date: "2025-03-08",
endDate: "2025-03-09",
name: "HackHer Hackathon",
timeplace: "Queen's University, hybrid",
info: "Hackher applications are open! Go to the Hackher page or our LinkTree to access the application form. Keep an eye out for pre-hackathon events!",
img: "/events/hackher_event.png",
cardColor: "pink",
},
{
id: 2,
date: "2025-03-01",
name: "HackHer Prep Workshop",
timeplace: "Jeffrey Hall, Room 128",
info: "Want to brush up on your technical skills, learn some new techniques, or start right at the beginning with starting a project? Join us for the hackHer 2025 Prep Workshop!",
img: "/events/hackher_prep.png",
cardColor: "blue",
},
{
id: 3,
date: "2025-02-28",
name: "HackHer Team Building Cafe",
timeplace: "CasLab, Goodwin Hall",
info: "Join us in the caslab for our cafe-themed pre-hackathon event! Find a team if you haven’t already, those who do have a team are also encouraged to come!",
img: "/events/hackher_cafe.png",
cardColor: "purple",
},
{
id: 4,
date: "2025-02-04",
name: "QWIC x COMPSA Karaoke",
timeplace: "The Mansion",
info: "Gather for a night out at The Mansion (19+ Venue). Perform to your hearts content or just hang out, all are welcome! RSVP on the form in our LinkTree, FREE ENTRY!",
img: "/events/karaoke.png",
cardColor: "pink",
},
{
id: 5,
date: "2024-11-19",
name: "Women at Microsoft Fireside Chat",
timeplace: "MacCorry D214, 12pm-1pm",
info: "Join us for a panel of female leaders at Microsoft, discussing career growth, resiliency, and empowerment!",
img: "/events/fireside_chat.png",
cardColor: "blue",
},
{
id: 6,
date: "2024-11-09",
name: "QWIC x SpinCo",
timeplace: "SpinCo Kingston, 3pm",
info: "SpinCo is back! To secure your spot, sign up via our linktree and e-transfer to finance@qwic.org . We cant wait!",
img: "/events/spinco_2024.jpeg",
cardColor: "purple",
},
{
id: 7,
date: "2024-09-23",
name: "Meet the Mentors Game Night",
timeplace: "CasLab, 6-7:30pm",
info: "Interested in becoming a mentee in our bits and bytes mentorship program? Join us for a night of games and meet the mentors!",
img: "/events/meet_mentors.png",
cardColor: "pink",
},
{
id: 8,
date: "2024-09-15",
name: "Bracelet Making",
timeplace: "MacDonald Park, 12-2pm",
info: "Kick off the school year with bracelet making with QWIC! Join us in MacDonald Park near the tube sculpture.",
img: "/events/bracelet_making_event.png",
cardColor: "blue",
},
{
id: 9,
date: "2024-04-03",
name: "GitPub",
timeplace: "DAFT Brewing, 10pm-2am",
info: "Join us for a night out of dancing and singing at DAFT brewing! Tickets are $15 through the link in our Instagram bio.",
img: "/events/gitpub.jpg",
cardColor: "pink",
},
{
id: 10,
date: "2024-03-09",
endDate: "2024-03-10",
name: "HackHer",
info: "QWIC's annual Hackathon is coming this March! Applications open Feb 2, 2024. Stay tuned for panels, sponsors and other details!",
img: "/events/hackher.jpg",
cardColor: "blue",
},
{
id: 11,
date: "2024-02-11",
name: "QWIC x SpinCo",
timeplace: "SpinCo Kingston, 1:30pm",
info: "We had such a blast last semester at spinco that WE HAD to bring it back! Tickets are live in our Instagram bio, get them before they sell out!",
img: "/events/spinco_feb.jpg",
cardColor: "purple",
},
{
id: 12,
date: "2023-11-15",
name: "Technical Internship Panel",
info: "Interested in learning what goes on during an internship? Meet panelists from companies such as Microsoft, Whitehorse Liquidity Partners, Bank of Canada, Toronto Blue Jays and more!",
img: "/events/techpanel.jpg",
cardColor: "pink",
},
{
id: 13,
date: "2023-11-04",
name: "QWIC x SpinCo",
timeplace: "SpinCo Kingston, 3pm",
info: "QWIC takes over SpinCo! Going to be super fun with great music and even better vibes. Tickets are $15 through the link in our Instagram bio, get them before they sell out!",
img: "/events/spinco_nov.jpg",
cardColor: "blue",
},
{
id: 14,
date: "2023-09-16",
name: "Bracelet Making",
timeplace: "MacDonald Park, 1-3pm",
info: "Kick the year off by joining us at MacDonald Park from 1-3pm for some bracelet making! All are welcome, come meet people or bring a friend!",
img: "/events/braceletmaking.jpg",
cardColor: "purple",
},
];


const Page = () => {
const now = new Date();
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());


const parseLocalDate = (dateStr) => {
  const [y, m, d] = dateStr.split("-");
  return new Date(y, m - 1, d);
};

const upcomingEvents = events
  .filter(event => parseLocalDate(event.endDate || event.date) >= today)
  .sort((a, b) => parseLocalDate(a.date) - parseLocalDate(b.date));

const pastEvents = events
  .filter(event => parseLocalDate(event.endDate || event.date) < today)
  .sort((a, b) => parseLocalDate(b.date) - parseLocalDate(a.date));

const renderCard = (color, img) => {
  switch (color) {
    case "pink":
      return <CardImgPink img={img} />;
    case "blue":
      return <CardImgBlue img={img} />;
    case "purple":
      return <CardImgPurple img={img} />;
    default:
      return <CardImgPink img={img} />;
  }
};

const renderEventGrid = (data) => (
  <div className="flex flex-col w-full flex-wrap justify-between lg:flex-row lg:gap-8 lg:mt-6 lg:mb-10 xl:grid xl:grid-cols-3 xl:gap-8">
    {data.map(event => (
      <EventBox
        key={event.id}
        card={renderCard(event.cardColor, event.img)}
        date={parseLocalDate(event.date).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
        name={event.name}
        timeplace={event.timeplace}
        info={event.info}
      />
    ))}
  </div>
);

return (
  <div className="h-fit">
    <div className="pt-10 mx-4 sm:mx-8 md:mx-16 lg:mx-36">
      <div className="relative">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl mb-3 sm:mb-4 lg:mb-6 font-bold">
          Current Events
        </h2>
        <p className="text-secondary-text text-[18px] mt-4">
          Visit our LinkTree linked below to sign up for events!
        </p>
        <div className="z-10 absolute top-0 -left-10 w-44 h-44 bg-light-pink rounded-full mix-blend-multiply filter blur-2xl opacity-95 animate-blob"></div>
        <div className="z-10 absolute right-10 w-44 h-44 bg-light-purple rounded-full filter mix-blend-multiply blur-2xl opacity-95 animate-blob animation-delay-4000"></div>
      </div>

      <div className="flex flex-col space-y-4 mt-6 md:flex-row md:space-y-0 md:space-x-4 justify-start">
        <ButtonPink username={"QWIC Linktree"} link={"https://linktr.ee/qwic"} />
        <ButtonBlue username={"@queenswic"} link={"https://www.instagram.com/queenswic/"} />
        <ButtonPurple username={"@qwic_community"} link={"https://www.instagram.com/qwic_community/"} />
      </div>

      {/* Upcoming Events */}
      {renderEventGrid(upcomingEvents)}

      <hr className="w-full border-t my-10 mx-0 border-black" />
      <h2 className="text-3xl sm:text-4xl lg:text-4xl mb-3 sm:mb-4 lg:mb-6 font-bold">
        Previous Events
      </h2>

      {/* Past Events */}
      {renderEventGrid(pastEvents)}
    </div>

    <div className="h-40"></div>
  </div>
);
};

export default Page;
