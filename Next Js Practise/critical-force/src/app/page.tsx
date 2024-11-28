import Content from "./components/Content";
import TeamSection from "./components/TeamSection";
import LandingHero from "./components/LandingHero";

export default function Home() {
  return (
    <>
      <LandingHero />
      <main className="grow">
        <Content className="py-20 px-3">
          <TeamSection />
        </Content>
      </main>
    </>
  );
}
