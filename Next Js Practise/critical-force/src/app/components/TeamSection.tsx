import { Carousel, Card } from "@/app/components/Carousel";
import Content from "./Content";

export default function TeamSection() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <Content className="py-3 px-3">
      <div className="w-full">
        <div className="mb-12 flex flex-col gap-3 text-light">
          <h2 className="text-4xl font-bold">Meet the team</h2>
          <p className="text-lg text-dark_label">
            Our essence, Great team == Exceptional games!
          </p>
        </div>
        <Carousel items={cards} />
      </div>
    </Content>
  );
}

const data = [
  {
    job_title: "CEO",
    name: "Miika Lehtonen",
    src: "https://criticalforce.fi/about-us/images/team/Miikka_Lehtonen.jpg",
  },
  {
    job_title: "Founder and Chairman of the Board",
    name: "Veli-Pekka Piirainen",
    src: "https://criticalforce.fi/about-us/images/team/VP_Piirainen.jpg",
  },
  {
    job_title: "CTO",
    name: "Petteri Wahlroos",
    src: "https://criticalforce.fi/about-us/images/team/Petteri_Wahlroos.jpg",
  },

  {
    job_title: "CAO",
    name: "Noora Lumpo",
    src: "https://criticalforce.fi/about-us/images/team/Noora_Lumpo.jpg",
  },
  {
    job_title: "CPO",
    name: "Oskari Aalto",
    src: "https://criticalforce.fi/about-us/images/team/Oskari_Aalto.jpg",
  },
];
