"use client";

import { updateTodoById } from "@/actions/todo";

export default function UpdateBtn({ id }: { id: number }) {
  async function updateTodo(id: number) {
    const res = await updateTodoById(id);
    console.log(res);
  }
  return (
    <button
      className="bg-black py-1 px-3 rounded text-white mt-2"
      onClick={() => updateTodo(id)}
    >
      Update
    </button>
  );
}
