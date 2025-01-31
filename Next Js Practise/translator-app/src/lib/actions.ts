"use server";

import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";

export async function generateTranslation(prompt: string) {
  const { text } = await generateText({
    model: openai("gpt-3.5-turbo"),
    system:
      "You are a beginner language translator. Make sure your translations are accurate while also easy to understand. Uour output should only be the translation of the text nothing more.",
    prompt: prompt,
  });

  return text;
}

// export async function generateTranslation(prompt: string) {
//     console.log("saasd");
//     const response = await streamText({
//       model: openai("gpt-3.5-turbo"),
//       system:
//         "You are a beginner language translator. Make sure your translations are accurate while also easy to understand.",
//       prompt: prompt,
//     });

//     return response.toDataStreamResponse();
//   }
