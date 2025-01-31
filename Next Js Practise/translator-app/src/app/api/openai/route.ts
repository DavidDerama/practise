import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "hello guys",
  });
}

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai("gpt-3.5-turbo"),
    system:
      "You are a beginner language translator. Make sure your translations are accurate while also easy to understand.",
    messages,
  });

  return result.toDataStreamResponse();
}
