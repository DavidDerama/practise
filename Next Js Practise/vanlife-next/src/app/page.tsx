import Content from "@/components/Content";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <Content className="flex-col gap-10 pb-20">
      <div className="bg-black h-fit pt-20 pb-8 px-10 rounded-xl flex flex-col justify-end bg-cover bg-hero bg-center bg-no-repeat">
        <div className="text-white flex flex-col gap-2 items-start">
          <h2 className="text-5xl font-bold  [text-shadow:_0_2px_0_black] mb-2">
            You got the travel plans, we got the travel vans.
          </h2>
          <p className="text-2xl font-medium [text-shadow:_0_2px_0_black]">
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
          <Link
            href="vans"
            className="py-2 px-6 bg-orange-500 rounded font-bold mt-3 hover:opacity-80"
          >
            Find your van
          </Link>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-4">FAQ</h2>

        <div className="flex flex-col">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-bold text-xl">
                Our mission
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Our mission is to enliven your road trip with the perfect travel
                van rental.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-bold text-xl">
                Our vans
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Our vans are recertified before each trip to ensure your travel
                plans can go off without a hitch.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-bold text-xl">
                Our team
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Our team is full of vanlife enthusiasts who know firsthand the
                magic of touring the world on 4 wheels.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="bg-orange-400 p-6 flex flex-col justify-end items-start gap-3 rounded-sm text-white shadow-lg">
        <h2 className="text-3xl font-bold">Your destination is waiting.</h2>
        <ul className="mt-3 flex flex-col gap-4">
          <li className="flex flex-col gap-2">
            <span className="font-bold text-black">
              Change the Way You Travel:
            </span>
            Discover the freedom of vanlife and turn every road into a new
            adventure.
          </li>
          <li className="flex flex-col gap">
            <span className="font-bold text-black">
              {" "}
              Seamless and Stress-Free:{" "}
            </span>
            Our recertified vans ensure your trip goes off without a hitch
            (unless you want one 😉).
          </li>
          <li className="flex flex-col gap">
            <span className="font-bold text-black">
              {" "}
              Experience the Vanlife Magic:
            </span>
            Join a community of explorers who know the thrill of waking up
            wherever you choose.
          </li>
        </ul>
        <Link href="vans" className="bg-black py-2 px-3 rounded-lg text-white">
          Explore our vans
        </Link>
      </div>
    </Content>
  );
}
