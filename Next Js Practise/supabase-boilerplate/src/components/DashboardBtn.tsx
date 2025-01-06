"use client";

import Link from "next/link";
import useUser from "@/app/hooks/useUser";

export default function DashboardBtn() {
  const { data } = useUser();
  return (
    <>
      {data?.id && (
        <Link
          href={"dashboard"}
          className="bg-black py-2 px-3 text-white rounded-sm font-medium"
        >
          Dashboard
        </Link>
      )}
    </>
  );
}
