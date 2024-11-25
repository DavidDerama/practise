"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
const Nav = () => {
  const pathname = usePathname();

  const currentStyle = "font-bold";

  console.log(pathname);

  return (
    <nav className="bg-[#FFD18C] flex justify-center">
      <ul className="flex gap-5 py-3">
        <li>
          <Link href="." className={pathname == "/" ? currentStyle : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/stocks"
            className={pathname == "/stocks" ? currentStyle : ""}
          >
            Stocks
          </Link>
        </li>
        <li>
          <Link
            href="/profile"
            className={pathname == "/profile" ? currentStyle : ""}
          >
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
