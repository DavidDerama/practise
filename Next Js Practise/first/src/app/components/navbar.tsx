"use client";

import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function NavBar() {
  const [search, setSearch] = useState("");
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace, push } = useRouter();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (search) {
      params.set("q", search);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <nav className="p-4 flex justify-center">
      <ul className="flex gap-4">
        <li>
          <Link href="..">Home</Link>
        </li>
        <li>
          <Link href="/prediction">Prediction</Link>
        </li>
        <li>
          <Link href="/prediction/Brent">Prediction Brent</Link>
        </li>
        <li>
          <Link href="/david">David</Link>
        </li>
        <li>
          <Link href="/dog">Dog</Link>
        </li>
        <li>
          <form className="flex gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              className="text-black"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button>Search</button>
          </form>
        </li>
      </ul>
    </nav>
  );
}
