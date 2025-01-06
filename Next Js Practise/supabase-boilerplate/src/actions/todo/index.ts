"use server";

import { supabaseServer } from "@/lib/supabase/server";
import { revalidatePath, unstable_noStore as noStore } from "next/cache";
import { z } from "zod";

const formSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  content: z.string().min(5, "Content must be at least 5 characters"),
});

type Form = z.infer<typeof formSchema>;

export async function createTodo({ title, content }: Form) {
  const supabase = await supabaseServer();
  const res = await supabase.from("todo").insert({ title, content }).single();
  revalidatePath("/dashboard");
  return res;
}

export async function readTodos() {
  noStore();
  const supabase = await supabaseServer();
  const res = await supabase.from("todo").select("*");
  return res;
}

export async function deleteTodoById(id: number) {
  const supabase = await supabaseServer();
  const res = await supabase.from("todo").delete().eq("id", id);
  revalidatePath("/dashboard");
  return res;
}

export async function updateTodoById(id: number) {
  const supabase = await supabaseServer();
  const res = await supabase
    .from("todo")
    .update({ title: "Hello", content: "World" })
    .eq("id", id);
}
