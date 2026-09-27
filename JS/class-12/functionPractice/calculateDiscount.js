function calculateDiscount(price) {
  if (price >= 10000) {
    return `You got 20% Discount and your total price is = ${price * 0.8}`;
} else if (price >= 5000) {
    return `You got 10% Discount and your total price is = ${price * 0.9}`;
  } else {
    return `No Discount Total amount is less than 5000`;
  }
}

let price = calculateDiscount(10000);
console.log(price);
