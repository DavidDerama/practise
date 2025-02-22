"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createTodo } from "@/actions/todo";
import toast from "react-hot-toast";

const formSchema = z.object({
  title: z.string(),
  content: z.string().min(5),
});

type Form = z.infer<typeof formSchema>;

export default function TodoForm() {
  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  async function onSubmit(data: Form) {
    const res = await createTodo(data);
    if (res.statusText === "Created") {
      toast.success("Todo created successfully");
    }
    form.reset();
  }

  return (
    <Form {...form}>
      <h2 className="text-lg font-bold">Add a todo</h2>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 w-[450px] mt-4"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Title of the document"
                  {...field}
                  type="text"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Input
                  placeholder="Write a description for the document"
                  {...field}
                  type="text"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
