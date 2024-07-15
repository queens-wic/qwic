import Header from "./HeaderFooter/components/Header";
import Hero from "@/components/landing-page/Hero"; // eventually I (kale) will add an index.js to clean up these imports
import WhoAreWe from "@/components/landing-page/WhoAreWe";
import OurTeam from "@/components/landing-page/OurTeam";
import Hackathon from "@/components/landing-page/Hackathon";
import SupportUs from "@/components/landing-page/SupportUs";

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
