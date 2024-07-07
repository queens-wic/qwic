import Header from "./HeaderFooter/components/Header";
import Hero from "@/components/landing-page/Hero";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Hero />
      </main>
    </div>
  );
}
