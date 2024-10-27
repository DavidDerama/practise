import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import trophyImg from "../assets/trophy.png";

const About = () => {
  return (
    <div>
      <div className="flex gap-7">
        <div className="h-96 -border-2">
          <img
            src={trophyImg}
            alt=""
            className="object-cover w-full h-full bg-[#FCD53F] border-4 border-dark_input_border rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10"
          />
        </div>
        <div className="grow">
          <h2 className="mb-16 text-3xl font-semibold">About us</h2>
          <div className="flex flex-col overflow-hidden text-3xl border-2 grow rounded-xl border-dark_input_border">
            <Accordion
              type="single"
              collapsible
              className="w-full px-2 border-b-2 border-dark_input_border"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="pl-2">
                  Taste the Best!
                </AccordionTrigger>
                <AccordionContent className="pl-2 text-lg">
                  Our pizza and burgers have won multiple awards for outstanding
                  flavor.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion
              type="single"
              collapsible
              className="w-full px-2 border-b-2 border-dark_input_border"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="pl-2">
                  Crave the Best!
                </AccordionTrigger>
                <AccordionContent className="pl-2 text-lg">
                  We are a top-selling restaurant, renowned nationwide.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion
              type="single"
              collapsible
              className="w-full px-2 border-b-2 border-dark_input_border"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="pl-2">
                  Award-Winning Flavor!
                </AccordionTrigger>
                <AccordionContent className="pl-2 text-lg">
                  Try our famous pizza and burgers! flavor.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion
              type="single"
              collapsible
              className="w-full px-2 border-dark_input_border"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="pl-2">
                  Opening times!
                </AccordionTrigger>
                <AccordionContent className="pl-2 text-lg">
                  We are open from 9:00-18:00
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
