function checkResult(marks){
    if(marks >= 50){
        return "Pass"
    }
    else{
        return "Fail"
    }
}

let Marks = checkResult(49);
console.log(Marks);
