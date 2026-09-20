console.log("Printing Numbers from 1 to 20");
for(let i=1; i<=20; i++){
    console.log(i);
}

console.log("Prunting even Numbers form 1 to 50");
for(let i=1; i<=50; i++){
    if(i%2==0){
        console.log(i);
    }
}

console.log("Creating countdown from 10 to 1");
for(let i=10; i>=1; i--){
    console.log(i);
}

console.log("Multiplication Table");
let num = Number(prompt("Enter a number to print its multiplication table:"));
for(let i=1; i<=10; i++){
    console.log(`${num} x ${i} = ${num*i}`);
}

console.log("Calculator to Sum Numbers from 1 to 100");
let sum = 0;
for(let i=1; i<=100; i++){
    sum += i;
}
console.log(`The sum of numbers from 1 to 100 is: ${sum}`);

console.log("Finding a correct password");
let password = "password123";
let userInput = prompt("Enter the password:");
while(userInput !== password){
    userInput = prompt("Incorrect password. Please try again:");
}
console.log("Password correct!");

console.log("Finding positive numbers");
let number = Number(prompt("Enter a number"));
while(true){
    if(isNaN(number)){
        number = Number(prompt("That's not a number. Please enter a valid number:"));
    }
    if(number > 0){
        console.log("You entered a positive number:", number);
        break;
    }
}