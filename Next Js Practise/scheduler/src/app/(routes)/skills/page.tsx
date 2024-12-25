import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Page() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: skills } = await supabase.from("skills").select();

  console.log(skills);
  return (
    <main>
      <main>
        <h1 className="text-3xl font-semibold mb-4">Skills</h1>
        <form className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Add a skill"
            className="border border-gray-300 rounded-lg px-2 py-1"
          />
          <button className="border bg-black rounded-lg text-white px-3 py-1">
            Add a skill
          </button>
        </form>
      </main>
    </main>
  );
}
