// Math Objects
// Math.round()
console.log(Math.round(5.5));

// Math.floor()
console.log(Math.floor(5.5));

// Math.ceil()
console.log(Math.ceil(5.5));

// Math.trunc()
console.log(Math.trunc(5.5));

// Math.abs(): convert negative to positive
console.log(Math.abs(-5.5));

// Math.sqrt()
console.log(Math.sqrt(81));

// Math.pow()
console.log(Math.pow(9, 2));

// Math.max()
console.log(Math.max(1,4,3,5,7,8,2));

// Math.min()
console.log(Math.min(1,4,3,5,7,8,2));

// Math.random()
console.log(Math.random());

// Math.random() from 1 to 10
console.log(Math.floor(Math.random() * 10) + 1);

// Math.random() with range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomNumber(1, 10));