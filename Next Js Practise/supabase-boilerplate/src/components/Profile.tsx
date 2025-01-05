"use client";
import useUser from "@/app/hooks/useUser";
import Link from "next/link";
import Image from "next/image";
import { supabaseBrowser } from "@/lib/supabase/client";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function Profile() {
  const { isFetching, data } = useUser();
  const queryClient = useQueryClient();
  const router = useRouter();

  if (isFetching) {
    return <></>;
  }

  async function handleLogout() {
    const supabase = supabaseBrowser();
    queryClient.clear();
    await supabase.auth.signOut();
    router.refresh();
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
        <>
          {data?.img_url ? (
            <div className="flex items-center gap-2">
              <Image
                src={`${data.img_url}`}
                alt="profile image"
                width={35}
                height={35}
                className="rounded-full cursor-pointer hover:opacity-40"
                onClick={handleLogout}
              />
              <h2>{data.display_name}</h2>
            </div>
          ) : (
            <h2 className="cursor-pointer hover:opacity-40">{data.email}</h2>
          )}
        </>
      )}
    </div>
  );
}
