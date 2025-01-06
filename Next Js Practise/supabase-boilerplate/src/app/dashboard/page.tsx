import Content from "@/components/Content";
import TodoForm from "@/components/TodoForm";
import Todos from "@/components/Todos";

export default function Page() {
  return (
    <main className="flex-grow">
      <Content>
        <h1 className="text-xl font-bold mb-7">Dashboard</h1>
        <div className="space-y-7">
          <TodoForm />
          <Todos />
        </div>
      </Content>
    </main>
  );
}
