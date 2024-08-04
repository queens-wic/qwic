import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Hero,
  WhoAreWe,
  OurTeam,
  Hackathon,
  SupportUs,
  LandAck,
} from "..//components/landing-page/";

export default function Home() {
  return (
    <div className="bg-[#F5F5F5]">
      <main>
        {/* <Header /> */}
        <Hero />
        <WhoAreWe />
        <OurTeam />
        <Hackathon />
        <SupportUs />
        <LandAck />
      </main>
      <Footer />
    </div>
  );
}
