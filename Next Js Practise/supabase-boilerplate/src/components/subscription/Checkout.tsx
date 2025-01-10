"use client";
import useUser from "@/app/hooks/useUser";
import { checkout } from "@/lib/actions/stripe";
import { useRouter } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";

import React from "react";

export default function Checkout({ priceId }: { priceId: string }) {
  const { data: user } = useUser();

  const router = useRouter();
  async function handelCheckout() {
    if (user?.id && user.email) {
      const data = JSON.parse(
        await checkout(user.email, priceId, location.origin)
      );
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK!);
      const res = await stripe?.redirectToCheckout({ sessionId: data.id });
      if (res?.error) {
        alert("Fail to checkout");
      }
    } else {
      router.push("/auth?next=" + location.pathname);
    }
  }
  return (
    <button
      onClick={handelCheckout}
      className="w-full py-3 bg-blue-600 text-white mt-4 rounded-md"
    >
      Getting Started
    </button>
  );
}
