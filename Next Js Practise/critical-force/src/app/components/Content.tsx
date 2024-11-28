import { twMerge } from "tailwind-merge";
type ContentProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Content({ children, className }: ContentProps) {
  return (
    <section className={twMerge("max-w-screen-xl mx-auto", className)}>
      {children}
    </section>
  );
}
