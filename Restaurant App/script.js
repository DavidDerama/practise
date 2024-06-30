import { menuArray } from "./data.js";

const productContainer = document.querySelector("main");
const cartEl = document.querySelector(".order-container");
const totalPriceEl = document.querySelector(".total-price");
const footer = document.querySelector("footer");
const notifEl = document.querySelector(".notif-center");
const modal = document.querySelector(".modal");
const form = document.getElementById("detail-info");
const modalOpener = document.getElementById("complete");
const headerClick = document.querySelector("header");
let cart = [];

document.addEventListener("DOMContentLoaded", () => {
  let html = "";
  //   html += menuArray
  //     .map((product) => {
  //       html += `<section class="item-product">
  //                <h1 class="emoji">${product.emoji}</h1>
  //         <div class="product-info">
  //           <h3>${product.name}</h3>
  //           <label>${product.ingredients.join(", ")}</label>
  //           <p>${product.price}</p>
  //         </div>
  //         <><i class="fa-solid fa-plus"></i></>
  //       </section>`;
  //     })
  //     .join("");

  html += menuArray
    .map((product) => {
      const ingredientsStr = product.ingredients.join(",");
      return `<section class="item-product">
        <h1 class="emoji">${product.emoji}</h1>
        <div class="product-info">
          <h3>${product.name}</h3>
          <label>${ingredientsStr}</label>
          <p>$${product.price}</p>
        </div>
        <i class="fa-solid fa-plus" data-add-cart="${product.name}"></i>
      </section>`;
    })
    .join("");
  productContainer.innerHTML += html;
});

document.addEventListener("click", (e) => {
  if (e.target.dataset.addCart) {
    cart.push(e.target.dataset.addCart);
    cartEl.innerHTML = "";
    renderCart();
    footer.style.display = "block";
    window.scrollTo(0, document.body.scrollHeight);
  }
  if (e.target.dataset.orderIndex) {
    cart.splice(e.target.dataset.orderIndex, 1);
    cartEl.innerHTML = "";

    if (cart.length < 1) {
      footer.style.display = "none";
    } else {
      cartEl.innerHTML = "";
      renderCart();
    }
    notifEl.innerHTML = `  <div class="notif notif-animation">
      <i class="fa-solid fa-check"></i><label>Item Remeoved from Order</label>
    </div>`;
  }
});

function renderCart() {
  let html = "";
  const totalPriceArr = [];

  cart.forEach((order, index) => {
    const priceFinder = menuArray.find((menu) => menu.name.includes(order));
    totalPriceArr.push(parseInt(priceFinder.price));

    html += `<div class="ordered">
          <div class="name-remove">
            <h3>${order}</h3>
            <button data-order-index="${index}">remove</button>
          </div>
          <p class="price-ordered">$${priceFinder.price}</p>
        </div>`;
  });
  cartEl.innerHTML = html;
  const totalValue = totalPriceArr.reduce((total, curr) => {
    return total + curr;
  }, 0);
  totalPriceEl.innerHTML = `$${totalValue}`;
}

document.addEventListener("submit", (e) => {
  footer.style.display = "none";
  cart.length = 0;
  e.preventDefault();
  const formData = new FormData(form);
  const name = formData.get("name");
  const card = formData.get("card");
  const cvv = formData.get("cvv");

  modal.innerHTML = `<img src="images/loading.svg" alt="" class="loading">`;

  setTimeout(() => {
    modal.close();
    notifEl.innerHTML = `  <div class="notif notif-animation">
      <i class="fa-solid fa-check"></i><label>Thanks, ${name}! Your order is on its way!</label>
    </div>`;
    modal.innerHTML = `<img src="images/wallet-front-color.png" alt=""><h2>Enter card details</h2> <form id="detail-info"><input type="text" placeholder="Enter your name" name="name" required> <input id="ccn" type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" 
    autocomplete="cc-number" maxlength="19" 
    placeholder="xxxx xxxx xxxx xxxx" name="card"  required> <input type="text" placeholder="Enter CVV" maxlength="3"  name="cvv" required>
    



    <button class="special-button" type="submit">Complete order</button>

</form>`;
  }, 2000);
});

modalOpener.addEventListener("click", () => {
  modal.showModal();
});

headerClick.addEventListener("click", () => {
  window.location.href = "#menu";
});
