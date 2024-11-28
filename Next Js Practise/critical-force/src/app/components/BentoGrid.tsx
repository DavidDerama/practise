import { cn } from "@/lib/utils";
import Link from "next/link";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  link,
  date,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  link: string;
  date: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl transition duration-200 shadow-input dark:shadow-none p-4 border-[#3c3c3c] border bg-dark_box_bg justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div>
        <div className="text-special font-light text-sm">{date}</div>
        <div className="font-bold mb-2 mt-2 text-lg">{title}</div>
        <div className="flex flex-col gap-5 items-start">
          <div className="font-sans font-normal">{description}</div>
          <Link
            href={link}
            className="py-2 px-5 border-2 border-transparent hover:border-white rounded-lg bg-special font-bold"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};
