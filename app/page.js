import React from "react";

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
        <Hero />
        <WhoAreWe />
        <OurTeam />
        <Hackathon />
        <SupportUs />
        <LandAck />
      </main>
    </div>
  );
}
