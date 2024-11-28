import { BentoGridNews } from "./BentoGridNews";
import Content from "./Content";

export default function NewsSection() {
  return (
    <Content className="py-3 px-3">
      <div className="w-full">
        <div className="mb-12 flex flex-col gap-3 text-light">
          <h2 className="text-4xl font-bold mb-4">Our Latest News</h2>
          <BentoGridNews />
        </div>
      </div>
    </Content>
  );
}
