import React from "react";
import {
  Hero,
  WhatWeDo,
  OurTeam,
  Hackathon,
  SupportUs,
  LandAck,
  WhoAreWe,
} from "../../components/landing-page";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <WhoAreWe />
        <WhatWeDo />
        <OurTeam />
        <Hackathon />
        <SupportUs />
        <LandAck />
      </main>
    </div>
  );
}
