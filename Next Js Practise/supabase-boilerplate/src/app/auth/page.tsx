"use client";
import Content from "@/components/Content";
import { supabaseBrowser } from "@/lib/supabase/client";

export default function Page() {
  function handelLoginWithOauth(provider: "google" | "github") {
    const supabase = supabaseBrowser();
    supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: location.origin + "/auth/callback",
      },
    });
  }
  return (
    <main className="flex-grow">
      <Content classname="flex justify-center items-center">
        <div className="border rounded py-4 px-4">
          <h2 className="text-2xl font-bold w-[450px]">Sign In</h2>
          <button
            className="w-full bg-black mt-4 rounded-md text-white py-2 hover:opacity-75"
            onClick={() => handelLoginWithOauth("google")}
          >
            Sign in with google
          </button>
        </div>
      </Content>
    </main>
  );
}
