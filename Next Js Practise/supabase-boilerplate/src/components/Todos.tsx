import { readTodos } from "@/actions/todo";
import DeleteBtn from "./DeleteBtn";
import UpdateBtn from "./UpdateBtn";

export default async function Todos() {
  const { data } = await readTodos();

  const todosEl = data?.map(({ title, content, id }) => {
    return (
      <li>
        <h3>{title}</h3>
        <p>{content}</p>
        <div className="flex gap-4">
          <DeleteBtn id={id} />
          <UpdateBtn id={id} />
        </div>
      </li>
    );
  });

  return (
    <div>
      <h2 className="text-lg font-bold">Todos</h2>
      <ul className="space-y-3">{todosEl}</ul>
    </div>
  );
}
