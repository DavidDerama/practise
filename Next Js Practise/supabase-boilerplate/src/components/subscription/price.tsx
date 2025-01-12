import React from "react";
import Checkout from "./Checkout";

export default function price() {
  const prices = [
    {
      title: "Hobby",
      description: "Lorem idasasdsad sad sa",
      benefits: ["Fast", "Cheap", "Effective"],
      amount: 10,
      priceId: "price_1QgCFDHPqm5Ili6sraKI1W9Q",
    },
    {
      title: "Pro",
      description: "Lorem idasasdsad sad sa",
      benefits: ["Fast", "Cheap", "Effective"],
      amount: 50,
      priceId: "price_1QgCFpHPqm5Ili6sJBexhLer",
    },
    {
      title: "Premium",
      description: "Lorem idasasdsad sad sa",
      benefits: ["Fast", "Cheap", "Effective"],
      amount: 100,
      priceId: "price_1QgCFzHPqm5Ili6sqzgmcLTY",
    },
  ];
  return (
    <div className="flex gap-3">
      {prices.map((price, index) => {
        return (
          <div className="px-2 py-3 rounded border border-black flex-grow">
            <h1 className="font-bold text-xl">{price.title}</h1>
            <h1 className="font-bold text-3xl mb-3">${price.amount}</h1>
            <h1>{price.description}</h1>
            <h1>{price.benefits.join(" ")}</h1>

            <Checkout priceId={price.priceId} />
          </div>
        );
      })}
    </div>
  );
}
