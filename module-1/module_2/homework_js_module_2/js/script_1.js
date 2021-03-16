'use strict';
const logItems= function(array) {
  let total = 1;
  for (const item of array) {
      console.log(`${total} - ${item}`);
      total += 1;
  }
}

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);