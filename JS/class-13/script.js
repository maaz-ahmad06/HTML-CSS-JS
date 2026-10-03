// String Methods
// three ways to define string 'single cotte', "double cotte", `back tacks`

let fName = 'Maaz';
let lName = "Ahmad";
let fullName  = `My name is ${fName} ${lName}`

console.log(fullName);

// trim() method removes whitespace from both ends of a string
let str = '   Hello World!   ';
console.log(str.trim());

// includes() method checks if a string contains a specified value like email have @gmail.com
let email = prompt('Enter your email:');
if(email.includes('@gmail.com')){
    console.log('Valid email');
} else {
    console.log('Invalid email');
}
// toUpperCase() method converts a string to uppercase letters
let name = 'maaz';
console.log(name.toUpperCase());

// toLowerCase() method converts a string to lowercase letters
let name2 = 'MAAZ';
console.log(name2.toLowerCase());

// slice() method extracts a part of a string and returns it as a new string
let str2 = 'Hello World!';
console.log(str2.slice(0, 5)); // Output: Hello

// replace() method replaces a specified value with another value in a string
let str3 = 'Hello World!';
console.log(str3.replace('World', 'JavaScript')); // Output: Hello JavaScript!