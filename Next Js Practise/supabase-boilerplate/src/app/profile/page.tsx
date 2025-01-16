import React from "react";
import Content from "@/components/Content";
import Subscription from "@/components/Subscription";

export default function page() {
  return (
    <main className="flex-grow">
      <Content>
        <h1 className="text-xl font-bold mb-7">Profile</h1>
        <Subscription />
      </Content>
    </main>
  );
}
