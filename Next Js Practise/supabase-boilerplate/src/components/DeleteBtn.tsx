"use client";

import { deleteTodoById } from "@/actions/todo";
import toast from "react-hot-toast";

export default function DeleteBtn({ id }: { id: number }) {
  async function deleteTodo(id: number) {
    const res = await deleteTodoById(id);
    if (res.statusText === "No Content") {
      toast.success("Todo deleted successfully");
    }
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
