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
      const findIfItemIsInOrder = order.find(food => food.name === item.name)
      if(findIfItemIsInOrder){
        return prev
      } else {
        return [...prev, newItem];
      }
    });
  }

  function removeItemFromOrder(id: string) {  
    setOrder((prev) => {
      const newArr = prev.filter((item) => item.id !== id)
      return newArr
    });
  }

  function resetOrder() {
    setOrder([]);
  }




  const menuItems = menuArray.map((food) => {
    return (
      <div
        className="grow border-2 border-dark_input_border border-dashed bg-dark_input_bg rounded-lg py-10 px-4 flex flex-col items-center gap-2 basis-[200px]"
        key={food.id}
      >
        <h3 className="text-6xl font-medium">{food.emoji}</h3>
        <p className="mt-3 text-3xl font-medium">{food.name}</p>
        <p className="text-lg text-dark_label">{food.ingredients.join()}</p>
        <p className="text-3xl">${food.price}</p>
        <button
          className="flex items-center justify-center px-4 py-2 mt-3 text-3xl transition-all duration-200 border-2 border-transparent rounded-full text-light bg-accent hover:border-light"
          onClick={() => addItemToOrder(food)}
        >
          +
        </button>
      </div>
    );
  });


  return (
    <main className="grow">
      <section className="max-w-screen-xl px-4 py-20 mx-auto text-light">
        <h2 className="text-3xl font-semibold">Menu</h2>
        <div className="flex flex-wrap gap-6 mt-6">{menuItems}</div>
        {order.length ? (
          <Receipt
            order={order}
            removeItemFromOrder={removeItemFromOrder}
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
