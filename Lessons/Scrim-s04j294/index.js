import shoppingCart from "./data.js";

/*
Use reduce() and only reduce() to calculate and return 
the total cost of only the savory
items in the shopping cart.

Expected output: 9.97  
*/

function totalSavory(arr){
    const total = arr.reduce((total, curr) => {
        return curr.type === "savory" && total + curr.price
    }, 0)
    return total.toFixed(2)

}

console.log(totalSavory(shoppingCart));

