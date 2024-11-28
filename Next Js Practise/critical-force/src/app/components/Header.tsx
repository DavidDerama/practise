import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-5 fixed flex items-center bg-[#0E2E3B] w-screen">
      <Link href={".."} className="ml-12 self-center">
        <Image
          src={
            "https://criticalforce.fi/images/critical_force_logotype_orange.svg"
          }
          alt="logo"
          width={84}
          height={54}
        ></Image>
      </Link>
      <nav className="absolute left-1/2 translate-x-[-50%] self-center">
        <ul className="flex gap-10 uppercase font-bold text-white text-lg">
          <li>
            <Link href="https://www.youtube.com/">Games</Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/">About Us</Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/">Careers</Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/">News</Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
