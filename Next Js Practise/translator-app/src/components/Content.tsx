import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ContentProps = {
  children: ReactNode;
  className?: string;
};

export default function Content({ children, className }: ContentProps) {
  return (
    <section
      className={twMerge("max-w-screen-lg mx-auto py-6 px-3", className)}
    >
      {children}
    </section>
  );
}
