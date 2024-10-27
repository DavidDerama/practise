"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const [inputVal, setInputVal] = useState("");
  const { push } = useRouter();
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    push(`/prediction/${inputVal}`);
  }

  return (
    <div>
      <Image
        src="https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png"
        width={300}
        height={300}
        alt="shrek"
      />
      <div className="min-h-screen flex flex-col justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 items-center"
        >
          <h1>Enter your name</h1>
          <input
            type="text"
            placeholder="Type your name"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="text-black"
          />
          <button type="submit" className="border-2 py-2 px-5 rounded-md">
            Predict Data
          </button>
        </form>
      </div>
    </div>
  );
}
