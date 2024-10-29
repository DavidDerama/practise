"use client";

import Link from "next/link";
import Content from "./Content";
import { usePathname } from "next/navigation";
const Header = () => {
  const pathname = usePathname();

  const currentPageStyle = "font-bold text-black";
  return (
    <header>
      <Content className="justify-between items-center">
        <Link className="text-2xl font-extrabold" href="..">
          #VANLIFE
        </Link>
        <ul className="flex gap-5 text-base text-[#4D4D4D]">
          <li>
            <Link
              href="host"
              className={`${pathname === "/host" ? currentPageStyle : ""}`}
            >
              Host
            </Link>
          </li>
          <li>
            <Link
              href="vans"
              className={`${pathname === "/vans" ? currentPageStyle : ""}`}
            >
              Vans
            </Link>
          </li>
        </ul>
      </Content>
    </header>
  );
};

export default Header;
