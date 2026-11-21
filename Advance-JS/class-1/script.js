// Destructuring
// Array destructuring

let fruits = ["apple", "banana", "cherry"];
let [first, second, third] = fruits;
// console.log(first);
// console.log(second);
console.log(third);

// Object destructuring

let person = {
  name: "test",
  id: 123,
  age: 30,
  city: "peshawar",
};
let { name, id, age, city } = person;
// console.log(name);
// console.log(id);
// console.log(age);
console.log(city);

// Nested Object destructuring
let student = {
  name: "John",
  age: 20,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
  },
};
let {
  name: studentName,
  age: studentAge,
  address: { street, city: studentCity, country: studentCountry },
} = student;
console.log(studentName);
console.log(studentAge);
console.log(street);
console.log(studentCity);
console.log(studentCountry);

// spread operator
let numbers = [1, 2, 3, 4, 5, 6];
let newNumbers = [...numbers, 7, 8, 9];
console.log(newNumbers);

// Rest Operator
function calculateTotal(...allNum) {
  let total = 0;
  for (let num of allNum) {
    total += num;
  }
  console.log(total);
}

calculateTotal(13,32,22,24,34,45,24,55,32);