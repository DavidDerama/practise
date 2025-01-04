import createClient from "../lib/supabase/server";
import { singOut } from "../login/actions";
import Link from "next/link";

export default async function Header() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="flex justify-between px-5 py-2 items-center">
      <p className="font-bold text-xl">Todo</p>
      {user !== null ? (
        <form action={singOut}>
          <button className="bg-black px-3 py-2 rounded-md text-white">
            Sign Out
          </button>
        </form>
      ) : (
        <Link
          href={"login"}
          className="bg-black px-3 py-2 rounded-md text-white"
        >
          Login
        </Link>
      )}
    </header>
  );
}
