"use client";
import { usePathname } from "next/navigation";

export default function Component() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      <h1>{pathname}</h1>
    </div>
  );
}
