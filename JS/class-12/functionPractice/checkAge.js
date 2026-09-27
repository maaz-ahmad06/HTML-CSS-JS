function checkAge(age){
    if(age >= 18){
        return "You are adult.";
    }
    else{
        return "You are minor.";
    }
}

let Age = checkAge(20);
console.log(Age);
