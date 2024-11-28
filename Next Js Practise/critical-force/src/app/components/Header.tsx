"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="py-5 fixed flex items-center w-screen bg-[#121212] backdrop-blur-md z-50 shadow-lg">
      <Link href={".."} className="ml-6 sm:ml-12 self-center">
        <Image
          src={
            "https://criticalforce.fi/images/critical_force_logotype_orange.svg"
          }
          alt="logo"
          width={84}
          height={54}
        ></Image>
      </Link>
      <nav className="absolute left-1/2 translate-x-[-50%] self-center hidden lg:block">
        <ul className="flex gap-6 uppercase font-bold text-light text-lg">
          <li>
            <Link
              className={`border border-transparent rounded-lg py-2 px-5 hover:bg-gray-400 hover:backdrop-blur-md hover:bg-opacity-50 ${
                pathname == "/games" ? "text-special" : ""
              }`}
              href="games"
            >
              Games
            </Link>
          </li>
          <li>
            <Link
              className="border border-transparent rounded-lg py-2 px-5 hover:bg-gray-400 hover:backdrop-blur-md hover:bg-opacity-50"
              href="https://www.youtube.com/"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="border border-transparent rounded-lg py-2 px-5 hover:bg-gray-400 hover:backdrop-blur-md hover:bg-opacity-50"
              href="https://criticalforce.teamtailor.com/"
            >
              Careers
            </Link>
          </li>
          <li>
            <Link
              className="border border-transparent rounded-lg py-2 px-5 hover:bg-gray-400 hover:backdrop-blur-md hover:bg-opacity-50"
              href="https://criticalforce.fi/news/"
            >
              News
            </Link>
          </li>
          <li>
            <Link
              className="border border-transparent rounded-lg py-2 px-5 hover:bg-gray-400 hover:backdrop-blur-md hover:bg-opacity-50"
              href="https://criticalforce.fi/contact/"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
