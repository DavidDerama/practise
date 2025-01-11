import { title } from "process";
import React from "react";

export default function price() {
  const prices = [
    {
      title: "Hobby",
      description: "Lorem idasasdsad sad sa",
      benefits: ["Fast", "Cheap", "Effective"],
      amount: 10,
    },
    {
      title: "Hobby",
      description: "Lorem idasasdsad sad sa",
      benefits: ["Fast", "Cheap", "Effective"],
      amount: 20,
    },
    {
      title: "Hobby",
      description: "Lorem idasasdsad sad sa",
      benefits: ["Fast", "Cheap", "Effective"],
      amount: 30,
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
            <button className="w-full py-3 bg-blue-600 text-white mt-4 rounded-md">
              Getting Started
            </button>
          </div>
        );
      })}
    </div>
  );
}
