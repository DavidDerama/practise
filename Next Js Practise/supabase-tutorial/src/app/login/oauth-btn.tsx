import { Provider } from "@supabase/supabase-js";

type OauthProvider = {
  name: Provider;
  displayName: string;
};

export function OauthBtn() {
  return (
    <button className="bg-green-500 text-wrap px-3 py-2 rounded-md">
      Login with Google
    </button>
  );
}
