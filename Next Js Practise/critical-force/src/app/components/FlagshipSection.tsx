import { ContainerScroll } from "./ContainerScroll";
import Image from "next/image";
import Link from "next/link";
import TextTicker from "./TextTicker";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function FlagshipSection() {
  return (
    <ContainerScroll
      titleComponent={
        <div className={inter.className}>
          <h1 className="text-5xl font-bold text-light mb-5">Crticial Ops</h1>
          <p className="text-6xl text-special mb-12">
            Over <TextTicker value={100} /> million downloads worldwide.
          </p>
        </div>
      }
    >
      <Link href="https://criticalopsgame.com/">
        <Image
          src="https://criticalforce.fi/images/cops_834.jpg"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full"
          draggable={false}
        />
      </Link>
    </ContainerScroll>
  );
}
