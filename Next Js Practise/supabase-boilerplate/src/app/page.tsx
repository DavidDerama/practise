import Content from "@/components/Content";
import Price from "@/components/subscription/price";

export default function Home() {
  return (
    <main className="flex-grow">
      <Content>
        <h1>Home Page</h1>
        <Price />
      </Content>
    </main>
  );
}
