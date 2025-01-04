"use client";
import useUser from "@/app/hooks/useUser";
import Link from "next/link";
import Image from "next/image";

export default function Profile() {
  const { isFetching, data } = useUser();

  if (isFetching) {
    return <></>;
  }

  return (
    <div className="flex gap-1">
      {!data?.id ? (
        <Link
          href={"auth"}
          className="bg-black py-2 px-3 text-white rounded-sm font-medium"
        >
          Sign In
        </Link>
      ) : (
        <div className="flex items-center gap-2">
          <Image
            src={`${data.img_url}`}
            alt="profile image"
            width={35}
            height={35}
            className="rounded-full"
          />
          <h2>{data.display_name}</h2>
        </div>
      )}
    </div>
  );
}
