import React from "react";
import { BentoGrid, BentoGridItem } from "./BentoGrid";

export function BentoGridNews() {
  return (
    <BentoGrid className="w-full mx-auto md:auto-rows-[23rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          link={item.link}
          date={item.date}
        />
      ))}
    </BentoGrid>
  );
}
const Banner = ({ imgClass }: { imgClass: string }) => (
  <div
    className={`h-[500px] bg-black bg-center bg-no-repeat rounded-2xl ${imgClass} bg-cover `}
  ></div>
);

const items = [
  {
    title: "We care about our workforce!",
    description: "Perks and benefits of working at Critical Force.",
    header: <Banner imgClass="bg-image-1" />,
    className: "md:col-span-2",
    link: "https://criticalforce.fi/news/22/",
    date: "2023/07/04",
  },
  {
    title: "Thank you for making Critical Force what it is!",
    description: "Employee appreciation day.",
    header: <Banner imgClass="bg-image-2" />,
    className: "md:col-span-1",
    link: "https://criticalforce.fi/news/21/",
    date: "2023/03/03",
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Banner imgClass="bg-image-3" />,
    className: "md:col-span-1",
    link: "https://criticalforce.fi/news/20/",
    date: "2023/01/12",
  },
  {
    title: "Critical Force appoints Miikka Lehtonen as its new CEO",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Banner imgClass="bg-image-4" />,
    className: "md:col-span-1",
    link: "https://criticalforce.fi/news/19/",
    date: "2021/05/06",
  },
  {
    title: "Critical Force hires a new Prototyping Lead",
    description: "Critical Force hires a new Prototyping Lead.",
    header: <Banner imgClass="bg-image-5" />,
    className: "md:col-span-1",
    link: "https://criticalforce.fi/news/18/",
    date: "2021/02/12",
  },
];
