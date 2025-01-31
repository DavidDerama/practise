import { z } from "zod";

export const formSchema = z.object({
  textToTranslate: z.string().min(3, "Translate something...."),
  language: z.enum(["french", "spanish", "japanese", "finnish"], {
    required_error: "You need to select a language.",
  }),
});

export type FormData = z.infer<typeof formSchema>;
