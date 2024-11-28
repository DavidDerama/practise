import Content from "./Content";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function GamesHero() {
  return (
    <div className="bg-[url('https://criticalforce.fi/images/cops_834.jpg')] bg-cover bg-center sm:bg-top  bg-no-repeat flex items-end h-[80vh] shadow-lg backdrop-blur-sm">
      <div className="absolute inset-0 bg-dark bg-opacity-40 backdrop-blur-sm"></div>
      <div className="relative z-10 flex items-end h-full w-full">
        <Content className="pb-16 pt-10 sm:pt-0 w-full">
          <div className="text-light flex flex-col gap-5">
            <h1
              className={`text-4xl tracking-[-0.4px] font-bold ${inter.className}`}
            >
              Critical Ops
            </h1>
            <p className="text-xl max-w-[600px]">
              Critical Ops is a first-person shooter that features competitive
              combat through beautifully crafted maps and challenging game
              modes. Battle it out alongside your band of brothers or lead an
              individual scoreboard. Will you fight as a member of Coalition or
              The Breach?
            </p>
            <div className="flex flex-wrap gap-3 max-w-[500px] mt-3">
              <Link
                href="https://criticalopsgame.com/"
                className="border py-2 px-4 rounded flex items-center justify-center"
              >
                <Image
                  src="https://criticalforce.fi/games/images/critical_ops_logo.png"
                  width={135}
                  height={40}
                  alt="Critical Ops Featured On"
                ></Image>
              </Link>
              <Link href="https://play.google.com/store/apps/dev?id=7063461788114274538">
                <Image
                  src="https://criticalforce.fi/images/get_it_on_google_play.svg"
                  width={135}
                  height={40}
                  alt="Critical Ops Featured On"
                ></Image>
              </Link>
              <Link href="https://apps.apple.com/us/developer/critical-force-oy/id497663725">
                <Image
                  src="https://criticalforce.fi/images/download_on_the_app_store.svg"
                  width={135}
                  height={40}
                  alt="Critical Ops Featured On"
                ></Image>
              </Link>
              <Link href="https://www.amazon.com/Critical-Force-Oy-Ops/dp/B072XRYQL1">
                <Image
                  src="https://criticalforce.fi/images/available_at_amazon_appstore.svg"
                  width={135}
                  height={40}
                  alt="Critical Ops Featured On"
                ></Image>
              </Link>
            </div>
          </div>
        </Content>
      </div>
    </div>
  );
}
