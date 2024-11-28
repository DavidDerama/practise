import TeamSection from "./components/TeamSection";
import NewsSection from "./components/NewsSection";
import LandingHero from "./components/LandingHero";
import FlagshipSection from "./components/FlagshipSection";

export default function Home() {
  return (
    <>
      <LandingHero />
      <main className="grow py-14">
        <NewsSection />
        <FlagshipSection />
        <TeamSection />
      </main>
    </>
  );
}
