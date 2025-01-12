"use client";
import useUser from "@/app/hooks/useUser";
import { checkout } from "@/lib/actions/stripe";
import { useRouter } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";

import React, { useState } from "react";

export default function Checkout({ priceId }: { priceId: string }) {
  const { data: user } = useUser();

  const router = useRouter();

  const [loading, setLoading] = useState(false);
  async function handleCheckout() {
    if (user?.id && user?.email) {
      setLoading(true);
      const data = JSON.parse(
        await checkout(user.email, priceId, location.origin + "/success")
      );
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK!);
      const res = await stripe?.redirectToCheckout({ sessionId: data.id });
      if (res?.error) {
        alert("Fail to checkout");
      }
      setLoading(false);
    } else {
      router.push("/auth?next=" + location.pathname);
    }
  }
  return (
    <button
      onClick={handleCheckout}
      className="w-full py-3 bg-blue-600 text-white mt-4 rounded-md"
      disabled={loading}
    >
      {loading ? "Loading......" : "Getting Started"}
    </button>
  );
}
