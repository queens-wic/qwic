import React from 'react';
import Header from "./HeaderFooter/components/Header";
import Hero from "@/components/landing-page/Hero"; // eventually I (kale) will add an index.js to clean up these imports
import WhoAreWe from "@/components/landing-page/WhoAreWe";
import OurTeam from "@/components/landing-page/OurTeam";
import Hackathon from "@/components/landing-page/Hackathon";
import SupportUs from "@/components/landing-page/SupportUs";import CardImg from "./HeaderFooter/components/card-img";
import CardText from "./HeaderFooter/components/card-text";
import Icon from '/Users/kavitathomas/Documents/qwic_dev/qwic/app/HeaderFooter/assets/Vector.png'; //replace this, works for testing purposes
import pic from '/Users/kavitathomas/Documents/qwic_dev/qwic/app/HeaderFooter/assets/img_7.png';

export default function Home() {
  return (
    <div className="bg-[#F5F5F5]">
      <main>
        <Hero />
        <WhoAreWe />
        <OurTeam />
        <Hackathon />
        <SupportUs />
      </main>
    </div>
  );
}
