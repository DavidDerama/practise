import shoppingCart from "./data.js";

/*
Use reduce() and only reduce() to calculate and return 
the total cost of only the savory
items in the shopping cart.

Expected output: 9.97  
*/

function totalSavory(arr){
    arr.reduce((acc, curr) => {}, 0)
}

console.log(totalSavory(shoppingCart));
