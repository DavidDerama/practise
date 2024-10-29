import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ContentProps = {
  children: ReactNode;
  className?: string;
};

const Content = ({ children, className }: ContentProps) => {
  return (
    <section
      className={twMerge(`max-w-screen-xl mx-auto flex py-6 px-3`, className)}
    >
      {children}
    </section>
  );
};

export default Content;
