"use client";

import { deleteTodoById } from "@/actions/todo";

export default function DeleteBtn({ id }: { id: number }) {
  async function deleteTodo(id: number) {
    const res = await deleteTodoById(id);
    console.log(res);
  }
  return (
    <button
      className="bg-black py-1 px-3 rounded text-white mt-2"
      onClick={() => deleteTodo(id)}
    >
      Delete
    </button>
  );
}
