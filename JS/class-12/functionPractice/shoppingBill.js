function calculateSubtotal(price, quantity) {
  return price * quantity;
}

function calculateDiscount(subtotal, discountPercentage) {
  return (subtotal * discountPercentage) / 100;
}

function calculateFinalAmount(subtotal, discountAmount) {
  return subtotal - discountAmount;
}

function generateBill(price, quantity, discountPercentage) {
  let subtotal = calculateSubtotal(price, quantity);
  let discount = calculateDiscount(subtotal, discountPercentage);
  let finalAmount = calculateFinalAmount(subtotal, discount);

  return `Subtotal: ${subtotal}\nDiscount: ${discount}\nFinal Amount: ${finalAmount}`;
}

console.log(generateBill(1000, 3, 10));
