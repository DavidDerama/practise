import { useState } from "react";
import { MenuItem, Order } from "@/shared/types";
import { nanoid } from "nanoid";
import Receipt from "./Receipt";
import menuArray from "@/data";

const Main = () => {
  const [order, setOrder] = useState<Order[]>([]);

  function addItemToOrder(item: MenuItem) {
    const { name, price } = item;
    const newItem = {
      id: nanoid(),
      name,
      price,
    };
    setOrder((prev) => {
      return [...prev, newItem];
    });
  }

  function removeItemFromOrder(id: string) {
    setOrder((prev) => prev.filter((item) => item.id !== id));
  }

  function resetOrder() {
    setOrder([]);
  }

  const totalPriceArr = order.map((item) => item.price);

  const menuItems = menuArray.map((food) => {
    return (
      <div
        className="grow border-2 border-dark_input_border border-dashed bg-dark_input_bg rounded-lg py-10 px-4 flex flex-col items-center gap-2 basis-[200px]"
        key={food.id}
      >
        <h3 className="text-6xl font-medium">{food.emoji}</h3>
        <p className="text-3xl font-medium mt-3">{food.name}</p>
        <p className="text-dark_label text-lg">{food.ingredients.join()}</p>
        <p className="text-3xl">${food.price}</p>
        <button
          className="text-3xl text-dark px-4 py-2 flex justify-center items-center rounded-full mt-3 bg-accent hover:opacity-80 text-light"
          onClick={() => addItemToOrder(food)}
        >
          +
        </button>
      </div>
    );
  });

  return (
    <main className="grow">
      <section className="max-w-screen-xl mx-auto py-20 px-4 text-light">
        <h2 className="text-3xl font-semibold">Menu</h2>
        <div className="flex flex-wrap gap-6 mt-6">{menuItems}</div>
        {order.length ? (
          <Receipt
            order={order}
            removeItemFromOrder={removeItemFromOrder}
            totalPriceArr={totalPriceArr}
            resetOrder={resetOrder}
          />
        ) : (
          ""
        )}
      </section>
    </main>
  );
};

export default Main;
