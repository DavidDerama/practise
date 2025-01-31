"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Textarea } from "./ui/textarea";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "@radix-ui/react-label";
import { FormData, formSchema } from "@/lib/types";
import { generateTranslation } from "@/lib/actions";
import { useChat } from "ai/react";

export default function TranslateForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      textToTranslate: "",
    },
  });

  async function onSubmit(formData: FormData) {
    const prompt = `Translate this sentence ${formData.textToTranslate} into ${formData.language}`;
    const response = await generateTranslation(prompt);
    console.log(response);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-1/2 my-4 mx-auto"
      >
        <FormField
          control={form.control}
          name="textToTranslate"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="How are you?"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="french" id="french" />
                    <Label htmlFor="french">French</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="spanish" id="spanish" />
                    <Label htmlFor="spanish">Spanish</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="japanese" id="japanese" />
                    <Label htmlFor="japanese">Japanese</Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
