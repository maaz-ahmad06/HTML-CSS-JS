console.log("Before Time fumctions");


// setTimeout: runs code once after a delay
const timeoutId = setTimeout(() => {
    console.log('setTimeout: This runs once after 2 seconds.');
}, 2000);

// clearTimeout: cancels a timeout before it executes
setTimeout(() => {
    clearTimeout(timeoutId);
    console.log('clearTimeout: The timeout was canceled before it could run.');
}, 1000);

// setInterval: runs code repeatedly after each delay
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`setInterval: Tick ${count}`);

    if (count === 5) {
        clearInterval(intervalId);
        console.log('clearInterval: Interval stopped after 5 ticks.');
    }
}, 1000);

console.log("After Time functions");
