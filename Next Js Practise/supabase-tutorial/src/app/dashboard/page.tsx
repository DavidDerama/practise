import { redirect } from "next/navigation";
import createClient from "../lib/supabase/server";

export default async function Page() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }
  return <h1>TEsting.....</h1>;
}
