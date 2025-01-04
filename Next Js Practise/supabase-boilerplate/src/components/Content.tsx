import { twMerge } from "tailwind-merge";

type ContentProps = {
  children: React.ReactNode;
  classname?: string;
};
export default function Content({ children, classname }: ContentProps) {
  return (
    <section
      className={twMerge("max-w-screen-xl mx-auto px-3 py-5 w-full", classname)}
    >
      {children}
    </section>
  );
}
