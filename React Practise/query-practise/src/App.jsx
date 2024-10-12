import { useState } from "react";
import "./App.css";

import { useQuery, useMutation, useQueryClient } from "react-query";

function App() {
  const queryClient = useQueryClient();

  const postId = 2;

  const { data: posts } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
    refetchInterval: 4000,
    refetchOnWindowFocus: false,
  });

  const { data: post, loading: postLoading } = useQuery({
    queryFn: () =>
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(
        (res) => res.json()
      ),
    queryKey: ["post", postId],
  });

  const { data: testData, loading: testLoading } = useQuery();

  const { mutate, isLoading } = useMutation({
    mutationFn: (newPost) =>
      fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      }).then((res) => res.json()),
    onSuccess: (newPost) => {
      queryClient.setQueryData(["posts"], (oldPosts) => [...oldPosts, newPost]);
    },
  });

  return (
    <div className="app">
      <h1>React Query Practise</h1>
      <h1>{post?.title}</h1>
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
      {posts?.map((todo) => {
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
