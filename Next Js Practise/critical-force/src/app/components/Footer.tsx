import Link from "next/link";
import Content from "./Content";
import Image from "next/image";
import {
  FaSquareXTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="py-20 bg-[#121212] border border-[#2d2d2d] text-white">
      <Content>
        <div className="border-b-[1px] border-[#1c1c1c] pb-6">
          <div className="flex justify-between">
            <div className="flex flex-col gap-10">
              <div>
                <Image
                  src={
                    "https://criticalforce.fi/images/critical_force_logotype_orange.svg"
                  }
                  alt="logo"
                  width={84}
                  height={54}
                  className="mb-10"
                />
                <div className="flex flex-col gap-5">
                  <p className="max-w-[450px]">
                    Founded in 2012 by Veli-Pekka Piirainen and comprising a
                    small team of game development students, Critical Force
                    started building the technology and proof of concept for an
                    online first-person shooter game for mobile devices.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 text-[#FB6504]">
                <Link
                  href="https://x.com/criticalforcelt"
                  className="hover:text-white transition-transform duration-200"
                >
                  <FaSquareXTwitter size={30} />
                </Link>
                <Link
                  href="https://www.instagram.com/criticalforceofficial/"
                  className="hover:text-white transition-transform duration-200"
                >
                  <FaInstagram size={30} />
                </Link>
                <Link
                  href="https://www.facebook.com/CriticalForceLtd/"
                  className="hover:text-white transition-transform duration-200"
                >
                  <FaFacebook size={30} />
                </Link>
                <Link
                  href="https://www.youtube.com/channel/UCNpHMVFR_rogCGt72n7YfDA"
                  className="hover:text-white transition-transform duration-200"
                >
                  <FaYoutube size={30} />
                </Link>
              </div>
            </div>
            <div className="flex justify-end items-center gap-24 w-1/2">
              <div className="flex flex-col gap-10">
                <h2 className="font-semibold text-[#FB652C] text-xl">
                  Quick Links
                </h2>
                <ul className="flex flex-col gap-3">
                  <li>
                    <Link href="https://criticalforce.teamtailor.com/">
                      Find a job
                    </Link>
                  </li>
                  <li>
                    <Link href="https://criticalforce.fi/news">News</Link>
                  </li>
                  <li>
                    <Link href="https://criticalforce.fi/contact">
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-10">
                <h2 className="font-semibold text-[#FB652C] text-xl">
                  Company
                </h2>
                <ul className="flex flex-col gap-3">
                  <li>
                    <Link href="https://criticalforce.fi/about-us">
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link href="https://criticalforce.fi/games">Games</Link>
                  </li>
                  <li>
                    <Link href="https://criticalforce.fi/contact">
                      Press kit
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-6 flex justify-between">
          <div className="flex gap-8 text-sm">
            <Link href="https://criticalopsgame.com/privacy/">
              Privacy policy
            </Link>
            <Link href="https://criticalopsgame.com/terms/">Terms of Use</Link>
          </div>
          <p className="text-xs text-gray-500 font-extralight">
            © 2024 Critical Force
          </p>
        </div>
      </Content>
    </footer>
  );
}
