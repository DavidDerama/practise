import { useState } from "react";
import "./App.css";

import {
  useQuery,
  useMutation,
  QueryClient,
  useQueryClient,
} from "react-query";

function App() {
  const queryClient = useQueryClient();

  const { data, loading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
        res.json()
      ),
  });

  const { mutate, isLoading, isError } = useMutation({
    mutationFn: (newPost) =>
      fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      }).then((res) => res.json()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  return (
    <div className="app">
      <h1>React Query Practise</h1>
      <button
        onClick={() =>
          mutate({
            userId: 9999999,
            id: 9999999,
            title: "David lmaodsad",
            body: "yabba dabba doo",
          })
        }
      >
        Send data
      </button>

      {isLoading && <p>Data being sent</p>}
      {data?.map((todo) => {
        return (
          <h1>
            {todo.id}: {todo.title}
          </h1>
        );
      })}
    </div>
  );
}

export default App;
