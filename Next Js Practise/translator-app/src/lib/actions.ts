"use server";

import { generateText, streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { createStreamableValue } from "ai/rsc";

export type Message = {
  role: "user" | "assistant";
  content: string;
};

export async function continueConversation(history: Message[]) {
  const stream = createStreamableValue();

  (async () => {
    const { textStream } = streamText({
      model: openai("gpt-3.5-turbo"),
      system:
        "You are a beginner language translator. Make sure your translations are accurate while also easy to understand.If text doesn't make sense, reply with try again.",
      messages: history,
    });

    for await (const text of textStream) {
      stream.update(text);
    }

    stream.done();
  })();

  return {
    messages: history,
    newMessage: stream.value,
  };
}

export async function generateTranslation(prompt: string) {
  const { text } = await generateText({
    model: openai("gpt-3.5-turbo"),
    system:
      "You are a beginner language translator. Make sure your translations are accurate while also easy to understand.If text doesn't make sense, reply with try again.",
    prompt: prompt,
  });

  return text;
}
