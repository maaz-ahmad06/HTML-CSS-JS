/* 
Conditional Statements:
if
else
else if

Ternary Operator:
condiition ? "fulfiled" : "failed"

switch (){
    case 1:
}
*/
// let age = Number(prompt("Enter your age: ", 18));
// let gender = prompt("Enter your gender: ", "male/female")

/* 
syntex:
if(condition){
    body
}
*/

// if(age >= 18){
//     document.write("You are Aligible");
// }else{
//     document.write("You are not aligible");
// }

// alternative of if else
// let result = age >= 18 ? "you are aligible" : "you are not aligible"
// document.write(result)

// if(age >= 18 && gender == "male"){
//     document.write("You are Aligible")
// }
// else if(age >= 18 && gender == "female"){
//     document.write("You are Aligible")
// }
// else{
//     document.write("You are not Aligible")
// }

let role = "admin";
let email = "xyz@gmail.com";
let password = 123;

if(email == "xyz@gmail.com" && password == 123){
    if(role == "admin"){
        document.write("You can post")
    }else{
        document.write("You don't have permation to post")
    }
}else{
        document.write("Invalid credential")
}