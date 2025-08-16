import React from "react";
import CardImgBlue from "@/components/cards/card-img-blue";
import CardImgPink from "@/components/cards/card-img-pink";
import CardImgPurple from "@/components/cards/card-img-purple";
import EventBox from "./event-box";
import ButtonPink from "./button-pink";
import ButtonBlue from "./button-blue";
import ButtonPurple from "./button-purple";
import events from "./events-data";

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

const addOrdinalSuffix = (day) => {
  if (day > 3 && day < 21) return `${day}th`;
  switch (day % 10) {
    case 1: return `${day}st`;
    case 2: return `${day}nd`;
    case 3: return `${day}rd`;
    default: return `${day}th`;
  }
};

const renderEventGrid = (data) => (
  <div className="flex flex-col w-full flex-wrap justify-between lg:flex-row lg:gap-8 lg:mt-6 lg:mb-10 xl:grid xl:grid-cols-3 xl:gap-8">
    {data.map(event => {
      const startDate = parseLocalDate(event.date);
      const formattedDate = `${startDate.toLocaleDateString("en-US", {
        month: "long",
      })} ${addOrdinalSuffix(startDate.getDate())}, ${startDate.getFullYear()}`;
      
      const formattedEndDate = event.endDate 
        ? (() => {
            const endDate = parseLocalDate(event.endDate);
            return `${endDate.toLocaleDateString("en-US", {
              month: "long",
            })} ${addOrdinalSuffix(endDate.getDate())}, ${endDate.getFullYear()}`;
          })()
        : null;

      return (
        <EventBox
          key={event.id}
          card={renderCard(event.cardColor, event.img)}
          date={formattedDate}
          endDate={formattedEndDate}
          name={event.name}
          timeplace={event.timeplace}
          info={event.info}
        />
      );
    })}
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
