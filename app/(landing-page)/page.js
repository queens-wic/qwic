import React from "react";
import {
  Hero,
  WhoAreWe,
  OurTeam,
  Hackathon,
  SupportUs,
  LandAck,
} from "../../components/landing-page";

export default function Home() {
  return (
    <div>
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
