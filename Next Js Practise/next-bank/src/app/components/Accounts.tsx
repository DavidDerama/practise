"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { twMerge } from "tailwind-merge";

export default function AccountsWrapper({
  className,
  fullWidth,
}: {
  className?: string;
  fullWidth: boolean;
}) {
  const [accounts, setAccounts] = useState([
    {
      name: "Main Account",
      amount: "6,700.56",
      bank: "Aktia",
    },
    {
      name: "Savings",
      amount: "5,134.63",
      bank: "Nordea",
    },
    {
      name: "Expenses",
      amount: "36,500.12",
      bank: "Danske",
    },
  ]);

  const fullWidthClass = fullWidth ? "w-full" : "w-1/2";

  const accountsEl = accounts.map((acc) => {
    return (
      <Card
        className={`grow border-2 border-[#FFA724] ${
          acc.name == "Main Account" ? "bg-[#FFD18C]" : ""
        } `}
      >
        <CardHeader>
          <CardTitle>{acc.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>$ {acc.amount}</p>
        </CardContent>
      </Card>
    );
  });
  return (
    <div className={twMerge("flex flex-col gap-4", fullWidthClass)}>
      <h2 className="text-2xl font-bold">Accounts</h2>
      <div className={twMerge("flex gap-2", className)}>{accountsEl}</div>
    </div>
  );
}
