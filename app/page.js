import React from 'react';
import Header from "./HeaderFooter/components/Header";

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
