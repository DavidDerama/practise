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
            <div className="flex flex-col gap-10 w-full" key={index}>
              {message.role === "assistant" ? (
                <div className="py-2 px-4 w-1/2 mr-auto rounded-r-xl rounded-bl-xl bg-green-400 text-black mb-6">
                  <p className="font-bold">{message.role}:</p>
                  <p>{message.content}</p>
                </div>
              ) : (
                <div className="py-2 px-4 w-1/2 ml-auto rounded-l-xl rounded-br-xl bg-blue-500 text-white mb-6">
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
