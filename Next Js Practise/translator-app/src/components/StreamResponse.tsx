"use client";

import { Message } from "@/lib/actions";

export default function StreamResponse({
  conversation,
}: {
  conversation: Message[];
}) {
  return (
    <>
      {conversation.length ? (
        <div className="mb-4 p-4 border rounded-md w-1/2 mx-auto">
          {conversation.map((message, index) => (
            <div className="flex flex-col gap-5 w-full">
              {message.role === "assistant" ? (
                <div className="py-2 px-4 rounded-r-md rounded-bl-md bg-green-400 text-black mb-3">
                  <p className="font-bold">{message.role}:</p>
                  <p>{message.content}</p>
                </div>
              ) : (
                <div className="py-2 px-4 rounded-l-md rounded-br-md bg-blue-500 text-white mb-3">
                  <p className="font-bold">{message.role}:</p>
                  <p>{message.content.split("#")[0]}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
