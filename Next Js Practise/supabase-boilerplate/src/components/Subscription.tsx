"use client";
import useUser from "@/app/hooks/useUser";
import React from "react";
import { Button } from "./ui/button";
import { manageBilling } from "@/lib/actions/stripe";

export default function Subscription() {
  const { data: user, isLoading } = useUser();
  if (isLoading) {
    return <></>;
  }

  async function handleBilling() {
    if (user?.subscription?.customer_id) {
      const data = JSON.parse(
        await manageBilling(user?.subscription?.customer_id)
      );
      window.location.href = data.url;
    }
  }
  return (
    <div>
      <h1>Hi , {user?.display_name}</h1>
      {user?.subscription?.end_at && (
        <h1>
          Your subscription will end at{" "}
          {new Date(user?.subscription?.end_at).toDateString()}
        </h1>
      )}
      {user?.subscription?.customer_id && (
        <Button onClick={handleBilling}>Cancel</Button>
      )}
    </div>
  );
}
