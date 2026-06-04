let number = document.getElementById("number");
let counter = 0;

// Store the interval in a variable called 'timer'
let timer = setInterval(() => {
    if(counter == 65){
        clearInterval(timer); // Fixed: Safely stops the loop at 65
    } else {
        counter += 1;
        number.innerHTML = counter + "%";
    }
}, 30);