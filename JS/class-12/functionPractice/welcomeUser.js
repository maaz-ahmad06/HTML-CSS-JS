function welcomeUser(name = "Guest"){
    return `Welcome, ${name}!`;
}

let user = welcomeUser("Abdul");
console.log(user);