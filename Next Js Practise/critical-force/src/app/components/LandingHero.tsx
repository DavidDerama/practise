import Content from "./Content";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function LandingHero() {
  return (
    <div className="bg-[url('https://criticalforce.fi/images/topBanner_1920.jpg')] bg-cover bg-center sm:bg-top  bg-no-repeat flex items-end h-[70vh] shadow-lg">
      <Content className="pb-20  w-full">
        <div className="text-light flex flex-col gap-5 items-start">
          <h1
            className={`text-6xl tracking-[-0.4px] font-bold ${inter.className}`}
          >
            Welcome to Critical Force,
          </h1>
          <p className="max-w-[600px] text-2xl">
            We're a mobile company that develops and operates meaningful{" "}
            <span className="font-bold text-special">
              multiplayer games enjoyed by millions of players.
            </span>{" "}
            We're proud of our vibrant, team player environment.
          </p>
        </div>
      </Content>
    </div>
  );
}
