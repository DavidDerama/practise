import React, { useState } from "react";
import { Order } from "@/shared/types";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type ReceiptProps = {
  order: Order[];
  removeItemFromOrder: (id: string) => void;
  totalPriceArr: number[];
  resetOrder: () => void;
};

const Receipt = ({
  order,
  removeItemFromOrder,
  totalPriceArr,
  resetOrder,
}: ReceiptProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    ccn: "",
    cvv: "",
  });

  const [orderSuccessful, setOrderSuccessful] = useState<boolean>(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const totalPrice = totalPriceArr.reduce(
    (current, total) => current + total,
    0
  );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setOrderSuccessful((prev) => !prev);
    console.log(formData);
  }

  function reset() {
    setFormData({
      fullName: "",
      ccn: "",
      cvv: "",
    });
    resetOrder();
    setTimeout(() => {
      setOrderSuccessful(false);
    }, 300);
  }

  function remove(id: string) {
    removeItemFromOrder(id);
  }

  const orderEl = order.map((food, index) => {
    return (
      <div className="flex justify-between" key={index}>
        <div className="flex gap-3 items-end">
          <p className="text-2xl self-center">{food.name}</p>
          <button
            onClick={() => remove(food.id)}
            className="text-sm self-center focus:outline-none"
          >
            Remove
          </button>
        </div>
        <p className="text-2xl">${food.price}</p>
      </div>
    );
  });

  return (
    <div className="max-w-[440px] px-4 mx-auto my-20 flex flex-col gap-6">
      <h2 className="text-3xl font-semibold text-center">Your order</h2>
      <div className="flex flex-col gap-10 mt-4">{orderEl}</div>
      <div className="flex justify-between p-3 border-2 bg-dark_input_bg border-dark_input_border border-dashed rounded-sm">
        <h3 className="font-bold text-2xl">Total Price:</h3>
        <h3 className="text-2xl">${totalPrice}</h3>
      </div>
      <Dialog>
        <DialogTrigger className="w-full py-4 bg-accent rounded-md font-bold mt-4 text-lg">
          Complete Order
        </DialogTrigger>
        <DialogContent
          onInteractOutside={(e) => {
            e.preventDefault();
          }}
          onEscapeKeyDown={(e) => e.preventDefault()}
        >
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              <p>
                {!orderSuccessful ? "Enter Card Details " : "Order Successful"}
              </p>
            </DialogTitle>
          </DialogHeader>
          {!orderSuccessful ? (
            <form className="flex flex-col gap-4 mt-2" onSubmit={handleSubmit}>
              <div className="w-full flex flex-col gap-0.5 text-red-500">
                <label htmlFor="fullName" className="text-sm font-bold"></label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter Your Name"
                  className="py-2 px-3 border-[#e0e1e8] border-2 w-full rounded-sm text-lg focus:outline-none text-dark"
                  onChange={handleChange}
                  value={formData.fullName}
                  required
                />
              </div>
              <div className="w-full flex flex-col gap-0.5 text-red-500">
                <label htmlFor="ccn" className="text-sm font-bold"></label>
                <input
                  type="tel"
                  inputMode="numeric"
                  pattern="\d[0-9\s]{13,19}"
                  autoComplete="cc-number"
                  maxLength={19}
                  placeholder="xxxx xxxx xxxx xxxx"
                  id="ccn"
                  name="ccn"
                  className="py-2 px-3 border-[#e0e1e8] border-2 w-full rounded-sm text-lg focus:outline-none text-dark"
                  onChange={handleChange}
                  value={formData.ccn}
                  required
                />
              </div>
              <div className="w-full flex flex-col gap-0.5 text-red-500">
                <label htmlFor="cvv" className="text-sm font-bold"></label>
                <input
                  type="number"
                  id="cvv"
                  name="cvv"
                  placeholder="Enter CVV"
                  className="py-2 px-3 border-[#e0e1e8] border-2 w-full rounded-sm text-lg focus:outline-none text-dark"
                  onChange={handleChange}
                  value={formData.cvv}
                  maxLength={3}
                  required
                />
              </div>
              <button className="w-full py-2 text-light bg-accent rounded-md font-bold mt-4 text-xl">
                Order
              </button>
            </form>
          ) : (
            <DialogClose
              className="w-full py-2 text-light bg-accent rounded-full font-bold mt-4 text-lg"
              onClick={reset}
            >
              Go back to homepage
            </DialogClose>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Receipt;
