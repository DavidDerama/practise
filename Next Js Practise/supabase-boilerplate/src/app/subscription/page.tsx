"use client";
import Content from "@/components/Content";
import React from "react";
import useUser from "../hooks/useUser";
import Price from "@/components/subscription/price";

export default function Page() {
  const { data: user, isLoading } = useUser();

  if (isLoading) {
    return <></>;
  }

  const isActive = !user?.subscription?.end_at
    ? false
    : new Date(user.subscription.end_at) > new Date();
  return (
    <main className="flex-grow">
      <Content>
        <h1 className="text-xl font-bold mb-7">Subscription</h1>

        <div>{isActive ? <div>This is protected data</div> : <Price />}</div>
      </Content>
    </main>
  );
}
