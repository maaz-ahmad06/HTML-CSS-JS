/* Loops Concept
syntex:
for(iniliaization; condition; update){
    body of loop
}

*/

for(let i=1; i<=10; i++){
    console.log("numbers: " + i);
}

// finding even numbers between 11 to 89
let evenNums = [];
for(let i=11; i<89; i++){
    if(i%2 == 0){
        evenNums.push(i);
    }
}
console.log(evenNums);

// finding fruit in the array
const fruits = ["apple", "banana", "mango"];
const findFruit = prompt("Enter fruit name:");
for(const fruit of fruits){
    if(findFruit === fruit){
        console.log(findFruit + " is Available");
    }
}

const cartProducts = [
  { id: 1, name: "Wireless Headphones", price: 59.99 },
  { id: 2, name: "Mechanical Keyboard", price: 89.99 },
  { id: 3, name: "Gaming Mouse", price: 39.99 },
  { id: 4, name: "USB-C Cable", price: 12.99 },
  { id: 5, name: "Laptop Stand", price: 34.99 },
];

let totalProductPrice = 0;

for (let product of cartProducts) {
  totalProductPrice = totalProductPrice + product.price;
}

console.log(totalProductPrice);

// totalProductPrice = 0 + 59;
// totalProductPrice = 59 + 89
// totalProductPrice = 148 + 39
// totalProductPrice = 187 + 12
// totalProductPrice = 199 + 34
// totalProductPrice = 233

const studentDetails = {
  name: "Test",
  roll_no: 234,
  age: 20,
  section: "B",
};

for (let item in studentDetails) {
  console.log(item + ":" + studentDetails[item]);
}

// studentDetails.name
// studentDetails.roll_no
// studentDetails.age
// studentDetails.section