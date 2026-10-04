const sentence = "JavaScript is fun";

// Split by space
const words = sentence.split(" "); 
console.log(words); // Output: ["JavaScript", "is", "fun"]

// Split by empty string (breaks every character)
const characters = sentence.split(""); 
console.log(characters); // Output: ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t", " ", "i", "s", " ", "f", "u", "n"]

const array = ["Apple", "Banana", "Orange"];

// Join with a hyphen
const hyphenated = array.join("-"); 
console.log(hyphenated); // Output: "Apple-Banana-Orange"

// Join with an empty string (no spaces or punctuation)
const combined = array.join(""); 
console.log(combined); // Output: "AppleBananaOrange"

// Default behavior (no separator provided)
const defaultJoin = array.join(); 
console.log(defaultJoin); // Output: "Apple,Banana,Orange"