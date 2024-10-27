"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Test() {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  console.log(query);

  function handleQuery(value: string) {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex flex-col gap-4">
      <h1>Test</h1>
      <button
        className="border-2 border-white rounded-lg max-w-20"
        onClick={() => handleQuery("jedi")}
      >
        Jedi
      </button>
      <button
        className="border-2 border-white rounded-lg max-w-20"
        onClick={() => handleQuery("sith")}
      >
        Sith
      </button>
      <button
        className="border-2 border-white rounded-lg max-w-20"
        onClick={() => handleQuery()}
      >
        Clear
      </button>
    </div>
  );
}
