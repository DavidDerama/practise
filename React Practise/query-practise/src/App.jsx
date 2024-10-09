import { useState } from "react";
import "./App.css";

import { useQuery, useMutation } from "react-query";

function App() {
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
  });

  return (
    <div className="app">
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
