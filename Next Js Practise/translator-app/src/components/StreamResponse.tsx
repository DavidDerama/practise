"use client";
import React from "react";
import { useChat } from "ai/react";

export default function StreamResponse() {
  const { messages } = useChat();
  return (
    <div className="mb-4 p-4 border rounded-md w-1/2 mx-auto flex flex-col gap-3 items-center ">
      {messages.map((message) => (
        <div key={message.id}>
          <div>{message.role}</div>
          <div>{message.content}</div>
        </div>
      ))}
    </div>
  );
}
