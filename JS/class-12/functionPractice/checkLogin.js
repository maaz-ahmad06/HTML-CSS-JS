function checkLogin(isLoggedIn){
    if(isLoggedIn == true){
        return "Welcome back!"
    }else{
        return "Please login first"
    }
}

let isLoggedIn = checkLogin(false);
console.log(isLoggedIn);
