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