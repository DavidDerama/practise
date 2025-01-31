import React from "react";
import Content from "./Content";
import TranslateForm from "./TranslateForm";
import StreamResponse from "./StreamResponse";

export default function Main() {
  return (
    <main className="flex-grow">
      <Content>
        <div className="border-2 border-black rounded-lg py-10">
          {/* <StreamResponse /> */}
          <h2 className="text-center text-xl font-bold">
            Text to translate 👇
          </h2>
          <TranslateForm />
        </div>
      </Content>
    </main>
  );
}
