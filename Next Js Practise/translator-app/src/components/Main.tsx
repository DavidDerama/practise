"use client";
import React from "react";
import Content from "./Content";
import TranslateForm from "./TranslateForm";

import { useState } from "react";
import { Message, continueConversation } from "@/lib/actions";
import { readStreamableValue } from "ai/rsc";

import { FormData } from "@/lib/types";
import StreamResponse from "./StreamResponse";

export default function Main() {
  const [conversation, setConversation] = useState<Message[]>([]);

  async function onSubmit(formData: FormData) {
    const prompt = `${formData.textToTranslate}#${formData.language}`;

    const { messages, newMessage } = await continueConversation([
      ...conversation,
      { role: "user", content: prompt },
    ]);

    let textContent = "";

    for await (const delta of readStreamableValue(newMessage)) {
      textContent = `${textContent}${delta}`;

      setConversation([
        ...messages,
        { role: "assistant", content: textContent },
      ]);
    }
  }
  return (
    <main className="flex-grow">
      <Content>
        <div className="border-2 border-black rounded-lg py-10">
          <StreamResponse conversation={conversation} />
          <h2 className="text-center text-xl font-bold">
            Text to translate 👇
          </h2>
          <TranslateForm conversation={conversation} handleSubmit={onSubmit} />
        </div>
      </Content>
    </main>
  );
}
