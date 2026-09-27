function calculateAverage(english, Maths, science){
    let average = (english + Maths + science) / 3;
    return average;
}

function checkResult(average){
    if(average >= 50){
        return "Pass"
    }else{
        return "Fail"
    }
}

function generateResult(name, average, status){
    console.log(`Student: ${name}`);
    console.log(`Average: ${average}`);
    console.log(`Result: ${status}`);
}

let Average = calculateAverage(50, 50, 50);
let status = checkResult(Average);
let result = generateResult("Ahmad", Average, status);